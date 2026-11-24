const featuredLogos = new Set([
  "horses-riviera",
  "arezzo-equestrian",
  "hermada-equestrian-centre",
  "mogliano",
  "le-lame",
]);

export function hasFeaturedLogo(slug: string) {
  return featuredLogos.has(slug);
}
