// /api/proxy  — single-file Vercel Serverless Function (no Next.js needed)
export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, message: "✅ BG Wallet proxy is up." });
  }

  if (req.method === "POST") {
    // echoes back whatever you send — good for testing
    return res.status(200).json({ ok: true, youSent: req.body || null });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
