import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = 'AIzaSyCZsQNjBeu_o94vYzJ48tG0Hs5Xyah7XBY';
const MODEL = 'imagen-4.0-fast-generate-001';
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

const imagePrompts = [
  {
    filename: 'heroes/hero-main.jpg',
    prompt: 'Professional pest control technician in a dark green uniform with gold logo inspecting the exterior foundation of a beautiful modern Southern California home in Orange County. Golden hour sunset lighting, palm trees and blue sky in background. Wide angle lens, photorealistic, 4K resolution, cinematic composition. No text or watermarks.',
  },
  {
    filename: 'heroes/hero-services.jpg',
    prompt: 'Wide angle photograph of a professional pest control team of three people standing confidently in front of their dark green branded service truck in a sunny Orange County California residential neighborhood. Morning sunlight, palm trees, clear blue sky. Photorealistic, 4K. No text.',
  },
  {
    filename: 'heroes/hero-about.jpg',
    prompt: 'Friendly pest control professional in dark green uniform shaking hands with a happy homeowner couple at the front door of a beautiful modern Orange County home. Warm natural lighting, welcoming atmosphere. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/rodent-control-hero.jpg',
    prompt: 'Professional pest control technician wearing gloves carefully setting a humane rodent trap in a clean residential attic space. Warm overhead lighting, professional equipment visible. Photorealistic, detailed, 4K. No text.',
  },
  {
    filename: 'services/cockroach-control-hero.jpg',
    prompt: 'Pest control professional in uniform spraying targeted treatment along kitchen baseboards in a modern clean home. Professional spray equipment, focused and precise work. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/ant-control-hero.jpg',
    prompt: 'Close-up macro photograph of a trail of small ants on a light-colored kitchen countertop surface, with a blurred pest control professional in the background preparing treatment. Shallow depth of field, detailed, photorealistic. No text.',
  },
  {
    filename: 'services/wasp-control-hero.jpg',
    prompt: 'Pest control professional wearing full protective gear carefully treating a paper wasp nest under the wooden eaves of a residential home. Blue sky background, daytime. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/bee-removal-hero.jpg',
    prompt: 'Professional beekeeper-style pest control specialist in protective white suit carefully relocating a honeybee colony from a residential wall cavity. Golden warm tones, eco-friendly and humane feel. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/mosquito-control-hero.jpg',
    prompt: 'Professional pest control technician spraying mosquito barrier treatment in a lush green Southern California backyard with palm trees and a swimming pool in the background. Morning light, misty spray effect. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/spider-control-hero.jpg',
    prompt: 'Pest control professional treating the exterior foundation and window frame of a home for spiders, with a visible spider web in the corner. Clean professional look, daytime. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/bed-bug-treatment-hero.jpg',
    prompt: 'Pest control professional wearing gloves inspecting a white mattress seam with a bright flashlight, searching for bed bugs. Close-up detail, clinical and professional environment. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/wildlife-trapping-hero.jpg',
    prompt: 'Professional wildlife control specialist in uniform carefully handling a humane cage trap with a raccoon in a residential backyard in Southern California. Trees and fence in background. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/exclusion-repairs-hero.jpg',
    prompt: 'Pest control technician on a ladder sealing gaps around exterior vents and pipes on a home with professional-grade steel mesh and sealant materials. Bright daylight, Orange County home exterior. Photorealistic, 4K. No text.',
  },
  {
    filename: 'services/dead-animal-removal-hero.jpg',
    prompt: 'Professional pest control technician in protective gear with respirator and gloves crouching near a crawl space entry of a residential home with sanitation equipment. Clean composition, professional. Photorealistic, 4K. No text.',
  },
];

async function generateImage(prompt, filename) {
  const outputPath = path.join(IMAGES_DIR, filename);
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log(`Generating: ${filename}...`);

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: '16:9',
          personGeneration: 'allow_adult',
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error(`  ERROR: ${data.error.message}`);
      return false;
    }

    const predictions = data.predictions || [];
    if (predictions.length === 0) {
      console.error(`  ERROR: No predictions returned`);
      return false;
    }

    const base64Data = predictions[0].bytesBase64Encoded;
    if (!base64Data) {
      console.error(`  ERROR: No image data`);
      console.error(`  Response keys: ${Object.keys(predictions[0]).join(', ')}`);
      return false;
    }

    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`  SUCCESS: ${filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
    return true;
  } catch (err) {
    console.error(`  ERROR: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`Generating ${imagePrompts.length} images with Imagen 4.0...\n`);

  let success = 0;
  let failed = 0;

  for (const { prompt, filename } of imagePrompts) {
    const ok = await generateImage(prompt, filename);
    if (ok) success++;
    else failed++;

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log(`\nDone! ${success} generated, ${failed} failed.`);
}

main();
