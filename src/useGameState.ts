import React, { useState, useEffect, useCallback } from 'react';
// Import the custom player sprite.  Using new URL() allows Vite to bundle
// the image and resolve its final path at runtime.  This pulls in the
// raccoon character from the provided concept art to serve as Alex's default look.
const playerImg = new URL('./assets/player.png', import.meta.url).href;
import { GameState, Phase, Weather, NotebookEntry, Item } from './types';
import { NPCS, LOCATIONS, ITEMS } from './data';

const STORAGE_KEY = 'festival_of_disguises_notebook';

export const useGameState = () => {
  const [state, setState] = useState<GameState>(() => {
    const savedNotebook = localStorage.getItem(STORAGE_KEY);
    return {
      phase: 'Morning',
      weather: Math.random() > 0.5 ? 'Sun' : 'Rain',
      inventory: [],
      activeOutfitId: null,
      // Use our custom raccoon sprite instead of a generic dicebear avatar
      playerSpriteUrl: playerImg,
      playerName: 'Alex',
      playerRole: 'Detective',
      playerPronouns: 'they/them',
      flags: new Set<string>(),
      currentLocation: 'town_square',
      playerPosition: { x: 4, y: 4 },
      notebook: savedNotebook ? JSON.parse(savedNotebook) : {},
      isGameOver: false,
      runCount: 1,
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notebook));
  }, [state.notebook]);

  const advancePhase = useCallback(() => {
    setState(prev => {
      if (prev.phase === 'Morning') return { ...prev, phase: 'Afternoon' };
      if (prev.phase === 'Afternoon') return { ...prev, phase: 'Night' };
      return { ...prev, isGameOver: true };
    });
  }, []);

  const resetRun = useCallback(() => {
    setState(prev => ({
      ...prev,
      phase: 'Morning',
      weather: Math.random() > 0.5 ? 'Sun' : 'Rain',
      inventory: [],
      activeOutfitId: null,
      // Reset to our custom raccoon sprite on new runs
      playerSpriteUrl: playerImg,
      playerName: 'Alex',
      playerRole: 'Detective',
      playerPronouns: 'they/them',
      flags: new Set<string>(),
      currentLocation: 'town_square',
      playerPosition: { x: 4, y: 4 },
      isGameOver: false,
      runCount: prev.runCount + 1,
    }));
  }, []);

  const setLocation = useCallback((locationId: string, x?: number, y?: number) => {
    setState(prev => ({ 
      ...prev, 
      currentLocation: locationId,
      playerPosition: { x: x ?? 4, y: y ?? 4 }
    }));
  }, []);

  const movePlayer = useCallback((dx: number, dy: number, bounds: { width: number, height: number }) => {
    setState(prev => {
      const newX = Math.max(0, Math.min(bounds.width - 1, prev.playerPosition.x + dx));
      const newY = Math.max(0, Math.min(bounds.height - 1, prev.playerPosition.y + dy));
      return { ...prev, playerPosition: { x: newX, y: newY } };
    });
  }, []);

  const addItem = useCallback((item: Item) => {
    setState(prev => ({ ...prev, inventory: [...prev.inventory, item] }));
  }, []);

  const setActiveOutfit = useCallback((outfitId: string | null) => {
    setState(prev => ({ ...prev, activeOutfitId: outfitId }));
  }, []);

  const updateNotebook = useCallback((npcId: string, field: keyof NotebookEntry) => {
    setState(prev => {
      const currentEntry = prev.notebook[npcId] || {
        npcId,
        discoveredSecret: false,
        discoveredDarkSecret: false,
        discoveredRumor: false,
        discoveredFalseRumor: false,
      };
      return {
        ...prev,
        notebook: {
          ...prev.notebook,
          [npcId]: { ...currentEntry, [field]: true },
        },
      };
    });
  }, []);

  const addFlag = useCallback((flag: string) => {
    setState(prev => {
      const newFlags = new Set(prev.flags);
      newFlags.add(flag);
      return { ...prev, flags: newFlags };
    });
  }, []);

  return {
    state,
    advancePhase,
    resetRun,
    setLocation,
    movePlayer,
    addItem,
    setActiveOutfit,
    updateNotebook,
    addFlag,
  };
};
