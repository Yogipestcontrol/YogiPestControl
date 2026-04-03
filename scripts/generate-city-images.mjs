import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = 'AIzaSyCZsQNjBeu_o94vYzJ48tG0Hs5Xyah7XBY';
const MODEL = 'imagen-4.0-fast-generate-001';
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;
const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'cities');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const cities = [
  { slug: "anaheim", name: "Anaheim", landmark: "near Disneyland and the Honda Center arena" },
  { slug: "santa-ana", name: "Santa Ana", landmark: "in the historic downtown district" },
  { slug: "irvine", name: "Irvine", landmark: "with modern planned community homes and Irvine Spectrum in background" },
  { slug: "huntington-beach", name: "Huntington Beach", landmark: "near the iconic pier and Pacific Coast Highway" },
  { slug: "garden-grove", name: "Garden Grove", landmark: "in a typical suburban neighborhood with gardens" },
  { slug: "orange", name: "Orange", landmark: "near the Old Towne Orange historic circle" },
  { slug: "fullerton", name: "Fullerton", landmark: "near downtown Fullerton with craftsman style homes" },
  { slug: "costa-mesa", name: "Costa Mesa", landmark: "near South Coast Plaza and residential area" },
  { slug: "mission-viejo", name: "Mission Viejo", landmark: "overlooking the lake and mission-style homes" },
  { slug: "westminster", name: "Westminster", landmark: "in a diverse suburban neighborhood" },
  { slug: "newport-beach", name: "Newport Beach", landmark: "near the harbor with luxury coastal homes" },
  { slug: "buena-park", name: "Buena Park", landmark: "in a family-friendly suburban neighborhood" },
  { slug: "lake-forest", name: "Lake Forest", landmark: "surrounded by hills and oak trees" },
  { slug: "tustin", name: "Tustin", landmark: "near the Tustin Ranch residential area" },
  { slug: "yorba-linda", name: "Yorba Linda", landmark: "in the hills with equestrian trails nearby" },
  { slug: "san-clemente", name: "San Clemente", landmark: "with Spanish colonial architecture and ocean views" },
  { slug: "laguna-niguel", name: "Laguna Niguel", landmark: "on rolling hills with canyon views" },
  { slug: "la-habra", name: "La Habra", landmark: "in a quiet residential neighborhood with citrus trees" },
  { slug: "fountain-valley", name: "Fountain Valley", landmark: "in a clean suburban neighborhood with parks" },
  { slug: "placentia", name: "Placentia", landmark: "in a tree-lined residential street" },
  { slug: "rancho-santa-margarita", name: "Rancho Santa Margarita", landmark: "nestled against the Santa Ana Mountains" },
  { slug: "aliso-viejo", name: "Aliso Viejo", landmark: "in a modern planned community with trails" },
  { slug: "cypress", name: "Cypress", landmark: "in a well-maintained suburban neighborhood" },
  { slug: "brea", name: "Brea", landmark: "near the Brea hills with oil derricks in distance" },
  { slug: "dana-point", name: "Dana Point", landmark: "overlooking Dana Point Harbor and the ocean" },
  { slug: "san-juan-capistrano", name: "San Juan Capistrano", landmark: "near the historic Mission San Juan Capistrano" },
  { slug: "laguna-beach", name: "Laguna Beach", landmark: "along the coastal cliffs with art galleries" },
  { slug: "laguna-hills", name: "Laguna Hills", landmark: "in a hillside residential community" },
  { slug: "seal-beach", name: "Seal Beach", landmark: "near the charming Main Street and pier" },
  { slug: "los-alamitos", name: "Los Alamitos", landmark: "in a small-town residential area" },
  { slug: "stanton", name: "Stanton", landmark: "in a compact suburban neighborhood" },
  { slug: "la-palma", name: "La Palma", landmark: "in a quiet tree-lined residential area" },
  { slug: "villa-park", name: "Villa Park", landmark: "among large estate homes with horse properties" },
  { slug: "ladera-ranch", name: "Ladera Ranch", landmark: "in a modern master-planned hillside community" },
];

async function generateImage(city) {
  const filename = `${city.slug}.jpg`;
  const outputPath = path.join(OUT_DIR, filename);

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 10000) {
    console.log(`SKIP: ${filename} already exists`);
    return true;
  }

  const prompt = `Ultra high quality wide angle photograph of a professional pest control technician in dark green uniform inspecting a beautiful residential home in ${city.name}, California ${city.landmark}. Sunny Southern California weather, blue sky, palm trees. Photorealistic, 4K resolution, cinematic composition. No text or watermarks.`;

  console.log(`Generating: ${filename}...`);

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: { sampleCount: 1, aspectRatio: '16:9', personGeneration: 'allow_adult' },
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error(`  ERROR: ${data.error.message}`);
      return false;
    }

    const predictions = data.predictions || [];
    if (!predictions.length || !predictions[0].bytesBase64Encoded) {
      console.error(`  ERROR: No image data returned`);
      return false;
    }

    const buffer = Buffer.from(predictions[0].bytesBase64Encoded, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`  SUCCESS: ${filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
    return true;
  } catch (err) {
    console.error(`  ERROR: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`Generating ${cities.length} city hero images...\n`);
  let success = 0, failed = 0;

  for (const city of cities) {
    const ok = await generateImage(city);
    if (ok) success++; else failed++;
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\nDone! ${success} generated, ${failed} failed.`);
}

main();
