// Saves a snapshot of GitHub contributions to src/contributions.json
// Run: node scripts/fetch-contributions.mjs
import { writeFileSync } from "node:fs";
const user = "SinhleM";
const html = await (await fetch(`https://github.com/users/${user}/contributions`)).text();
const days = [];
for (const m of html.matchAll(/<td[^>]*data-date="([\d-]+)"[^>]*id="([^"]+)"[^>]*data-level="(\d)"[^>]*>/g)) {
  const tip = html.match(new RegExp(`for="${m[2]}"[^>]*>([^<]*)<`));
  const count = tip && /^(\d+)/.test(tip[1]) ? Number(tip[1].match(/^(\d+)/)[1]) : 0;
  days.push({ date: m[1], level: Number(m[3]), count });
}
days.sort((a, b) => a.date.localeCompare(b.date));
const total = days.reduce((s, d) => s + d.count, 0);
writeFileSync("src/contributions.json", JSON.stringify({ user, total, updated: new Date().toISOString().slice(0, 10), days }));
console.log(`${days.length} days, ${total} contributions`);
