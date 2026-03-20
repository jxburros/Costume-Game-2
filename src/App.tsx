import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  ChefHat,
  Ghost,
  Key,
  Mail,
  User,
  Book,
  Map as MapIcon,
  Sun,
  CloudRain,
  Clock,
  ChevronRight,
  Backpack,
  RotateCcw,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  MapPin,
  Shirt,
  DoorOpen,
  Home
} from 'lucide-react';
import { useGameState } from './useGameState';
import { NPCS, LOCATIONS, ITEMS } from './data';
import { NPC, Location, Item, DialogueNode, DialogueOption, Phase, CharacterParts, Building } from './types';
import CharacterSprite from './CharacterSprite';
import { COSTUME_PARTS_MAP } from './characterParts';

import { GoogleGenAI } from "@google/genai";

const ICON_MAP: Record<string, any> = {
  Shield,
  ChefHat,
  Ghost,
  Key,
  Mail,
  User,
};

const TILE_SIZE = 64;

/* ─── Decoration Components (painted storybook style) ─── */
function DecorationRenderer({ type }: { type: string }) {
  switch (type) {
    case 'tree':
      return <div className="decoration-tree" />;
    case 'lamp':
      return <div className="decoration-lamp" />;
    case 'bench':
      return <div className="decoration-bench" />;
    case 'flower':
      return <div className="decoration-flower" />;
    case 'barrel':
      return <div className="decoration-barrel" />;
    case 'crate':
      return <div className="decoration-crate" />;
    default:
      return null;
  }
}

/* ─── Building Component (multi-tile storybook buildings) ─── */
function BuildingRenderer({ building, tileSize }: { building: Building; tileSize: number }) {
  const { position, size, name, style, doorPosition } = building;
  const widthPx = size.width * tileSize;
  const heightPx = size.height * tileSize;

  return (
    <>
      {/* Building body */}
      <div
        className={`absolute z-[4] building building-${style}`}
        style={{
          left: position.x * tileSize,
          top: position.y * tileSize,
          width: widthPx,
          height: heightPx,
        }}
      >
        {/* Roof */}
        <div className={`building-roof building-roof-${style}`} />
        {/* Windows */}
        <div className="building-windows">
          <div className="building-window" />
          <div className="building-window" />
        </div>
        {/* Sign */}
        <div className="building-sign">
          <span>{name}</span>
        </div>
      </div>
      {/* Door (rendered separately at door position) */}
      <div
        className="absolute z-[5] flex items-end justify-center"
        style={{
          left: doorPosition.x * tileSize,
          top: (position.y + size.height) * tileSize - tileSize * 0.3,
          width: tileSize,
          height: tileSize,
        }}
      >
        <div className={`building-door building-door-${style}`}>
          <div className="door-handle" />
        </div>
      </div>
    </>
  );
}

/* ─── Get ground class based on location ─── */
function getGroundClass(locationId: string): string {
  switch (locationId) {
    case 'town_square': return 'world-ground';
    case 'bakery': return 'world-ground-bakery';
    case 'docks': return 'world-ground-docks';
    default: return 'world-ground';
  }
}

/* ─── Get time-of-day overlay class ─── */
function getTimeOverlay(phase: Phase): string | null {
  switch (phase) {
    case 'Afternoon': return 'world-afternoon-overlay';
    case 'Night': return 'world-night-overlay';
    default: return null;
  }
}

function WorldView({
  state,
  movePlayer,
  setLocation,
  onInteract,
  isDialogueActive
}: {
  state: any;
  movePlayer: any;
  setLocation: any;
  onInteract: (npcId: string) => void;
  isDialogueActive: boolean;
}) {
  const currentLocation = useMemo(() =>
    LOCATIONS.find(l => l.id === state.currentLocation)!,
  [state.currentLocation]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isDialogueActive) return;
    const { width, height } = currentLocation.bounds;

    const isObstacle = (x: number, y: number) => {
      return currentLocation.obstacles?.some(o => o.x === x && o.y === y);
    };

    if (e.key === 'ArrowUp' || e.key === 'w') {
      const nextY = state.playerPosition.y - 1;
      if (nextY >= 0 && !isObstacle(state.playerPosition.x, nextY)) movePlayer(0, -1, currentLocation.bounds);
    }
    if (e.key === 'ArrowDown' || e.key === 's') {
      const nextY = state.playerPosition.y + 1;
      if (nextY < height && !isObstacle(state.playerPosition.x, nextY)) movePlayer(0, 1, currentLocation.bounds);
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') {
      const nextX = state.playerPosition.x - 1;
      if (nextX >= 0 && !isObstacle(nextX, state.playerPosition.y)) movePlayer(-1, 0, currentLocation.bounds);
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
      const nextX = state.playerPosition.x + 1;
      if (nextX < width && !isObstacle(nextX, state.playerPosition.y)) movePlayer(1, 0, currentLocation.bounds);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLocation, state.playerPosition, isDialogueActive]);

  useEffect(() => {
    const npcAtPos = NPCS.find(n =>
      currentLocation.npcs.includes(n.id) &&
      n.position.x === state.playerPosition.x &&
      n.position.y === state.playerPosition.y
    );
    if (npcAtPos) {
      onInteract(npcAtPos.id);
    }

    const connectionAtPos = currentLocation.connections.find(c =>
      c.x === state.playerPosition.x &&
      c.y === state.playerPosition.y
    );
    if (connectionAtPos) {
      setLocation(connectionAtPos.locationId);
    }
  }, [state.playerPosition]);

  // Collect lamp positions for glow effects
  const lampPositions = currentLocation.decorations?.filter(d => d.type === 'lamp') || [];

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[#4a2f1a]/30 ${getGroundClass(currentLocation.id)}`}
         style={{
           width: currentLocation.bounds.width * TILE_SIZE,
           height: currentLocation.bounds.height * TILE_SIZE,
         }}>

      {/* Painted paper texture overlay on world */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-[2]"
           style={{
             backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
             mixBlendMode: 'multiply'
           }} />

      {/* Banner bunting for town square */}
      {currentLocation.id === 'town_square' && <div className="banner-bunting" />}

      {/* Water effect for docks */}
      {currentLocation.id === 'docks' && <div className="water-effect" />}

      {/* Lantern glow effects */}
      {lampPositions.map((lamp, i) => (
        <div key={`glow-${i}`}
             className="lantern-glow"
             style={{
               left: lamp.position.x * TILE_SIZE - 48,
               top: lamp.position.y * TILE_SIZE - 48,
               width: TILE_SIZE + 96,
               height: TILE_SIZE + 96,
             }} />
      ))}

      {/* Decorations Layer */}
      {currentLocation.decorations?.map(dec => (
        <div key={dec.id} className="absolute flex items-center justify-center pointer-events-none z-[3]"
             style={{
               left: dec.position.x * TILE_SIZE,
               top: dec.position.y * TILE_SIZE,
               width: TILE_SIZE,
               height: TILE_SIZE
             }}>
          <DecorationRenderer type={dec.type} />
        </div>
      ))}

      {/* Buildings (overworld) */}
      {currentLocation.buildings?.map(building => (
        <BuildingRenderer key={building.id} building={building} tileSize={TILE_SIZE} />
      ))}

      {/* Connections / Exits */}
      {currentLocation.connections.map((conn, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center z-10 group cursor-pointer"
          whileHover={{ scale: 1.1 }}
          style={{
            left: conn.x * TILE_SIZE,
            top: conn.y * TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE
          }}
          onClick={() => setLocation(conn.locationId)}
        >
          {conn.isDoor ? (
            <div className="door-exit-marker">
              <DoorOpen size={20} className="text-[#f0d9a0]" />
            </div>
          ) : (
            <div className="building-entrance-marker">
              <Home size={16} className="text-[#f0d9a0] drop-shadow-sm" />
            </div>
          )}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2a1e38]/90 text-[#f0d9a0] text-[10px] px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-serif italic border border-[#d4a54a]/30">
            {conn.label}
          </div>
        </motion.div>
      ))}

      {/* NPCs */}
      {NPCS.filter(n => currentLocation.npcs.includes(n.id)).map(npc => (
        <motion.div
          key={npc.id}
          className="absolute z-20 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          style={{
            left: npc.position.x * TILE_SIZE,
            top: npc.position.y * TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE
          }}
          onClick={() => onInteract(npc.id)}
        >
          <div className="relative">
            <div className="w-16 h-16 flex items-center justify-center">
              {npc.characterParts ? (
                <CharacterSprite parts={npc.characterParts} size={64} id={npc.id} />
              ) : (
                <img
                  src={npc.spriteUrl}
                  alt={npc.name}
                  className="w-full h-full object-contain drop-shadow-lg sprite-bob"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
            <div className="character-shadow" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 npc-nametag">
              {npc.name}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Player (Alex) */}
      <motion.div
        className="absolute z-30 flex items-center justify-center pointer-events-none"
        animate={{
          left: state.playerPosition.x * TILE_SIZE,
          top: state.playerPosition.y * TILE_SIZE
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        style={{ width: TILE_SIZE, height: TILE_SIZE }}
      >
        <div className="relative">
          <div className="w-16 h-16 flex items-center justify-center">
            {(() => {
              const activeParts = state.activeOutfitId
                ? COSTUME_PARTS_MAP[state.activeOutfitId] || state.playerParts
                : state.playerParts;
              return <CharacterSprite parts={activeParts} size={64} id="player" />;
            })()}
          </div>
          <div className="character-shadow" />
          {state.activeOutfitId && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4a54a] rounded-full border-2 border-white flex items-center justify-center shadow-lg rotate-12 z-10">
              <Shirt size={12} className="text-[#4a2f1a]" />
            </div>
          )}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 player-nametag">
            {state.playerName}
          </div>
        </div>
      </motion.div>

      {/* Time-of-day overlay */}
      {getTimeOverlay(state.phase) && <div className={getTimeOverlay(state.phase)!} />}

      {/* Rain overlay */}
      {state.weather === 'Rain' && <div className="world-rain-overlay" />}
    </div>
  );
}

export default function App() {
  const {
    state,
    setLocation,
    movePlayer,
    setActiveOutfit,
    advancePhase,
    resetRun,
    updateNotebook,
    addFlag,
    addItem
  } = useGameState();

  const [activeTab, setActiveTab] = useState<'explore' | 'notebook' | 'inventory' | 'character'>('explore');
  const [activeDialogue, setActiveDialogue] = useState<{ npc: NPC; node: DialogueNode } | null>(null);

  const currentLocation = useMemo(() =>
    LOCATIONS.find(l => l.id === state.currentLocation)!,
  [state.currentLocation]);

  const handleInteract = (npcId: string) => {
    const npc = NPCS.find(n => n.id === npcId)!;
    const phaseDialogue = npc.dialogue[state.phase];
    if (phaseDialogue && phaseDialogue.length > 0) {
      const startNode = phaseDialogue.find(node => !node.condition || node.condition(state)) || phaseDialogue[0];
      setActiveDialogue({ npc, node: startNode });
    }
  };

  const handleOptionClick = (option: DialogueOption) => {
    if (option.action) {
      option.action(state);
    }

    if (option.nextNodeId) {
      const nextNode = activeDialogue?.npc.dialogue[state.phase].find(n => n.id === option.nextNodeId);
      if (nextNode) {
        setActiveDialogue({ npc: activeDialogue.npc, node: nextNode });
        return;
      }
    }

    setActiveDialogue(null);
  };

  if (state.isGameOver) {
    return (
      <div className="min-h-screen game-over-bg text-zinc-100 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-6"
        >
          <h1 className="text-5xl font-serif italic text-[#f0d9a0]">The Festival Ends</h1>
          <p className="text-zinc-400 leading-relaxed">
            The sun sets on Kraed Maas. The costumes are taken off, but the secrets remain.
            You failed to save everyone, but you learned something, didn't you?
          </p>
          <button
            onClick={resetRun}
            className="w-full py-4 bg-[#d4a54a] text-[#4a2f1a] rounded-xl font-serif italic font-bold text-lg hover:bg-[#e0b050] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <RotateCcw size={20} />
            Begin a New Run
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5e6c8] text-[#4a2f1a] font-sans selection:bg-[#4a2f1a] selection:text-[#f5e6c8]">
      <div className="vignette" />
      <div className="creepy-overlay" />

      {/* Header */}
      <header className="game-header p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <h1 className="font-serif italic text-2xl tracking-tight text-[#f0d9a0]">Festival of Disguises</h1>
          <div className="phase-badge flex items-center gap-2">
            <Clock size={14} />
            {state.phase}
          </div>
          <div className="phase-badge flex items-center gap-2">
            {state.weather === 'Sun' ? <Sun size={14} /> : <CloudRain size={14} />}
            {state.weather}
          </div>
        </div>
        <div className="text-xs font-serif italic text-[#f0d9a0]/50 flex items-center gap-4">
          <span>{state.playerName} ({state.playerRole})</span>
          <span>Run #{state.runCount}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Navigation Tabs */}
        <nav className="flex gap-2 pb-4">
          {[
            { id: 'explore', icon: MapIcon, label: 'Explore' },
            { id: 'character', icon: User, label: 'Character' },
            { id: 'inventory', icon: Backpack, label: 'Inventory' },
            { id: 'notebook', icon: Book, label: 'Notebook' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'tab-btn-active'
                  : 'tab-btn'
              }`}
              style={activeTab !== tab.id ? { color: '#6b4530' } : {}}
            >
              <tab.icon size={18} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          {activeTab === 'explore' && (
            <motion.div
              key="explore"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="space-y-6 flex-1">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif italic text-[#4a2f1a]">{currentLocation.name}</h2>
                    <p className="text-[#6b4530] leading-relaxed font-serif italic">{currentLocation.description}</p>
                  </div>

                  <WorldView
                    state={state}
                    movePlayer={movePlayer}
                    setLocation={setLocation}
                    onInteract={handleInteract}
                    isDialogueActive={!!activeDialogue}
                  />

                  <div className="p-3 bg-[#2a1e38]/80 rounded-xl text-xs font-mono text-[#f0d9a0]/60 flex items-center gap-3 border border-[#d4a54a]/20">
                    <Home size={14} className="text-[#d4a54a]" />
                    Use WASD or Arrow Keys to move. Walk into NPCs to talk. Walk into doors to enter buildings.
                  </div>
                </div>

                <div className="w-full md:w-64 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif italic text-sm text-[#6b4530]">Controls</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div />
                      <button onClick={() => movePlayer(0, -1, currentLocation.bounds)} className="move-btn flex items-center justify-center"><MoveUp size={18}/></button>
                      <div />
                      <button onClick={() => movePlayer(-1, 0, currentLocation.bounds)} className="move-btn flex items-center justify-center"><MoveLeft size={18}/></button>
                      <button onClick={() => movePlayer(0, 1, currentLocation.bounds)} className="move-btn flex items-center justify-center"><MoveDown size={18}/></button>
                      <button onClick={() => movePlayer(1, 0, currentLocation.bounds)} className="move-btn flex items-center justify-center"><MoveRight size={18}/></button>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={advancePhase}
                      className="w-full phase-advance-btn flex items-center justify-center gap-2"
                    >
                      Wait for {state.phase === 'Morning' ? 'Afternoon' : state.phase === 'Afternoon' ? 'Night' : 'End of Day'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'character' && (
            <motion.div
              key="character"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 storybook-card flex flex-col items-center gap-6">
                  <h3 className="font-serif italic text-sm text-[#6b4530]">Character Profile</h3>
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    {(() => {
                      const activeParts = state.activeOutfitId
                        ? COSTUME_PARTS_MAP[state.activeOutfitId] || state.playerParts
                        : state.playerParts;
                      return <CharacterSprite parts={activeParts} size={192} id="profile" />;
                    })()}
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-4xl font-serif italic text-[#4a2f1a]">{state.playerName}</h4>
                    <p className="text-sm font-serif italic text-[#6b4530]">{state.playerRole}</p>
                    <div className="flex gap-2 justify-center pt-4">
                      <div className="px-3 py-1 bg-[#d4a54a]/20 rounded-full text-[10px] font-serif italic border border-[#d4a54a]/30 text-[#6b4530]">Intuition: 8</div>
                      <div className="px-3 py-1 bg-[#d4a54a]/20 rounded-full text-[10px] font-serif italic border border-[#d4a54a]/30 text-[#6b4530]">Disguise: 5</div>
                      <div className="px-3 py-1 bg-[#d4a54a]/20 rounded-full text-[10px] font-serif italic border border-[#d4a54a]/30 text-[#6b4530]">Stealth: 4</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 storybook-card space-y-6">
                  <h3 className="font-serif italic text-sm text-[#6b4530]">Current Status</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#d4a54a]/10 rounded-2xl border border-[#d4a54a]/20">
                      <div className="text-[10px] uppercase font-serif italic text-[#6b4530]/60 mb-1">Active Outfit</div>
                      <div className="text-lg font-serif italic text-[#4a2f1a]">{state.activeOutfitId ? ITEMS.find(i => i.id === state.activeOutfitId)?.name : 'Default Alex'}</div>
                    </div>
                    <div className="p-4 bg-[#d4a54a]/10 rounded-2xl border border-[#d4a54a]/20">
                      <div className="text-[10px] uppercase font-serif italic text-[#6b4530]/60 mb-1">Time Remaining</div>
                      <div className="text-lg font-serif italic text-[#4a2f1a]">{state.phase === 'Morning' ? '8 Hours' : state.phase === 'Afternoon' ? '4 Hours' : '1 Hour'}</div>
                    </div>
                    <div className="p-4 bg-[#d4a54a]/10 rounded-2xl border border-[#d4a54a]/20">
                      <div className="text-[10px] uppercase font-serif italic text-[#6b4530]/60 mb-1">Location</div>
                      <div className="text-lg font-serif italic text-[#4a2f1a]">{currentLocation.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'inventory' && (
            <motion.div
              key="inventory"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif italic text-sm text-[#6b4530]">Current Outfit</h3>
                  {state.activeOutfitId ? (
                    <div className="p-6 storybook-card border-2 border-[#d4a54a]/40 space-y-4">
                      {(() => {
                        const outfit = ITEMS.find(i => i.id === state.activeOutfitId)!;
                        return (
                          <>
                            <div className="flex items-center gap-4">
                              <div className="w-20 h-20 flex items-center justify-center">
                                {outfit.characterParts ? (
                                  <CharacterSprite parts={outfit.characterParts} size={80} id={`outfit-${outfit.id}`} />
                                ) : (
                                  <img
                                    src={outfit.spriteUrl}
                                    alt={outfit.name}
                                    className="w-full h-full object-contain drop-shadow-md"
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                              </div>
                              <div>
                                <h4 className="text-xl font-serif italic text-[#4a2f1a]">{outfit.name}</h4>
                                <p className="text-sm text-[#6b4530]">{outfit.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => setActiveOutfit(null)}
                              className="w-full py-2 text-xs font-serif italic border border-[#4a2f1a]/30 rounded-lg hover:bg-[#d4a54a]/10 text-[#4a2f1a] transition-colors"
                            >
                              Remove Outfit
                            </button>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="p-12 border-2 border-dashed border-[#d4a54a]/30 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 bg-[#f5e6c8]/50">
                      <div className="w-20 h-20 flex items-center justify-center opacity-40">
                        <CharacterSprite parts={state.playerParts} size={80} id="outfit-none" />
                      </div>
                      <p className="text-sm text-[#6b4530]/60 font-serif italic">You are wearing your normal clothes.<br/>NPCs will see you as Alex.</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif italic text-sm text-[#6b4530]">Items & Outfits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {state.inventory.length === 0 && (
                      <p className="col-span-2 text-sm text-[#6b4530]/40 py-8 text-center font-serif italic">Your pockets are empty.</p>
                    )}
                    {state.inventory.map(item => {
                      return (
                        <button
                          key={item.id}
                          onClick={() => item.isOutfit && setActiveOutfit(item.id)}
                          className={`p-4 rounded-xl flex flex-col gap-2 text-left transition-all info-card ${
                            state.activeOutfitId === item.id
                              ? 'border-2 border-[#d4a54a] bg-[#d4a54a]/10 shadow-lg'
                              : 'hover:shadow-md'
                          }`}
                        >
                          <div className="w-12 h-12 flex items-center justify-center">
                            {item.characterParts ? (
                              <CharacterSprite parts={item.characterParts} size={48} id={`inv-${item.id}`} />
                            ) : (
                              <img
                                src={item.spriteUrl}
                                alt={item.name}
                                className="w-full h-full object-contain"
                                referrerPolicy="no-referrer"
                              />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-serif italic font-medium text-[#4a2f1a]">{item.name}</div>
                            {item.isOutfit && <div className="text-[10px] uppercase font-serif italic text-[#d4a54a]">Outfit</div>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'notebook' && (
            <motion.div
              key="notebook"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="font-serif italic text-sm text-[#6b4530]">Knowledge Base</h3>
                <div className="grid grid-cols-1 gap-4">
                  {NPCS.map(npc => {
                    const entry = state.notebook[npc.id];
                    return (
                      <div key={npc.id} className="p-6 storybook-card space-y-4">
                        <div className="flex items-center gap-4 border-b border-[#4a2f1a]/10 pb-4">
                          <div className="w-16 h-16 flex items-center justify-center">
                            {npc.characterParts ? (
                              <CharacterSprite parts={npc.characterParts} size={64} id={`nb-${npc.id}`} />
                            ) : (
                              <img
                                src={npc.spriteUrl}
                                alt={npc.name}
                                className="w-full h-full object-contain drop-shadow-md"
                                referrerPolicy="no-referrer"
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="font-serif italic text-lg text-[#4a2f1a]">{npc.name}</h4>
                            <p className="text-xs font-serif italic text-[#6b4530]/60">{npc.species}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { label: 'Secret', discovered: entry?.discoveredSecret, value: npc.info.secret },
                            { label: 'Dark Secret', discovered: entry?.discoveredDarkSecret, value: npc.info.darkSecret },
                            { label: 'Rumor', discovered: entry?.discoveredRumor, value: npc.info.rumor },
                            { label: 'False Rumor', discovered: entry?.discoveredFalseRumor, value: npc.info.falseRumor },
                          ].map(info => (
                            <div key={info.label} className="space-y-1">
                              <div className="text-[10px] uppercase font-serif italic text-[#6b4530]/50">{info.label}</div>
                              <div className={`text-sm font-serif italic ${info.discovered ? 'text-[#4a2f1a]' : 'text-[#a89478] italic'}`}>
                                {info.discovered ? info.value : 'Undiscovered'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dialogue Overlay - Dark purple panel matching reference art */}
      <AnimatePresence>
        {activeDialogue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-6"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="max-w-2xl w-full dialogue-panel rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-[#3d2b50] p-2">
                    {activeDialogue.npc.characterParts ? (
                      <CharacterSprite parts={activeDialogue.npc.characterParts} size={72} id={`dlg-${activeDialogue.npc.id}`} />
                    ) : (
                      <img
                        src={activeDialogue.npc.spriteUrl}
                        alt={activeDialogue.npc.name}
                        className="w-full h-full object-contain drop-shadow-lg sprite-bob"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif italic text-[#f0d9a0]">{activeDialogue.npc.name}</h3>
                    <p className="text-xs font-serif italic text-[#f0d9a0]/40">Wearing: {activeDialogue.npc.baseCostume}</p>
                  </div>
                </div>

                <div className="text-xl leading-relaxed font-serif italic text-[#f0d9a0]">
                  "{activeDialogue.node.text}"
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {activeDialogue.node.options
                    .filter(opt => !opt.condition || opt.condition(state))
                    .map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="w-full p-4 text-left dialogue-option rounded-xl flex justify-between items-center group font-serif italic"
                      >
                        <span>{option.text}</span>
                        <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#d4a54a]" />
                      </button>
                    ))}
                  {activeDialogue.node.options.length === 0 && (
                    <button
                      onClick={() => setActiveDialogue(null)}
                      className="w-full p-4 text-center btn-next rounded-xl font-serif italic"
                    >
                      NEXT
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Intro Splash (First Run) */}
      {state.runCount === 1 && state.phase === 'Morning' && !state.flags.has('intro_seen') && (
        <motion.div
          className="fixed inset-0 game-over-bg z-[100] flex items-center justify-center p-8 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-w-xl space-y-8">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-serif italic text-[#f0d9a0]"
            >
              Festival of Disguises
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#f0d9a0]/60 text-lg leading-relaxed font-serif italic"
            >
              On the island of Kraed Maas, everyone is wearing a costume.
              But this year, they believe the masks are real.
              You have one day.
              You will probably fail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center"
            >
              <button
                onClick={() => {
                  addFlag('intro_seen');
                  addItem(ITEMS.find(i => i.id === 'constable_uniform')!);
                }}
                className="px-12 py-6 bg-[#d4a54a] text-[#4a2f1a] rounded-2xl font-serif italic text-2xl font-bold hover:bg-[#e0b050] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Begin the Investigation
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
