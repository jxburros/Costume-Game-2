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

export interface Decoration {
  id: string;
  type: 'tree' | 'crate' | 'barrel' | 'flower' | 'bench' | 'lamp';
  position: { x: number; y: number };
}

export interface Location {
  id: string;
  name: string;
  description: string;
  npcs: string[]; // NPC IDs
  connections: { locationId: string; x: number; y: number; label: string }[];
  bounds: { width: number; height: number };
  decorations: Decoration[];
  obstacles: { x: number; y: number }[];
}
