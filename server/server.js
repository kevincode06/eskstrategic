const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://www.eskstrategic.co.za",
      "https://eskstrategic.co.za",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
  }),
);

const resend = new Resend(process.env.RESEND_API_KEY);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "ESK server is running" });
});

// Send Email Route
app.post("/send", async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "ESK Website <onboarding@resend.dev>", // change after verifying your domain
      to: "info@eskstrategic.co.za",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">New Enquiry - ESK Strategic Solutions</h2>
          <hr style="border-color: #d4af37;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
          <hr style="border-color: #d4af37;" />
          <p style="color: #999; font-size: 12px;">Sent from eskstrategic.co.za contact form</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
