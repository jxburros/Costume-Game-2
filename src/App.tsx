import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
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
  Home,
  X,
  ChevronUp,
  ChevronDown,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
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

  const isCastle = style === 'castle';

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

        {/* Castle towers */}
        {isCastle && (
          <>
            <div className="castle-tower castle-tower-left" />
            <div className="castle-tower castle-tower-right" />
            <div className="castle-battlement" />
          </>
        )}

        {/* Windows */}
        <div className={`building-windows ${isCastle ? 'building-windows-castle' : ''}`}>
          {isCastle ? (
            <>
              <div className="building-window castle-window" />
              <div className="castle-emblem" />
              <div className="building-window castle-window" />
            </>
          ) : (
            <>
              <div className={`building-window building-window-${style}`} />
              <div className={`building-window building-window-${style}`} />
            </>
          )}
        </div>

        {/* Style-specific details */}
        {style === 'tailor' && <div className="tailor-awning" />}
        {style === 'tailor' && <div className="tailor-fabric-swatches" />}
        {style === 'sheriff' && <div className="sheriff-badge-emblem" />}
        {style === 'coffee' && <div className="coffee-steam" />}
        {style === 'coffee' && <div className="coffee-awning" />}

        {/* Sign */}
        <div className={`building-sign building-sign-${style}`}>
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
          <div className={`door-handle ${isCastle ? 'door-handle-castle' : ''}`} />
          {isCastle && <div className="door-handle door-handle-castle" style={{ left: 4 }} />}
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
    case 'castle_grounds': return 'world-ground-castle';
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

const VIEWPORT_W = 12; // visible tiles wide
const VIEWPORT_H = 10; // visible tiles tall

function isNearby(ax: number, ay: number, bx: number, by: number, maxDist = 1): boolean {
  return Math.abs(ax - bx) + Math.abs(ay - by) <= maxDist;
}
function WorldView({
  state,
  movePlayer,
  setLocation,
  onInteract,
  onInteractKey,
  isDialogueActive
}: {
  state: any;
  movePlayer: any;
  setLocation: any;
  onInteract: (npcId: string) => void;
  onInteractKey: () => void;
  isDialogueActive: boolean;
}) {
  const currentLocation = useMemo(() =>
    LOCATIONS.find(l => l.id === state.currentLocation)!,
  [state.currentLocation]);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const isObstacle = useCallback((x: number, y: number) => {
    return currentLocation.obstacles?.some(o => o.x === x && o.y === y);
  }, [currentLocation]);

  const tryMove = useCallback((dx: number, dy: number) => {
    if (isDialogueActive) return;
    const { width, height } = currentLocation.bounds;
    const nextX = state.playerPosition.x + dx;
    const nextY = state.playerPosition.y + dy;
    if (dx !== 0 && nextX >= 0 && nextX < width && !isObstacle(nextX, state.playerPosition.y)) {
      movePlayer(dx, 0, currentLocation.bounds);
    }
    if (dy !== 0 && nextY >= 0 && nextY < height && !isObstacle(state.playerPosition.x, nextY)) {
      movePlayer(0, dy, currentLocation.bounds);
    }
  }, [isDialogueActive, currentLocation, state.playerPosition, movePlayer, isObstacle]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isDialogueActive) return;
    if (e.key === 'ArrowUp' || e.key === 'w') tryMove(0, -1);
    if (e.key === 'ArrowDown' || e.key === 's') tryMove(0, 1);
    if (e.key === 'ArrowLeft' || e.key === 'a') tryMove(-1, 0);
    if (e.key === 'ArrowRight' || e.key === 'd') tryMove(1, 0);
    if (e.key.toLowerCase() === 'e' || e.key === ' ') {
      e.preventDefault();
      onInteractKey();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLocation, state.playerPosition, isDialogueActive, onInteractKey]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const threshold = 30;

    if (Math.max(absDx, absDy) < threshold) return;

    if (absDx > absDy) {
      tryMove(dx > 0 ? 1 : -1, 0);
    } else {
      tryMove(0, dy > 0 ? 1 : -1);
    }
    touchStartRef.current = null;
  };

  // Collect lamp positions for glow effects
  const lampPositions = currentLocation.decorations?.filter(d => d.type === 'lamp') || [];

  // Camera: center on player, clamped to map edges
  const worldW = currentLocation.bounds.width * TILE_SIZE;
  const worldH = currentLocation.bounds.height * TILE_SIZE;
  const vpW = Math.min(VIEWPORT_W, currentLocation.bounds.width) * TILE_SIZE;
  const vpH = Math.min(VIEWPORT_H, currentLocation.bounds.height) * TILE_SIZE;

  const targetCamX = state.playerPosition.x * TILE_SIZE + TILE_SIZE / 2 - vpW / 2;
  const targetCamY = state.playerPosition.y * TILE_SIZE + TILE_SIZE / 2 - vpH / 2;
  const camX = Math.max(0, Math.min(targetCamX, worldW - vpW));
  const camY = Math.max(0, Math.min(targetCamY, worldH - vpH));

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[#4a2f1a]/30"
      style={{
        width: vpW,
        height: vpH,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
    <motion.div
      className={`absolute ${getGroundClass(currentLocation.id)}`}
      animate={{ x: -camX, y: -camY }}
      transition={{ type: 'spring', stiffness: 300, damping: 35 }}
      style={{
        width: worldW,
        height: worldH,
      }}
    >
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
          {isNearby(state.playerPosition.x, state.playerPosition.y, conn.x, conn.y) && !isDialogueActive && (
            <div className="interact-prompt">E</div>
          )}
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
            {isNearby(state.playerPosition.x, state.playerPosition.y, npc.position.x, npc.position.y) && !isDialogueActive && (
              <div className="interact-prompt">E</div>
            )}
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
    </motion.div>
    </div>
  );
}

/* ─── Overlay D-Pad ─── */
function DPad({ onMove, onInteract }: { onMove: (dx: number, dy: number) => void; onInteract: () => void }) {
  return (
    <div className="dpad-container">
      <div className="dpad-grid">
        <div />
        <button className="dpad-btn" onClick={() => onMove(0, -1)} aria-label="Move up">
          <ChevronUp size={22} />
        </button>
        <div />
        <button className="dpad-btn" onClick={() => onMove(-1, 0)} aria-label="Move left">
          <ChevronLeftIcon size={22} />
        </button>
        <button className="dpad-interact-btn" onClick={onInteract} aria-label="Interact">
          E
        </button>
        <button className="dpad-btn" onClick={() => onMove(1, 0)} aria-label="Move right">
          <ChevronRightIcon size={22} />
        </button>
        <div />
        <button className="dpad-btn" onClick={() => onMove(0, 1)} aria-label="Move down">
          <ChevronDown size={22} />
        </button>
        <div />
      </div>
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

  const [openPanel, setOpenPanel] = useState<'character' | 'notebook' | 'inventory' | null>(null);
  const [activeDialogue, setActiveDialogue] = useState<{ npc: NPC; node: DialogueNode } | null>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const currentLocation = useMemo(() =>
    LOCATIONS.find(l => l.id === state.currentLocation)!,
  [state.currentLocation]);

  // Auto-scale the viewport to fill available space
  useEffect(() => {
    const updateScale = () => {
      if (!gameContainerRef.current) return;
      const container = gameContainerRef.current;
      const availableW = container.clientWidth;
      const availableH = container.clientHeight;
      const vpW = Math.min(VIEWPORT_W, currentLocation.bounds.width) * TILE_SIZE;
      const vpH = Math.min(VIEWPORT_H, currentLocation.bounds.height) * TILE_SIZE;
      const newScale = Math.min(availableW / vpW, availableH / vpH, 1.5);
      setScale(Math.max(newScale, 0.5));
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [currentLocation]);

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

  const handleDPadMove = useCallback((dx: number, dy: number) => {
    movePlayer(dx, dy, currentLocation.bounds);
  }, [movePlayer, currentLocation]);

  const triggerNearbyInteraction = useCallback(() => {
    if (activeDialogue) return;
    const px = state.playerPosition.x;
    const py = state.playerPosition.y;
    const nearbyNpc = NPCS.find(n =>
      currentLocation.npcs.includes(n.id) &&
      isNearby(px, py, n.position.x, n.position.y)
    );
    if (nearbyNpc) {
      handleInteract(nearbyNpc.id);
      return;
    }
    const nearbyConn = currentLocation.connections.find(c =>
      isNearby(px, py, c.x, c.y)
    );
    if (nearbyConn) {
      setLocation(nearbyConn.locationId);
    }
  }, [activeDialogue, state.playerPosition, currentLocation, handleInteract, setLocation]);

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
    <div className="game-shell">
      {/* Compact top HUD bar */}
      <header className="game-hud">
        <h1 className="font-serif italic text-base tracking-tight text-[#f0d9a0] truncate">Festival of Disguises</h1>
        <div className="hud-badges">
          <div className="hud-badge">
            <Clock size={12} />
            {state.phase}
          </div>
          <div className="hud-badge">
            {state.weather === 'Sun' ? <Sun size={12} /> : <CloudRain size={12} />}
            {state.weather}
          </div>
          <div className="hud-badge hud-badge-muted">
            {state.playerName}
          </div>
        </div>
      </header>

      {/* Location name floating label */}
      <div className="location-label">
        <MapPin size={12} className="text-[#d4a54a]" />
        <span>{currentLocation.name}</span>
      </div>

      {/* Game viewport - fills remaining space */}
      <div ref={gameContainerRef} className="game-viewport">
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
          <WorldView
            state={state}
            movePlayer={movePlayer}
            setLocation={setLocation}
            onInteract={handleInteract}
            onInteractKey={triggerNearbyInteraction}
            isDialogueActive={!!activeDialogue}
          />
        </div>
      </div>

      {/* Floating D-pad (bottom right) */}
      <DPad onMove={handleDPadMove} onInteract={triggerNearbyInteraction} />

      {/* Floating toolbar (bottom left) */}
      <div className="floating-toolbar">
        {[
          { id: 'character' as const, icon: User, label: 'Character' },
          { id: 'inventory' as const, icon: Backpack, label: 'Inventory' },
          { id: 'notebook' as const, icon: Book, label: 'Notebook' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setOpenPanel(openPanel === tab.id ? null : tab.id)}
            className={`toolbar-btn ${openPanel === tab.id ? 'toolbar-btn-active' : ''}`}
            aria-label={tab.label}
            title={tab.label}
          >
            <tab.icon size={20} />
          </button>
        ))}
        <div className="toolbar-divider" />
        <button
          onClick={advancePhase}
          className="toolbar-btn toolbar-btn-phase"
          aria-label="Advance time"
          title={`Wait for ${state.phase === 'Morning' ? 'Afternoon' : state.phase === 'Afternoon' ? 'Night' : 'End of Day'}`}
        >
          <Clock size={20} />
        </button>
      </div>

      {/* Slide-out panel */}
      <AnimatePresence>
        {openPanel && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="slide-panel"
          >
            <div className="slide-panel-header">
              <h2 className="font-serif italic text-lg text-[#f0d9a0]">
                {openPanel === 'character' ? 'Character' : openPanel === 'inventory' ? 'Inventory' : 'Notebook'}
              </h2>
              <button onClick={() => setOpenPanel(null)} className="slide-panel-close">
                <X size={18} />
              </button>
            </div>

            <div className="slide-panel-body">
              {openPanel === 'character' && (
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-3 p-4">
                    <div className="w-32 h-32 flex items-center justify-center">
                      {(() => {
                        const activeParts = state.activeOutfitId
                          ? COSTUME_PARTS_MAP[state.activeOutfitId] || state.playerParts
                          : state.playerParts;
                        return <CharacterSprite parts={activeParts} size={128} id="profile" />;
                      })()}
                    </div>
                    <h4 className="text-2xl font-serif italic text-[#f0d9a0]">{state.playerName}</h4>
                    <p className="text-xs font-serif italic text-[#f0d9a0]/50">{state.playerRole}</p>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <div className="stat-badge">Intuition: 8</div>
                      <div className="stat-badge">Disguise: 5</div>
                      <div className="stat-badge">Stealth: 4</div>
                    </div>
                  </div>
                  <div className="space-y-2 px-2">
                    <div className="panel-info-row">
                      <span className="panel-info-label">Outfit</span>
                      <span className="panel-info-value">{state.activeOutfitId ? ITEMS.find(i => i.id === state.activeOutfitId)?.name : 'Default'}</span>
                    </div>
                    <div className="panel-info-row">
                      <span className="panel-info-label">Time</span>
                      <span className="panel-info-value">{state.phase === 'Morning' ? '8 Hours' : state.phase === 'Afternoon' ? '4 Hours' : '1 Hour'}</span>
                    </div>
                    <div className="panel-info-row">
                      <span className="panel-info-label">Location</span>
                      <span className="panel-info-value">{currentLocation.name}</span>
                    </div>
                    <div className="panel-info-row">
                      <span className="panel-info-label">Run</span>
                      <span className="panel-info-value">#{state.runCount}</span>
                    </div>
                  </div>
                </div>
              )}

              {openPanel === 'inventory' && (
                <div className="space-y-4 px-2">
                  {/* Current outfit */}
                  {state.activeOutfitId ? (
                    <div className="panel-card panel-card-highlight">
                      {(() => {
                        const outfit = ITEMS.find(i => i.id === state.activeOutfitId)!;
                        return (
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center shrink-0">
                              {outfit.characterParts ? (
                                <CharacterSprite parts={outfit.characterParts} size={56} id={`outfit-${outfit.id}`} />
                              ) : (
                                <img src={outfit.spriteUrl} alt={outfit.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-serif italic text-[#f0d9a0] truncate">{outfit.name}</div>
                              <div className="text-[10px] text-[#d4a54a]">WEARING</div>
                            </div>
                            <button
                              onClick={() => setActiveOutfit(null)}
                              className="text-[10px] text-[#f0d9a0]/50 border border-[#f0d9a0]/20 rounded-lg px-2 py-1 hover:bg-[#f0d9a0]/10"
                            >
                              Remove
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="panel-card text-center text-sm text-[#f0d9a0]/40 font-serif italic py-4">
                      No outfit equipped
                    </div>
                  )}

                  <div className="space-y-2">
                    {state.inventory.length === 0 && (
                      <p className="text-sm text-[#f0d9a0]/30 py-6 text-center font-serif italic">Your pockets are empty.</p>
                    )}
                    {state.inventory.map(item => (
                      <button
                        key={item.id}
                        onClick={() => item.isOutfit && setActiveOutfit(item.id)}
                        className={`panel-card w-full text-left flex items-center gap-3 ${
                          state.activeOutfitId === item.id ? 'panel-card-highlight' : ''
                        }`}
                      >
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                          {item.characterParts ? (
                            <CharacterSprite parts={item.characterParts} size={40} id={`inv-${item.id}`} />
                          ) : (
                            <img src={item.spriteUrl} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-serif italic text-[#f0d9a0] truncate">{item.name}</div>
                          {item.isOutfit && <div className="text-[10px] text-[#d4a54a]">OUTFIT</div>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {openPanel === 'notebook' && (
                <div className="space-y-3 px-2">
                  {NPCS.map(npc => {
                    const entry = state.notebook[npc.id];
                    return (
                      <div key={npc.id} className="panel-card space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            {npc.characterParts ? (
                              <CharacterSprite parts={npc.characterParts} size={40} id={`nb-${npc.id}`} />
                            ) : (
                              <img src={npc.spriteUrl} alt={npc.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-serif italic text-sm text-[#f0d9a0] truncate">{npc.name}</h4>
                            <p className="text-[10px] text-[#f0d9a0]/40">{npc.species}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: 'Secret', discovered: entry?.discoveredSecret, value: npc.info.secret },
                            { label: 'Dark Secret', discovered: entry?.discoveredDarkSecret, value: npc.info.darkSecret },
                            { label: 'Rumor', discovered: entry?.discoveredRumor, value: npc.info.rumor },
                            { label: 'False Rumor', discovered: entry?.discoveredFalseRumor, value: npc.info.falseRumor },
                          ].map(info => (
                            <div key={info.label}>
                              <div className="text-[9px] uppercase text-[#f0d9a0]/30">{info.label}</div>
                              <div className={`text-[11px] font-serif italic leading-tight ${info.discovered ? 'text-[#f0d9a0]' : 'text-[#f0d9a0]/20'}`}>
                                {info.discovered ? info.value : '???'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialogue Overlay */}
      <AnimatePresence>
        {activeDialogue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="max-w-2xl w-full dialogue-panel rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-[#3d2b50] p-2 shrink-0">
                    {activeDialogue.npc.characterParts ? (
                      <CharacterSprite parts={activeDialogue.npc.characterParts} size={56} id={`dlg-${activeDialogue.npc.id}`} />
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
                    <h3 className="text-xl sm:text-3xl font-serif italic text-[#f0d9a0]">{activeDialogue.npc.name}</h3>
                    <p className="text-[10px] sm:text-xs font-serif italic text-[#f0d9a0]/40">Wearing: {activeDialogue.npc.baseCostume}</p>
                  </div>
                </div>

                <div className="text-base sm:text-xl leading-relaxed font-serif italic text-[#f0d9a0]">
                  "{activeDialogue.node.text}"
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {activeDialogue.node.options
                    .filter(opt => !opt.condition || opt.condition(state))
                    .map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="w-full p-3 sm:p-4 text-left dialogue-option rounded-xl flex justify-between items-center group font-serif italic text-sm sm:text-base"
                      >
                        <span>{option.text}</span>
                        <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#d4a54a]" />
                      </button>
                    ))}
                  {activeDialogue.node.options.length === 0 && (
                    <button
                      onClick={() => setActiveDialogue(null)}
                      className="w-full p-3 sm:p-4 text-center btn-next rounded-xl font-serif italic"
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
          className="fixed inset-0 game-over-bg z-[100] flex items-center justify-center p-6 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="max-w-xl space-y-8">
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl sm:text-6xl font-serif italic text-[#f0d9a0]"
            >
              Festival of Disguises
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#f0d9a0]/60 text-base sm:text-lg leading-relaxed font-serif italic"
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
                className="px-8 py-5 sm:px-12 sm:py-6 bg-[#d4a54a] text-[#4a2f1a] rounded-2xl font-serif italic text-xl sm:text-2xl font-bold hover:bg-[#e0b050] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
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
