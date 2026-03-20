import { Item, NPC, Location } from './types';
import { MAYOR_PARTS, OFFICER_PARTS, MISS_PIPS_PARTS, SALTY_SAM_PARTS, CONSTABLE_COSTUME_PARTS, BAKER_COSTUME_PARTS, GHOST_COSTUME_PARTS, MASK_COSTUME_PARTS } from './characterParts';

// Import custom sprite assets in the style of the provided concept art.  The
// images live in the ./assets directory and are converted to public URLs via
// import.meta.url.  Using new URL() here allows Vite to bundle the images and
// gives us the final hashed filenames at runtime without TypeScript
// complaining about unknown modules for .png files.
const mayorImg  = new URL('./assets/mayor.png', import.meta.url).href;
const officerImg  = new URL('./assets/officer.png', import.meta.url).href;
const missImg = new URL('./assets/miss.png', import.meta.url).href;
const saltyImg  = new URL('./assets/salty.png', import.meta.url).href;

export const ITEMS: Item[] = [
  { id: 'constable_uniform', name: 'Constable Uniform', description: "A warm, royal blue uniform with soft, painterly textures and golden buttons that glow like small suns.", icon: 'Shield', spriteUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=storybook_constable&backgroundColor=fdf6e3', isOutfit: true, characterParts: CONSTABLE_COSTUME_PARTS },
  { id: 'baker_apron', name: 'Baker Apron', description: 'Dusted with flour and stained with sweet strawberry jam, smelling of warm hearths and home.', icon: 'ChefHat', spriteUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=storybook_baker&backgroundColor=fdf6e3', isOutfit: true, characterParts: BAKER_COSTUME_PARTS },
  { id: 'ghost_sheet', name: 'Ghost Sheet', description: 'A soft, ethereal cloth that seems to shimmer with the light of a thousand distant stars.', icon: 'Ghost', spriteUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=storybook_ghost&backgroundColor=fdf6e3', isOutfit: true, characterParts: GHOST_COSTUME_PARTS },
  { id: 'old_key', name: 'Old Key', description: 'A heavy brass key, its surface worn smooth by generations of hands, humming with a faint, ancient magic.', icon: 'Key', spriteUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=storybook_key&backgroundColor=fdf6e3' },
  { id: 'secret_letter', name: 'Soggy Letter', description: 'The ink has bled into beautiful, watercolor-like patterns on thick, handmade parchment.', icon: 'Mail', spriteUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=storybook_letter&backgroundColor=fdf6e3' },
  { id: 'strange_mask', name: 'Strange Mask', description: 'A hand-painted mask with vibrant, folk-art features that seem to shift slightly in the twilight.', icon: 'Mask', spriteUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=storybook_mask&backgroundColor=fdf6e3', isOutfit: true, characterParts: MASK_COSTUME_PARTS },
];

export const LOCATIONS: Location[] = [
  {
    id: 'town_square',
    name: 'Town Square',
    description: 'The heart of Kraed Maas, where the golden hour light lingers on the cobblestones and colorful banners dance in the breeze.',
    npcs: ['mayor_barnaby', 'officer_grruff'],
    connections: [
      { locationId: 'bakery', x: 0, y: 4, label: 'To Bakery' },
      { locationId: 'docks', x: 9, y: 4, label: 'To Docks' }
    ],
    bounds: { width: 10, height: 10 },
    decorations: [
      { id: 'tree_1', type: 'tree', position: { x: 2, y: 2 } },
      { id: 'tree_2', type: 'tree', position: { x: 7, y: 2 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 4, y: 1 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 5, y: 1 } },
      { id: 'bench_1', type: 'bench', position: { x: 4, y: 8 } },
      { id: 'bench_2', type: 'bench', position: { x: 5, y: 8 } },
      { id: 'flower_1', type: 'flower', position: { x: 1, y: 1 } },
      { id: 'flower_2', type: 'flower', position: { x: 8, y: 1 } },
    ],
    obstacles: [
      { x: 2, y: 2 }, { x: 7, y: 2 }, // trees
      { x: 4, y: 1 }, { x: 5, y: 1 }, // lamps
      { x: 4, y: 8 }, { x: 5, y: 8 }, // benches
    ],
  },
  {
    id: 'bakery',
    name: 'The Crusty Crumb',
    description: 'A cozy corner filled with the scent of cinnamon and yeast, where the oven glow warms the soul.',
    npcs: ['miss_pips'],
    connections: [
      { locationId: 'town_square', x: 9, y: 4, label: 'To Town Square' }
    ],
    bounds: { width: 10, height: 10 },
    decorations: [
      { id: 'barrel_1', type: 'barrel', position: { x: 2, y: 2 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 2, y: 3 } },
      { id: 'crate_1', type: 'crate', position: { x: 7, y: 7 } },
      { id: 'crate_2', type: 'crate', position: { x: 8, y: 7 } },
    ],
    obstacles: [
      { x: 2, y: 2 }, { x: 2, y: 3 }, // barrels
      { x: 7, y: 7 }, { x: 8, y: 7 }, // crates
    ],
  },
  {
    id: 'docks',
    name: 'Kraed Docks',
    description: 'Where the mist clings to the water and the creak of old wood tells stories of distant lands.',
    npcs: ['salty_sam'],
    connections: [
      { locationId: 'town_square', x: 0, y: 4, label: 'To Town Square' }
    ],
    bounds: { width: 10, height: 10 },
    decorations: [
      { id: 'barrel_1', type: 'barrel', position: { x: 4, y: 3 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 6, y: 3 } },
      { id: 'crate_1', type: 'crate', position: { x: 5, y: 7 } },
    ],
    obstacles: [
      { x: 4, y: 3 }, { x: 6, y: 3 }, // barrels
      { x: 5, y: 7 }, // crates
    ],
  },
];

export const NPCS: NPC[] = [
  {
    id: 'mayor_barnaby',
    name: 'Mayor Barnaby',
    species: 'Lion',
    baseCostume: 'King',
    description: 'A dapper lion in a warm purple suit, his mane a soft watercolor of gold and amber. He stands with a regal, yet gentle, posture.',
    // Replace the generic dicebear sprite with our custom mayor image
    spriteUrl: mayorImg,
    characterParts: MAYOR_PARTS,
    position: { x: 5, y: 2 },
    info: {
      secret: 'He is terrified of heights.',
      darkSecret: 'He embezzled the festival funds to buy a collection of porcelain spoons.',
      rumor: 'He sleeps with a nightlight.',
      falseRumor: 'He can actually roar loud enough to shake the island.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Welcome, citizen! Or... wait, are you a citizen? That costume is remarkably convincing.",
          options: [
            { text: "I am the new Constable.", nextNodeId: 'constable_path', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "Just a humble traveler.", nextNodeId: 'traveler_path' },
          ],
        },
        {
          id: 'constable_path',
          text: "Ah, Constable! Good. I need you to keep an eye on the docks. I've heard... rumors.",
          options: [
            { text: "What kind of rumors?", nextNodeId: 'rumors' },
            { text: "I'm on it, Sire.", action: (s) => s.flags.add('mayor_task_docks') },
          ],
        },
        {
          id: 'rumors',
          text: "Salty Sam has been acting strange. Even for him. Go see what he's hiding.",
          options: [{ text: "Understood." }],
        },
        {
          id: 'traveler_path',
          text: "A traveler! How exotic. Enjoy the festivities, but stay out of trouble.",
          options: [{ text: "Thank you, Mayor." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The sun is high, and the festival is in full swing! Have you found anything at the docks?",
          options: [
            { text: "I found this old key.", nextNodeId: 'key_found', condition: (s) => s.flags.has('has_key') },
            { text: "Not yet, Mayor.", nextNodeId: 'not_yet' },
          ],
        },
        {
          id: 'key_found',
          text: "A key? Let me see... Oh my. This looks like the key to the old treasury. Or my spoon cabinet. Keep it safe.",
          options: [{ text: "I will." }],
        },
        {
          id: 'not_yet',
          text: "Hurry along then. Time is a precious resource, much like porcelain.",
          options: [{ text: "Right." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The stars are out. The festival is almost over. I hope you've enjoyed your stay, Constable.",
          options: [{ text: "It's been... revealing." }],
        },
      ],
    },
  },
  {
    id: 'miss_pips',
    name: 'Miss Pips',
    species: 'Rabbit',
    baseCostume: 'Witch',
    description: 'A small rabbit in a soft green dress and a large, floppy witch hat. Her eyes sparkle with a painterly warmth.',
    // Replace the generic dicebear sprite with our custom rabbit seamstress image
    spriteUrl: missImg,
    characterParts: MISS_PIPS_PARTS,
    position: { x: 3, y: 3 },
    info: {
      secret: 'She hates carrots.',
      darkSecret: 'She once turned a rival baker into a loaf of sourdough.',
      rumor: 'She can see the future in flour dust.',
      falseRumor: 'She is actually three squirrels in a rabbit suit.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Bubble, bubble... oh, hello dear. Want a muffin?",
          options: [
            { text: "I'm here for the Constable's breakfast.", nextNodeId: 'constable_breakfast', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "Just looking.", nextNodeId: 'looking' },
          ],
        },
        {
          id: 'constable_breakfast',
          text: "Of course! One 'Justice Muffin' coming right up. Don't tell anyone it's mostly sugar.",
          options: [{ text: "My secret is safe.", action: (s) => s.flags.add('has_muffin') }],
        },
        {
          id: 'looking',
          text: "Look all you want, but don't touch the sourdough. It's... temperamental.",
          options: [{ text: "Got it." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The oven is hot! The afternoon rush is no joke. Need another muffin?",
          options: [{ text: "Maybe later, Miss Pips." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Closing time soon. The moon is the best timer, don't you think?",
          options: [{ text: "I suppose so." }],
        },
      ],
    },
  },
  {
    id: 'officer_grruff',
    name: 'Officer Grruff',
    species: 'Wolf',
    baseCostume: 'Clown',
    description: 'A large wolf in a soft, polka-dot jumpsuit that looks like it was painted with gentle watercolors. He has a thoughtful, artistic expression.',
    // Replace the generic dicebear sprite with our custom officer (cat constable) image
    spriteUrl: officerImg,
    characterParts: OFFICER_PARTS,
    position: { x: 8, y: 7 },
    info: {
      secret: 'He wants to be a poet.',
      darkSecret: 'He let a thief go because they promised to critique his sonnets.',
      rumor: 'He cries during parades.',
      falseRumor: 'He is the strongest wolf on the island.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Honk. Honk. I'm a clown. Are you happy now?",
          options: [
            { text: "You look... great.", nextNodeId: 'compliment' },
            { text: "Why the long face?", nextNodeId: 'why' },
          ],
        },
        {
          id: 'compliment',
          text: "Don't lie to me. I'm a wolf in a tutu. It's a disgrace.",
          options: [{ text: "Sorry." }],
        },
        {
          id: 'why',
          text: "Tradition. My father was a clown wolf. His father was a clown wolf. I just want to write verses about the moon.",
          options: [
            { text: "I'd love to hear a poem.", action: (s) => s.flags.add('heard_poem') },
            { text: "Stick to the honking.", nextNodeId: 'honk' },
          ],
        },
        {
          id: 'honk',
          text: "*Honk.* Happy?",
          options: [{ text: "Very." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The sun is too bright for sonnets. *Honk.*",
          options: [{ text: "Hang in there, Grruff." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The moon! Finally! 'O silver orb, so cold and bright...' What do you think?",
          options: [{ text: "It's beautiful." }],
        },
      ],
    },
  },
  {
    id: 'salty_sam',
    name: 'Salty Sam',
    species: 'Walrus',
    baseCostume: 'Pirate',
    description: 'A sturdy walrus in a deep red pirate coat, his tusks yellowed like old ivory. He stands with a weathered, storybook charm.',
    // Replace the generic dicebear sprite with our custom pig musician image for Salty Sam
    spriteUrl: saltyImg,
    characterParts: SALTY_SAM_PARTS,
    position: { x: 5, y: 5 },
    info: {
      secret: 'He is actually a very good knitter.',
      darkSecret: 'He found the Mayor\'s porcelain spoons and is holding them for ransom.',
      rumor: 'He once wrestled a sea serpent.',
      falseRumor: 'He has a map to buried gold.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Arr! What brings a landlubber like ye to me docks?",
          options: [
            { text: "The Mayor sent me.", nextNodeId: 'mayor_sent', condition: (s) => s.flags.has('mayor_task_docks') },
            { text: "Just enjoying the sea air.", nextNodeId: 'sea_air' },
          ],
        },
        {
          id: 'mayor_sent',
          text: "Barnaby, eh? That old lion's always poking his nose where it don't belong. Tell him I found nothing but seaweed.",
          options: [
            { text: "You're lying.", nextNodeId: 'lying', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "Okay, I'll tell him.", action: (s) => s.flags.add('sam_lied') },
          ],
        },
        {
          id: 'lying',
          text: "Ye got sharp eyes for a constable. Fine. I found a key. A heavy one. Want it?",
          options: [
            { text: "Yes, please.", action: (s) => { s.inventory.push(ITEMS.find(i => i.id === 'old_key')!); s.flags.add('has_key'); } },
          ],
        },
        {
          id: 'sea_air',
          text: "Careful ye don't fall in. The water's cold and the crabs are hungry.",
          options: [{ text: "I'll be careful." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The tide is coming in. Best be moving along before ye get wet feet.",
          options: [{ text: "Thanks for the warning." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The sea is dark tonight. Like a giant bowl of ink. Don't spill any.",
          options: [{ text: "Goodnight, Sam." }],
        },
      ],
    },
  },
];
