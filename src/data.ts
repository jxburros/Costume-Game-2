import { Item, NPC, Location, Building } from './types';
import { KING_ARCTOS_PARTS, FENNEL_PARTS, BRAMM_PARTS, DAGAN_PARTS, IVELLE_PARTS, PRINCE_LIO_PARTS, SHERIFF_HALDEN_PARTS, MALLOW_PARTS, CONSTABLE_COSTUME_PARTS, BAKER_COSTUME_PARTS, GHOST_COSTUME_PARTS, MASK_COSTUME_PARTS, ORYN_PARTS, ELARA_PARTS, THORNE_PARTS, TALLO_PARTS, LERR_PARTS, ELIA_PARTS, ORLA_PARTS, SERA_PARTS, RESSA_PARTS, CORIN_PARTS, FENN_PARTS, ELDA_PARTS, BRAMWELL_PARTS, VAREK_PARTS, NOX_PARTS, SLINK_PARTS, ALDER_PARTS, BORO_PARTS, MARIS_PARTS, NARA_PARTS, VELA_PARTS, DR_PALOMA_PARTS } from './characterParts';

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
      { locationId: 'market', x: 4, y: 16, label: 'Market Street' },
      { locationId: 'cemetery', x: 17, y: 16, label: 'Cemetery Path' },
      { locationId: 'school', x: 12, y: 14, label: 'School & Library' },
      { locationId: 'hospital', x: 9, y: 14, label: 'Hospital' },
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
    npcs: ['dagan', 'sera'],
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
    npcs: ['sheriff_halden', 'tallo', 'lerr', 'elia'],
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
    npcs: ['mallow', 'orla'],
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
    npcs: ['elara', 'thorne'],
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
  {
    id: 'cemetery',
    name: 'Kraed Cemetery',
    description: 'A quiet hillside cemetery draped in mist and moonflowers. Old stones lean gently in the soft earth, and the air smells of rain and rosemary.',
    npcs: ['oryn'],
    connections: [
      { locationId: 'town_square', x: 5, y: 9, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 10, height: 10 },
    decorations: [
      { id: 'flower_1', type: 'flower', position: { x: 2, y: 2 } },
      { id: 'flower_2', type: 'flower', position: { x: 7, y: 2 } },
      { id: 'flower_3', type: 'flower', position: { x: 2, y: 6 } },
      { id: 'flower_4', type: 'flower', position: { x: 7, y: 6 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 5, y: 1 } },
      { id: 'tree_1', type: 'tree', position: { x: 0, y: 0 } },
      { id: 'tree_2', type: 'tree', position: { x: 9, y: 0 } },
      { id: 'tree_3', type: 'tree', position: { x: 0, y: 9 } },
      { id: 'tree_4', type: 'tree', position: { x: 9, y: 9 } },
      { id: 'bench_1', type: 'bench', position: { x: 3, y: 7 } },
      { id: 'bench_2', type: 'bench', position: { x: 6, y: 7 } },
    ],
    obstacles: [
      { x: 0, y: 0 }, { x: 9, y: 0 }, { x: 0, y: 9 }, { x: 9, y: 9 },
      { x: 5, y: 1 },
      { x: 3, y: 7 }, { x: 6, y: 7 },
    ],
  },
  {
    id: 'market',
    name: 'Market Street',
    description: 'A lively cobbled lane crammed with colorful stalls, curious wares, and the smell of street food. Flags and bunting sway between shop signs.',
    npcs: ['ressa', 'corin', 'elda', 'bramwell', 'varek', 'nox', 'slink'],
    connections: [
      { locationId: 'town_square', x: 9, y: 9, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 18, height: 10 },
    decorations: [
      { id: 'crate_1', type: 'crate', position: { x: 1, y: 1 } },
      { id: 'crate_2', type: 'crate', position: { x: 1, y: 2 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 16, y: 1 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 16, y: 2 } },
      { id: 'crate_3', type: 'crate', position: { x: 5, y: 1 } },
      { id: 'crate_4', type: 'crate', position: { x: 9, y: 1 } },
      { id: 'crate_5', type: 'crate', position: { x: 13, y: 1 } },
      { id: 'bench_1', type: 'bench', position: { x: 4, y: 5 } },
      { id: 'bench_2', type: 'bench', position: { x: 8, y: 5 } },
      { id: 'bench_3', type: 'bench', position: { x: 12, y: 5 } },
      { id: 'flower_1', type: 'flower', position: { x: 0, y: 4 } },
      { id: 'flower_2', type: 'flower', position: { x: 17, y: 4 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 0, y: 1 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 17, y: 1 } },
    ],
    obstacles: [
      { x: 1, y: 1 }, { x: 1, y: 2 },
      { x: 16, y: 1 }, { x: 16, y: 2 },
      { x: 5, y: 1 }, { x: 9, y: 1 }, { x: 13, y: 1 },
      { x: 4, y: 5 }, { x: 8, y: 5 }, { x: 12, y: 5 },
      { x: 0, y: 1 }, { x: 17, y: 1 },
    ],
  },
  {
    id: 'school',
    name: 'Kraed Academy',
    description: 'A tidy schoolhouse with chalk-dusted floors and desks that have seen a hundred years of carved initials. The library annex smells of old paper and cedar.',
    npcs: ['alder', 'boro', 'fenn', 'maris'],
    connections: [
      { locationId: 'town_square', x: 7, y: 9, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 14, height: 10 },
    decorations: [
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 0 } },
      { id: 'crate_2', type: 'crate', position: { x: 13, y: 0 } },
      { id: 'bench_1', type: 'bench', position: { x: 2, y: 5 } },
      { id: 'bench_2', type: 'bench', position: { x: 5, y: 5 } },
      { id: 'bench_3', type: 'bench', position: { x: 8, y: 5 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 13, y: 7 } },
      { id: 'flower_1', type: 'flower', position: { x: 1, y: 8 } },
      { id: 'flower_2', type: 'flower', position: { x: 12, y: 8 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 7, y: 0 } },
    ],
    obstacles: [
      { x: 0, y: 0 }, { x: 13, y: 0 },
      { x: 2, y: 5 }, { x: 5, y: 5 }, { x: 8, y: 5 },
      { x: 13, y: 7 },
      { x: 7, y: 0 },
    ],
  },
  {
    id: 'hospital',
    name: 'Kraed Medical Clinic',
    description: 'A clean whitewashed clinic humming with quiet efficiency. Shelves of remedies line the walls, and the faint smell of lavender and antiseptic mingles in the air.',
    npcs: ['nara', 'vela', 'dr_paloma'],
    connections: [
      { locationId: 'town_square', x: 5, y: 11, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 10, height: 12 },
    decorations: [
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 0 } },
      { id: 'crate_2', type: 'crate', position: { x: 9, y: 0 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 0, y: 8 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 9, y: 8 } },
      { id: 'bench_1', type: 'bench', position: { x: 1, y: 7 } },
      { id: 'bench_2', type: 'bench', position: { x: 7, y: 7 } },
      { id: 'flower_1', type: 'flower', position: { x: 3, y: 1 } },
      { id: 'flower_2', type: 'flower', position: { x: 6, y: 1 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 5, y: 0 } },
    ],
    obstacles: [
      { x: 0, y: 0 }, { x: 9, y: 0 },
      { x: 0, y: 8 }, { x: 9, y: 8 },
      { x: 1, y: 7 }, { x: 7, y: 7 },
      { x: 5, y: 0 },
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
  {
    id: 'oryn',
    name: 'Oryn',
    species: 'Crane',
    baseCostume: 'Ghost',
    description: 'A translucent crane who seems to shimmer in and out of focus, dressed in tattered mourning clothes. His voice is barely a whisper, and flowers bloom where he walks.',
    spriteUrl: '',
    characterParts: ORYN_PARTS,
    position: { x: 5, y: 5 },
    info: {
      secret: "He is Ivelle's deceased husband, somehow anchored to the cemetery.",
      darkSecret: "He knows about the King's secret shipments and has tried to warn the living, unsuccessfully.",
      rumor: 'Some say they see a crane-shaped mist near the old graves at night.',
      falseRumor: 'He is a festival performer in ghost makeup.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "...You can see me. Most people... look right through. I am glad. I have been waiting.",
          options: [
            { text: "Waiting for what?", nextNodeId: 'waiting' },
            { text: "Are you... a ghost?", nextNodeId: 'ghost' },
          ],
        },
        {
          id: 'waiting',
          text: "For someone to listen. Ivelle... she comes here at night. She speaks to me, but she cannot hear me speak back. Tell her... Oryn says the brooch was always hers.",
          options: [{ text: "I'll tell her.", action: (s) => s.flags.add('oryn_message') }],
        },
        {
          id: 'ghost',
          text: "That word is so small for what I am. I am a memory that forgot to stop. The King's men put something in the harbor. I saw it before I... faded.",
          options: [{ text: "What did you see?", action: (s) => s.flags.add('oryn_harbor_secret') }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "The afternoon sun makes it hard to... cohere. Ask me what you need to know before I scatter.",
          options: [{ text: "What happened to you?", nextNodeId: 'happened' }],
        },
        {
          id: 'happened',
          text: "I was a tailor, like Ivelle. I saw things I should not have seen. Then one morning... I did not wake up. The island keeps its secrets well.",
          options: [{ text: "I'll find out what happened." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The night is kind to those like me. Ivelle will come soon. Please... give her my message. She has been so alone.",
          options: [{ text: "I will. Rest easy, Oryn." }],
        },
      ],
    },
  },
  {
    id: 'elara',
    name: 'Elara',
    species: 'Peacock',
    baseCostume: 'Royal Maid',
    description: "A poised peacock in a black maid's dress, her iridescent tail-feather crest pinned back under a formal cap. Her golden eyes miss nothing.",
    spriteUrl: '',
    characterParts: ELARA_PARTS,
    position: { x: 3, y: 4 },
    info: {
      secret: "She is the King's most trusted informant among the household staff.",
      darkSecret: "She has been secretly documenting the King's crimes, hoping to one day present the evidence.",
      rumor: 'She knows every secret in the castle.',
      falseRumor: "She is the King's distant cousin.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "This is a restricted area. Unless you have business with the King, I suggest you explain yourself quickly.",
          options: [
            { text: "I'm the new Constable.", nextNodeId: 'constable', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "I'm just visiting the grounds.", nextNodeId: 'visit' },
          ],
        },
        {
          id: 'constable',
          text: "A constable. The King mentioned he'd dispatched someone. Very well. I'm Elara. If you're investigating the docks, be careful—the King has ears everywhere. Including mine.",
          options: [
            { text: "Whose side are you on?", nextNodeId: 'sides' },
            { text: "I'll keep that in mind.", action: (s) => s.flags.add('elara_ally') },
          ],
        },
        {
          id: 'sides',
          text: "The right one. Eventually. For now, I serve and I watch. Some of us work slowly. Come back tonight if you want to talk freely.",
          options: [{ text: "I'll do that." }],
        },
        {
          id: 'visit',
          text: "Then visit quietly and touch nothing. The King is particular about his grounds. The fountain was moved three times before he was satisfied.",
          options: [{ text: "A demanding employer." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Mallow sends his afternoon coffee for the King every day. Today it arrived twenty minutes late. The King noticed. I am the one who has to smooth it over.",
          options: [{ text: "That sounds exhausting." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Good. You came. I have a document. I can't give it to you yet, but I need you to know it exists. When the time comes—you'll know.",
          options: [{ text: "I trust you, Elara.", action: (s) => s.flags.add('elara_document_hint') }],
        },
      ],
    },
  },
  {
    id: 'thorne',
    name: 'Thorne',
    species: 'Kangaroo',
    baseCostume: 'Royal Guard',
    description: 'A sturdy kangaroo in deep red guard armor, a ceremonial spear resting at his shoulder. His posture is immaculate; his expression is permanently neutral.',
    spriteUrl: '',
    characterParts: THORNE_PARTS,
    position: { x: 7, y: 4 },
    info: {
      secret: 'He was born off-island and holds no real loyalty to the King.',
      darkSecret: "He has been secretly helping Elara document the King's abuses, carrying messages for her.",
      rumor: 'He never sleeps. He just... stands there.',
      falseRumor: 'He is actually a statue enchanted to look real.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Halt. State your purpose.",
          options: [
            { text: "Constable business.", nextNodeId: 'constable', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "I'm a visitor.", nextNodeId: 'visitor' },
          ],
        },
        {
          id: 'constable',
          text: "Constable. Alright. I know why the King hired you. If your investigation leads somewhere... uncomfortable, Elara can help. Don't make a scene.",
          options: [{ text: "Understood, Thorne." }],
        },
        {
          id: 'visitor',
          text: "Visitors are permitted in the courtyard from morning until the third bell. Do not enter the east wing. Do not touch the fountain. Do not feed the fish.",
          options: [{ text: "There are fish?" }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "I've been standing here for four hours. The ceremonial part of this job was oversold.",
          options: [{ text: "How much longer?" }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night patrol. Quieter. I prefer it. If you see anything unusual near the east gate, don't report it to the King. Report it to me.",
          options: [{ text: "Will do.", action: (s) => s.flags.add('thorne_trust') }],
        },
      ],
    },
  },
  {
    id: 'tallo',
    name: 'Tallo',
    species: 'Giraffe',
    baseCostume: 'Prisoner',
    description: 'A lanky giraffe in black-and-white prison stripes, sitting on a cell bench with an air of theatrical suffering. He speaks in long, winding sentences that end up nowhere.',
    spriteUrl: '',
    characterParts: TALLO_PARTS,
    position: { x: 2, y: 7 },
    info: {
      secret: 'He is innocent of the crime he was jailed for.',
      darkSecret: 'He was framed by someone working for the King to keep a secret shipment quiet.',
      rumor: 'He and Lerr play cards every night.',
      falseRumor: 'He bit a constable.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Oh, a visitor! Lerr, there's a visitor. We haven't had one since the festival started. Are you here to free us? No, wait—you'd need a key for that.",
          options: [
            { text: "What are you in for?", nextNodeId: 'crime' },
            { text: "Quiet in there.", nextNodeId: 'quiet' },
          ],
        },
        {
          id: 'crime',
          text: "Trespassing. Apparently I was somewhere I 'shouldn't have been.' Which, between us, was the warehouse docks. I saw something being unloaded. Then—whoosh—suddenly I'm trespassing.",
          options: [
            { text: "What did you see?", nextNodeId: 'saw', condition: (s) => s.flags.has('king_task_docks') },
            { text: "That does seem suspicious.", nextNodeId: 'suspicious' },
          ],
        },
        {
          id: 'saw',
          text: "Crates. Big ones. With the royal seal, but also... another mark. A circle with a line through it. I've never seen it before. Dagan was there. He looked scared.",
          options: [{ text: "Thank you, Tallo.", action: (s) => s.flags.add('tallo_witness') }],
        },
        {
          id: 'suspicious',
          text: "Lerr thinks so too. But the Sheriff seems decent, at least. He lets us have dinner early.",
          options: [{ text: "Hang tight." }],
        },
        {
          id: 'quiet',
          text: "Right, right. Sorry. It's just very boring in here. Lerr's been humming the same song for three days.",
          options: [{ text: "What song?" }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon already? Time moves differently when you're in a box. Lerr's trying to teach himself juggling with his shoes. It's going badly.",
          options: [{ text: "Sounds entertaining." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Card time! The Sheriff leaves us a deck. Lerr cheats but he's terrible at it, so it evens out.",
          options: [{ text: "Goodnight, Tallo." }],
        },
      ],
    },
  },
  {
    id: 'lerr',
    name: 'Lerr',
    species: 'Giraffe',
    baseCostume: 'Prisoner',
    description: 'A slightly shorter giraffe than Tallo, in matching stripes, perpetually humming a tune nobody else recognizes. He has a calm, dreamy quality that makes prison seem optional.',
    spriteUrl: '',
    characterParts: LERR_PARTS,
    position: { x: 6, y: 7 },
    info: {
      secret: 'He is innocent too, but enjoys the free meals and low expectations.',
      darkSecret: 'He actually overheard far more than Tallo did, including names, and is quietly terrified.',
      rumor: 'He hums in his sleep.',
      falseRumor: 'He escaped once and came back because he left his hat.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "*humming* Oh! Hello. Don't mind me. I'm just composing a song about incarceration. It has a very cheerful bridge.",
          options: [
            { text: "Do you know anything about the docks?", nextNodeId: 'docks', condition: (s) => s.flags.has('king_task_docks') },
            { text: "What's the song called?", nextNodeId: 'song' },
          ],
        },
        {
          id: 'docks',
          text: "...I heard more than Tallo did. I heard a name. I'm not saying it out loud—these walls have ears. But if you figure out who in the castle is pulling strings, I'll confirm it.",
          options: [{ text: "I'll be careful.", action: (s) => s.flags.add('lerr_knows_name') }],
        },
        {
          id: 'song',
          text: "'The Giraffe Who Saw Too Much.' It's a working title. The chorus is still in progress.",
          options: [{ text: "Keep working on it." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "*still humming* Oh, you're back. I added a verse. Would you like to hear it?",
          options: [{ text: "Maybe later." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "The Sheriff lets us keep the lamp on for an extra hour. He's a good sort, for a law enforcement type.",
          options: [{ text: "Sleep well, Lerr." }],
        },
      ],
    },
  },
  {
    id: 'elia',
    name: 'Elia',
    species: 'Dog',
    baseCostume: 'Scholar',
    description: "A young, bright-eyed hound in a student's gown, spectacles perched on her nose, carrying a stack of books that's taller than common sense dictates.",
    spriteUrl: '',
    characterParts: ELIA_PARTS,
    position: { x: 4, y: 2 },
    info: {
      secret: 'She is writing her thesis on legal loopholes in Kraed Maas municipal law.',
      darkSecret: "She has discovered three separate clauses that would technically invalidate the King's authority—and has told no one.",
      rumor: "She's going to be a lawyer or a revolutionary. Or both.",
      falseRumor: "She's failing her studies.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Oh! Excuse me—I'm visiting my father. He works here. Don't mind the books, I was studying in the waiting area.",
          options: [
            { text: "Your father is Sheriff Halden?", nextNodeId: 'halden_daughter' },
            { text: "What are you studying?", nextNodeId: 'studies' },
          ],
        },
        {
          id: 'halden_daughter',
          text: "He is! He worries I spend too much time studying and not enough time sleeping. He's not wrong. But the law is fascinating—especially the parts the King would rather nobody read.",
          options: [
            { text: "What do you mean?", nextNodeId: 'legal', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Your father seems proud of you.", nextNodeId: 'proud' },
          ],
        },
        {
          id: 'legal',
          text: "There are old maritime statutes. Anything unloaded on the eastern dock between the third and fifth bells is legally subject to public customs review. If someone's been avoiding that window... that's evidence.",
          options: [{ text: "You're brilliant, Elia.", action: (s) => s.flags.add('elia_legal_clue') }],
        },
        {
          id: 'proud',
          text: "He says so, but then he also says I remind him of his deputy and he means it as a compliment. I'm not sure how to feel about that.",
          options: [{ text: "It's sweet." }],
        },
        {
          id: 'studies',
          text: "Municipal law, mostly. It's not glamorous, but power structures are built on boring paperwork. I like knowing how the machine works.",
          options: [{ text: "That's a useful skill." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "I was reading about harbor law again. Did you know the old port code was never formally repealed? Legally, the docks still answer to a Harbormaster who hasn't been appointed in forty years.",
          options: [{ text: "Interesting loophole." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Staying late to see my father before he starts his night rounds. He always pretends he doesn't want company but saves me half his supper every time.",
          options: [{ text: "Sweet." }],
        },
      ],
    },
  },
  {
    id: 'orla',
    name: 'Orla',
    species: 'Owl',
    baseCostume: 'Life Coach',
    description: 'A serene owl with enormous amber eyes and a voice like warm honey, dressed in flowing professional purple. She nods at everything you say in a way that feels both validating and slightly unnerving.',
    spriteUrl: '',
    characterParts: ORLA_PARTS,
    position: { x: 6, y: 6 },
    info: {
      secret: "She charges double for festival week and doesn't tell clients.",
      darkSecret: "She is actually a licensed investigator who moved here to get close to the King's inner circle.",
      rumor: 'She knows things about everyone.',
      falseRumor: 'She hypnotizes people into leaving her generous tips.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Welcome. Sit. Breathe. You look like someone carrying an unusually interesting weight. What brings you here today?",
          options: [
            { text: "Just getting coffee.", nextNodeId: 'coffee' },
            { text: "Actually, I am a bit overwhelmed.", nextNodeId: 'overwhelmed' },
          ],
        },
        {
          id: 'coffee',
          text: "Mmm. And yet you chose to sit near me rather than the counter. Interesting. The festival has a way of bringing things to the surface, doesn't it?",
          options: [{ text: "You're very perceptive." }],
        },
        {
          id: 'overwhelmed',
          text: "Of course you are. You're investigating something dangerous on a strange island during a festival designed to obscure identity. That's a lot. Let's narrow it down. Who do you trust least?",
          options: [
            { text: "The King.", nextNodeId: 'trust_king', condition: (s) => s.flags.has('king_task_docks') },
            { text: "I'm not sure yet.", nextNodeId: 'trust_unsure' },
          ],
        },
        {
          id: 'trust_king',
          text: "Good instinct. He projects authority to avoid scrutiny. Whatever he hired you to find—you'll find more than he wants you to. Be ready for that.",
          options: [{ text: "Are you speaking from experience?", action: (s) => s.flags.add('orla_investigator_hint') }],
        },
        {
          id: 'trust_unsure',
          text: "That's honest. Start with the people who seem most comfortable. Comfort on this island is usually borrowed.",
          options: [{ text: "Sound advice." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "I've had six clients today. Four of them cried. The festival does that—all these disguises, and then at some point people just want to be seen.",
          options: [{ text: "Does it help them?" }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Late-night sessions are my specialty. Less pretense after dark. If you've learned something heavy today, I have excellent listening skills and a very comfortable chair.",
          options: [{ text: "Maybe I'll take you up on that." }],
        },
      ],
    },
  },
  {
    id: 'sera',
    name: 'Sera',
    species: 'Tiger',
    baseCostume: 'Weaver',
    description: 'A graceful tiger in a purple weaving smock, her orange-gold stripes bright against the dock mist. She carries spools of thread and a quiet, steady worry behind her eyes.',
    spriteUrl: '',
    characterParts: SERA_PARTS,
    position: { x: 2, y: 5 },
    info: {
      secret: 'She is the only person Dagan confides in fully.',
      darkSecret: "She knows exactly what's in the crates and has been warned by Dagan never to speak of it.",
      rumor: 'She makes the finest festival costumes on the island.',
      falseRumor: 'She and Dagan are secretly separated.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "You're not a dock worker. What do you need?",
          options: [
            { text: "I'm investigating the late shipments.", nextNodeId: 'investigate', condition: (s) => s.flags.has('king_task_docks') },
            { text: "I heard you make costumes.", nextNodeId: 'costumes' },
          ],
        },
        {
          id: 'investigate',
          text: "Dagan mentioned someone might come asking. Look—he's not a bad man. He's scared. Whatever's in those crates, it's not his idea. Please be... gentle with him.",
          options: [
            { text: "I'll be fair.", action: (s) => s.flags.add('sera_plea') },
            { text: "I just need the truth.", nextNodeId: 'truth' },
          ],
        },
        {
          id: 'truth',
          text: "The truth is Dagan got caught between two people with power and no options. That's where most bad choices come from. The King made him an offer he couldn't refuse. Years ago.",
          options: [{ text: "Thank you, Sera.", action: (s) => s.flags.add('dagan_backstory') }],
        },
        {
          id: 'costumes',
          text: "I do. Festival week is my busiest time. I have three commissions unfinished and two children at home. But yes—I make costumes.",
          options: [{ text: "You must be talented." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Dagan came home briefly to eat. He looked tired. I hate that I can't help more. But the children—Nyra and Kiri—they need this job to keep.",
          options: [{ text: "I'll keep your family safe if I can." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "He's working the night shift again. Third in a row. I brought him food he won't eat until it's cold. Marriage is mostly this, I think. Showing up with cold soup.",
          options: [{ text: "It means a lot, Sera." }],
        },
      ],
    },
  },
  {
    id: 'ressa',
    name: 'Ressa',
    species: 'Fox',
    baseCostume: 'Merchant',
    description: "A sharp-nosed fox in a leather merchant's vest, her stall piled with festival trinkets and curious oddities. Her prices are flexible; her smile is not.",
    spriteUrl: '',
    characterParts: RESSA_PARTS,
    position: { x: 3, y: 4 },
    info: {
      secret: "Her rarest items are not for sale—they're stolen for personal collection.",
      darkSecret: "She is a fence who moves goods for clients she'd rather not name.",
      rumor: 'She once sold a map to a buried treasure. Turned out to be a recipe for pie.',
      falseRumor: 'She has never been to the mainland.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Step right up! Festival week special: buy two curiosities, get a third that may or may not be what I say it is. Fair warning included.",
          options: [
            { text: "Have you seen any unusual crates around?", nextNodeId: 'crates', condition: (s) => s.flags.has('king_task_docks') },
            { text: "What do you sell, exactly?", nextNodeId: 'goods' },
          ],
        },
        {
          id: 'crates',
          text: "Unusual crates. Funny you should ask. Corin—my courier—mentioned something odd at the docks. Said the manifest numbers didn't match the boxes. Wanted me to buy them. I passed.",
          options: [{ text: "Smart of you.", action: (s) => s.flags.add('ressa_docks_hint') }],
        },
        {
          id: 'goods',
          text: "Everything and nothing. Relics, remedies, rare fabrics, slightly suspicious documents. If it exists and someone wants to find it, I've probably had it on this table.",
          options: [{ text: "You're quite the operator." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon rush! Everyone wants costumes last minute. Varek next door is selling the same thing at triple the price. The wolf has no shame and excellent margins.",
          options: [{ text: "Competitive street." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Packing up for the night. Best business of the day happens in the last hour—people get impulsive after dark.",
          options: [{ text: "Goodnight, Ressa." }],
        },
      ],
    },
  },
  {
    id: 'corin',
    name: 'Corin',
    species: 'Fox',
    baseCostume: 'Courier',
    description: "A wiry young fox in a battered courier's jacket, perpetually out of breath and carrying too many parcels. His ears rotate independently like antenna.",
    spriteUrl: '',
    characterParts: CORIN_PARTS,
    position: { x: 7, y: 4 },
    info: {
      secret: 'He reads every message he delivers.',
      darkSecret: 'He has been retaining copies of certain royal correspondence for insurance.',
      rumor: 'He knows every shortcut on the island.',
      falseRumor: 'He once delivered a package to himself by mistake.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "—can't stop—six deliveries—*panting*—have you seen a blue house near the harbor? Never mind, I'll figure it out—",
          options: [
            { text: "I need information about the docks.", nextNodeId: 'docks', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Slow down a second.", nextNodeId: 'slow' },
          ],
        },
        {
          id: 'docks',
          text: "Docks? *stops* Yeah, I deliver there. Last week I had a package for Dagan but the address was wrong—royal seal, wrong dock number. I held it for an hour. Long enough to see the other couriers avoid the east end entirely.",
          options: [{ text: "The east end specifically?", action: (s) => s.flags.add('corin_east_dock') }],
        },
        {
          id: 'slow',
          text: "*pants* I'm fine. I thrive under pressure. My mother says I've been running since I was born. Literally—I fell out running and didn't stop.",
          options: [{ text: "That tracks." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Twelve deliveries done! Two left. One of them is to the castle and I've been putting it off because last time they made me wait outside for two hours.",
          options: [{ text: "Good luck with that one." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Finally done. *collapses on crate* Do you know what I've earned today? I could buy a very small fish.",
          options: [{ text: "The courier life." }],
        },
      ],
    },
  },
  {
    id: 'elda',
    name: 'Elda',
    species: 'Sheep',
    baseCostume: 'Gift Shop Owner',
    description: 'A round, cheerful sheep in a bright red blouse, her woolly fleece decorated with tiny festival pins. She offers everyone a free button the moment they arrive.',
    spriteUrl: '',
    characterParts: ELDA_PARTS,
    position: { x: 11, y: 4 },
    info: {
      secret: 'She gives steep discounts to anyone who asks her about her grandchildren.',
      darkSecret: 'She and Bramwell are in a decades-long dispute with Varek about the prime market stall location.',
      rumor: 'Her famous festival pins are hand-crafted at midnight.',
      falseRumor: "She is Bramwell's mother, not his wife.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Hello, dear! Here, take a pin! Festival of Disguises pin—limited edition, only five hundred made, so technically everything after the first batch is a lie, but don't tell Bramwell.",
          options: [
            { text: "You and Bramwell run this together?", nextNodeId: 'partnership' },
            { text: "Thank you! What else do you sell?", nextNodeId: 'goods' },
          ],
        },
        {
          id: 'partnership',
          text: "Forty-two years. He handles the inventory, I handle the customers. He says I give too much away. He's right, but it brings people back, so who's winning, really?",
          options: [{ text: "You, clearly." }],
        },
        {
          id: 'goods',
          text: "Festival keepsakes! Pins, scarves, carved trinkets, little bottles of island honey. Varek sells the same things for twice the price. Don't buy from Varek.",
          options: [{ text: "Duly noted." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "We've nearly sold out of the honey! I told Bramwell to order more. He said 'the current stock is sufficient.' He says that every year. Every year he's wrong.",
          options: [{ text: "That's a time-honored tradition." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Last few hours! Everything's marked down. Bramwell will be horrified, but festivals should end with empty shelves and full hearts. That's my philosophy.",
          options: [{ text: "A lovely way to think about it." }],
        },
      ],
    },
  },
  {
    id: 'bramwell',
    name: 'Bramwell',
    species: 'Sheep',
    baseCostume: 'Gift Shop Owner',
    description: "A stocky sheep in a sensible green shopkeeper's apron, annotating a clipboard with the focused energy of someone who considers inventory management a sacred duty.",
    spriteUrl: '',
    characterParts: BRAMWELL_PARTS,
    position: { x: 14, y: 4 },
    info: {
      secret: 'He has memorized every item ever sold from this stall since 1987.',
      darkSecret: 'He occasionally gives the best pieces to a stranger in a gray coat who never buys anything—and never explains why.',
      rumor: 'He argued with a seagull once and won.',
      falseRumor: 'He secretly hates festivals.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Welcome. We have forty-seven items remaining as of eight o'clock this morning. Elda has since given away three. So. Forty-four.",
          options: [
            { text: "You track it that carefully?", nextNodeId: 'tracking' },
            { text: "What's your best item?", nextNodeId: 'best' },
          ],
        },
        {
          id: 'tracking',
          text: "Forty-two years of data. I know what sells on rain days, what sells when the King gives a speech, and what sells when someone cries near the stall. That last one is a surprising driver.",
          options: [{ text: "That's impressively specific." }],
        },
        {
          id: 'best',
          text: "Objectively: the carved driftwood compass. Elda says it's the honey. She's wrong. The compass outsells honey four to one on festival mornings.",
          options: [{ text: "I'll consider the compass." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Elda marked down the remaining honey. I have noted my objection. In writing. For the record.",
          options: [{ text: "She'll come around." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "End of day. Eleven items remaining. If we'd followed my pricing strategy, that number would be sixteen. I prefer being right, but she keeps making us successful, so.",
          options: [{ text: "Sounds like a good partnership." }],
        },
      ],
    },
  },
  {
    id: 'varek',
    name: 'Varek',
    species: 'Wolf',
    baseCostume: 'Tourist Shop Owner',
    description: "A broad-shouldered wolf with a hustler's grin and a stall draped in colorful—if slightly gaudy—festival merchandise. His voice carries over the whole market.",
    spriteUrl: '',
    characterParts: VAREK_PARTS,
    position: { x: 3, y: 7 },
    info: {
      secret: 'He charges different prices to different customers with no consistent logic.',
      darkSecret: 'He is funneling part of his profits to a criminal organization off-island.',
      rumor: 'He was once a famous wrestler.',
      falseRumor: 'He has seventeen children. The real number is three.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "WELCOME! Best prices on the island! Don't listen to the sheep—their stuff is fine but this is PREMIUM. Hand-imported. Mostly.",
          options: [
            { text: "What does 'mostly' mean?", nextNodeId: 'mostly' },
            { text: "I'm looking for information, not goods.", nextNodeId: 'info' },
          ],
        },
        {
          id: 'mostly',
          text: "It means some of it was imported and some of it was... locally sourced in creative ways. The important thing is nobody can tell the difference. Aesthetically.",
          options: [{ text: "Bold transparency." }],
        },
        {
          id: 'info',
          text: "Information! Now THAT I have. What kind? Gossip costs less than scandal. Scandal costs less than proof.",
          options: [
            { text: "What do you know about the docks?", nextNodeId: 'docks', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Just looking around.", nextNodeId: 'looking' },
          ],
        },
        {
          id: 'docks',
          text: "The docks. Ha. I had a business opportunity there last spring. Royal shipment, supposedly. Got scared off by a man with no name and a lot of authority. I took the hint.",
          options: [{ text: "Smart move.", action: (s) => s.flags.add('varek_docks_scare') }],
        },
        {
          id: 'looking',
          text: "Just looking is fine! Looking turns to buying ninety percent of the time. You're in the ninety percent. I can feel it.",
          options: [{ text: "We'll see." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "AFTERNOON SPECIAL: everything on the left table, negotiable! The right table is not negotiable. Nox keeps trying to get a discount and I keep saying no.",
          options: [{ text: "Who's Nox?" }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night crowd! Different energy. People buy weird things at night. Last festival someone bought a decorative anchor. Lives inland. Didn't own a boat.",
          options: [{ text: "Mysterious." }],
        },
      ],
    },
  },
  {
    id: 'nox',
    name: 'Nox',
    species: 'Wolf',
    baseCostume: 'Tourist Guide Apprentice',
    description: 'A young wolf in a bright blue student jacket, trying very hard to look confident. He volunteers as a festival guide despite having moved to the island only six months ago.',
    spriteUrl: '',
    characterParts: NOX_PARTS,
    position: { x: 7, y: 7 },
    info: {
      secret: 'He moved to the island specifically because of a rumor about someone like Alex.',
      darkSecret: 'He is desperately lonely and has been using his guide role to meet people.',
      rumor: 'He knows the island surprisingly well for someone new here.',
      falseRumor: "He is Varek's nephew.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Oh! Hi! Do you need a guide? I'm— I mean, I'm volunteering as a festival guide. I know most of the island. Most of it. The parts that matter.",
          options: [
            { text: "Tell me something interesting about Kraed Maas.", nextNodeId: 'island_fact' },
            { text: "Have you noticed anything unusual lately?", nextNodeId: 'unusual' },
          ],
        },
        {
          id: 'island_fact',
          text: "The cemetery has flowers that only bloom at midnight and smell like rain even when it's dry. Also the harbor was built upside down once, realized the error, and they just... flipped the plans. You can still see the seams.",
          options: [{ text: "I like this island already." }],
        },
        {
          id: 'unusual',
          text: "Well. Yes. The crates at the east dock have been moved at weird hours—I saw them from the north path. But also, more personally unusual: someone here has... an interesting energy. That's not a useful lead. Sorry.",
          options: [{ text: "You're doing fine, Nox." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Three tours done! Only one person got mildly lost. I consider that a success. Also I showed a group of tourists the upside-down harbor foundation and one of them cried from beauty, which I didn't expect.",
          options: [{ text: "Art does that sometimes." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night tour is optional but I keep doing them. The island at night is... I don't know. Like it's finally relaxing. I feel more like myself after dark. Is that strange?",
          options: [{ text: "Not strange at all." }],
        },
      ],
    },
  },
  {
    id: 'slink',
    name: 'Slink',
    species: 'Snake',
    baseCostume: 'Street Food Vendor',
    description: "A sleek green snake in a flour-dusted chef's cap and apron, selling street food from a cart with an inventive menu board. His forked tongue tastes the air as he works.",
    spriteUrl: '',
    characterParts: SLINK_PARTS,
    position: { x: 14, y: 7 },
    info: {
      secret: "His secret ingredient is something he'd rather not name.",
      darkSecret: 'He has been paid by someone to watch the market and report on suspicious buyers.',
      rumor: 'His skewers are the best food on the island.',
      falseRumor: 'He once served royalty and was banished for using too much pepper.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "*ths-ths-ths* Good morning! You want a skewer? Everyone wants a skewer. I make seventeen varieties. Today's special has an ingredient I found this morning. It's fine. Probably fine.",
          options: [
            { text: "What's in it?", nextNodeId: 'ingredient' },
            { text: "Have you seen anything suspicious?", nextNodeId: 'suspicious', condition: (s) => s.flags.has('king_task_docks') },
          ],
        },
        {
          id: 'ingredient',
          text: "It's a berry. It grows near the cemetery. Don't worry, I tasted it first. I feel great. Mostly.",
          options: [{ text: "I'll pass on the special." }],
        },
        {
          id: 'suspicious',
          text: "Suspicious. Hmm. Someone bought fifteen skewers this morning and paid with coins I've never seen before. Wrong minting. Not local. The design had that circle-and-line stamp.",
          options: [{ text: "What circle and line?", action: (s) => s.flags.add('slink_foreign_coin') }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Afternoon rush! I've sold forty skewers. Bramwell from the gift stall bought one and said 'adequate.' I consider that high praise from him.",
          options: [{ text: "He's a tough critic." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night special: mystery skewer. I don't even know what's in it anymore. But it glows slightly and everyone who's had one says they slept extremely well.",
          options: [{ text: "Intriguing." }],
        },
      ],
    },
  },
  {
    id: 'alder',
    name: 'Alder',
    species: 'Rabbit',
    baseCostume: 'Schoolteacher',
    description: 'A gentle white-gray rabbit in a deep purple academic robe, chalk perpetually on his ears. His voice is soft but commands a room effortlessly.',
    spriteUrl: '',
    characterParts: ALDER_PARTS,
    position: { x: 3, y: 3 },
    info: {
      secret: 'He has been a teacher here for twenty years but failed his teaching certification twice.',
      darkSecret: "He has been quietly collecting evidence of the King's interference in the school curriculum.",
      rumor: 'He once taught the King as a young cub.',
      falseRumor: 'He eats chalk when nervous.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "School is technically closed for the festival, but I come in anyway. Old habit. Also, honestly—it's quieter here than anywhere else in town today.",
          options: [
            { text: "Do you know much about the island's history?", nextNodeId: 'history' },
            { text: "What do you teach?", nextNodeId: 'subject' },
          ],
        },
        {
          id: 'history',
          text: "I know a great deal about it. Too much, some would say. Kraed Maas had a much more democratic structure before the current royal family. The King's grandfather rewrote much of the civic record. But old copies exist.",
          options: [
            { text: "Where are the old copies?", nextNodeId: 'copies', condition: (s) => s.flags.has('king_task_docks') },
            { text: "That's fascinating.", nextNodeId: 'fascinating' },
          ],
        },
        {
          id: 'copies',
          text: "Maris has them. In the library annex—the locked shelf in the back left. She doesn't lend them out, but she can be persuaded with the right question. Ask her about the harbor maps.",
          options: [{ text: "Thank you, Alder.", action: (s) => s.flags.add('alder_library_clue') }],
        },
        {
          id: 'subject',
          text: "Everything, technically. Small school. I teach reading and arithmetic in the morning, history and civic law in the afternoon, and occasionally basic botany when Boro complains about the garden.",
          options: [{ text: "Renaissance teacher." }],
        },
        {
          id: 'fascinating',
          text: "History usually is, when you find the version they tried to hide. This island has a beautiful one. It just requires some digging.",
          options: [{ text: "I'll remember that." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "I've been marking old festival papers all afternoon. The students write about what the Festival of Disguises means to them. The essays are always more revealing than they intend.",
          options: [{ text: "How so?" }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "I lock up the school at night. It's my favorite part of the day—just me and the chalk dust and forty years of names carved into the desks.",
          options: [{ text: "Goodnight, Alder." }],
        },
      ],
    },
  },
  {
    id: 'boro',
    name: 'Boro',
    species: 'Buffalo',
    baseCostume: 'School Custodian',
    description: "A massive buffalo in a gray custodian's uniform, carrying a mop like a weapon of civic order. Despite his size, he moves quietly and speaks even quieter.",
    spriteUrl: '',
    characterParts: BORO_PARTS,
    position: { x: 10, y: 7 },
    info: {
      secret: 'He can read six languages but never mentions it.',
      darkSecret: 'He has been a spy for a foreign organization for fifteen years—an entirely benign one that just collects geographical data, but still.',
      rumor: 'He once lifted the school roof to fix a leak and set it back down without breaking anything.',
      falseRumor: 'He writes poetry.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "School's closed. Festival. You shouldn't be in here.",
          options: [
            { text: "I'm with Constable business.", nextNodeId: 'constable', condition: (s) => s.activeOutfitId === 'constable_uniform' },
            { text: "I'm visiting Alder.", nextNodeId: 'alder_visit' },
          ],
        },
        {
          id: 'constable',
          text: "Constable. Alright. Alder's in his classroom. Don't touch the historical maps in the back—they're fragile and apparently valuable. I've been told not to mop near them.",
          options: [{ text: "Thank you, Boro." }],
        },
        {
          id: 'alder_visit',
          text: "He's in. He's always in. That man grades papers on holidays. I respect it even when I think it's sad.",
          options: [{ text: "You care about this place." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Festival crowds track mud from the square all the way to this door. They don't come in. But the mud does. The mud always finds a way.",
          options: [{ text: "An eternal struggle." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night clean. My favorite shift. Quiet enough to think. Loud enough that the thinking doesn't get too dark.",
          options: [{ text: "Goodnight, Boro." }],
        },
      ],
    },
  },
  {
    id: 'fenn',
    name: 'Fenn',
    species: 'Fox',
    baseCostume: 'Student',
    description: 'A scrappy young fox in a student jacket two sizes too big, notepad always in hand, eyes constantly moving. She is extremely interested in everything and everyone.',
    spriteUrl: '',
    characterParts: FENN_PARTS,
    position: { x: 7, y: 3 },
    info: {
      secret: 'She is writing a student newspaper that the school has not officially approved.',
      darkSecret: "She has already uncovered several pieces of evidence about the King's activities and doesn't know what to do with them.",
      rumor: 'She asks questions nobody else dares to.',
      falseRumor: "She is Ressa's younger sister.",
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Excuse me—can I interview you? I'm doing a piece on the festival and also secretly a piece on the King but don't tell anyone that second part. I'm Fenn. Student journalist.",
          options: [
            { text: "What have you found out about the King?", nextNodeId: 'king', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Sure, ask your questions.", nextNodeId: 'interview' },
          ],
        },
        {
          id: 'king',
          text: "Okay, this stays between us: I have three sources saying something was moved through the east dock that wasn't on any public manifest. One of my sources is a giraffe who also hums, which I found distracting.",
          options: [{ text: "You've done better work than I have.", action: (s) => s.flags.add('fenn_investigation') }],
        },
        {
          id: 'interview',
          text: "Name, occupation, disguise this festival—wait, you probably can't tell me the last one. Okay. What do you think the Festival of Disguises says about Kraed Maas as a community?",
          options: [{ text: "That honesty is seasonal here." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "I talked to Tallo in the jail cell through the window—he says hi, by the way—and I got some very useful quotes for my piece. Also I brought him a sandwich, which he appreciated.",
          options: [{ text: "Dedicated journalism." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Working late on my article. The title is 'The Festival of Lies: A Deep Dive Into What Kraed Maas Doesn't Want You to Know.' Maris says the title is too long. She's probably right.",
          options: [{ text: "Shorter titles sell better." }],
        },
      ],
    },
  },
  {
    id: 'maris',
    name: 'Maris',
    species: 'Cat',
    baseCostume: 'Librarian',
    description: "A silver-gray cat in a deep purple librarian's robe, spectacles on her nose, an expression that implies she has already catalogued your faults. She is the keeper of everything worth knowing.",
    spriteUrl: '',
    characterParts: MARIS_PARTS,
    position: { x: 10, y: 3 },
    info: {
      secret: "She has read every book in the library at least twice, including the ones she won't let anyone borrow.",
      darkSecret: 'She has been secretly writing the true history of Kraed Maas for thirty years, to be released posthumously.',
      rumor: 'She has a locked shelf that nobody has ever seen inside.',
      falseRumor: 'She has eaten library paste.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "The library is technically closed for the festival. I am here on a voluntary basis. If you need something specific, ask. If you're browsing, the fiction is in the east wing and you are welcome to it.",
          options: [
            { text: "I need to see the old harbor maps.", nextNodeId: 'maps', condition: (s) => s.flags.has('alder_library_clue') },
            { text: "Can you tell me about this island's history?", nextNodeId: 'history' },
            { text: "I'm just looking.", nextNodeId: 'looking' },
          ],
        },
        {
          id: 'maps',
          text: "Alder sent you. *stands, goes to locked shelf* Here. The original dock layouts. You'll notice the east wing was added later—after the previous Harbormaster was quietly replaced. The date is interesting.",
          options: [{ text: "Thank you, Maris.", action: (s) => s.flags.add('maris_harbor_maps') }],
        },
        {
          id: 'history',
          text: "The published version, or the true version? The first is in the main stacks. The second takes longer, and you'll need to sit down. Do you have time?",
          options: [{ text: "I have time.", action: (s) => s.flags.add('maris_true_history') }],
        },
        {
          id: 'looking',
          text: "'Just looking' in a library is the most honest thing anyone ever says. Have at it. Touch nothing on the locked shelf.",
          options: [{ text: "Of course." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Fenn was here asking questions again. I told her everything she needed to know and then watched her face realize it was more than she expected. That expression is my favorite part of this job.",
          options: [{ text: "You enjoy the revelation." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "I work best at night. No interruptions, just the books and the lamp. I've been in this library for thirty years and I still find something new in the stacks every week.",
          options: [{ text: "A comforting thought." }],
        },
      ],
    },
  },
  {
    id: 'nara',
    name: 'Nara',
    species: 'Anteater',
    baseCostume: 'Nurse',
    description: "A calm, methodical anteater with a long slender snout and quick, efficient hands. Her nurse's uniform is immaculate, and she speaks in the measured tone of someone who has seen genuinely alarming things and moved on.",
    spriteUrl: '',
    characterParts: NARA_PARTS,
    position: { x: 3, y: 5 },
    info: {
      secret: 'She has worked here long enough to have patched up injuries that were never reported.',
      darkSecret: "She keeps a private log of suspicious injuries brought to the clinic—injuries that don't match the given explanations.",
      rumor: "She once saved a patient's life with supplies from a kitchen.",
      falseRumor: 'She and Dr. Paloma are feuding.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Clinic is open. Festival week means festival injuries. If you're hurt, come in. If you're just curious—also come in, but sit in the waiting area.",
          options: [
            { text: "I'm investigating some suspicious activity.", nextNodeId: 'investigate', condition: (s) => s.flags.has('king_task_docks') },
            { text: "Has anything unusual happened here?", nextNodeId: 'unusual' },
          ],
        },
        {
          id: 'investigate',
          text: "Investigating. I have something that might help. Last week, a dock worker came in with a rope burn he said was from handling cargo. But the pattern was wrong—it wasn't from ropes. It was from restraints.",
          options: [{ text: "Was he coerced?", action: (s) => s.flags.add('nara_dock_injury') }],
        },
        {
          id: 'unusual',
          text: "Unusual for this island, or unusual for anywhere? Because my baseline unusual is fairly elevated. But yes—we had a patient last month who came in unconscious and left without signing the discharge form. That's unusual.",
          options: [{ text: "Did you report it?" }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Vela's handling the walk-ins. I'm reviewing the private log. Some patterns are becoming clearer. I don't love what I'm seeing.",
          options: [{ text: "Can you share any of it?" }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night shift. Quieter, but we stay open. Dr. Paloma insists. She says the island needs to know the clinic is always here. I think she's right.",
          options: [{ text: "Rest when you can, Nara." }],
        },
      ],
    },
  },
  {
    id: 'vela',
    name: 'Vela',
    species: 'Anteater',
    baseCostume: 'Nurse',
    description: "A younger, lighter-coated anteater in a matching nurse's uniform, moving between patients with a quick, warm efficiency. She hums softly while she works and has never once dropped a tray.",
    spriteUrl: '',
    characterParts: VELA_PARTS,
    position: { x: 6, y: 5 },
    info: {
      secret: "She is Nara's younger sister and followed her here from another island.",
      darkSecret: 'She has been taking small doses of a sedative from the supply cabinet to help her sleep—and knows she should stop.',
      rumor: "She remembers every patient's name.",
      falseRumor: 'She is a medical student, not a full nurse.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "Hello! The doctor will be with you shortly. Can I get you anything while you wait? Tea, water, an existential distraction?",
          options: [
            { text: "Water, thanks. And some information.", nextNodeId: 'info' },
            { text: "I need to speak with someone here about dock injuries.", nextNodeId: 'injuries', condition: (s) => s.flags.has('king_task_docks') },
          ],
        },
        {
          id: 'info',
          text: "Sure! I know most things. What kind of information? Island-specific or human-nature-specific? The second category I've gotten very good at from this job.",
          options: [{ text: "About the festival?" }],
        },
        {
          id: 'injuries',
          text: "Nara is the one keeping the log. She's very careful about who she shares it with. If she trusts you, she'll let you see it. But she doesn't trust easily. And she shouldn't—there are people watching this clinic.",
          options: [{ text: "Watching it? Why?", action: (s) => s.flags.add('clinic_watched') }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Twelve patients this afternoon. Three minor scrapes, two festival-related overconsumptions, one person who got their costume hat stuck—and Nara's mystery case that I'm not allowed to discuss.",
          options: [{ text: "Sounds like a full afternoon." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "Night is gentler. My favorite patient came back just to say they felt better. That doesn't happen enough. I'm glad when it does.",
          options: [{ text: "That must be rewarding." }],
        },
      ],
    },
  },
  {
    id: 'dr_paloma',
    name: 'Dr. Paloma',
    species: 'Pigeon',
    baseCostume: 'Physician',
    description: 'A plump, precise pigeon in a white coat covered in neat pen annotations, stethoscope perpetually around her neck. She has the calm authority of someone who has diagnosed impossible things and fixed most of them.',
    spriteUrl: '',
    characterParts: DR_PALOMA_PARTS,
    position: { x: 5, y: 3 },
    info: {
      secret: 'She trained on the mainland and is overqualified for a small island clinic by an embarrassing margin.',
      darkSecret: 'She was sent here specifically because she asked too many questions at her previous hospital about unusual patient admissions.',
      rumor: 'She once diagnosed a patient by the sound of their walk.',
      falseRumor: 'She is secretly three hundred years old.',
    },
    dialogue: {
      Morning: [
        {
          id: 'start',
          text: "I'm with a patient. If it's urgent, speak quickly. If it's not, take a seat and I'll be with you in four minutes.",
          options: [
            { text: "There have been suspicious dock injuries.", nextNodeId: 'injuries', condition: (s) => s.flags.has('king_task_docks') },
            { text: "I can wait.", nextNodeId: 'wait' },
          ],
        },
        {
          id: 'injuries',
          text: "*sets down clipboard* So you've found it too. There's a pattern. Rope burns, blunt force impact, all from the docks, none of them reported to the sheriff. Someone is intimidating dock workers into silence.",
          options: [{ text: "Can you document that officially?", action: (s) => s.flags.add('paloma_medical_evidence') }],
        },
        {
          id: 'wait',
          text: "Appreciate it. *four minutes later* Now. What can I do for you?",
          options: [{ text: "Just checking in on the island." }],
        },
      ],
      Afternoon: [
        {
          id: 'start',
          text: "Festival week is healthy week, surprisingly. People are too busy having fun to notice minor ailments. I use the relative quiet to update my private records.",
          options: [{ text: "Seems like a good system." }],
        },
      ],
      Night: [
        {
          id: 'start',
          text: "I keep the clinic open at night because I was once turned away from an after-hours facility and it changed the outcome of a patient. I have kept these doors open every night since.",
          options: [{ text: "That's admirable, Doctor." }],
        },
      ],
    },
  },
];
