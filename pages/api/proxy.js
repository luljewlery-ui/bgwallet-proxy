export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ status: "ok", message: "BG Wallet Proxy is alive" });
  }

  if (req.method === "POST") {
    return res.status(200).json({ status: "ok", data: req.body });
  }

  res.status(405).json({ error: "Method not allowed" });
}
