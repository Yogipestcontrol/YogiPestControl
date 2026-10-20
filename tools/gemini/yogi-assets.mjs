// Cinematic homepage assets for Yogi's Pest Control.
// Run from the repo root with GEMINI_API_KEY set:
//   node tools/gemini/yogi-assets.mjs stills            # all stills
//   node tools/gemini/yogi-assets.mjs stills deck-bees  # one still (re-roll)
//   node tools/gemini/yogi-assets.mjs films [id ...]    # Veo loops from approved stills
// Raw outputs land in tools/gemini/raw/ (gitignored). Budget cap and ledger: lib.mjs / ledger.json.
import { generateImage, generateVideo, spent, CAP } from './lib.mjs';

const RAW = 'tools/gemini/raw';
const LOOK =
  'Cinematic photograph, shot on a full-frame camera with a 35mm lens, natural light, shallow depth of field, ' +
  'muted deep green and warm brass color grade, fine film grain. Southern California, Orange County suburb. ' +
  'No text, no logos, no watermarks, no people unless described.';

const STILLS = [
  // Hero: the night before. The morning reveal on the site is the real photo of Yobani.
  { id: 'hero-night', aspect: '16:9', prompt: `${LOOK} Blue hour turning to night outside a 1970s two-story stucco and wood-shingle home in Orange County with a steep roof and a small attic vent near the peak. A tall Mexican fan palm and a mature tree beside the house, fronds touching the roofline. Street is quiet, one warm porch light on, upstairs windows dark. Deep teal-black sky with a few stars. Wide establishing shot from across the street, house on the right third, empty dark sky on the left two thirds for headline text. Moody, suspenseful, still.` },
  { id: 'hero-night-tall', aspect: '9:16', prompt: `${LOOK} Vertical frame. Night outside a 1970s two-story stucco home in Orange County, steep roof with a small attic vent near the peak, a tall fan palm whose fronds touch the roofline. One warm porch light, upstairs dark, deep teal-black sky. House fills the lower half; empty dark sky in the upper half for text. Moody and suspenseful.` },
  // Threat deck: one card per pest. Macro / close cinematic, dark and atmospheric.
  { id: 'deck-roof-rats', aspect: '16:9', prompt: `${LOOK} At dusk, a roof rat (Rattus rattus, slender, large ears, long tail) running along the stem of a palm frond toward a stucco roof eave and clay tile roof. Low angle, backlit by the last light, the rat in sharp focus on the right third, soft dark background on the left.` },
  { id: 'deck-ants', aspect: '16:9', prompt: `${LOOK} Macro shot of a dense trail of small brown Argentine ants (Linepithema humile) marching across a white quartz kitchen counter to a drip of honey, a window with morning rain behind out of focus. Ants in sharp focus on the right third; clean negative space on the left.` },
  { id: 'deck-mosquitoes', aspect: '16:9', prompt: `${LOOK} Daylight macro of a small black-and-white striped Aedes mosquito landing on a person's ankle on a sunny backyard patio, a terracotta plant saucer holding a little standing water blurred in the background. Mosquito sharp on the right third; soft bokeh left.` },
  { id: 'deck-bees', aspect: '16:9', prompt: `${LOOK} A large honey bee swarm clustered like a hanging bunch under the wooden eave of a stucco house in late afternoon light, a few bees flying around it. Shot from below at a safe distance, swarm on the right third, warm sky and soft roofline on the left.` },
  { id: 'deck-wildlife', aspect: '16:9', prompt: `${LOOK} Night. A flashlight beam cuts through a dark crawlspace under a raised wooden floor, revealing the reflective eyes and white-striped face of a skunk among the foundation piers and dusty pipes. Suspenseful, the beam enters from the left, the animal on the right third.` },
  { id: 'deck-bed-bugs', aspect: '16:9', prompt: `${LOOK} Extreme macro of a single adult bed bug (Cimex lectularius) and a few tiny dark spots along the piped seam of a light grey mattress, soft bedroom window light. Bug sharp on the right third; creamy blur left.` },
  // Job steps background: the inspection.
  { id: 'attic-flashlight', aspect: '16:9', prompt: `${LOOK} Inside a dark residential attic with wooden rafters and pink fiberglass insulation. A flashlight beam from the left sweeps across the rafters and lands on a small gap at the eave where daylight leaks in, with a few rodent droppings on the insulation nearby. Dust hangs in the beam. Investigative, quiet, cinematic.` },
];

const FILMS = [
  { id: 'hero-night', from: 'hero-night', aspect: '16:9', prompt: 'Locked-off camera with an extremely slow, barely perceptible push-in. Palm fronds sway gently in a light night breeze. The warm porch light flickers once. Behind the small attic vent near the roof peak, a faint dim glow briefly brightens and fades, as if something moved inside. No animals, no people, no creatures, nothing enters or leaves the frame, windows stay dark and closed. Calm, quiet, suspenseful. No camera shake.' },
  { id: 'hero-night-tall', from: 'hero-night-tall', aspect: '9:16', prompt: 'Locked-off camera, extremely slow push-in. Palm fronds sway gently in a night breeze. The porch light flickers once. A faint dim glow behind the attic vent briefly brightens and fades. No animals, no people, no creatures, nothing enters or leaves the frame, windows stay dark. Quiet and suspenseful. No camera shake.' },
  { id: 'attic-flashlight', from: 'attic-flashlight', aspect: '16:9', prompt: 'The flashlight beam slowly sweeps across the rafters and settles on the gap of daylight at the eave; dust drifts through the beam. Slow and steady, no people visible, no camera shake.' },
  { id: 'deck-roof-rats', from: 'deck-roof-rats', aspect: '16:9', prompt: 'The roof rat runs along the palm frond, pauses, then slips onto the roof eave and out of frame. The frond bounces slightly. Background sky dims. No camera shake.' },
  { id: 'deck-bees', from: 'deck-bees', aspect: '16:9', prompt: 'The swarm cluster pulses gently as bees crawl over it; a few bees fly in slow arcs around it in the warm light. Slow, calm, no camera shake.' },
  { id: 'deck-ants', from: 'deck-ants', aspect: '16:9', prompt: 'The trail of small brown ants marches steadily across the white counter toward the honey; ants keep streaming in from the left and crowd around the drip, antennae moving. Rain drips down the window in the soft background. Anatomically correct ants, six legs, no morphing. Slow, steady, no camera shake.' },
  { id: 'deck-mosquitoes', from: 'deck-mosquitoes', aspect: '16:9', prompt: 'The small striped mosquito lands, its wings flutter briefly, then it settles and lowers its head to bite. Leaves of the potted plants sway in a light breeze and the water in the terracotta saucer ripples slightly. Anatomically correct insect, no morphing, nothing else enters the frame. No camera shake.' },
  { id: 'deck-wildlife', from: 'deck-wildlife', aspect: '16:9', prompt: 'The flashlight beam slowly sweeps across the crawlspace; dust drifts through the light. The skunk blinks, turns its head toward the light, then slowly backs away between the foundation piers into the dark. Realistic animal anatomy, no morphing, no people visible. No camera shake.' },
  { id: 'deck-bed-bugs', from: 'deck-bed-bugs', aspect: '16:9', prompt: 'The single bed bug crawls slowly along the piped seam of the mattress, legs moving naturally, while the soft window light shifts slightly. Anatomically correct insect, no morphing, no additional bugs appear. Extreme macro, slow, no camera shake.' },
];

const [, , stage, ...only] = process.argv;
const pick = (list) => (only.length ? list.filter((x) => only.includes(x.id)) : list);

console.log(`Ledger: $${spent().toFixed(2)} of $${CAP}`);
if (stage === 'stills') {
  const results = await Promise.allSettled(
    pick(STILLS).map((s) => generateImage({ prompt: s.prompt, aspect: s.aspect, out: `${RAW}/${s.id}.png` }))
  );
  results.forEach((r, i) => console.log(pick(STILLS)[i].id, r.status === 'fulfilled' ? r.value : `FAILED ${r.reason}`));
} else if (stage === 'films') {
  const fs = await import('node:fs');
  const results = await Promise.allSettled(
    pick(FILMS).map((f) => {
      const still = ['png', 'jpg'].map((e) => `${RAW}/${f.from}.${e}`).find((p) => fs.existsSync(p));
      if (!still) throw new Error(`missing still for ${f.id}`);
      return generateVideo({ prompt: f.prompt, image: still, aspect: f.aspect, out: `${RAW}/${f.id}.mp4` });
    })
  );
  results.forEach((r, i) => console.log(pick(FILMS)[i].id, r.status === 'fulfilled' ? r.value : `FAILED ${r.reason}`));
} else {
  console.log('usage: stills|films [id ...]');
}
console.log(`Ledger: $${spent().toFixed(2)} of $${CAP}`);
