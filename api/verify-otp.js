// /api/verify-otp.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { email, otp, Full_name, passion } = req.body;

    if (!email || !otp || !Full_name || !passion) {
      throw new Error("Email, OTP, and Full_name are required");
    }

    // Call Appwrite function
    const response = await fetch("https://68a3084e0002dd83d8df.fra.appwrite.run/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp, Full_name, passion }),
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
