import { CharacterParts } from './types';

/* ─── Paper Cut-Out Character Definitions ───
 *
 * Each character is built from separate body parts (head, body, arms, legs)
 * styled with gradients and shapes to match the storybook paper-cutout aesthetic.
 * Parts animate independently via CSS (see index.css char-* classes).
 */

// ─── Alex (Raccoon Detective) ───
export const ALEX_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 45%, #8a8a8a 0%, #5a5a5a 70%, #3a3a3a 100%)',
    w: 22,
    h: 20,
    radius: '50% 50% 45% 45%',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Left eye (mask marking)
      { bg: '#2a2a2a', w: 6, h: 5, top: 7, left: 3, radius: '50%' },
      // Right eye (mask marking)
      { bg: '#2a2a2a', w: 6, h: 5, top: 7, left: 13, radius: '50%' },
      // Left eye pupil
      { bg: '#f0d9a0', w: 3, h: 3, top: 8, left: 5, radius: '50%' },
      // Right eye pupil
      { bg: '#f0d9a0', w: 3, h: 3, top: 8, left: 15, radius: '50%' },
      // Nose
      { bg: '#1a1a1a', w: 4, h: 3, top: 12, left: 9, radius: '50%' },
      // Left ear
      { bg: '#6a6a6a', w: 6, h: 6, top: -3, left: 1, radius: '50% 50% 30% 30%' },
      // Right ear
      { bg: '#6a6a6a', w: 6, h: 6, top: -3, left: 15, radius: '50% 50% 30% 30%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #6b5540 0%, #5a4530 60%, #4a3520 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Coat lapels
      { bg: 'rgba(212, 165, 74, 0.4)', w: 3, h: 10, top: 2, left: 2, radius: '2px' },
      { bg: 'rgba(212, 165, 74, 0.4)', w: 3, h: 10, top: 2, left: 13, radius: '2px' },
      // Belt
      { bg: '#3a2a1a', w: 18, h: 2, top: 14, left: 0, radius: '1px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #6b5540 0%, #5a4530 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Paw
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #6b5540 0%, #5a4530 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Paw
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #4a3520 0%, #3a2510 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #4a3520 0%, #3a2510 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
  },
  headAccessory: {
    // Detective hat
    bg: 'linear-gradient(180deg, #4a3520 0%, #3a2510 100%)',
    w: 24,
    h: 8,
    radius: '8px 8px 2px 2px',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    offsetY: 6,
    details: [
      // Hat brim
      { bg: '#3a2510', w: 28, h: 3, top: 5, left: -2, radius: '4px' },
    ],
  },
};

// ─── King Arctos (Lion - King costume) ───
export const KING_ARCTOS_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e8c060 0%, #c49530 60%, #a07828 100%)',
    w: 26,
    h: 24,
    radius: '50%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      // Mane (big fluffy circle behind)
      { bg: 'radial-gradient(circle, #c49530 0%, #8a6020 100%)', w: 32, h: 30, top: -3, left: -3, radius: '50%' },
      // Face overlay
      { bg: 'radial-gradient(ellipse, #e8c060 0%, #d4a54a 100%)', w: 20, h: 18, top: 4, left: 3, radius: '50%' },
      // Left eye
      { bg: '#2a1e10', w: 4, h: 4, top: 9, left: 6, radius: '50%' },
      // Right eye
      { bg: '#2a1e10', w: 4, h: 4, top: 9, left: 16, radius: '50%' },
      // Nose
      { bg: '#8a6020', w: 5, h: 3, top: 14, left: 10, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #5a3870 0%, #4a2860 60%, #3d2050 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 5px rgba(0,0,0,0.2)',
    details: [
      // Gold trim/sash
      { bg: 'linear-gradient(180deg, #d4a54a, #c49530)', w: 4, h: 18, top: 1, left: 8, radius: '2px' },
      // Gold buttons
      { bg: '#d4a54a', w: 3, h: 3, top: 4, left: 9, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 10, left: 9, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #5a3870 0%, #4a2860 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Paw
      { bg: '#e8c060', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #5a3870 0%, #4a2860 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e8c060', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #3d2050 0%, #2d1540 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Shoe
      { bg: '#1a1a1a', w: 9, h: 4, top: 6, left: -1, radius: '2px 4px 4px 2px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #3d2050 0%, #2d1540 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 9, h: 4, top: 6, left: 0, radius: '4px 2px 2px 4px' },
    ],
  },
  headAccessory: {
    // Crown
    bg: 'linear-gradient(180deg, #d4a54a 0%, #c49530 100%)',
    w: 20,
    h: 10,
    radius: '2px',
    shadow: '0 2px 6px rgba(212, 165, 74, 0.5)',
    offsetY: 5,
    details: [
      // Crown points
      { bg: '#d4a54a', w: 4, h: 5, top: -4, left: 2, radius: '2px 2px 0 0' },
      { bg: '#d4a54a', w: 4, h: 6, top: -5, left: 8, radius: '2px 2px 0 0' },
      { bg: '#d4a54a', w: 4, h: 5, top: -4, left: 14, radius: '2px 2px 0 0' },
      // Jewel
      { bg: '#c44a3a', w: 3, h: 3, top: 2, left: 9, radius: '50%' },
    ],
  },
  scale: 1.05,
};

// ─── Fennel (Deer - Constable costume) ───
export const FENNEL_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #c4956a 0%, #a07848 60%, #8a6438 100%)',
    w: 22,
    h: 20,
    radius: '48% 48% 45% 45%',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Left ear (deer, wide)
      { bg: '#b08858', w: 7, h: 6, top: -3, left: -1, radius: '50% 30% 10% 50%' },
      // Right ear (deer, wide)
      { bg: '#b08858', w: 7, h: 6, top: -3, left: 16, radius: '30% 50% 50% 10%' },
      // Inner ear
      { bg: '#e0b898', w: 4, h: 3, top: -1, left: 1, radius: '50%' },
      { bg: '#e0b898', w: 4, h: 3, top: -1, left: 17, radius: '50%' },
      // Left eye
      { bg: '#2a2a1a', w: 4, h: 5, top: 7, left: 4, radius: '50%' },
      // Right eye
      { bg: '#2a2a1a', w: 4, h: 5, top: 7, left: 14, radius: '50%' },
      // Eye shine
      { bg: '#fff', w: 2, h: 2, top: 7, left: 5, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 15, radius: '50%' },
      // Nose
      { bg: '#5a3a2a', w: 5, h: 3, top: 13, left: 9, radius: '50%' },
      // Left antler
      { bg: '#6a4a2a', w: 3, h: 8, top: -7, left: 3, radius: '3px 3px 1px 1px' },
      { bg: '#6a4a2a', w: 5, h: 2, top: -5, left: 1, radius: '2px' },
      // Right antler
      { bg: '#6a4a2a', w: 3, h: 8, top: -7, left: 16, radius: '3px 3px 1px 1px' },
      { bg: '#6a4a2a', w: 5, h: 2, top: -5, left: 16, radius: '2px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 60%, #0a2a6a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Gold buttons
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 8, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 13, left: 8, radius: '50%' },
      // Badge
      { bg: '#d4a54a', w: 5, h: 5, top: 2, left: 2, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Hoof
      { bg: '#5a3a2a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#5a3a2a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #1a2a5a 0%, #0a1a4a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Hoof
      { bg: '#3a2a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #1a2a5a 0%, #0a1a4a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#3a2a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  headAccessory: {
    // Constable helmet
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 100%)',
    w: 24,
    h: 10,
    radius: '50% 50% 4px 4px',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    offsetY: 5,
    details: [
      // Badge on helmet
      { bg: '#d4a54a', w: 5, h: 5, top: 2, left: 10, radius: '50%' },
    ],
  },
  scale: 0.95,
};

// ─── Bramm (Bear - Baker costume) ───
export const BRAMM_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #8b6040 0%, #6a4830 60%, #5a3820 100%)',
    w: 24,
    h: 22,
    radius: '50% 50% 45% 45%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      // Left ear (round bear ear)
      { bg: '#7a5838', w: 8, h: 8, top: -4, left: 0, radius: '50%' },
      // Right ear (round bear ear)
      { bg: '#7a5838', w: 8, h: 8, top: -4, left: 16, radius: '50%' },
      // Inner ear
      { bg: '#a07050', w: 5, h: 5, top: -2, left: 2, radius: '50%' },
      { bg: '#a07050', w: 5, h: 5, top: -2, left: 17, radius: '50%' },
      // Muzzle
      { bg: '#a08060', w: 12, h: 8, top: 11, left: 6, radius: '50%' },
      // Left eye
      { bg: '#1a1a1a', w: 4, h: 4, top: 7, left: 5, radius: '50%' },
      // Right eye
      { bg: '#1a1a1a', w: 4, h: 4, top: 7, left: 15, radius: '50%' },
      // Eye shine
      { bg: '#fff', w: 2, h: 2, top: 7, left: 6, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 16, radius: '50%' },
      // Nose
      { bg: '#2a1a0a', w: 5, h: 4, top: 12, left: 10, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 60%, #d8ccb8 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      // Apron
      { bg: '#fff', w: 14, h: 16, top: 2, left: 3, radius: '2px 2px 4px 4px' },
      // Flour stains
      { bg: 'rgba(255,255,255,0.6)', w: 5, h: 3, top: 6, left: 5, radius: '50%' },
      { bg: 'rgba(255,255,255,0.5)', w: 4, h: 3, top: 11, left: 9, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Paw
      { bg: '#6a4830', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#6a4830', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #5a3820 0%, #4a2810 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#3a1a0a', w: 9, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #5a3820 0%, #4a2810 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#3a1a0a', w: 9, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  headAccessory: {
    // Chef hat (toque)
    bg: 'linear-gradient(180deg, #fff 0%, #f0e8d8 100%)',
    w: 22,
    h: 14,
    radius: '50% 50% 4px 4px',
    shadow: '0 2px 4px rgba(0,0,0,0.12)',
    offsetY: 6,
    details: [
      // Poofy top
      { bg: '#fff', w: 20, h: 10, top: -6, left: 1, radius: '50%' },
    ],
  },
  scale: 1.0,
};

// ─── Dagan (Tiger - Dock Foreman costume) ───
export const DAGAN_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e0a040 0%, #c08030 60%, #a06820 100%)',
    w: 24,
    h: 22,
    radius: '48% 48% 45% 45%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      // Tiger stripes on forehead
      { bg: '#3a2010', w: 2, h: 5, top: 2, left: 7, radius: '1px' },
      { bg: '#3a2010', w: 2, h: 5, top: 2, left: 15, radius: '1px' },
      { bg: '#3a2010', w: 2, h: 4, top: 3, left: 11, radius: '1px' },
      // Left ear (rounded)
      { bg: '#c08030', w: 7, h: 6, top: -3, left: 1, radius: '50% 50% 20% 20%' },
      // Right ear (rounded)
      { bg: '#c08030', w: 7, h: 6, top: -3, left: 16, radius: '50% 50% 20% 20%' },
      // Inner ear
      { bg: '#e0c0a0', w: 4, h: 3, top: -1, left: 3, radius: '50%' },
      { bg: '#e0c0a0', w: 4, h: 3, top: -1, left: 17, radius: '50%' },
      // White muzzle area
      { bg: '#f0e0d0', w: 12, h: 8, top: 11, left: 6, radius: '50%' },
      // Left eye
      { bg: '#2a2a1a', w: 4, h: 4, top: 7, left: 5, radius: '50%' },
      // Right eye
      { bg: '#2a2a1a', w: 4, h: 4, top: 7, left: 15, radius: '50%' },
      // Nose
      { bg: '#5a3020', w: 5, h: 3, top: 12, left: 10, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #5a4a3a 0%, #4a3a2a 60%, #3a2a1a 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 5px rgba(0,0,0,0.2)',
    details: [
      // Vest/work shirt
      { bg: '#7a6a5a', w: 16, h: 16, top: 2, left: 2, radius: '3px' },
      // Rope belt
      { bg: '#a08860', w: 20, h: 2, top: 16, left: 0, radius: '1px' },
      // Dock foreman badge
      { bg: '#c49530', w: 4, h: 4, top: 3, left: 3, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #5a4a3a 0%, #4a3a2a 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Paw
      { bg: '#e0a040', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #5a4a3a 0%, #4a3a2a 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e0a040', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #4a3a2a 0%, #3a2a1a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Work boot
      { bg: '#2a1a0a', w: 10, h: 5, top: 5, left: -1, radius: '3px 4px 4px 3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #4a3a2a 0%, #3a2a1a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 10, h: 5, top: 5, left: -1, radius: '4px 3px 3px 4px' },
    ],
  },
  headAccessory: {
    // Dock foreman cap
    bg: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%)',
    w: 26,
    h: 8,
    radius: '4px 4px 2px 2px',
    shadow: '0 2px 4px rgba(0,0,0,0.25)',
    offsetY: 4,
    details: [
      // Cap brim
      { bg: '#2a2a2a', w: 28, h: 3, top: 5, left: -1, radius: '4px' },
    ],
  },
  scale: 1.05,
};

// ─── Costume Overrides ───
// When player wears a costume, these parts replace/modify the base Alex parts

// ─── Ivelle (Crane - Mourning Widow costume) ───
export const IVELLE_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 40%, #f0f0f0 0%, #d8d8e0 60%, #c0c0cc 100%)',
    w: 18,
    h: 22,
    radius: '40% 40% 35% 35%',
    shadow: '0 2px 4px rgba(0,0,0,0.15)',
    details: [
      // Long beak
      { bg: 'linear-gradient(180deg, #d4a050 0%, #c08030 100%)', w: 6, h: 12, top: 10, left: 6, radius: '3px 3px 2px 2px' },
      // Left eye
      { bg: '#1a1a2a', w: 3, h: 4, top: 6, left: 3, radius: '50%' },
      // Right eye
      { bg: '#1a1a2a', w: 3, h: 4, top: 6, left: 12, radius: '50%' },
      // Eye shine
      { bg: '#fff', w: 1, h: 1, top: 6, left: 4, radius: '50%' },
      { bg: '#fff', w: 1, h: 1, top: 6, left: 13, radius: '50%' },
      // Red crest
      { bg: '#c44a3a', w: 4, h: 4, top: -2, left: 7, radius: '50% 50% 30% 30%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #2a2a3a 0%, #1a1a2a 60%, #101020 100%)',
    w: 16,
    h: 18,
    radius: '5px 5px 3px 3px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Mourning shawl
      { bg: 'rgba(80,60,100,0.4)', w: 14, h: 8, top: 0, left: 1, radius: '3px 3px 50% 50%' },
      // Brooch
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 7, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #2a2a3a 0%, #1a1a2a 100%)',
    w: 6,
    h: 14,
    radius: '3px 3px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Wing tip feathers
      { bg: '#f0f0f0', w: 6, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #2a2a3a 0%, #1a1a2a 100%)',
    w: 6,
    h: 14,
    radius: '3px 3px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#f0f0f0', w: 6, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #d4a050 0%, #c08030 100%)',
    w: 4,
    h: 12,
    radius: '2px 2px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #d4a050 0%, #c08030 100%)',
    w: 4,
    h: 12,
    radius: '2px 2px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
  },
  headAccessory: {
    // Black mourning veil
    bg: 'linear-gradient(180deg, #1a1a2a 0%, rgba(26,26,42,0.6) 100%)',
    w: 20,
    h: 10,
    radius: '4px 4px 50% 50%',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    offsetY: 5,
  },
  scale: 0.95,
};

// ─── Prince Lio (Lion - Tailor's Apprentice costume) ───
export const PRINCE_LIO_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e8c060 0%, #c49530 60%, #a07828 100%)',
    w: 22,
    h: 20,
    radius: '50%',
    shadow: '0 2px 4px rgba(0,0,0,0.18)',
    details: [
      // Mane (smaller/younger than king)
      { bg: 'radial-gradient(circle, #d4a54a 0%, #a07828 100%)', w: 26, h: 24, top: -2, left: -2, radius: '50%' },
      // Face overlay
      { bg: 'radial-gradient(ellipse, #e8c060 0%, #d4a54a 100%)', w: 16, h: 14, top: 4, left: 3, radius: '50%' },
      // Left eye (kind, wide)
      { bg: '#2a1e10', w: 4, h: 5, top: 7, left: 5, radius: '50%' },
      // Right eye
      { bg: '#2a1e10', w: 4, h: 5, top: 7, left: 13, radius: '50%' },
      // Eye shine
      { bg: '#fff', w: 2, h: 2, top: 7, left: 6, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 14, radius: '50%' },
      // Nose
      { bg: '#8a6020', w: 4, h: 3, top: 12, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #5a7a5a 0%, #4a6a4a 60%, #3a5a3a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      // Tailor's measuring tape draped
      { bg: '#e8c060', w: 2, h: 14, top: 2, left: 14, radius: '1px' },
      // Vest buttons
      { bg: '#d4a54a', w: 2, h: 2, top: 4, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 2, h: 2, top: 9, left: 8, radius: '50%' },
      // Pocket with pins
      { bg: '#4a6a4a', w: 5, h: 4, top: 12, left: 2, radius: '1px 1px 3px 3px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #5a7a5a 0%, #4a6a4a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e8c060', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #5a7a5a 0%, #4a6a4a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e8c060', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #3a5a3a 0%, #2a4a2a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #3a5a3a 0%, #2a4a2a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 0.95,
};

// ─── Sheriff Halden (Dog - Sheriff costume) ───
export const SHERIFF_HALDEN_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #b08858 0%, #907040 60%, #705830 100%)',
    w: 22,
    h: 20,
    radius: '48% 48% 42% 42%',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Floppy left ear
      { bg: '#906838', w: 7, h: 10, top: -2, left: -2, radius: '50% 20% 40% 50%' },
      // Floppy right ear
      { bg: '#906838', w: 7, h: 10, top: -2, left: 17, radius: '20% 50% 50% 40%' },
      // Snout
      { bg: '#c4a878', w: 10, h: 7, top: 10, left: 6, radius: '40% 40% 50% 50%' },
      // Left eye
      { bg: '#2a2a1a', w: 4, h: 4, top: 7, left: 4, radius: '50%' },
      // Right eye
      { bg: '#2a2a1a', w: 4, h: 4, top: 7, left: 14, radius: '50%' },
      // Nose
      { bg: '#2a1a0a', w: 5, h: 4, top: 11, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #6a5a3a 0%, #5a4a2a 60%, #4a3a1a 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 5px rgba(0,0,0,0.2)',
    details: [
      // Sheriff star badge
      { bg: '#d4a54a', w: 6, h: 6, top: 2, left: 2, radius: '2px' },
      { bg: '#c49530', w: 4, h: 4, top: 3, left: 3, radius: '50%' },
      // Belt
      { bg: '#3a2a1a', w: 20, h: 2, top: 16, left: 0, radius: '1px' },
      // Belt buckle
      { bg: '#d4a54a', w: 4, h: 3, top: 15, left: 8, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #6a5a3a 0%, #5a4a2a 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#b08858', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #6a5a3a 0%, #5a4a2a 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#b08858', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #4a3a1a 0%, #3a2a0a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 5, top: 5, left: -1, radius: '3px 4px 4px 3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #4a3a1a 0%, #3a2a0a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 5, top: 5, left: 0, radius: '4px 3px 3px 4px' },
    ],
  },
  headAccessory: {
    // Sheriff hat (wide brim)
    bg: 'linear-gradient(180deg, #5a4a2a 0%, #4a3a1a 100%)',
    w: 28,
    h: 10,
    radius: '4px',
    shadow: '0 2px 5px rgba(0,0,0,0.25)',
    offsetY: 5,
    details: [
      // Hat crown
      { bg: '#5a4a2a', w: 16, h: 8, top: -6, left: 6, radius: '4px 4px 0 0' },
      // Hat brim
      { bg: '#4a3a1a', w: 32, h: 3, top: 7, left: -2, radius: '50%' },
      // Hat band
      { bg: '#d4a54a', w: 16, h: 2, top: -1, left: 6, radius: '1px' },
    ],
  },
  scale: 1.0,
};

// ─── Mallow (Cow - Barista costume) ───
export const MALLOW_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #f0e8e0 0%, #e0d0c0 60%, #d0c0b0 100%)',
    w: 24,
    h: 22,
    radius: '50% 50% 45% 45%',
    shadow: '0 2px 4px rgba(0,0,0,0.15)',
    details: [
      // Black patches
      { bg: '#3a3a3a', w: 8, h: 6, top: 1, left: 2, radius: '50%' },
      { bg: '#3a3a3a', w: 6, h: 5, top: 3, left: 16, radius: '50%' },
      // Left horn
      { bg: '#c4a878', w: 4, h: 6, top: -4, left: 3, radius: '3px 3px 1px 1px' },
      // Right horn
      { bg: '#c4a878', w: 4, h: 6, top: -4, left: 17, radius: '3px 3px 1px 1px' },
      // Left ear
      { bg: '#e0d0c0', w: 5, h: 4, top: 0, left: -1, radius: '50% 20% 20% 50%' },
      // Right ear
      { bg: '#e0d0c0', w: 5, h: 4, top: 0, left: 20, radius: '20% 50% 50% 20%' },
      // Snout/muzzle
      { bg: '#f0d8c0', w: 12, h: 8, top: 11, left: 6, radius: '50%' },
      // Left eye
      { bg: '#2a2a1a', w: 4, h: 5, top: 7, left: 5, radius: '50%' },
      // Right eye
      { bg: '#2a2a1a', w: 4, h: 5, top: 7, left: 15, radius: '50%' },
      // Eye shine
      { bg: '#fff', w: 2, h: 2, top: 7, left: 6, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 16, radius: '50%' },
      // Nose
      { bg: '#8a6a50', w: 6, h: 4, top: 13, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #5a3020 0%, #4a2818 60%, #3a1810 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      // Barista apron
      { bg: '#4a7a4a', w: 14, h: 14, top: 4, left: 3, radius: '2px 2px 4px 4px' },
      // Apron pocket
      { bg: '#3a6a3a', w: 6, h: 4, top: 12, left: 7, radius: '1px 1px 3px 3px' },
      // Coffee bean logo on apron
      { bg: '#5a3020', w: 4, h: 4, top: 6, left: 8, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #5a3020 0%, #4a2818 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      // Hoof
      { bg: '#3a3a3a', w: 8, h: 4, top: 11, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #5a3020 0%, #4a2818 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#3a3a3a', w: 8, h: 4, top: 11, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #3a1810 0%, #2a0800 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#3a3a3a', w: 9, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #3a1810 0%, #2a0800 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#3a3a3a', w: 9, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 1.0,
};

export const CONSTABLE_COSTUME_PARTS: CharacterParts = {
  ...ALEX_PARTS,
  body: {
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 60%, #0a2a6a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Gold buttons
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 8, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 13, left: 8, radius: '50%' },
      // Badge
      { bg: '#d4a54a', w: 5, h: 5, top: 2, left: 2, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #1a2a5a 0%, #0a1a4a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #1a2a5a 0%, #0a1a4a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  headAccessory: {
    // Constable helmet
    bg: 'linear-gradient(180deg, #2a4a8a 0%, #1a3a7a 100%)',
    w: 24,
    h: 12,
    radius: '50% 50% 4px 4px',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    offsetY: 6,
    details: [
      // Badge on helmet
      { bg: '#d4a54a', w: 6, h: 6, top: 3, left: 9, radius: '50%' },
    ],
  },
};

export const BAKER_COSTUME_PARTS: CharacterParts = {
  ...ALEX_PARTS,
  body: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 60%, #d8ccb8 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.15)',
    details: [
      // Apron
      { bg: '#fff', w: 14, h: 14, top: 2, left: 2, radius: '2px 2px 4px 4px' },
      // Flour stains
      { bg: 'rgba(255,255,255,0.6)', w: 5, h: 3, top: 6, left: 4, radius: '50%' },
      { bg: 'rgba(255,255,255,0.5)', w: 4, h: 3, top: 10, left: 8, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  headAccessory: {
    // Chef hat (toque)
    bg: 'linear-gradient(180deg, #fff 0%, #f0e8d8 100%)',
    w: 20,
    h: 16,
    radius: '50% 50% 4px 4px',
    shadow: '0 2px 4px rgba(0,0,0,0.12)',
    offsetY: 8,
    details: [
      // Poofy top
      { bg: '#fff', w: 18, h: 10, top: -6, left: 1, radius: '50%' },
    ],
  },
};

export const GHOST_COSTUME_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 45%, rgba(240,240,250,0.9) 0%, rgba(200,200,220,0.8) 100%)',
    w: 24,
    h: 22,
    radius: '50% 50% 45% 45%',
    shadow: '0 0 12px rgba(200,200,255,0.3)',
    details: [
      // Ghost eyes (dark hollow)
      { bg: '#1a1a2a', w: 6, h: 7, top: 7, left: 4, radius: '50% 50% 40% 40%' },
      { bg: '#1a1a2a', w: 6, h: 7, top: 7, left: 14, radius: '50% 50% 40% 40%' },
      // Ghost mouth
      { bg: '#1a1a2a', w: 6, h: 5, top: 15, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, rgba(240,240,250,0.85) 0%, rgba(220,220,240,0.7) 60%, rgba(200,200,230,0.5) 100%)',
    w: 22,
    h: 22,
    radius: '6px 6px 40% 40%',
    shadow: '0 0 16px rgba(200,200,255,0.2)',
  },
  leftArm: {
    bg: 'linear-gradient(180deg, rgba(240,240,250,0.8) 0%, rgba(220,220,240,0.6) 100%)',
    w: 8,
    h: 16,
    radius: '4px 4px 50% 50%',
    shadow: '0 0 8px rgba(200,200,255,0.15)',
  },
  rightArm: {
    bg: 'linear-gradient(180deg, rgba(240,240,250,0.8) 0%, rgba(220,220,240,0.6) 100%)',
    w: 8,
    h: 16,
    radius: '4px 4px 50% 50%',
    shadow: '0 0 8px rgba(200,200,255,0.15)',
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, rgba(220,220,240,0.5) 0%, rgba(200,200,230,0.2) 100%)',
    w: 8,
    h: 8,
    radius: '4px 4px 50% 50%',
    shadow: '0 0 6px rgba(200,200,255,0.1)',
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, rgba(220,220,240,0.5) 0%, rgba(200,200,230,0.2) 100%)',
    w: 8,
    h: 8,
    radius: '4px 4px 50% 50%',
    shadow: '0 0 6px rgba(200,200,255,0.1)',
  },
};

export const MASK_COSTUME_PARTS: CharacterParts = {
  ...ALEX_PARTS,
  head: {
    bg: 'radial-gradient(ellipse at 50% 45%, #e8c060 0%, #c44a3a 50%, #8b3535 100%)',
    w: 24,
    h: 22,
    radius: '40%',
    shadow: '0 2px 6px rgba(0,0,0,0.25)',
    details: [
      // Mask eye holes
      { bg: '#1a1a1a', w: 6, h: 5, top: 7, left: 3, radius: '40%' },
      { bg: '#1a1a1a', w: 6, h: 5, top: 7, left: 15, radius: '40%' },
      // Eye gleam
      { bg: '#f0d9a0', w: 2, h: 2, top: 8, left: 5, radius: '50%' },
      { bg: '#f0d9a0', w: 2, h: 2, top: 8, left: 17, radius: '50%' },
      // Folk art patterns
      { bg: '#d4a54a', w: 12, h: 2, top: 4, left: 6, radius: '1px' },
      { bg: '#3a5f8a', w: 8, h: 2, top: 14, left: 8, radius: '1px' },
      // Decorative dots
      { bg: '#d4a54a', w: 3, h: 3, top: 16, left: 4, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 16, left: 17, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #3d2b50 0%, #2a1e38 60%, #1e152a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      // Mystical rune pattern
      { bg: 'rgba(212, 165, 74, 0.4)', w: 8, h: 8, top: 5, left: 5, radius: '50%' },
      { bg: 'rgba(212, 165, 74, 0.3)', w: 4, h: 12, top: 3, left: 7, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #3d2b50 0%, #2a1e38 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #3d2b50 0%, #2a1e38 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#8a8a8a', w: 7, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
};

/** Map of outfit ID → character parts for costume overrides */
export const COSTUME_PARTS_MAP: Record<string, CharacterParts> = {
  constable_uniform: CONSTABLE_COSTUME_PARTS,
  baker_apron: BAKER_COSTUME_PARTS,
  ghost_sheet: GHOST_COSTUME_PARTS,
  strange_mask: MASK_COSTUME_PARTS,
};
