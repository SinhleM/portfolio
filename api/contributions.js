// Live GitHub contributions, read straight from GitHub. Cached on Vercel's edge for 1 hour.
export default async function handler(req, res) {
  const user = "SinhleM";
  try {
    const r = await fetch(`https://github.com/users/${user}/contributions`, { headers: { "User-Agent": "portfolio-site" } });
    if (!r.ok) throw new Error(`GitHub ${r.status}`);
    const html = await r.text();
    const days = [];
    for (const m of html.matchAll(/<td[^>]*data-date="([\d-]+)"[^>]*id="([^"]+)"[^>]*data-level="(\d)"[^>]*>/g)) {
      const tip = html.match(new RegExp(`for="${m[2]}"[^>]*>([^<]*)<`));
      const count = tip && /^(\d+)/.test(tip[1]) ? Number(tip[1].match(/^(\d+)/)[1]) : 0;
      days.push({ date: m[1], level: Number(m[3]), count });
    }
    if (!days.length) throw new Error("no days parsed");
    days.sort((a, b) => a.date.localeCompare(b.date));
    const total = days.reduce((s, d) => s + d.count, 0);
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ user, total, days });
  } catch (e) {
    res.status(502).json({ error: String(e.message || e) });
  }
}
