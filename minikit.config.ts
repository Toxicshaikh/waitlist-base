const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
 {
  "accountAssociation": {
    "header": "eyJmaWQiOjI4OTExNywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc4OGQ5RTk1QmJENEM4MzYyN2VGRDY2YkVDMTZiODZmNTlGREM4Q2YifQ",
    "payload": "eyJkb21haW4iOiJ3YWl0bGlzdC1iYXNlLWtvaGwudmVyY2VsLmFwcCJ9",
    "signature": "PYcGXkQHS73sFIOWblrMorr/e2tYeHfsOs1SFaS1YUVglhA05EjTnjrt4rRR8GYllL3gx1FXcYCZcwp8caTFqxw="
  }
}
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

