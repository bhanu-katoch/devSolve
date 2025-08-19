// /api/send-otp.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { email } = req.body.data;
    if (!email) throw new Error("Email is required");

    // Call Appwrite function
    const response = await fetch("https://68a307f100086675700a.fra.appwrite.run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { email } }),
    });

    const data = await response.json(); // expect Appwrite JSON response
    return res.status(200).json(data);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
