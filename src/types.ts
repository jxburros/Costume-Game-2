import { LucideIcon } from 'lucide-react';

export type Phase = 'Morning' | 'Afternoon' | 'Night';
export type Weather = 'Sun' | 'Rain';

export interface SpriteSheetInfo {
  url: string;
  rows: number;
  cols: number;
  row: number;
  col: number;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  spriteUrl?: string;
  spriteSheet?: SpriteSheetInfo;
  isOutfit?: boolean;
  characterParts?: CharacterParts;
}

export interface NPCInfo {
  secret: string;
  darkSecret: string;
  rumor: string;
  falseRumor: string;
}

export interface DialogueNode {
  id: string;
  text: string;
  options: DialogueOption[];
  condition?: (state: GameState) => boolean;
}

export interface DialogueOption {
  text: string;
  nextNodeId?: string;
  action?: (state: GameState) => void;
  condition?: (state: GameState) => boolean;
}

export interface NPC {
  id: string;
  name: string;
  species: string;
  baseCostume: string;
  description: string;
  spriteUrl: string;
  spriteSheet?: SpriteSheetInfo;
  characterParts?: CharacterParts;
  info: NPCInfo;
  dialogue: {
    [phase in Phase]: DialogueNode[];
  };
  weatherVariants?: {
    [weather in Weather]?: string; // Description or state change
  };
  position: { x: number; y: number };
}

export interface NotebookEntry {
  npcId: string;
  discoveredSecret: boolean;
  discoveredDarkSecret: boolean;
  discoveredRumor: boolean;
  discoveredFalseRumor: boolean;
}

export interface GameState {
  phase: Phase;
  weather: Weather;
  inventory: Item[];
  activeOutfitId: string | null;
  playerSpriteUrl: string;
  playerParts: CharacterParts;
  playerName: string;
  playerRole: string;
  playerPronouns: string;
  flags: Set<string>;
  currentLocation: string;
  playerPosition: { x: number; y: number };
  notebook: Record<string, NotebookEntry>;
  isGameOver: boolean;
  runCount: number;
}

export interface BodyPartStyle {
  /** CSS background (gradient, color, etc.) */
  bg: string;
  /** Width in px */
  w: number;
  /** Height in px */
  h: number;
  /** Border radius CSS value */
  radius?: string;
  /** Extra CSS class names */
  className?: string;
  /** Optional box-shadow */
  shadow?: string;
  /** Optional border */
  border?: string;
  /** Extra details rendered as pseudo-element or child divs */
  details?: { bg: string; w: number; h: number; top: number; left: number; radius?: string }[];
}

export interface CharacterParts {
  head: BodyPartStyle;
  body: BodyPartStyle;
  leftArm: BodyPartStyle;
  rightArm: BodyPartStyle;
  leftLeg: BodyPartStyle;
  rightLeg: BodyPartStyle;
  /** Optional accessory on top of head (hat, crown, etc.) */
  headAccessory?: BodyPartStyle & { offsetY?: number };
  /** Scale multiplier for the whole character (default 1) */
  scale?: number;
}

export interface Decoration {
  id: string;
  type: 'tree' | 'crate' | 'barrel' | 'flower' | 'bench' | 'lamp';
  position: { x: number; y: number };
}

export interface Building {
  id: string;
  name: string;
  /** Top-left tile of the building footprint */
  position: { x: number; y: number };
  /** Size in tiles */
  size: { width: number; height: number };
  /** Where the door is on the grid */
  doorPosition: { x: number; y: number };
  /** Location this building leads to */
  targetLocationId: string;
  /** Visual style */
  style: 'bakery' | 'warehouse' | 'house' | 'tailor' | 'sheriff' | 'coffee' | 'castle';
}

export interface Connection {
  locationId: string;
  x: number;
  y: number;
  label: string;
  /** If true, render as a door instead of a map pin */
  isDoor?: boolean;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  npcs: string[]; // NPC IDs
  connections: Connection[];
  bounds: { width: number; height: number };
  decorations: Decoration[];
  obstacles: { x: number; y: number }[];
  buildings?: Building[];
}
