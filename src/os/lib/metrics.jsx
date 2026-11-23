/* Puts the numbers in a sentence in bold, so the results stand out when someone skims. It matches
   money (INR 7L+, ₹8,000, Rs. 70,000), percentages and ranges (40%, 20–30%), counts (10,000+, 700+),
   multipliers (2×) and short units (sub-500 ms, 2.25 min, 10 s, 100 m³). Bare years are left alone. */
const NUMBER =
  /((?:INR|Rs\.?|₹|\$)\s?)?(?<![A-Za-z0-9])~?\d[\d,]*(?:\.\d+)?(?:[–-]\d[\d,]*(?:\.\d+)?)?(?:\s?(?:%|×|ms\b|min\b|s\b|m³|[LKM]\+?))?\+?/g;

export function Metrics({ text }) {
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(NUMBER)) {
    const token = m[0];
    if (/^(19|20)\d\d$/.test(token)) continue; // a year
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <b key={m.index} className="metric">
        {token}
      </b>
    );
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
