// /api/verify-otp-project.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { email, otp, Full_Name, Expertise, Description, Project_idea } = req.body;

    if (!email || !otp || !Full_Name || !Expertise || !Description || !Project_idea) {
      throw new Error("All fields are required");
    }

    // Call Appwrite function for Project Lead
    const response = await fetch("https://68a4049b0024220438d1.fra.appwrite.run/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        otp,
        Full_Name,
        Expertise,
        Description,
        Project_idea,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
