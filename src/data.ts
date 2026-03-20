import { Item, NPC, Location, Building } from './types';
import { KING_ARCTOS_PARTS, FENNEL_PARTS, BRAMM_PARTS, DAGAN_PARTS, CONSTABLE_COSTUME_PARTS, BAKER_COSTUME_PARTS, GHOST_COSTUME_PARTS, MASK_COSTUME_PARTS } from './characterParts';

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
    npcs: ['king_arctos', 'fennel'],
    connections: [
      { locationId: 'bakery', x: 2, y: 3, label: 'Enter Bakery' },
      { locationId: 'docks', x: 8, y: 3, label: 'Enter Warehouse' }
    ],
    bounds: { width: 11, height: 10 },
    buildings: [
      {
        id: 'bakery_building',
        name: 'The Crusty Crumb',
        position: { x: 1, y: 0 },
        size: { width: 3, height: 3 },
        doorPosition: { x: 2, y: 3 },
        targetLocationId: 'bakery',
        style: 'bakery',
      },
      {
        id: 'docks_building',
        name: 'Kraed Warehouse',
        position: { x: 7, y: 0 },
        size: { width: 3, height: 3 },
        doorPosition: { x: 8, y: 3 },
        targetLocationId: 'docks',
        style: 'warehouse',
      },
    ],
    decorations: [
      { id: 'tree_1', type: 'tree', position: { x: 0, y: 2 } },
      { id: 'tree_2', type: 'tree', position: { x: 10, y: 2 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 5, y: 1 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 5, y: 7 } },
      { id: 'bench_1', type: 'bench', position: { x: 4, y: 8 } },
      { id: 'bench_2', type: 'bench', position: { x: 6, y: 8 } },
      { id: 'flower_1', type: 'flower', position: { x: 0, y: 5 } },
      { id: 'flower_2', type: 'flower', position: { x: 10, y: 5 } },
      { id: 'flower_3', type: 'flower', position: { x: 4, y: 0 } },
      { id: 'flower_4', type: 'flower', position: { x: 6, y: 0 } },
    ],
    obstacles: [
      // Building walls (bakery: 3x3 at 1,0)
      { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
      { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 },
      { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 },
      // Building walls (warehouse: 3x3 at 7,0)
      { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },
      { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 9, y: 1 },
      { x: 7, y: 2 }, { x: 8, y: 2 }, { x: 9, y: 2 },
      // Trees
      { x: 0, y: 2 }, { x: 10, y: 2 },
      // Lamps
      { x: 5, y: 1 }, { x: 5, y: 7 },
      // Benches
      { x: 4, y: 8 }, { x: 6, y: 8 },
    ],
  },
  {
    id: 'bakery',
    name: 'The Crusty Crumb',
    description: 'A cozy corner filled with the scent of cinnamon and yeast, where the oven glow warms the soul.',
    npcs: ['bramm'],
    connections: [
      { locationId: 'town_square', x: 4, y: 9, label: 'Exit to Town Square', isDoor: true }
    ],
    bounds: { width: 9, height: 10 },
    decorations: [
      { id: 'barrel_1', type: 'barrel', position: { x: 1, y: 1 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 1, y: 2 } },
      { id: 'crate_1', type: 'crate', position: { x: 7, y: 7 } },
      { id: 'crate_2', type: 'crate', position: { x: 7, y: 8 } },
      { id: 'barrel_3', type: 'barrel', position: { x: 0, y: 8 } },
    ],
    obstacles: [
      { x: 1, y: 1 }, { x: 1, y: 2 }, // barrels
      { x: 7, y: 7 }, { x: 7, y: 8 }, // crates
      { x: 0, y: 8 }, // barrel
    ],
  },
  {
    id: 'docks',
    name: 'Kraed Docks',
    description: 'Where the mist clings to the water and the creak of old wood tells stories of distant lands.',
    npcs: ['dagan'],
    connections: [
      { locationId: 'town_square', x: 4, y: 9, label: 'Exit to Town Square', isDoor: true }
    ],
    bounds: { width: 10, height: 10 },
    decorations: [
      { id: 'barrel_1', type: 'barrel', position: { x: 3, y: 2 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 6, y: 2 } },
      { id: 'crate_1', type: 'crate', position: { x: 5, y: 7 } },
    ],
    obstacles: [
      { x: 3, y: 2 }, { x: 6, y: 2 }, // barrels
      { x: 5, y: 7 }, // crates
    ],
  },
];

export const NPCS: NPC[] = [
  {
    id: 'king_arctos',
    name: 'King Arctos',
    species: 'Lion',
    baseCostume: 'King',
    description: 'An indulgent lion king in flowing purple robes, his golden mane framing a cunning smile. A crown sits atop his head like it was always meant to be there.',
    spriteUrl: mayorImg,
    characterParts: KING_ARCTOS_PARTS,
    position: { x: 5, y: 4 },
    info: {
      secret: 'He is the secret endgame antagonist.',
      darkSecret: 'He fathered a white tiger child and has been covering it up for years.',
      rumor: 'He fathered a white tiger child.',
      falseRumor: 'He keeps a room of stuffed animals.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Ah, a visitor to my festival! Tell me, what brings you to the square on this fine morning?",
          options: [
            { text: "I am the new Constable.", nextNodeId: 'constable_path', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "Just taking in the sights.", nextNodeId: 'traveler_path' },
          ],
        },
        {
          id: 'constable_path',
          text: "A constable! Excellent. I could use someone reliable. There have been... irregularities at the docks. Investigate, would you?",
          options: [
            { text: "What sort of irregularities?", nextNodeId: 'rumors' },
            { text: "At once, Your Majesty.", action: (s) => s.flags.add('king_task_docks') },
          ],
        },
        {
          id: 'rumors',
          text: "The dock workers have been moving crates at odd hours. My son Lio thinks it's nothing, but a king must be thorough.",
          options: [{ text: "I'll look into it." }],
        },
        {
          id: 'traveler_path',
          text: "Then enjoy yourself! The Festival of Disguises is the jewel of our little island. Everyone becomes someone else for a day.",
          options: [{ text: "Thank you, Your Majesty." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The festival grows lively! Have you uncovered anything at the docks?",
          options: [
            { text: "I found this old key.", nextNodeId: 'key_found', condition: (s) => s.flags.has('has_key') },
            { text: "Still investigating, Your Majesty.", nextNodeId: 'not_yet' },
          ],
        },
        {
          id: 'key_found',
          text: "A key? Interesting. That looks like it belongs to the old treasury vault. Hold onto it—I may have a use for it later.",
          options: [{ text: "I will." }],
        },
        {
          id: 'not_yet',
          text: "Do hurry. A king's patience is generous, but not infinite.",
          options: [{ text: "Understood." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The stars are out, and the masks come off. Or do they? Sometimes the festival reveals more than we'd like.",
          options: [{ text: "It's been... revealing." }],
        },
      ],
    },
  },
  {
    id: 'bramm',
    name: 'Bramm',
    species: 'Bear',
    baseCostume: 'Baker',
    description: 'A broad-shouldered bear in a flour-dusted apron and a tall chef hat. His paws are surprisingly gentle for their size.',
    spriteUrl: missImg,
    characterParts: BRAMM_PARTS,
    position: { x: 3, y: 3 },
    info: {
      secret: 'He is gluten-intolerant and cannot taste most of his own creations.',
      darkSecret: 'He secretly judges all his baked goods by smell alone, terrified someone will find out.',
      rumor: "He's dating the king's son.",
      falseRumor: "He's dating the sheriff's daughter.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Morning! Fresh rolls are almost ready. Don't touch the sourdough—it's temperamental today.",
          options: [
            { text: "The Constable needs breakfast.", nextNodeId: 'constable_breakfast', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "Just browsing.", nextNodeId: 'looking' },
          ],
        },
        {
          id: 'constable_breakfast',
          text: "A constable! Coming right up. My mother Hesta always said to stay on the right side of the law. One honey roll, on the house.",
          options: [{ text: "Much appreciated.", action: (s) => s.flags.add('has_muffin') }],
        },
        {
          id: 'looking',
          text: "Look all you want! But if you see Prince Lio around, tell him his order is ready. He's always late.",
          options: [{ text: "I'll keep an eye out." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon rush! I can barely keep up. The whole island wants festival pastries.",
          options: [{ text: "Hang in there, Bramm." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Finally closing up. You know, the best part of baking is the quiet after the ovens cool.",
          options: [{ text: "Sounds peaceful." }],
        },
      ],
    },
  },
  {
    id: 'fennel',
    name: 'Fennel',
    species: 'Deer',
    baseCostume: 'Constable',
    description: 'A bumbling deer in an oversized constable uniform, antlers poking through a too-small helmet. He means well.',
    spriteUrl: officerImg,
    characterParts: FENNEL_PARTS,
    position: { x: 8, y: 6 },
    info: {
      secret: "He doesn't fully understand the laws he enforces.",
      darkSecret: 'He once accidentally arrested the wrong person and never corrected it.',
      rumor: 'He lets people off with warnings.',
      falseRumor: 'He is secretly a mastermind.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Oh! Hello there. I'm Constable Fennel. Well, I think I am. The badge says so, anyway.",
          options: [
            { text: "Nice uniform. I have one too.", nextNodeId: 'same_uniform', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "What are you doing here?", nextNodeId: 'duties' },
          ],
        },
        {
          id: 'same_uniform',
          text: "Wait—you're a constable too? Sheriff Halden didn't mention a second one. Hmm. Well, two heads are better than... however many heads there usually are.",
          options: [
            { text: "Have you noticed anything strange?", nextNodeId: 'strange' },
            { text: "I'll patrol the other areas.", action: (s) => s.flags.add('fennel_partner') },
          ],
        },
        {
          id: 'duties',
          text: "Keeping the peace! Or trying to. Mostly I give warnings. The Sheriff says I'm too lenient, but people seem happier that way.",
          options: [
            { text: "Have you noticed anything strange?", nextNodeId: 'strange' },
            { text: "Keep up the good work.", nextNodeId: 'thanks' },
          ],
        },
        {
          id: 'strange',
          text: "Strange? Well, I saw some odd crates being moved at the docks late last night. Dagan was there. He said it was normal, and I believed him. Should I... not have?",
          options: [{ text: "I'll check it out.", action: (s) => s.flags.add('king_task_docks') }],
        },
        {
          id: 'thanks',
          text: "Thanks! That means a lot. Most people just laugh at the antlers poking through the helmet.",
          options: [{ text: "It's a good look." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon patrol! Well, I've mostly been standing here. Is that patrolling? I think it counts.",
          options: [{ text: "Close enough, Fennel." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "It's getting dark. I should probably look more official. *straightens helmet* How's this?",
          options: [{ text: "Very official." }],
        },
      ],
    },
  },
  {
    id: 'dagan',
    name: 'Dagan',
    species: 'Tiger',
    baseCostume: 'Dock Foreman',
    description: 'A practical, steady tiger in a worn work vest. His orange-and-black stripes are half-hidden by dock grime, but his eyes are sharp.',
    spriteUrl: saltyImg,
    characterParts: DAGAN_PARTS,
    position: { x: 5, y: 5 },
    info: {
      secret: 'He works secret night shifts for extra pay.',
      darkSecret: 'The night shipments he oversees contain goods the King wants kept hidden.',
      rumor: 'He owes favors to dock handlers.',
      falseRumor: 'He plans to leave the island.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Watch your step. The docks are slippery this morning. What do you need?",
          options: [
            { text: "The King sent me to investigate.", nextNodeId: 'king_sent', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Just passing through.", nextNodeId: 'passing' },
          ],
        },
        {
          id: 'king_sent',
          text: "Arctos sent you? That old lion worries too much. Everything here is routine. Crates in, crates out.",
          options: [
            { text: "I need to see for myself.", nextNodeId: 'investigate', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "If you say so.", action: (s) => s.flags.add('dagan_dismissed') },
          ],
        },
        {
          id: 'investigate',
          text: "...Fine. You've got the uniform. There's a locked storage room in the back. I don't have the key—lost it. Or so I tell people.",
          options: [
            { text: "Hand it over.", action: (s) => { s.inventory.push(ITEMS.find(i => i.id === 'old_key')!); s.flags.add('has_key'); } },
          ],
        },
        {
          id: 'passing',
          text: "Then pass through quickly. My kids Nyra and Kiri are helping today and I don't need distractions.",
          options: [{ text: "I'll be quick." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Busy afternoon. Sera's been worrying about the festival preparations, so I'm handling extra loads.",
          options: [{ text: "You work hard, Dagan." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night shift. The docks are different after dark. Quieter. More honest, in a way.",
          options: [{ text: "Goodnight, Dagan." }],
        },
      ],
    },
  },
];
