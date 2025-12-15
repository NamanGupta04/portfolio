const express = require("express");
const cors = require("cors");
const AWS = require("aws-sdk");
const client = require("prom-client");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Prometheus metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const contactCounter = new client.Counter({
  name: "contact_form_submissions_total",
  help: "Total contact form submissions",
});
register.registerMetric(contactCounter);

// AWS S3 (credentials will come from IAM later)
const s3 = new AWS.S3({ region: "ap-south-2" });
const BUCKET = process.env.S3_BUCKET_NAME;

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/api/contact", async (req, res) => {
  contactCounter.inc();

  const data = {
    ...req.body,
    timestamp: new Date().toISOString(),
  };

  try {
    await s3
      .putObject({
        Bucket: BUCKET,
        Key: `queries/${Date.now()}.json`,
        Body: JSON.stringify(data),
        ContentType: "application/json",
      })
      .promise();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "S3 upload failed" });
  }
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

