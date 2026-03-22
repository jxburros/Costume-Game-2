import { Item, NPC, Location, Building } from './types';
import { KING_ARCTOS_PARTS, FENNEL_PARTS, BRAMM_PARTS, DAGAN_PARTS, IVELLE_PARTS, PRINCE_LIO_PARTS, SHERIFF_HALDEN_PARTS, MALLOW_PARTS, CONSTABLE_COSTUME_PARTS, BAKER_COSTUME_PARTS, GHOST_COSTUME_PARTS, MASK_COSTUME_PARTS, ORYN_PARTS, ELARA_PARTS, THORNE_PARTS, TALLO_PARTS, LERR_PARTS, ELIA_PARTS, ORLA_PARTS, SERA_PARTS, RESSA_PARTS, CORIN_PARTS, FENN_PARTS, ELDA_PARTS, BRAMWELL_PARTS, VAREK_PARTS, NOX_PARTS, SLINK_PARTS, ALDER_PARTS, BORO_PARTS, MARIS_PARTS, NARA_PARTS, VELA_PARTS, DR_PALOMA_PARTS, HESTA_PARTS, MIRA_PARTS, NYRA_PARTS, KIRI_PARTS, MARA_PARTS, RHO_PARTS, PIP_PARTS, GROM_PARTS, VEX_PARTS, LYRA_PARTS, SIVE_PARTS, OLLO_PARTS, VOSS_PARTS, LIRA_PARTS, KETT_PARTS, NYX_PARTS, VOX_PARTS, PENGO_PARTS, CORVUS_PARTS, ZERA_PARTS, PANRA_PARTS, MELL_PARTS, IVO_PARTS, TORQ_PARTS, BRISK_PARTS, BRUNE_PARTS, PELLI_PARTS, NIRA_PARTS, DREM_PARTS, SOOT_PARTS, ELEN_PARTS, PUFFA_PARTS, PUFFO_PARTS, SLOM_PARTS, BELL_PARTS, ARRA_PARTS, NILO_PARTS, KIKI_PARTS, YOMA_PARTS, LUMO_PARTS, LEMI_PARTS, KITO_PARTS, VARA_PARTS, NIB_PARTS, TULA_PARTS, DEXT_PARTS, GLINT_PARTS, THRI_PARTS, SHADE_PARTS, HEARTH_PARTS, CORBIN_PARTS } from './characterParts';

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
    npcs: ['king_arctos', 'fennel', 'mira', 'brisk', 'ollo', 'corbin'],
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
      { locationId: 'restaurant', x: 16, y: 14, label: 'Enter Restaurant' },
      { locationId: 'bnb', x: 2, y: 14, label: 'Enter B&B' },
      { locationId: 'hotel', x: 6, y: 16, label: 'Enter Hotel' },
      { locationId: 'festival_park', x: 14, y: 16, label: 'Festival Park' },
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
    npcs: ['bramm', 'hesta'],
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
    npcs: ['dagan', 'sera', 'mara'],
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
    npcs: ['mallow', 'orla', 'ivo'],
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
    npcs: ['elara', 'thorne', 'grom', 'vex'],
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
    npcs: ['ressa', 'corin', 'elda', 'bramwell', 'varek', 'nox', 'slink', 'lyra', 'glint', 'thri', 'shade', 'hearth', 'kiri', 'sive'],
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
    npcs: ['alder', 'boro', 'fenn', 'maris', 'torq', 'rho', 'pip', 'nyra', 'vara', 'nib', 'tula', 'dext'],
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
    npcs: ['nara', 'vela', 'dr_paloma', 'mell', 'ivo'],
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
  {
    id: 'restaurant',
    name: "Voss & Voss Fine Dining",
    description: 'A candlelit restaurant smelling of rich spices and roasted root vegetables. The tables are too close together but nobody seems to mind.',
    npcs: ['voss', 'pelli', 'elen', 'lira', 'kett', 'nira', 'drem', 'brune', 'soot'],
    connections: [
      { locationId: 'town_square', x: 5, y: 11, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 10, height: 12 },
    decorations: [
      { id: 'bench_1', type: 'bench', position: { x: 1, y: 2 } },
      { id: 'bench_2', type: 'bench', position: { x: 3, y: 2 } },
      { id: 'bench_3', type: 'bench', position: { x: 6, y: 2 } },
      { id: 'bench_4', type: 'bench', position: { x: 8, y: 2 } },
      { id: 'bench_5', type: 'bench', position: { x: 1, y: 5 } },
      { id: 'bench_6', type: 'bench', position: { x: 3, y: 5 } },
      { id: 'bench_7', type: 'bench', position: { x: 6, y: 5 } },
      { id: 'bench_8', type: 'bench', position: { x: 8, y: 5 } },
      { id: 'flower_1', type: 'flower', position: { x: 2, y: 8 } },
      { id: 'flower_2', type: 'flower', position: { x: 7, y: 8 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 0, y: 0 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 9, y: 0 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 5, y: 0 } },
    ],
    obstacles: [
      { x: 1, y: 2 }, { x: 3, y: 2 }, { x: 6, y: 2 }, { x: 8, y: 2 },
      { x: 1, y: 5 }, { x: 3, y: 5 }, { x: 6, y: 5 }, { x: 8, y: 5 },
      { x: 0, y: 0 }, { x: 9, y: 0 }, { x: 5, y: 0 },
    ],
  },
  {
    id: 'bnb',
    name: "Nyx & Vox's Cosy B&B",
    description: 'A small and immaculate bed and breakfast run by two bat siblings. Every room has a different quilt. The hallways smell faintly of lavender.',
    npcs: ['nyx', 'vox', 'puffa', 'puffo'],
    connections: [
      { locationId: 'town_square', x: 5, y: 9, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 10, height: 10 },
    decorations: [
      { id: 'bench_1', type: 'bench', position: { x: 1, y: 2 } },
      { id: 'bench_2', type: 'bench', position: { x: 7, y: 2 } },
      { id: 'flower_1', type: 'flower', position: { x: 2, y: 5 } },
      { id: 'flower_2', type: 'flower', position: { x: 7, y: 5 } },
      { id: 'flower_3', type: 'flower', position: { x: 4, y: 1 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 5, y: 0 } },
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 0 } },
      { id: 'crate_2', type: 'crate', position: { x: 9, y: 0 } },
    ],
    obstacles: [
      { x: 1, y: 2 }, { x: 7, y: 2 },
      { x: 5, y: 0 }, { x: 0, y: 0 }, { x: 9, y: 0 },
    ],
  },
  {
    id: 'hotel',
    name: 'The Kraed Grand Hotel',
    description: 'A recently renovated hotel with too much marble and not enough warmth, run with corporate precision by a penguin who genuinely loves spreadsheets.',
    npcs: ['pengo', 'slom', 'bell', 'arra', 'nilo', 'kiki', 'yoma', 'lumo', 'lemi'],
    connections: [
      { locationId: 'town_square', x: 5, y: 9, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 14, height: 10 },
    decorations: [
      { id: 'bench_1', type: 'bench', position: { x: 1, y: 3 } },
      { id: 'bench_2', type: 'bench', position: { x: 12, y: 3 } },
      { id: 'flower_1', type: 'flower', position: { x: 3, y: 1 } },
      { id: 'flower_2', type: 'flower', position: { x: 10, y: 1 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 7, y: 0 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 2, y: 7 } },
      { id: 'lamp_3', type: 'lamp', position: { x: 11, y: 7 } },
      { id: 'crate_1', type: 'crate', position: { x: 0, y: 0 } },
      { id: 'crate_2', type: 'crate', position: { x: 13, y: 0 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 0, y: 8 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 13, y: 8 } },
    ],
    obstacles: [
      { x: 1, y: 3 }, { x: 12, y: 3 },
      { x: 7, y: 0 }, { x: 2, y: 7 }, { x: 11, y: 7 },
      { x: 0, y: 0 }, { x: 13, y: 0 }, { x: 0, y: 8 }, { x: 13, y: 8 },
    ],
  },
  {
    id: 'festival_park',
    name: 'Festival Grounds & Cleanup Area',
    description: 'A grassy space at the edge of town where festival overflow has been corralled. Recycling bins have multiplied overnight, and a large painted banner reads ZERO WASTE FESTIVAL.',
    npcs: ['corvus', 'zera', 'panra', 'kito'],
    connections: [
      { locationId: 'town_square', x: 9, y: 9, label: 'Return to Town Square', isDoor: true }
    ],
    bounds: { width: 18, height: 10 },
    decorations: [
      { id: 'tree_1', type: 'tree', position: { x: 0, y: 0 } },
      { id: 'tree_2', type: 'tree', position: { x: 17, y: 0 } },
      { id: 'tree_3', type: 'tree', position: { x: 0, y: 9 } },
      { id: 'tree_4', type: 'tree', position: { x: 17, y: 9 } },
      { id: 'tree_5', type: 'tree', position: { x: 4, y: 4 } },
      { id: 'tree_6', type: 'tree', position: { x: 13, y: 4 } },
      { id: 'flower_1', type: 'flower', position: { x: 2, y: 3 } },
      { id: 'flower_2', type: 'flower', position: { x: 8, y: 1 } },
      { id: 'flower_3', type: 'flower', position: { x: 15, y: 3 } },
      { id: 'bench_1', type: 'bench', position: { x: 6, y: 7 } },
      { id: 'bench_2', type: 'bench', position: { x: 11, y: 7 } },
      { id: 'barrel_1', type: 'barrel', position: { x: 2, y: 7 } },
      { id: 'barrel_2', type: 'barrel', position: { x: 15, y: 7 } },
      { id: 'lamp_1', type: 'lamp', position: { x: 5, y: 0 } },
      { id: 'lamp_2', type: 'lamp', position: { x: 12, y: 0 } },
    ],
    obstacles: [
      { x: 0, y: 0 }, { x: 17, y: 0 }, { x: 0, y: 9 }, { x: 17, y: 9 },
      { x: 4, y: 4 }, { x: 13, y: 4 },
      { x: 6, y: 7 }, { x: 11, y: 7 },
      { x: 2, y: 7 }, { x: 15, y: 7 },
      { x: 5, y: 0 }, { x: 12, y: 0 },
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

// ─── New characters added from characterTable.md ───

// Town Square
const NEW_NPC_MIRA: NPC = {
  id: 'mira',
  name: 'Mira',
  species: 'Human',
  baseCostume: 'Artist',
  description: 'A warm-eyed human artist in a paint-stained smock. She studies things for too long and sees the disguise in everything.',
  characterParts: MIRA_PARTS,
  position: { x: 5, y: 8 },
  dialogue: {
    Morning: [{ id: 'start', text: "You found the square before the crowds. I always come early to sketch the festival banners before they get wrinkled.", options: [{ text: "Do you live here?" }, { text: "Beautiful work." }] }],
    Afternoon: [{ id: 'start', text: "Have you noticed how a disguise reveals as much as it conceals?", options: [{ text: "That's a bit unsettling." }] }],
    Night: [{ id: 'start', text: "The island looks different after dark — everything softens. It reminds me of the paintings I made when I was young.", options: [{ text: "What changed?" }] }],
  },
};

const NEW_NPC_BRISK: NPC = {
  id: 'brisk',
  name: 'Brisk',
  species: 'Squirrel',
  baseCostume: 'Farmer',
  description: 'An energetic squirrel in farm overalls and a straw hat. Talks faster than most people think.',
  characterParts: BRISK_PARTS,
  position: { x: 8, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "Morning! I brought in the last of the harvest squash today. Festival week wipes out my stock every year. The hotel bought three crates already!", options: [{ text: "Good business." }] }],
    Afternoon: [{ id: 'start', text: "Every year I say I'll enjoy the festival. Every year I sell things instead.", options: [{ text: "Maybe next year." }] }],
    Night: [{ id: 'start', text: "Closing up. Long day. But this is the good kind of tired — the kind that means something got done.", options: [{ text: "Get some rest." }] }],
  },
};

const NEW_NPC_OLLO: NPC = {
  id: 'ollo',
  name: 'Ollo',
  species: 'Walrus',
  baseCostume: 'Lounger',
  description: 'A portly walrus in extremely comfortable leisure clothes who has claimed a bench as his personal territory. He is content.',
  characterParts: OLLO_PARTS,
  position: { x: 15, y: 10 },
  dialogue: {
    Morning: [{ id: 'start', text: "You know what this festival needs more of? Benches. And shade. And longer mornings.", options: [{ text: "Sounds peaceful." }] }],
    Afternoon: [{ id: 'start', text: "I've been sitting here for four hours. Clouds are interesting, pigeons have disputes, and everyone seems in a great hurry.", options: [{ text: "And you're not?" }] }],
    Night: [{ id: 'start', text: "I considered going home. Then I thought: this bench is very comfortable. So here I am.", options: [{ text: "Fair enough." }] }],
  },
};

const NEW_NPC_CORBIN: NPC = {
  id: 'corbin',
  name: 'Corbin',
  species: 'Raven',
  baseCostume: 'Landlord',
  description: 'A sharp-eyed raven in a formal black suit with a leather-bound ledger. Polite, watchful, and knows what every building is worth.',
  characterParts: CORBIN_PARTS,
  position: { x: 18, y: 8 },
  dialogue: {
    Morning: [{ id: 'start', text: "I own eleven properties on this island. Festival week is excellent for real estate conversations — everyone is in good spirits and bad with numbers.", options: [{ text: "That seems convenient." }] }],
    Afternoon: [{ id: 'start', text: "The hotel had a pipe issue this morning. Pengo handled it before I even knew. I appreciate competence.", options: [{ text: "You own the hotel?" }] }],
    Night: [{ id: 'start', text: "I walk the island at night. The island looks different when no one is performing for it.", options: [{ text: "Performing?" }] }],
  },
};

// Bakery
const NEW_NPC_HESTA: NPC = {
  id: 'hesta',
  name: 'Hesta',
  species: 'Bear',
  baseCostume: 'Ringmaster',
  description: 'A stout older bear in a red ringmaster coat, sitting in the corner of the bakery with absolute authority over the room.',
  characterParts: HESTA_PARTS,
  position: { x: 5, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "My son made these scones. He has my hands. I used to do trapeze, you know. Now I mostly eat the scones.", options: [{ text: "Trapeze? Really?" }, { text: "They smell wonderful." }] }],
    Afternoon: [{ id: 'start', text: "Bramm chose the oven instead of the ring. I don't say it often enough, but I'm proud.", options: [{ text: "That's lovely." }] }],
    Night: [{ id: 'start', text: "I stay until he closes. Don't tell him I said that.", options: [{ text: "Your secret is safe." }] }],
  },
};

// Docks
const NEW_NPC_MARA: NPC = {
  id: 'mara',
  name: 'Mara',
  species: 'Rhino',
  baseCostume: 'Builder',
  description: 'A broad-shouldered rhino in construction gear overseeing festival infrastructure with an iron clipboard.',
  characterParts: MARA_PARTS,
  position: { x: 7, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "Three of my crew called in sick today. During festival week. I built the stage and half the lighting rig by myself this morning.", options: [{ text: "That's impressive." }] }],
    Afternoon: [{ id: 'start', text: "The dock scaffolding is mine. I know people say it looks rough. It's holding twelve tonnes of decorations. They can say what they want.", options: [{ text: "Looks sturdy to me." }] }],
    Night: [{ id: 'start', text: "I walk every structure I build before I sleep. Things shift at night that you miss in daylight.", options: [{ text: "Good habit." }] }],
  },
};

// Castle
const NEW_NPC_GROM: NPC = {
  id: 'grom',
  name: 'Grom',
  species: 'Hippopotamus',
  baseCostume: 'Royal Chef',
  description: 'An enormous hippo in an immaculate white chef coat with royal gold trim. He bellows but means well.',
  characterParts: GROM_PARTS,
  position: { x: 4, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "TWELVE COURSES. The king wants twelve courses for the festival banquet. Last year it was eight. SOMEONE GET ME MORE OVENS.", options: [{ text: "Is there anything I can do?" }] }],
    Afternoon: [{ id: 'start', text: "*calmer* Sorry about earlier. The soup is perfect. The soup is always perfect. Everything else is in progress.", options: [{ text: "The soup smells incredible." }] }],
    Night: [{ id: 'start', text: "I cook better at night. The kitchen is mine alone. Just me and the fire.", options: [{ text: "That sounds peaceful." }] }],
  },
};

const NEW_NPC_VEX: NPC = {
  id: 'vex',
  name: 'Vex',
  species: 'Raccoon',
  baseCostume: 'Royal Guard',
  description: 'A compact raccoon in deep red royal guard armor. Perpetually alert, slightly bored.',
  characterParts: VEX_PARTS,
  position: { x: 8, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Halt. State your business. *pause* The king said to let in festival visitors. You're a festival visitor.", options: [{ text: "That I am." }] }],
    Afternoon: [{ id: 'start', text: "I have been standing here for four hours. The prince walked past twice and didn't acknowledge me. This is my job.", options: [{ text: "Do you like guarding?" }] }],
    Night: [{ id: 'start', text: "Night watch. Quieter. I prefer it.", options: [{ text: "Anything unusual?" }] }],
  },
};

// Hospital
const NEW_NPC_MELL: NPC = {
  id: 'mell',
  name: 'Mell',
  species: 'Bee',
  baseCostume: 'Patient Gown',
  description: 'A drowsy bee in a patient gown. Nobody is entirely sure how she got here or what the festival did to her.',
  characterParts: MELL_PARTS,
  position: { x: 5, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "I am having the most wonderful nap. Or I was.", options: [{ text: "Sorry to wake you." }] }],
    Afternoon: [{ id: 'start', text: "I entered the honey-tasting contest. I was winning. Then everything gets blurry. Then Dr. Paloma.", options: [{ text: "That explains a lot." }] }],
    Night: [{ id: 'start', text: "The doctor says I can leave tomorrow. I might enter the contest again next year. I'll pace myself.", options: [{ text: "Maybe pace yourself this time." }] }],
  },
};

const NEW_NPC_IVO: NPC = {
  id: 'ivo',
  name: 'Ivo',
  species: 'Pigeon',
  baseCostume: 'Writer',
  description: 'A thoughtful pigeon novelist who researches his books by sitting in public places and overhearing things.',
  characterParts: IVO_PARTS,
  position: { x: 7, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "I'm researching my third novel. It's set on a small island during a festival. *looks around* This is going well.", options: [{ text: "Are we in the book?" }] }],
    Afternoon: [{ id: 'start', text: "Twelve conversations overheard. Three usable. That's a good afternoon.", options: [{ text: "What counts as usable?" }] }],
    Night: [{ id: 'start', text: "I write the actual words at night. The day is for collecting. The night is for building.", options: [{ text: "Good luck with the book." }] }],
  },
};

// School
const NEW_NPC_TORQ: NPC = {
  id: 'torq',
  name: 'Torq',
  species: 'Turtle',
  baseCostume: 'Chef',
  description: 'A cheerful green turtle running the school cafeteria. Moves slowly, produces food with remarkable efficiency.',
  characterParts: TORQ_PARTS,
  position: { x: 10, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Breakfast service! I made the oat porridge three different ways this morning. The students have very loud opinions for seven in the morning.", options: [{ text: "What's the most popular?" }] }],
    Afternoon: [{ id: 'start', text: "Festival menu! I made the sandwiches in the shapes of the island landmarks. The castle was tricky.", options: [{ text: "That sounds delightful." }] }],
    Night: [{ id: 'start', text: "I prep tomorrow's menu tonight. Slow and steady. I am very much the turtle in that story.", options: [{ text: "And it works." }] }],
  },
};

const NEW_NPC_RHO: NPC = {
  id: 'rho',
  name: 'Rho',
  species: 'Rhino',
  baseCostume: 'Bodyguard',
  description: 'A young stocky rhino in a formal dark suit who volunteered to be the unofficial school bodyguard. Takes it very seriously.',
  characterParts: RHO_PARTS,
  position: { x: 3, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "I'm on patrol. The library has rare books. I volunteered. Mr. Alder looked confused but said yes.", options: [{ text: "Good thinking." }] }],
    Afternoon: [{ id: 'start', text: "Two students almost knocked over the globe. I caught it. This is why I am here.", options: [{ text: "The globe is lucky." }] }],
    Night: [{ id: 'start', text: "Evening rounds. The school is quiet. It means nothing has gone wrong yet.", options: [{ text: "Good night, then." }] }],
  },
};

const NEW_NPC_PIP: NPC = {
  id: 'pip',
  name: 'Pip',
  species: 'Ant',
  baseCostume: 'Architect',
  description: 'A very small ant with enormous ambitions for urban planning. Carries a miniature blueprint tube everywhere.',
  characterParts: PIP_PARTS,
  position: { x: 11, y: 7 },
  dialogue: {
    Morning: [{ id: 'start', text: "I've redesigned the school layout twice in my head since breakfast. The benches are in the wrong place.", options: [{ text: "You've thought about this a lot." }] }],
    Afternoon: [{ id: 'start', text: "I'm working on a proposal for a covered walkway between the school and library. It rains every third Tuesday.", options: [{ text: "Present it to Alder." }] }],
    Night: [{ id: 'start', text: "I stay late to work on my designs. The school is better when it's quiet.", options: [{ text: "Good luck with the walkway." }] }],
  },
};

const NEW_NPC_NYRA: NPC = {
  id: 'nyra',
  name: 'Nyra',
  species: 'White Tiger',
  baseCostume: 'Archivist',
  description: 'A rare white tiger with dark markings, buried in library books and wearing small round glasses.',
  characterParts: NYRA_PARTS,
  position: { x: 7, y: 2 },
  dialogue: {
    Morning: [{ id: 'start', text: "Oh. A visitor. To the archive. That's unusual. Is there something I can help you find?", options: [{ text: "Just looking around." }, { text: "I heard you have rare records." }] }],
    Afternoon: [{ id: 'start', text: "I'm cataloguing festival records. Did you know the Festival of Disguises was originally a harvest ritual? The disguises were to fool away bad spirits.", options: [{ text: "Fascinating." }] }],
    Night: [{ id: 'start', text: "I often work late. The archive feels less exposed at night. That probably sounds strange.", options: [{ text: "Not at all." }] }],
  },
};

const NEW_NPC_VARA: NPC = {
  id: 'vara',
  name: 'Vara',
  species: 'Ant',
  baseCostume: 'Caretaker',
  description: 'An older ant sibling in a practical apron, making sure the younger ant students have eaten, slept, and done their assignments.',
  characterParts: VARA_PARTS,
  position: { x: 6, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "Nib forgot her lunch. Tula's socks don't match but she says it's intentional. Pip is already at the library. Dext filed three incident reports before nine AM.", options: [{ text: "That's a full morning." }] }],
    Afternoon: [{ id: 'start', text: "I check on them every afternoon. They're old enough to be independent. They're also young enough to need someone checking.", options: [{ text: "You're a good sibling." }] }],
    Night: [{ id: 'start', text: "The little ones are asleep. I get two hours of quiet.", options: [{ text: "Enjoy it." }] }],
  },
};

const NEW_NPC_NIB: NPC = {
  id: 'nib',
  name: 'Nib',
  species: 'Ant',
  baseCostume: 'Explorer',
  description: 'A young adventurous ant with an oversized backpack who has mapped half the school in a hand-drawn notebook.',
  characterParts: NIB_PARTS,
  position: { x: 9, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "I found a door I've never seen before! Behind the art room. Vara says it's just a supply closet. I put it on my map anyway.", options: [{ text: "Every door deserves to be mapped." }] }],
    Afternoon: [{ id: 'start', text: "I told Tula she was coming with me to explore the festival grounds after school. She said nothing, which I'm counting as yes.", options: [{ text: "Sounds like a plan." }] }],
    Night: [{ id: 'start', text: "My map is almost done. I just need to find out what's behind the big boiler.", options: [{ text: "Be careful." }] }],
  },
};

const NEW_NPC_TULA: NPC = {
  id: 'tula',
  name: 'Tula',
  species: 'Ant',
  baseCostume: 'Listener',
  description: 'A very quiet young ant who sits near conversations rather than in them, and notices things that louder people miss.',
  characterParts: TULA_PARTS,
  position: { x: 4, y: 7 },
  dialogue: {
    Morning: [{ id: 'start', text: "...", options: [{ text: "Good morning." }] }],
    Afternoon: [{ id: 'start', text: "*after a long pause* I heard two teachers talking about the docks this morning. One of them seemed worried.", options: [{ text: "What did they say?" }] }],
    Night: [{ id: 'start', text: "I stayed to help Vara clean up. I didn't say so. I just started sweeping.", options: [{ text: "That's kind." }] }],
  },
};

const NEW_NPC_DEXT: NPC = {
  id: 'dext',
  name: 'Dext',
  species: 'Ant',
  baseCostume: 'Organizer',
  description: 'A hyper-competent ant with a clipboard who coordinates everything from supply deliveries to the lunch schedule with startling precision.',
  characterParts: DEXT_PARTS,
  position: { x: 12, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "I've filed three incident reports since school started. Two were preventative. The third was about a chair that was slightly off-center.", options: [{ text: "You're very thorough." }] }],
    Afternoon: [{ id: 'start', text: "The festival supply deliveries are twelve minutes behind schedule. I have already notified the relevant parties and drafted a revised timeline.", options: [{ text: "All that in an afternoon?" }] }],
    Night: [{ id: 'start', text: "End-of-day report filed. Tomorrow's schedule prepared. Backup schedule prepared. Good night.", options: [{ text: "Good night." }] }],
  },
};

// Market
const NEW_NPC_LYRA: NPC = {
  id: 'lyra',
  name: 'Lyra',
  species: 'Wolf',
  baseCostume: 'Merchant Queen',
  description: 'An elegant gray wolf in deep purple merchant finery, presiding over imported festival goods.',
  characterParts: LYRA_PARTS,
  position: { x: 14, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Welcome to the finest imported goods on the island. I bring these every year. Every year they sell out. This year I brought twice as many.", options: [{ text: "Confidence suits you." }] }],
    Afternoon: [{ id: 'start', text: "I know every customer's preferences better than they do. Not bragging. Just data.", options: [{ text: "What do I want?" }] }],
    Night: [{ id: 'start', text: "Late shoppers are decisive shoppers. They know what they want and they've already talked themselves into it.", options: [{ text: "Then I'll look quickly." }] }],
  },
};

const NEW_NPC_KIRI: NPC = {
  id: 'kiri',
  name: 'Kiri',
  species: 'Tiger',
  baseCostume: 'Messenger',
  description: 'A young orange tiger with a messenger bag, darting between market stalls with urgent deliveries and infectious energy.',
  characterParts: KIRI_PARTS,
  position: { x: 8, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "PARDON — *skids to halt* — sorry. Delivery. Do you know where the soap stall is? I have three messages and one very small parcel and I'm already late.", options: [{ text: "Down that way, I think." }] }],
    Afternoon: [{ id: 'start', text: "Festival week is my favorite week. So many deliveries. So much running. My legs are very happy.", options: [{ text: "Good career then." }] }],
    Night: [{ id: 'start', text: "Last run of the day goes to the castle. The guards let me see the courtyard lights.", options: [{ text: "A good reward." }] }],
  },
};

const NEW_NPC_SIVE: NPC = {
  id: 'sive',
  name: 'Sive',
  species: 'Owl',
  baseCostume: 'Server',
  description: 'A quiet tawny owl working the market gift shop with unhurried precision and excellent memory for what customers previously bought.',
  characterParts: SIVE_PARTS,
  position: { x: 11, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good morning. You came two festivals ago and bought the amber candle. I have more if you're interested.", options: [{ text: "How do you remember that?" }] }],
    Afternoon: [{ id: 'start', text: "The afternoon rush is the honest rush. People come back for what they actually wanted.", options: [{ text: "Makes sense." }] }],
    Night: [{ id: 'start', text: "I'll be here until close. I'm a night owl — the saying applies more literally than most.", options: [{ text: "Lucky for the late shoppers." }] }],
  },
};

const NEW_NPC_GLINT: NPC = {
  id: 'glint',
  name: 'Glint',
  species: 'Raccoon',
  baseCostume: 'Jeweler',
  description: 'A well-dressed raccoon running a jewellery stall. Wears more jewellery than the stall.',
  characterParts: GLINT_PARTS,
  position: { x: 5, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Ah! You have an eye. This clasp is from the old port district. Handcrafted. Most people walk past.", options: [{ text: "It's beautiful." }] }],
    Afternoon: [{ id: 'start', text: "Half my morning stock is gone. I'll need more display space for tomorrow.", options: [{ text: "A good problem to have." }] }],
    Night: [{ id: 'start', text: "Jewels catch the lamp light differently at night. That's when they really shine.", options: [{ text: "Alright." }] }],
  },
};

const NEW_NPC_THRI: NPC = {
  id: 'thri',
  name: 'Thri',
  species: 'Praying Mantis',
  baseCostume: 'Designer',
  description: 'A tall green praying mantis selling hand-printed festival t-shirts. Has strong opinions about fonts.',
  characterParts: THRI_PARTS,
  position: { x: 3, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "This year's design took four months. People will wear it once and donate it. I will still be proud.", options: [{ text: "It looks excellent." }] }],
    Afternoon: [{ id: 'start', text: "Someone asked for one that says 'I Survived the Festival.' I said no. That is not the vibe.", options: [{ text: "Understandable." }] }],
    Night: [{ id: 'start', text: "I've already started sketching next year's design. The ideas come when they come.", options: [{ text: "Creative minds don't rest." }] }],
  },
};

const NEW_NPC_SHADE: NPC = {
  id: 'shade',
  name: 'Shade',
  species: 'Raccoon',
  baseCostume: 'Cloaked Merchant',
  description: 'A very dark raccoon in a long black cloak selling things from a table of suspiciously interesting items that change every time you look.',
  characterParts: SHADE_PARTS,
  position: { x: 16, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "You're up early. Most people who find this table are either very curious or very purposeful. Which are you?", options: [{ text: "Curious." }, { text: "Just browsing." }] }],
    Afternoon: [{ id: 'start', text: "I have what you're looking for. I don't know what that is yet. But I will when you tell me.", options: [{ text: "That's an interesting pitch." }] }],
    Night: [{ id: 'start', text: "I do my best business at dusk. People are looser with decisions when the day is almost over.", options: [{ text: "What are you selling tonight?" }] }],
  },
};

const NEW_NPC_HEARTH: NPC = {
  id: 'hearth',
  name: 'Hearth',
  species: 'Raccoon',
  baseCostume: 'Caretaker',
  description: 'A soft-spoken raccoon selling homemade preserves, candles, and knitted goods. The stall smells like cinnamon.',
  characterParts: HEARTH_PARTS,
  position: { x: 7, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "I made the strawberry conserve last week — if you want a jar, get one now. They went in an hour last year.", options: [{ text: "I'll take one." }] }],
    Afternoon: [{ id: 'start', text: "Having something warm to hold helps. That's why I always carry the tea.", options: [{ text: "Good advice." }] }],
    Night: [{ id: 'start', text: "Almost sold out, which means I can go home and start on next week's batch. This is how I rest.", options: [{ text: "Sounds peaceful." }] }],
  },
};

// Restaurant
const NEW_NPC_VOSS: NPC = {
  id: 'voss',
  name: 'Voss',
  species: 'Weasel',
  baseCostume: 'Tycoon',
  description: 'A sleek weasel in an extravagant black suit with gold cufflinks who owns this restaurant and two others.',
  characterParts: VOSS_PARTS,
  position: { x: 5, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Reservations are full for the entire festival week. I did not expect that when I opened a fine dining restaurant on an island known mainly for its docks.", options: [{ text: "Surprise success." }] }],
    Afternoon: [{ id: 'start', text: "The bread is baked twice daily. It must never be more than two hours old at the table. It sounds excessive. It is excessive. It is also correct.", options: [{ text: "I respect the commitment." }] }],
    Night: [{ id: 'start', text: "Last service. I walk the floor myself at this hour. I want every guest leaving thinking about coming back.", options: [{ text: "And do they?" }] }],
  },
};

const NEW_NPC_PELLI: NPC = {
  id: 'pelli',
  name: 'Pelli',
  species: 'Deer',
  baseCostume: 'Host',
  description: 'An elegant deer in deep blue formal attire managing the front of house with graceful authority.',
  characterParts: PELLI_PARTS,
  position: { x: 3, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "Welcome! I have your table ready. I also have a note that you prefer the quieter section — is that still accurate?", options: [{ text: "How do you know that?" }] }],
    Afternoon: [{ id: 'start', text: "Soot made the festival special — a seven-course tasting menu with every course themed to a different festival year.", options: [{ text: "That sounds incredible." }] }],
    Night: [{ id: 'start', text: "After last service I do one more walk of the floor to make sure everything is ready for tomorrow.", options: [{ text: "That's dedication." }] }],
  },
};

const NEW_NPC_ELEN: NPC = {
  id: 'elen',
  name: 'Elen',
  species: 'Swan',
  baseCostume: 'Host',
  description: 'A graceful white swan who co-hosts with a calm authority that makes guests feel welcome and slightly underdressed.',
  characterParts: ELEN_PARTS,
  position: { x: 7, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good morning. The morning light is particularly lovely near the window, if you don't mind the garden view.", options: [{ text: "That sounds perfect." }] }],
    Afternoon: [{ id: 'start', text: "We ran out of the amber reserve wine by noon. I told Voss it means we were correct about the selection.", options: [{ text: "Good spin." }] }],
    Night: [{ id: 'start', text: "The restaurant quiets beautifully at night. The candles do most of the work.", options: [{ text: "It's lovely." }] }],
  },
};

const NEW_NPC_LIRA: NPC = {
  id: 'lira',
  name: 'Lira',
  species: 'Ferret',
  baseCostume: 'Server',
  description: 'A slender ferret in a crisp white and black server uniform, moving through the tables with balletic efficiency.',
  characterParts: LIRA_PARTS,
  position: { x: 6, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "Breakfast service is my favorite — everyone is still deciding who they want to be today.", options: [{ text: "Philosophically put." }] }],
    Afternoon: [{ id: 'start', text: "The afternoon rush is pure momentum. I don't think during the rush. I just move. Almost meditative.", options: [{ text: "Sounds exhausting." }] }],
    Night: [{ id: 'start', text: "Evening crowd lingers and tells longer stories. I like the lingerers.", options: [{ text: "You're good with people." }] }],
  },
};

const NEW_NPC_KETT: NPC = {
  id: 'kett',
  name: 'Kett',
  species: 'Raccoon',
  baseCostume: 'Waiter',
  description: 'A young raccoon in a formal waiter uniform who takes every order with the gravity of someone accepting a sacred contract.',
  characterParts: KETT_PARTS,
  position: { x: 8, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good morning. I recommend the seasonal mushroom toast. I have strong feelings about the mushroom toast.", options: [{ text: "I'll trust your judgment." }] }],
    Afternoon: [{ id: 'start', text: "Table seven sent back a plate. It was overcooked. Soot was upset. I said nothing but I agreed with Soot.", options: [{ text: "Discreet." }] }],
    Night: [{ id: 'start', text: "These guests have been here for three hours. They understood what this place is trying to be.", options: [{ text: "And what is it?" }] }],
  },
};

const NEW_NPC_NIRA: NPC = {
  id: 'nira',
  name: 'Nira',
  species: 'Otter',
  baseCostume: 'Server',
  description: 'A bright-eyed brown otter with a joke for every table and the best memory for drink orders on the island.',
  characterParts: NIRA_PARTS,
  position: { x: 4, y: 7 },
  dialogue: {
    Morning: [{ id: 'start', text: "Morning! The specials today: the sunrise oat bowl, the dock-smoked salmon tart, and the jam-stuffed pastry Soot made at five this morning.", options: [{ text: "I'll have the pastry." }] }],
    Afternoon: [{ id: 'start', text: "People eat lunch the way they really are.", options: [{ text: "Is that so?" }] }],
    Night: [{ id: 'start', text: "Drem is taking over. He'll do the final tables with great solemnity. We leave notes for each other. It's become a whole thing.", options: [{ text: "Sounds like a good team." }] }],
  },
};

const NEW_NPC_DREM: NPC = {
  id: 'drem',
  name: 'Drem',
  species: 'Goat',
  baseCostume: 'Waiter',
  description: 'A thoughtful goat with small curled horns handling evening service with careful patience and excellent wine recommendations.',
  characterParts: DREM_PARTS,
  position: { x: 6, y: 8 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good morning. I prefer evenings, I'll admit, but morning service has a calm I respect.", options: [{ text: "Each meal has its mood." }] }],
    Afternoon: [{ id: 'start', text: "The wine list changed this year. I tasted all three new bottles and wrote notes.", options: [{ text: "As you should." }] }],
    Night: [{ id: 'start', text: "The candles, the quiet voices, the last glass. This is what I came to this island for.", options: [{ text: "A true evening person." }] }],
  },
};

const NEW_NPC_BRUNE: NPC = {
  id: 'brune',
  name: 'Brune',
  species: 'Boar',
  baseCostume: 'Chef',
  description: 'A stocky boar in stained chef whites producing extraordinary food via what appears to be controlled chaos.',
  characterParts: BRUNE_PARTS,
  position: { x: 2, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "I've been here since three. The broths don't make themselves. Actually they do, if you start them right.", options: [{ text: "That's dedication." }] }],
    Afternoon: [{ id: 'start', text: "Lunch rush is just muscle memory. My hands know the dish before my brain does.", options: [{ text: "That's impressive." }] }],
    Night: [{ id: 'start', text: "Last ticket. *exhales* Soot, close the grill. Lira, tell the last table it's the best we had all night.", options: [{ text: "Good service tonight?" }] }],
  },
};

const NEW_NPC_SOOT: NPC = {
  id: 'soot',
  name: 'Soot',
  species: 'Cat',
  baseCostume: 'Chef',
  description: 'A dark gray cat in chef whites working pastry. Precise, quiet, and produces things that make people go silent when they eat them.',
  characterParts: SOOT_PARTS,
  position: { x: 2, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "I made the tart at five. It won't be available until afternoon. Good things take the time they take.", options: [{ text: "I'll come back for it." }] }],
    Afternoon: [{ id: 'start', text: "The festival fruit tart is ready. I put the jam in the middle, not on top. If you know, you know.", options: [{ text: "It looks beautiful." }] }],
    Night: [{ id: 'start', text: "Last dessert plated. I clean my station before I leave. Always. Brune thinks I'm particular. He's correct.", options: [{ text: "Perfectionism has its rewards." }] }],
  },
};

// B&B
const NEW_NPC_NYX: NPC = {
  id: 'nyx',
  name: 'Nyx',
  species: 'Bat',
  baseCostume: 'Innkeeper',
  description: 'A cheerful bat in a warm innkeeper outfit, intensely alive from dusk to dawn.',
  characterParts: NYX_PARTS,
  position: { x: 4, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "*yawning* Morning guests... Tea is in the kitchen. Vox handles the mornings. I am... functional. Mostly.", options: [{ text: "No worries, get some sleep." }] }],
    Afternoon: [{ id: 'start', text: "*perking up* Oh, afternoon! The B&B runs itself in daylight. I make sure everyone has what they need at night.", options: [{ text: "A proper night owl." }] }],
    Night: [{ id: 'start', text: "The best time of day! Can I get you anything? A warm drink? Extra blankets? I made biscuits.", options: [{ text: "You made biscuits?" }] }],
  },
};

const NEW_NPC_VOX: NPC = {
  id: 'vox',
  name: 'Vox',
  species: 'Bat',
  baseCostume: 'Innkeeper',
  description: 'A quieter bat who handles daytime B&B operations while their sibling Nyx sleeps.',
  characterParts: VOX_PARTS,
  position: { x: 6, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good morning. Breakfast is laid out in the main room. Nyx is resting.", options: [{ text: "Thank you." }] }],
    Afternoon: [{ id: 'start', text: "Nyx is making biscuits for tonight. I know because I can smell them. I will not eat any because Nyx counts them.", options: [{ text: "That's a very specific detail." }] }],
    Night: [{ id: 'start', text: "I hand over to Nyx at dusk, but I always check the guest log once more before bed.", options: [{ text: "Sounds like a good team." }] }],
  },
};

const NEW_NPC_PUFFA: NPC = {
  id: 'puffa',
  name: 'Puffa',
  species: 'Pufferfish',
  baseCostume: 'Tourist',
  description: 'An extremely round and cheerful pufferfish tourist in a sunhat, photographing everything.',
  characterParts: PUFFA_PARTS,
  position: { x: 3, y: 7 },
  dialogue: {
    Morning: [{ id: 'start', text: "Oh! Hello! I have photographed the B&B from eleven angles this morning. The morning light is extraordinary here!", options: [{ text: "Sure!" }, { text: "Maybe later." }] }],
    Afternoon: [{ id: 'start', text: "I've been to forty-three festivals on fifteen islands. This one has the best *feel*. The light and the cobblestones and the way everyone seems to mean it.", options: [{ text: "Mean what?" }] }],
    Night: [{ id: 'start', text: "Puffo went to bed. I'm still editing photos. Only four hundred to go.", options: [{ text: "Sleep at some point." }] }],
  },
};

const NEW_NPC_PUFFO: NPC = {
  id: 'puffo',
  name: 'Puffo',
  species: 'Pufferfish',
  baseCostume: 'Tourist',
  description: 'A slightly nervous yellow-green pufferfish on this trip with their sibling Puffa, mildly overwhelmed by the festival.',
  characterParts: PUFFO_PARTS,
  position: { x: 7, y: 7 },
  dialogue: {
    Morning: [{ id: 'start', text: "Puffa says we need to go to four things before noon. I'm trying to be excited. I am a little bit excited. Mostly I'm worried about the crowds.", options: [{ text: "Take it one thing at a time." }] }],
    Afternoon: [{ id: 'start', text: "I went to one thing. It was lovely. Maybe I'll go to another one later. I'm being flexible.", options: [{ text: "That's progress!" }] }],
    Night: [{ id: 'start', text: "I liked today more than I expected to. Don't tell Puffa. They'll say 'I told you so' the whole journey home.", options: [{ text: "Your secret is safe." }] }],
  },
};

// Hotel
const NEW_NPC_PENGO: NPC = {
  id: 'pengo',
  name: 'Pengo',
  species: 'Penguin',
  baseCostume: 'Executive',
  description: 'A formal penguin in a sharp suit who runs the hotel with spreadsheet precision and genuine belief that hospitality is an art form.',
  characterParts: PENGO_PARTS,
  position: { x: 7, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good morning. Check-in at two, check-out at eleven. Breakfast until ten, and I am available seven to seven. Anything else?", options: [{ text: "Just browsing." }, { text: "Who owns this hotel?" }] }],
    Afternoon: [{ id: 'start', text: "The hotel has been at capacity every festival for four years. I attribute this to consistency, cleanliness, and a very firm mattress policy.", options: [{ text: "Mattress policy?" }] }],
    Night: [{ id: 'start', text: "Twelve rooms, twelve guests, twelve breakfasts to prepare tomorrow. I find this deeply satisfying.", options: [{ text: "The joy of full capacity." }] }],
  },
};

const NEW_NPC_SLOM: NPC = {
  id: 'slom',
  name: 'Slom',
  species: 'Sloth',
  baseCostume: 'Clerk',
  description: 'A drowsy sloth in hotel clerk uniform who handles the front desk with extreme patience in all directions.',
  characterParts: SLOM_PARTS,
  position: { x: 5, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "......Good morning. Checking in? *long pause* The forms are right here. There's no hurry.", options: [{ text: "Take your time." }] }],
    Afternoon: [{ id: 'start', text: "Someone checked out and thanked me. I believe I said... 'welcome'.", options: [{ text: "Words of the day." }] }],
    Night: [{ id: 'start', text: "Night shift. Much quieter. I prefer it. *very long pause* The lobby has a nice ambiance, don't you think?", options: [{ text: "Very peaceful." }] }],
  },
};

const NEW_NPC_BELL: NPC = {
  id: 'bell',
  name: 'Bell',
  species: 'Raccoon',
  baseCostume: 'Bellhop',
  description: 'A young raccoon bellhop in a red jacket with gold buttons who takes luggage carrying very seriously.',
  characterParts: BELL_PARTS,
  position: { x: 3, y: 3 },
  dialogue: {
    Morning: [{ id: 'start', text: "Can I carry that for you? I can carry multiple things at once. It's my specialty.", options: [{ text: "Very enthusiastic." }] }],
    Afternoon: [{ id: 'start', text: "I've carried eleven bags today. One had a very heavy rock collection. Didn't ask questions. Just carried.", options: [{ text: "Professional." }] }],
    Night: [{ id: 'start', text: "Late arrivals get the best service. I've been told I'm too cheerful at night. I don't know how that's possible.", options: [{ text: "It's a gift." }] }],
  },
};

const NEW_NPC_ARRA: NPC = {
  id: 'arra',
  name: 'Arra',
  species: 'Spider',
  baseCostume: 'Housekeeper',
  description: 'A tidy spider housekeeper with a strong opinion about folded towels.',
  characterParts: ARRA_PARTS,
  position: { x: 10, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "I have cleaned twelve rooms this morning. All twelve have the towels folded correctly. Nilo is still learning the fold.", options: [{ text: "Which fold is correct?" }] }],
    Afternoon: [{ id: 'start', text: "Room nine left their shoes in the middle of the floor. I moved them and left a small note. I'm told the note was 'not standard'. It was helpful.", options: [{ text: "What did it say?" }] }],
    Night: [{ id: 'start', text: "Evening turndown service. The guests don't always notice the chocolate on the pillow. I notice.", options: [{ text: "Details matter." }] }],
  },
};

const NEW_NPC_NILO: NPC = {
  id: 'nilo',
  name: 'Nilo',
  species: 'Spider',
  baseCostume: 'Housekeeper',
  description: 'A younger spider learning housekeeping from Arra, still getting to grips with the towel fold situation.',
  characterParts: NILO_PARTS,
  position: { x: 11, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "I almost got the towel fold right this morning. Arra showed me again. I think I understand. *pause* I don't fully understand.", options: [{ text: "Keep practising." }] }],
    Afternoon: [{ id: 'start', text: "I cleaned my first room completely by myself. Arra said 'acceptable'. That's the best she gives on a first try.", options: [{ text: "You should be proud." }] }],
    Night: [{ id: 'start', text: "I like the evening work. Less pressure to be perfect. More room to try.", options: [{ text: "That's a healthy attitude." }] }],
  },
};

const NEW_NPC_KIKI: NPC = {
  id: 'kiki',
  name: 'Kiki',
  species: 'Parrot',
  baseCostume: 'Tourist',
  description: 'A loud colourful parrot tourist who has opinions about everything and is having the best time.',
  characterParts: KIKI_PARTS,
  position: { x: 4, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "GOOD MORNING! I have been awake since five! I saw the docks! And the bakery! And I got a scone! It was WONDERFUL!", options: [{ text: "That's a lot before noon." }] }],
    Afternoon: [{ id: 'start', text: "I've taken three hundred photos. Yoma says I shouldn't show all of them to people. So here are the twenty best.", options: [{ text: "Let me see." }] }],
    Night: [{ id: 'start', text: "I'm not tired at all. I might do it all again tomorrow.", options: [{ text: "Impressive energy." }] }],
  },
};

const NEW_NPC_YOMA: NPC = {
  id: 'yoma',
  name: 'Yoma',
  species: 'Yak',
  baseCostume: 'Tourist',
  description: 'A large quiet yak travelling with Kiki, Lumo and Lemi. Speaks little, observes much.',
  characterParts: YOMA_PARTS,
  position: { x: 8, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "...*nods*... It's a good island.", options: [{ text: "It is." }] }],
    Afternoon: [{ id: 'start', text: "I had the soup. It was very good. I told the cook. They seemed surprised.", options: [{ text: "Small gestures matter." }] }],
    Night: [{ id: 'start', text: "Kiki is still awake. Lumo is with Lemi. I am here. I don't mind.", options: [{ text: "Sounds familiar." }] }],
  },
};

const NEW_NPC_LUMO: NPC = {
  id: 'lumo',
  name: 'Lumo',
  species: 'Llama',
  baseCostume: 'Tourist',
  description: 'A tall protective llama parent travelling with their son Lemi, trying to balance the festival with keeping track of an enthusiastic child.',
  characterParts: LUMO_PARTS,
  position: { x: 6, y: 7 },
  dialogue: {
    Morning: [{ id: 'start', text: "Lemi! Don't — *sigh* — sorry. He saw the bunting. We have been at the hotel for twelve minutes.", options: [{ text: "Kids at festivals are something." }] }],
    Afternoon: [{ id: 'start', text: "We saw the market, bakery, and half the docks before Lemi needed a nap. Festival parenting is an endurance sport.", options: [{ text: "How's the festival?" }] }],
    Night: [{ id: 'start', text: "Lemi is asleep. He had the best day of his life, apparently. He told me four times.", options: [{ text: "Sounds like a good day." }] }],
  },
};

const NEW_NPC_LEMI: NPC = {
  id: 'lemi',
  name: 'Lemi',
  species: 'Llama',
  baseCostume: 'Tourist',
  description: 'A young llama with enormous eyes and insatiable curiosity about every single thing at the festival.',
  characterParts: LEMI_PARTS,
  position: { x: 8, y: 8 },
  dialogue: {
    Morning: [{ id: 'start', text: "What's that? And THAT? And what does THAT do?", options: [{ text: "This is the town square." }, { text: "Lots of things to explore." }] }],
    Afternoon: [{ id: 'start', text: "I ate a scone AND a festival cookie AND half of Lumo's tart. I feel GREAT!", options: [{ text: "Impressive." }] }],
    Night: [{ id: 'start', text: "I'm not tired. ...okay maybe a little. Tomorrow we're going to the docks first thing.", options: [{ text: "Rest up for it." }] }],
  },
};

// Festival Park
const NEW_NPC_CORVUS: NPC = {
  id: 'corvus',
  name: 'Corvus',
  species: 'Shark',
  baseCostume: 'Warden',
  description: 'A large imposing shark in a green warden vest running the festival clean-up operation. More caring than he looks.',
  characterParts: CORVUS_PARTS,
  position: { x: 8, y: 4 },
  dialogue: {
    Morning: [{ id: 'start', text: "Zero Waste Festival. Twenty-six recycling stations and a composting corner. I am proud of the composting corner.", options: [{ text: "Very impressive setup." }] }],
    Afternoon: [{ id: 'start', text: "Sixty percent waste diverted so far. Zera thinks we'll hit ninety. I told her not to over-promise.", options: [{ text: "Who do you think is right?" }] }],
    Night: [{ id: 'start', text: "Night shift is Panra's domain. I stay late to do the handover. The park has to look right in the morning.", options: [{ text: "You run a tight operation." }] }],
  },
};

const NEW_NPC_ZERA: NPC = {
  id: 'zera',
  name: 'Zera',
  species: 'Zebra',
  baseCostume: 'Volunteer',
  description: 'A cheerful striped zebra in a bright volunteer vest who approaches cleanup with the enthusiasm of someone at a party.',
  characterParts: ZERA_PARTS,
  position: { x: 5, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "Good MORNING! The recycling station is up! The compost is RUNNING! I have collected four full bags and it is not yet ten! THIS IS GREAT!", options: [{ text: "You're very enthusiastic about waste management." }] }],
    Afternoon: [{ id: 'start', text: "I think we can hit ninety percent diversion. Corvus says be realistic. I say optimism is a strategy.", options: [{ text: "How close are you?" }] }],
    Night: [{ id: 'start', text: "Day's haul: twelve bags, three tonnes of compostable material, and one confused tourist who thought the compost bin was a prize box.", options: [{ text: "Eventful." }] }],
  },
};

const NEW_NPC_PANRA: NPC = {
  id: 'panra',
  name: 'Panra',
  species: 'Panther',
  baseCostume: 'Night Watch',
  description: 'A sleek black panther handling overnight security. Almost invisible in the dark. Prefers it that way.',
  characterParts: PANRA_PARTS,
  position: { x: 12, y: 6 },
  dialogue: {
    Morning: [{ id: 'start', text: "Just finished the night shift. Three incidents: dropped ice cream, knocked-over banner, one person asleep in the cleanup tent. All resolved.", options: [{ text: "Quiet night then?" }] }],
    Afternoon: [{ id: 'start', text: "I sleep during the day. Most people find that unusual. I find most people finding that unusual... unusual.", options: [{ text: "Reasonable." }] }],
    Night: [{ id: 'start', text: "My shift. The park looks different at night — more honest, somehow.", options: [{ text: "Good watching." }] }],
  },
};

const NEW_NPC_KITO: NPC = {
  id: 'kito',
  name: 'Kito',
  species: 'Orangutan',
  baseCostume: 'Eco-Reformer',
  description: 'A passionate orangutan in a green eco-volunteer vest who originated the Zero Waste Festival idea.',
  characterParts: KITO_PARTS,
  position: { x: 10, y: 5 },
  dialogue: {
    Morning: [{ id: 'start', text: "This started as a petition. I printed it on recycled paper, obviously. Corvus runs it better than I ever could have. I'm just here to help.", options: [{ text: "It was your idea though." }] }],
    Afternoon: [{ id: 'start', text: "The hardest part is convincing vendors it's better for business. Once they see the numbers, they get it.", options: [{ text: "Numbers do help." }] }],
    Night: [{ id: 'start', text: "I'm updating the impact report for Corvus. Next year will be even better. We always say that. We're always right.", options: [{ text: "That's the spirit." }] }],
  },
};

export const NEW_NPCS_LIST = [
  NEW_NPC_MIRA, NEW_NPC_BRISK, NEW_NPC_OLLO, NEW_NPC_CORBIN,
  NEW_NPC_HESTA, NEW_NPC_MARA, NEW_NPC_GROM, NEW_NPC_VEX,
  NEW_NPC_MELL, NEW_NPC_IVO,
  NEW_NPC_TORQ, NEW_NPC_RHO, NEW_NPC_PIP, NEW_NPC_NYRA, NEW_NPC_VARA, NEW_NPC_NIB, NEW_NPC_TULA, NEW_NPC_DEXT,
  NEW_NPC_LYRA, NEW_NPC_KIRI, NEW_NPC_SIVE, NEW_NPC_GLINT, NEW_NPC_THRI, NEW_NPC_SHADE, NEW_NPC_HEARTH,
  NEW_NPC_VOSS, NEW_NPC_PELLI, NEW_NPC_ELEN, NEW_NPC_LIRA, NEW_NPC_KETT, NEW_NPC_NIRA, NEW_NPC_DREM, NEW_NPC_BRUNE, NEW_NPC_SOOT,
  NEW_NPC_NYX, NEW_NPC_VOX, NEW_NPC_PUFFA, NEW_NPC_PUFFO,
  NEW_NPC_PENGO, NEW_NPC_SLOM, NEW_NPC_BELL, NEW_NPC_ARRA, NEW_NPC_NILO, NEW_NPC_KIKI, NEW_NPC_YOMA, NEW_NPC_LUMO, NEW_NPC_LEMI,
  NEW_NPC_CORVUS, NEW_NPC_ZERA, NEW_NPC_PANRA, NEW_NPC_KITO,
];

// Merge all new NPCs into the main NPCS array so the game engine picks them up
NPCS.push(...NEW_NPCS_LIST);
