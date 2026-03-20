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
  Info,
  RotateCcw,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  Trees,
  Lamp,
  Flower,
  Box,
  MapPin,
  Shirt
} from 'lucide-react';
import { useGameState } from './useGameState';
import { NPCS, LOCATIONS, ITEMS } from './data';
import { NPC, Location, Item, DialogueNode, DialogueOption } from './types';

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
    
    // Check for obstacles
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

  // Check for interactions or transitions
  useEffect(() => {
    // Check NPCs
    const npcAtPos = NPCS.find(n => 
      currentLocation.npcs.includes(n.id) && 
      n.position.x === state.playerPosition.x && 
      n.position.y === state.playerPosition.y
    );
    if (npcAtPos) {
      onInteract(npcAtPos.id);
    }

    // Check Connections
    const connectionAtPos = currentLocation.connections.find(c => 
      c.x === state.playerPosition.x && 
      c.y === state.playerPosition.y
    );
    if (connectionAtPos) {
      setLocation(connectionAtPos.locationId);
    }
  }, [state.playerPosition]);

  const getDecorationIcon = (type: string) => {
    switch (type) {
      case 'tree': return <Trees className="text-emerald-800 w-10 h-10" />;
      case 'lamp': return <Lamp className="text-amber-500 w-8 h-8" />;
      case 'bench': return <div className="w-12 h-4 bg-stone-700 rounded-sm shadow-md" />;
      case 'flower': return <Flower className="text-rose-500 w-5 h-5" />;
      case 'barrel': return <div className="w-10 h-10 bg-amber-900 rounded-full border-2 border-amber-950 shadow-md flex items-center justify-center"><div className="w-6 h-6 border border-amber-800 rounded-full" /></div>;
      case 'crate': return <Box className="text-stone-600 w-9 h-9" />;
      default: return null;
    }
  };

  const getTerrainColor = (locationId: string) => {
    switch (locationId) {
      case 'town_square': return '#fdf6e3'; // Parchment
      case 'bakery': return '#fff9db'; // Warm yellow
      case 'docks': return '#e3f2fd'; // Soft blue
      default: return '#fdf6e3';
    }
  };

  return (
    <div className="relative border-4 border-[#5c3d2e]/20 overflow-hidden rounded-3xl shadow-xl storybook-card" 
         style={{ 
           width: currentLocation.bounds.width * TILE_SIZE, 
           height: currentLocation.bounds.height * TILE_SIZE,
           backgroundColor: getTerrainColor(currentLocation.id)
         }}>
      
      {/* Terrain Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
             backgroundSize: `200px 200px`
           }} />

      {/* Decorations Layer */}
      {currentLocation.decorations?.map(dec => (
        <div key={dec.id} className="absolute flex items-center justify-center pointer-events-none z-0"
             style={{ 
               left: dec.position.x * TILE_SIZE, 
               top: dec.position.y * TILE_SIZE,
               width: TILE_SIZE,
               height: TILE_SIZE
             }}>
          {getDecorationIcon(dec.type)}
        </div>
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
          <div className="w-10 h-10 bg-stone-200/80 rounded-full flex items-center justify-center border-2 border-dashed border-stone-400 group-hover:bg-stone-300 transition-colors">
            <MapPin size={20} className="text-stone-600" />
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold uppercase tracking-wider">
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
            <div className="w-16 h-16 flex items-center justify-center sprite-bob">
              <img 
                src={npc.spriteUrl} 
                alt={npc.name} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-[#5c3d2e]/20 text-[#5c3d2e] text-[10px] px-2 py-0.5 rounded-full font-serif italic shadow-sm whitespace-nowrap">
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
        <div className="relative sprite-bob-delayed">
          <div className="w-16 h-16 flex items-center justify-center">
            <img 
              src={state.activeOutfitId ? ITEMS.find(i => i.id === state.activeOutfitId)?.spriteUrl || state.playerSpriteUrl : state.playerSpriteUrl} 
              alt={state.playerName} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          {state.activeOutfitId && (
            <div className="absolute -top-3 -right-3 w-7 h-7 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center shadow-lg rotate-12">
              <Shirt size={14} className="text-amber-900" />
            </div>
          )}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#5c3d2e] text-white text-[10px] px-2 py-0.5 rounded-full font-serif italic shadow-md">
            {state.playerName}
          </div>
        </div>
      </motion.div>
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
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-6"
        >
          <h1 className="text-4xl font-serif italic">The Festival Ends</h1>
          <p className="text-zinc-400">
            The sun sets on Kraed Maas. The costumes are taken off, but the secrets remain. 
            You failed to save everyone, but you learned something, didn't you?
          </p>
          <button 
            onClick={resetRun}
            className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-xl font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Begin a New Run
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf6e3] text-[#5c3d2e] font-sans selection:bg-[#5c3d2e] selection:text-[#fdf6e3]">
      <div className="vignette" />
      <div className="creepy-overlay" />
      {/* Header */}
      <header className="border-b border-[#5c3d2e]/10 p-4 flex justify-between items-center sticky top-0 bg-[#fdf6e3]/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <h1 className="font-serif italic text-2xl tracking-tight text-[#5c3d2e]">Festival of Disguises</h1>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#5c3d2e] text-[#fdf6e3] rounded-full text-xs font-serif italic">
            <Clock size={14} />
            {state.phase}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 border border-[#5c3d2e]/20 rounded-full text-xs font-serif italic">
            {state.weather === 'Sun' ? <Sun size={14} /> : <CloudRain size={14} />}
            {state.weather}
          </div>
        </div>
        <div className="text-xs font-serif italic opacity-60 flex items-center gap-4">
          <span>{state.playerName} ({state.playerRole})</span>
          <span>Run #{state.runCount}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Navigation Tabs */}
        <nav className="flex gap-2 border-b border-[#141414]/20 pb-4 overflow-x-auto">
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
                  ? 'bg-[#141414] text-[#E4E3E0]' 
                  : 'hover:bg-[#141414]/5'
              }`}
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
                    <h2 className="text-3xl font-serif italic">{currentLocation.name}</h2>
                    <p className="text-zinc-600 leading-relaxed">{currentLocation.description}</p>
                  </div>

                  <WorldView 
                    state={state} 
                    movePlayer={movePlayer} 
                    setLocation={setLocation}
                    onInteract={handleInteract}
                    isDialogueActive={!!activeDialogue}
                  />

                  <div className="p-4 bg-zinc-100 border border-[#141414]/10 rounded-xl text-xs font-mono text-zinc-500 flex items-center gap-4">
                    <Info size={16} />
                    Use WASD or Arrow Keys to move. Walk into NPCs to talk. Walk into exits to travel.
                  </div>
                </div>

                <div className="w-full md:w-64 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-mono text-[11px] uppercase tracking-widest opacity-50">Controls</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div />
                      <button onClick={() => movePlayer(0, -1, currentLocation.bounds)} className="p-3 border border-[#141414] rounded-lg hover:bg-zinc-100 flex items-center justify-center"><MoveUp size={18}/></button>
                      <div />
                      <button onClick={() => movePlayer(-1, 0, currentLocation.bounds)} className="p-3 border border-[#141414] rounded-lg hover:bg-zinc-100 flex items-center justify-center"><MoveLeft size={18}/></button>
                      <button onClick={() => movePlayer(0, 1, currentLocation.bounds)} className="p-3 border border-[#141414] rounded-lg hover:bg-zinc-100 flex items-center justify-center"><MoveDown size={18}/></button>
                      <button onClick={() => movePlayer(1, 0, currentLocation.bounds)} className="p-3 border border-[#141414] rounded-lg hover:bg-zinc-100 flex items-center justify-center"><MoveRight size={18}/></button>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button 
                      onClick={advancePhase}
                      className="w-full p-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2"
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
              {/* Character Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-[#5c3d2e]/10 rounded-3xl bg-white flex flex-col items-center gap-6 shadow-xl storybook-card">
                  <h3 className="font-serif italic text-sm opacity-50">Character Profile</h3>
                  <div className="relative w-48 h-48 flex items-center justify-center sprite-bob-delayed">
                    <img 
                      src={state.activeOutfitId ? ITEMS.find(i => i.id === state.activeOutfitId)?.spriteUrl || state.playerSpriteUrl : state.playerSpriteUrl} 
                      alt="Alex" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-4xl font-serif italic">{state.playerName}</h4>
                    <p className="text-sm font-serif italic opacity-60">{state.playerRole}</p>
                    <div className="flex gap-2 justify-center pt-4">
                      <div className="px-3 py-1 bg-[#fdf6e3] rounded-full text-[10px] font-serif italic border border-[#5c3d2e]/10">Intuition: 8</div>
                      <div className="px-3 py-1 bg-[#fdf6e3] rounded-full text-[10px] font-serif italic border border-[#5c3d2e]/10">Disguise: 5</div>
                      <div className="px-3 py-1 bg-[#fdf6e3] rounded-full text-[10px] font-serif italic border border-[#5c3d2e]/10">Stealth: 4</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 border border-[#5c3d2e]/10 rounded-3xl bg-white space-y-6 shadow-xl storybook-card">
                  <h3 className="font-serif italic text-sm opacity-50">Current Status</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#fdf6e3] rounded-2xl border border-[#5c3d2e]/10">
                      <div className="text-[10px] uppercase font-serif italic opacity-40 mb-1">Active Outfit</div>
                      <div className="text-lg font-serif italic">{state.activeOutfitId ? ITEMS.find(i => i.id === state.activeOutfitId)?.name : 'Default Alex'}</div>
                    </div>
                    <div className="p-4 bg-[#fdf6e3] rounded-2xl border border-[#5c3d2e]/10">
                      <div className="text-[10px] uppercase font-serif italic opacity-40 mb-1">Time Remaining</div>
                      <div className="text-lg font-serif italic">{state.phase === 'Morning' ? '8 Hours' : state.phase === 'Afternoon' ? '4 Hours' : '1 Hour'}</div>
                    </div>
                    <div className="p-4 bg-[#fdf6e3] rounded-2xl border border-[#5c3d2e]/10">
                      <div className="text-[10px] uppercase font-serif italic opacity-40 mb-1">Location</div>
                      <div className="text-lg font-serif italic">{currentLocation.name}</div>
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
                  <h3 className="font-mono text-[11px] uppercase tracking-widest opacity-50">Current Outfit</h3>
                  {state.activeOutfitId ? (
                    <div className="p-6 border-2 border-[#141414] rounded-2xl bg-white space-y-4">
                      {(() => {
                        const outfit = ITEMS.find(i => i.id === state.activeOutfitId)!;
                        return (
                          <>
                            <div className="flex items-center gap-4">
                              <div className="w-20 h-20 flex items-center justify-center">
                                <img 
                                  src={outfit.spriteUrl} 
                                  alt={outfit.name} 
                                  className="w-full h-full object-contain"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div>
                                <h4 className="text-xl font-serif italic">{outfit.name}</h4>
                                <p className="text-sm text-zinc-500">{outfit.description}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => setActiveOutfit(null)}
                              className="w-full py-2 text-xs font-mono border border-[#141414] rounded-lg hover:bg-zinc-100"
                            >
                              Remove Outfit
                            </button>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="p-12 border-2 border-dashed border-[#141414]/20 rounded-2xl flex flex-col items-center justify-center text-center space-y-2">
                      <div className="w-20 h-20 flex items-center justify-center opacity-40">
                        <img 
                          src={state.playerSpriteUrl} 
                          alt="Alex" 
                          className="w-full h-full object-contain grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-sm text-zinc-400">You are wearing your normal clothes.<br/>NPCs will see you as Alex.</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-[11px] uppercase tracking-widest opacity-50">Items & Outfits</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {state.inventory.length === 0 && (
                      <p className="col-span-2 text-sm text-zinc-400 py-8 text-center">Your pockets are empty.</p>
                    )}
                    {state.inventory.map(item => {
                      return (
                        <button
                          key={item.id}
                          onClick={() => item.isOutfit && setActiveOutfit(item.id)}
                          className={`p-4 border rounded-xl flex flex-col gap-2 text-left transition-all ${
                            state.activeOutfitId === item.id 
                              ? 'bg-[#141414] text-[#E4E3E0]' 
                              : 'hover:bg-white'
                          }`}
                        >
                          <div className="w-12 h-12 flex items-center justify-center">
                            <img 
                              src={item.spriteUrl} 
                              alt={item.name} 
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{item.name}</div>
                            {item.isOutfit && <div className="text-[10px] uppercase font-mono opacity-60">Outfit</div>}
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
                <h3 className="font-mono text-[11px] uppercase tracking-widest opacity-50">Knowledge Base</h3>
                <div className="grid grid-cols-1 gap-4">
                  {NPCS.map(npc => {
                    const entry = state.notebook[npc.id];
                    return (
                      <div key={npc.id} className="p-6 border border-[#141414] rounded-2xl bg-white space-y-4">
                        <div className="flex items-center gap-4 border-b border-[#141414]/10 pb-4">
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img 
                              src={npc.spriteUrl} 
                              alt={npc.name} 
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <h4 className="font-serif italic text-lg">{npc.name}</h4>
                            <p className="text-xs font-mono opacity-50">{npc.species}</p>
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
                              <div className="text-[10px] uppercase font-mono opacity-40">{info.label}</div>
                              <div className={`text-sm ${info.discovered ? 'text-zinc-900' : 'text-zinc-300 italic'}`}>
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

      {/* Dialogue Overlay */}
      <AnimatePresence>
        {activeDialogue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end justify-center p-6"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="max-w-2xl w-full bg-[#fffdfa] border border-[#5c3d2e]/20 rounded-3xl shadow-2xl overflow-hidden storybook-card"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center sprite-bob">
                    <img 
                      src={activeDialogue.npc.spriteUrl} 
                      alt={activeDialogue.npc.name} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif italic">{activeDialogue.npc.name}</h3>
                    <p className="text-xs font-serif italic opacity-50">Wearing: {activeDialogue.npc.baseCostume}</p>
                  </div>
                </div>

                <div className="text-2xl leading-relaxed font-serif italic">
                  "{activeDialogue.node.text}"
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {activeDialogue.node.options
                    .filter(opt => !opt.condition || opt.condition(state))
                    .map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="w-full p-4 text-left border border-[#5c3d2e]/10 rounded-2xl hover:bg-[#5c3d2e] hover:text-[#fdf6e3] transition-all flex justify-between items-center group font-serif italic"
                      >
                        <span>{option.text}</span>
                        <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  {activeDialogue.node.options.length === 0 && (
                    <button
                      onClick={() => setActiveDialogue(null)}
                      className="w-full p-4 text-center border border-[#5c3d2e]/10 rounded-2xl hover:bg-[#5c3d2e] hover:text-[#fdf6e3] transition-all font-serif italic"
                    >
                      End Conversation
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
          className="fixed inset-0 bg-zinc-950 z-[100] flex items-center justify-center p-8 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-w-xl space-y-8">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-serif italic text-white"
            >
              Festival of Disguises
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-zinc-400 text-lg leading-relaxed"
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
                className="px-12 py-6 bg-[#5c3d2e] text-[#fdf6e3] rounded-2xl font-serif italic text-2xl hover:bg-[#4a3125] transition-all shadow-xl"
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
