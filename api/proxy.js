export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "✅ BG Wallet proxy is up." });
  }
  if (req.method === "POST") {
    return res.status(200).json({ message: "✅ POST received", data: req.body });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
