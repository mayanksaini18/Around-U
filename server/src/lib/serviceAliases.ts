export const SERVICE_ALIASES: Record<string, string[]> = {
  plumber: ["plumbing", "pipe", "leak", "tap", "water"],
  electrician: ["electrical", "wiring", "electric", "fan", "switch"],
  carpenter: ["carpentry", "wood", "furniture", "door"],
  cleaner: ["cleaning", "housekeeping", "maid", "sweeping"],
  painter: ["painting", "paint", "whitewash"],
  tutor: ["tuition", "teacher", "coaching"],
  "ac repair": ["ac", "air conditioner", "cooling", "hvac"],
  mechanic: ["bike repair", "car repair", "auto"],
  gardener: ["gardening", "mali", "plants"],
};

export function normalizeService(input: string): { canonical: string; aliases: string[] } {
  const q = input.trim().toLowerCase();
  for (const [canonical, aliases] of Object.entries(SERVICE_ALIASES)) {
    if (canonical === q || aliases.includes(q)) {
      return { canonical, aliases };
    }
  }
  return { canonical: q, aliases: [] };
}
