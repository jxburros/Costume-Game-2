import { Item, NPC, Location, Building } from './types';
import { KING_ARCTOS_PARTS, FENNEL_PARTS, BRAMM_PARTS, DAGAN_PARTS, IVELLE_PARTS, PRINCE_LIO_PARTS, SHERIFF_HALDEN_PARTS, MALLOW_PARTS, CONSTABLE_COSTUME_PARTS, BAKER_COSTUME_PARTS, GHOST_COSTUME_PARTS, MASK_COSTUME_PARTS } from './characterParts';

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
      { locationId: 'bakery', x: 4, y: 3, label: 'Enter Bakery' },
      { locationId: 'docks', x: 17, y: 3, label: 'Enter Warehouse' },
      { locationId: 'tailor_shop', x: 2, y: 11, label: 'Enter Tailor Shop' },
      { locationId: 'sheriff_office', x: 10, y: 11, label: 'Enter Sheriff Office' },
      { locationId: 'coffee_shop', x: 18, y: 11, label: 'Enter Coffee Shop' },
      { locationId: 'castle_grounds', x: 11, y: 3, label: 'Enter Castle Grounds' },
    ],
    bounds: { width: 22, height: 20 },
    buildings: [
      {
        id: 'bakery_building',
        name: 'The Crusty Crumb',
        position: { x: 3, y: 0 },
        size: { width: 3, height: 3 },
        doorPosition: { x: 4, y: 3 },
        targetLocationId: 'bakery',
        style: 'bakery',
      },
      {
        id: 'docks_building',
        name: 'Kraed Warehouse',
        position: { x: 16, y: 0 },
        size: { width: 3, height: 3 },
        doorPosition: { x: 17, y: 3 },
        targetLocationId: 'docks',
        style: 'warehouse',
      },
      {
        id: 'tailor_building',
        name: "Ivelle's Needlework",
        position: { x: 1, y: 9 },
        size: { width: 3, height: 2 },
        doorPosition: { x: 2, y: 11 },
        targetLocationId: 'tailor_shop',
        style: 'tailor',
      },
      {
        id: 'sheriff_building',
        name: "Sheriff's Office",
        position: { x: 9, y: 9 },
        size: { width: 3, height: 2 },
        doorPosition: { x: 10, y: 11 },
        targetLocationId: 'sheriff_office',
        style: 'sheriff',
      },
      {
        id: 'coffee_building',
        name: "Mallow's Brew",
        position: { x: 17, y: 9 },
        size: { width: 3, height: 2 },
        doorPosition: { x: 18, y: 11 },
        targetLocationId: 'coffee_shop',
        style: 'coffee',
      },
      {
        id: 'castle_building',
        name: 'Castle Kraed',
        position: { x: 9, y: 0 },
        size: { width: 5, height: 3 },
        doorPosition: { x: 11, y: 3 },
        targetLocationId: 'castle_grounds',
        style: 'castle',
      },
    ],
    decorations: [
      // Trees lining the northern edge
      { id: 'tree_1', type: 'tree', position: { x: 0, y: 0 } },
      { id: 'tree_2', type: 'tree', position: { x: 1, y: 0 } },
      { id: 'tree_3', type: 'tree', position: { x: 7, y: 0 } },
      { id: 'tree_5', type: 'tree', position: { x: 20, y: 0 } },
      { id: 'tree_6', type: 'tree', position: { x: 21, y: 0 } },
      // Trees along west side
      { id: 'tree_7', type: 'tree', position: { x: 0, y: 4 } },
      { id: 'tree_8', type: 'tree', position: { x: 0, y: 7 } },
      { id: 'tree_9', type: 'tree', position: { x: 0, y: 13 } },
      // Trees along east side
      { id: 'tree_10', type: 'tree', position: { x: 21, y: 4 } },
      { id: 'tree_11', type: 'tree', position: { x: 21, y: 7 } },
      { id: 'tree_12', type: 'tree', position: { x: 21, y: 13 } },
      // Park area in the south
      { id: 'tree_13', type: 'tree', position: { x: 3, y: 15 } },
      { id: 'tree_14', type: 'tree', position: { x: 7, y: 15 } },
      { id: 'tree_15', type: 'tree', position: { x: 14, y: 15 } },
      { id: 'tree_16', type: 'tree', position: { x: 18, y: 15 } },
      { id: 'tree_17', type: 'tree', position: { x: 5, y: 18 } },
      { id: 'tree_18', type: 'tree', position: { x: 16, y: 18 } },
      // Southern boundary trees
      { id: 'tree_19', type: 'tree', position: { x: 0, y: 19 } },
      { id: 'tree_20', type: 'tree', position: { x: 1, y: 19 } },
      { id: 'tree_21', type: 'tree', position: { x: 10, y: 19 } },
      { id: 'tree_22', type: 'tree', position: { x: 11, y: 19 } },
      { id: 'tree_23', type: 'tree', position: { x: 20, y: 19 } },
      { id: 'tree_24', type: 'tree', position: { x: 21, y: 19 } },
      // Lamps along the main paths
      { id: 'lamp_1', type: 'lamp', position: { x: 10, y: 1 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 10, y: 5 } },
      { id: 'lamp_3', type: 'lamp', position: { x: 5, y: 7 } },
      { id: 'lamp_4', type: 'lamp', position: { x: 15, y: 7 } },
      { id: 'lamp_5', type: 'lamp', position: { x: 6, y: 13 } },
      { id: 'lamp_6', type: 'lamp', position: { x: 15, y: 13 } },
      { id: 'lamp_7', type: 'lamp', position: { x: 10, y: 17 } },
      // Flowers scattered around
      { id: 'flower_1', type: 'flower', position: { x: 2, y: 5 } },
      { id: 'flower_2', type: 'flower', position: { x: 19, y: 5 } },
      { id: 'flower_3', type: 'flower', position: { x: 8, y: 2 } },
      { id: 'flower_4', type: 'flower', position: { x: 14, y: 2 } },
      { id: 'flower_5', type: 'flower', position: { x: 4, y: 13 } },
      { id: 'flower_6', type: 'flower', position: { x: 17, y: 13 } },
      { id: 'flower_7', type: 'flower', position: { x: 9, y: 16 } },
      { id: 'flower_8', type: 'flower', position: { x: 12, y: 16 } },
      { id: 'flower_9', type: 'flower', position: { x: 2, y: 17 } },
      { id: 'flower_10', type: 'flower', position: { x: 19, y: 17 } },
      // Benches in the park area
      { id: 'bench_1', type: 'bench', position: { x: 5, y: 16 } },
      { id: 'bench_2', type: 'bench', position: { x: 16, y: 16 } },
      { id: 'bench_3', type: 'bench', position: { x: 10, y: 8 } },
      // Barrels and crates near buildings
      { id: 'barrel_1', type: 'barrel', position: { x: 7, y: 3 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 14, y: 3 } },
      { id: 'crate_1', type: 'crate', position: { x: 5, y: 9 } },
      { id: 'crate_2', type: 'crate', position: { x: 15, y: 9 } },
      { id: 'barrel_3', type: 'barrel', position: { x: 8, y: 14 } },
      { id: 'barrel_4', type: 'barrel', position: { x: 13, y: 14 } },
    ],
    obstacles: [
      // Building walls (bakery: 3x3 at 3,0)
      { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 },
      { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
      { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 },
      // Building walls (warehouse: 3x3 at 16,0)
      { x: 16, y: 0 }, { x: 17, y: 0 }, { x: 18, y: 0 },
      { x: 16, y: 1 }, { x: 17, y: 1 }, { x: 18, y: 1 },
      { x: 16, y: 2 }, { x: 17, y: 2 }, { x: 18, y: 2 },
      // Building walls (tailor: 3x2 at 1,9)
      { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 },
      { x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 },
      // Building walls (sheriff: 3x2 at 9,9)
      { x: 9, y: 9 }, { x: 10, y: 9 }, { x: 11, y: 9 },
      { x: 9, y: 10 }, { x: 10, y: 10 }, { x: 11, y: 10 },
      // Building walls (coffee: 3x2 at 17,9)
      { x: 17, y: 9 }, { x: 18, y: 9 }, { x: 19, y: 9 },
      { x: 17, y: 10 }, { x: 18, y: 10 }, { x: 19, y: 10 },
      // Building walls (castle: 5x3 at 9,0)
      { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }, { x: 13, y: 0 },
      { x: 9, y: 1 }, { x: 10, y: 1 }, { x: 11, y: 1 }, { x: 12, y: 1 }, { x: 13, y: 1 },
      { x: 9, y: 2 }, { x: 10, y: 2 }, { x: 11, y: 2 }, { x: 12, y: 2 }, { x: 13, y: 2 },
      // Trees (northern edge) - removed x:13 since castle is there now
      { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 7, y: 0 },
      { x: 20, y: 0 }, { x: 21, y: 0 },
      // Trees (west side)
      { x: 0, y: 4 }, { x: 0, y: 7 }, { x: 0, y: 13 },
      // Trees (east side)
      { x: 21, y: 4 }, { x: 21, y: 7 }, { x: 21, y: 13 },
      // Trees (park area)
      { x: 3, y: 15 }, { x: 7, y: 15 }, { x: 14, y: 15 }, { x: 18, y: 15 },
      { x: 5, y: 18 }, { x: 16, y: 18 },
      // Trees (southern boundary)
      { x: 0, y: 19 }, { x: 1, y: 19 }, { x: 10, y: 19 }, { x: 11, y: 19 },
      { x: 20, y: 19 }, { x: 21, y: 19 },
      // Lamps
      { x: 10, y: 1 }, { x: 10, y: 5 }, { x: 5, y: 7 }, { x: 15, y: 7 },
      { x: 6, y: 13 }, { x: 15, y: 13 }, { x: 10, y: 17 },
      // Benches
      { x: 5, y: 16 }, { x: 16, y: 16 }, { x: 10, y: 8 },
      // Barrels and crates
      { x: 7, y: 3 }, { x: 14, y: 3 }, { x: 5, y: 9 }, { x: 15, y: 9 },
      { x: 8, y: 14 }, { x: 13, y: 14 },
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
  {
    id: 'tailor_shop',
    name: "Ivelle's Needlework",
    description: 'Bolts of fabric line every wall, and the air smells of lavender and old thread. Mannequins wear half-finished festival costumes.',
    npcs: ['ivelle', 'prince_lio'],
    connections: [
      { locationId: 'town_square', x: 4, y: 9, label: 'Exit to Town Square', isDoor: true }
    ],
    bounds: { width: 9, height: 10 },
    decorations: [
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 1 } },
      { id: 'crate_2', type: 'crate', position: { x: 0, y: 2 } },
      { id: 'crate_3', type: 'crate', position: { x: 8, y: 1 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 8, y: 7 } },
    ],
    obstacles: [
      { x: 0, y: 1 }, { x: 0, y: 2 }, // fabric crates
      { x: 8, y: 1 }, // supply crate
      { x: 8, y: 7 }, // dye barrel
    ],
  },
  {
    id: 'sheriff_office',
    name: "Sheriff's Office",
    description: 'A cluttered office with wanted posters on the walls and a desk buried under paperwork. A jail cell sits in the corner.',
    npcs: ['sheriff_halden'],
    connections: [
      { locationId: 'town_square', x: 4, y: 9, label: 'Exit to Town Square', isDoor: true }
    ],
    bounds: { width: 9, height: 10 },
    decorations: [
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 0 } },
      { id: 'crate_2', type: 'crate', position: { x: 1, y: 0 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 7, y: 8 } },
      { id: 'crate_3', type: 'crate', position: { x: 8, y: 8 } },
    ],
    obstacles: [
      { x: 0, y: 0 }, { x: 1, y: 0 }, // desk
      { x: 7, y: 8 }, { x: 8, y: 8 }, // cell corner
    ],
  },
  {
    id: 'coffee_shop',
    name: "Mallow's Brew",
    description: 'Warm light spills over mismatched chairs and steaming cups. The rich aroma of roasted beans fills every corner.',
    npcs: ['mallow'],
    connections: [
      { locationId: 'town_square', x: 4, y: 9, label: 'Exit to Town Square', isDoor: true }
    ],
    bounds: { width: 9, height: 10 },
    decorations: [
      { id: 'barrel_1', type: 'barrel', position: { x: 0, y: 1 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 1, y: 1 } },
      { id: 'crate_1', type: 'crate', position: { x: 7, y: 7 } },
      { id: 'bench_1', type: 'bench', position: { x: 3, y: 2 } },
      { id: 'bench_2', type: 'bench', position: { x: 5, y: 2 } },
    ],
    obstacles: [
      { x: 0, y: 1 }, { x: 1, y: 1 }, // counter barrels
      { x: 7, y: 7 }, // supply crate
      { x: 3, y: 2 }, { x: 5, y: 2 }, // benches/tables
    ],
  },
  {
    id: 'castle_grounds',
    name: 'Castle Kraed',
    description: 'The grand courtyard of Castle Kraed. Stone walls rise high, draped with royal purple banners. A fountain glistens in the center.',
    npcs: [],
    connections: [
      { locationId: 'town_square', x: 5, y: 9, label: 'Exit to Town Square', isDoor: true }
    ],
    bounds: { width: 11, height: 10 },
    decorations: [
      { id: 'lamp_1', type: 'lamp', position: { x: 1, y: 1 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 9, y: 1 } },
      { id: 'lamp_3', type: 'lamp', position: { x: 1, y: 7 } },
      { id: 'lamp_4', type: 'lamp', position: { x: 9, y: 7 } },
      { id: 'flower_1', type: 'flower', position: { x: 3, y: 3 } },
      { id: 'flower_2', type: 'flower', position: { x: 7, y: 3 } },
      { id: 'flower_3', type: 'flower', position: { x: 3, y: 7 } },
      { id: 'flower_4', type: 'flower', position: { x: 7, y: 7 } },
      { id: 'bench_1', type: 'bench', position: { x: 4, y: 6 } },
      { id: 'bench_2', type: 'bench', position: { x: 6, y: 6 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 0, y: 0 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 10, y: 0 } },
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 9 } },
      { id: 'crate_2', type: 'crate', position: { x: 10, y: 9 } },
    ],
    obstacles: [
      { x: 1, y: 1 }, { x: 9, y: 1 }, // lamps
      { x: 1, y: 7 }, { x: 9, y: 7 }, // lamps
      { x: 5, y: 4 }, // fountain center
      { x: 4, y: 6 }, { x: 6, y: 6 }, // benches
      { x: 0, y: 0 }, { x: 10, y: 0 }, // barrels
      { x: 0, y: 9 }, { x: 10, y: 9 }, // crates
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
    position: { x: 10, y: 4 },
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
    position: { x: 14, y: 6 },
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
  {
    id: 'ivelle',
    name: 'Ivelle',
    species: 'Crane',
    baseCostume: 'Mourning Widow',
    description: 'An older crane in dark mourning clothes, her long beak tilted with sharp-witted precision. A golden brooch glints at her collar.',
    spriteUrl: missImg,
    characterParts: IVELLE_PARTS,
    position: { x: 4, y: 4 },
    info: {
      secret: 'She bought her first designs from an underground merchant.',
      darkSecret: 'She performs cemetery rituals to commune with her late husband Oryn.',
      rumor: 'She performs cemetery rituals.',
      falseRumor: 'She switches newborns.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Mind the pins on the floor. I'm working on a commission for the festival. What do you need?",
          options: [
            { text: "I'm looking for the tailor's apprentice.", nextNodeId: 'apprentice' },
            { text: "Beautiful fabrics you have here.", nextNodeId: 'fabrics' },
          ],
        },
        {
          id: 'apprentice',
          text: "My apprentice? Young Theo, I call him. Quiet lad, keeps his head down. Arrived a few months ago—no family name, no references. But his stitching is impeccable.",
          options: [
            { text: "Does he seem familiar to you?", nextNodeId: 'familiar', condition: (s) => s.flags.has('king_task_docks') },
            { text: "I see. Thank you.", nextNodeId: 'thanks' },
          ],
        },
        {
          id: 'familiar',
          text: "...Now that you mention it, there is something about his bearing. Regal, almost. But that's ridiculous. He's just a boy with nimble fingers.",
          options: [{ text: "Interesting." }],
        },
        {
          id: 'fabrics',
          text: "I've collected them over forty years. Some from merchants, some from... less conventional sources. A tailor must be resourceful.",
          options: [{ text: "I can see that." }],
        },
        {
          id: 'thanks',
          text: "Of course. Now, if you'll excuse me, this hem won't finish itself.",
          options: [{ text: "I'll let you work." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The afternoon light is best for detail work. Oryn always said that. My late husband, rest his soul.",
          options: [{ text: "He sounds wise." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "I should close up. But the cemetery is so quiet at night. Perfect for... reflection.",
          options: [{ text: "Take care, Ivelle." }],
        },
      ],
    },
  },
  {
    id: 'prince_lio',
    name: 'Lio',
    species: 'Lion',
    baseCostume: "Tailor's Apprentice",
    description: 'A young lion with a gentle mane, dressed in a modest green vest with a measuring tape draped over one shoulder. His eyes are kind but distracted.',
    spriteUrl: mayorImg,
    characterParts: PRINCE_LIO_PARTS,
    position: { x: 6, y: 6 },
    info: {
      secret: 'He plans to propose to Bramm the baker.',
      darkSecret: "He's been working for the tailor in disguise to escape royal life.",
      rumor: "He's been working for the tailor in disguise.",
      falseRumor: 'He parties off-island.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Oh! A customer? I mean—welcome to the shop. I'm Theo. The apprentice. Just the apprentice.",
          options: [
            { text: "You look a lot like the King.", nextNodeId: 'king_resemblance', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Do you have any costumes for sale?", nextNodeId: 'costumes' },
          ],
        },
        {
          id: 'king_resemblance',
          text: "I—what? No, no. Lots of lions have golden manes. That's just... lion genetics. Please don't tell anyone you said that.",
          options: [
            { text: "Your secret is safe with me.", action: (s) => s.flags.add('lio_secret') },
            { text: "The King is looking for you.", nextNodeId: 'king_looking' },
          ],
        },
        {
          id: 'king_looking',
          text: "He's not—he doesn't know I'm here. Please. I just want to learn a trade and live a quiet life. With... someone special.",
          options: [{ text: "Bramm?", action: (s) => s.flags.add('lio_bramm_hint') }],
        },
        {
          id: 'costumes',
          text: "Ivelle handles commissions. I just do alterations. But between you and me, I made Bramm's festival apron. Don't tell Ivelle.",
          options: [{ text: "It's a nice apron." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "I need to run an errand to the bakery soon. Bramm's order is ready, and... well, I like delivering it personally.",
          options: [{ text: "Say hi to him for me." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The shop's closing. I love this time—when the town is quiet and I'm just... Lio. Not a prince. Just me.",
          options: [{ text: "Sounds freeing." }],
        },
      ],
    },
  },
  {
    id: 'sheriff_halden',
    name: 'Sheriff Halden',
    species: 'Dog',
    baseCostume: 'Sheriff',
    description: 'A tired-looking hound in a well-worn sheriff uniform, his floppy ears poking from under a wide-brimmed hat. Brilliant eyes hide behind heavy lids.',
    spriteUrl: officerImg,
    characterParts: SHERIFF_HALDEN_PARTS,
    position: { x: 4, y: 4 },
    info: {
      secret: 'He faked his credentials to get the sheriff position.',
      darkSecret: 'He lets criminals out early because he believes in second chances, not because of the law.',
      rumor: 'He lets criminals out early.',
      falseRumor: "He collects prisoners' hair.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Sheriff Halden. Yes, I'm the real one. You've probably met my deputy Fennel out there. Good kid. Confused, but good.",
          options: [
            { text: "I'm the new Constable.", nextNodeId: 'constable', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "Busy morning, Sheriff?", nextNodeId: 'busy' },
          ],
        },
        {
          id: 'constable',
          text: "Another constable? I didn't authorize—well, never mind. The King does what the King wants. What has he got you doing?",
          options: [
            { text: "Investigating the docks.", nextNodeId: 'docks_info', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Just patrolling.", nextNodeId: 'patrol' },
          ],
        },
        {
          id: 'docks_info',
          text: "The docks, eh? Dagan runs a tight operation. Too tight, if you ask me. I've seen crates that don't match any manifest. But when I asked the King, he told me to drop it.",
          options: [
            { text: "The King told you to drop it?", action: (s) => s.flags.add('halden_suspicious') },
            { text: "I'll be careful.", nextNodeId: 'careful' },
          ],
        },
        {
          id: 'patrol',
          text: "Good. Keep Fennel out of trouble if you can. And don't touch the jail cells—the locks are temperamental.",
          options: [{ text: "Understood, Sheriff." }],
        },
        {
          id: 'busy',
          text: "Always busy. My daughter Elia keeps telling me to retire, but who'd replace me? Fennel? The boy can barely remember which end of the badge faces up.",
          options: [{ text: "He tries his best." }],
        },
        {
          id: 'careful',
          text: "You'd better be. This island has more secrets than it has sand.",
          options: [{ text: "Noted." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon already? I've been staring at this paperwork so long the words are swimming. Elia says I need glasses.",
          options: [{ text: "Maybe she's right." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night watch. The prisoners are quiet—I let Tallo and Lerr play cards after sundown. Don't tell anyone.",
          options: [{ text: "Your secret is safe." }],
        },
      ],
    },
  },
  {
    id: 'mallow',
    name: 'Mallow',
    species: 'Cow',
    baseCostume: 'Barista',
    description: 'A calm, nurturing cow in a brown apron with a green coffee-stained front. Black patches dot her white face, and small curved horns frame warm eyes.',
    spriteUrl: saltyImg,
    characterParts: MALLOW_PARTS,
    position: { x: 4, y: 4 },
    info: {
      secret: 'She waters down the premium beans to stretch supply.',
      darkSecret: 'She overheard the King discussing secret shipments but says nothing to protect her business.',
      rumor: 'Best coffee on the island.',
      falseRumor: 'She overcharges tourists.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Morning, dear. Sit anywhere you like. First cup is on the house during festival week.",
          options: [
            { text: "What's the talk of the town?", nextNodeId: 'gossip' },
            { text: "Just coffee, please.", nextNodeId: 'coffee' },
          ],
        },
        {
          id: 'gossip',
          text: "Oh, where to begin? Bramm and that apprentice boy from the tailor shop have been inseparable. The King's been unusually tense. And Fennel gave a warning to a lamppost yesterday.",
          options: [
            { text: "What about the docks?", nextNodeId: 'docks_gossip', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Sounds like a normal day.", nextNodeId: 'normal' },
          ],
        },
        {
          id: 'docks_gossip',
          text: "The docks? Dagan's been working double shifts. His wife Sera comes in worried every morning. Says he barely sleeps. Whatever he's moving, it's got the King's attention.",
          options: [{ text: "Interesting. Thank you, Mallow." }],
        },
        {
          id: 'coffee',
          text: "One house special coming up. I use a secret blend—well, it's not that secret. Mostly it's just strong.",
          options: [{ text: "Perfect." }],
        },
        {
          id: 'normal',
          text: "Normal for Kraed Maas, maybe. This island's version of normal would make mainland folk faint.",
          options: [{ text: "Fair point." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon rush! Everyone needs a pick-me-up. Even the King sends his maid Elara for a cup.",
          options: [{ text: "Popular place." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Last call. The night crowd is different—quieter, more honest. People tell me things over late coffee they'd never say in daylight.",
          options: [{ text: "What kind of things?" }],
        },
      ],
    },
  },
];
