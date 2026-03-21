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


// ─── Oryn (Crane - Ghost/Zombie costume) ───
export const ORYN_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 40%, rgba(210,225,240,0.75) 0%, rgba(170,185,210,0.65) 60%, rgba(130,145,175,0.55) 100%)',
    w: 18,
    h: 22,
    radius: '40% 40% 35% 35%',
    shadow: '0 0 12px rgba(140,175,220,0.45)',
    details: [
      { bg: 'linear-gradient(180deg, rgba(160,155,145,0.85) 0%, rgba(120,115,105,0.75) 100%)', w: 6, h: 12, top: 10, left: 6, radius: '3px 3px 2px 2px' },
      { bg: '#060618', w: 3, h: 4, top: 6, left: 3, radius: '50%' },
      { bg: '#060618', w: 3, h: 4, top: 6, left: 12, radius: '50%' },
      { bg: 'rgba(140,195,255,0.65)', w: 2, h: 2, top: 7, left: 4, radius: '50%' },
      { bg: 'rgba(140,195,255,0.65)', w: 2, h: 2, top: 7, left: 13, radius: '50%' },
      { bg: 'rgba(185,45,25,0.45)', w: 3, h: 4, top: -1, left: 8, radius: '50% 50% 30% 30%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, rgba(28,28,48,0.8) 0%, rgba(18,18,38,0.7) 60%, rgba(8,8,28,0.55) 100%)',
    w: 15,
    h: 18,
    radius: '5px 5px 3px 3px',
    shadow: '0 0 10px rgba(140,175,255,0.2)',
    details: [
      { bg: 'rgba(55,75,98,0.35)', w: 13, h: 6, top: 0, left: 1, radius: '3px 3px 50% 50%' },
      { bg: 'rgba(140,195,255,0.08)', w: 15, h: 18, top: 0, left: 0, radius: '5px 5px 3px 3px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, rgba(28,28,48,0.7) 0%, rgba(18,18,38,0.55) 100%)',
    w: 5,
    h: 14,
    radius: '3px',
    shadow: '0 0 6px rgba(140,175,255,0.15)',
    details: [
      { bg: 'rgba(210,225,240,0.5)', w: 5, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, rgba(28,28,48,0.7) 0%, rgba(18,18,38,0.55) 100%)',
    w: 5,
    h: 14,
    radius: '3px',
    shadow: '0 0 6px rgba(140,175,255,0.15)',
    details: [
      { bg: 'rgba(210,225,240,0.5)', w: 5, h: 4, top: 10, left: 0, radius: '2px 2px 4px 4px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, rgba(195,175,115,0.6) 0%, rgba(155,135,85,0.5) 100%)',
    w: 4,
    h: 12,
    radius: '2px',
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, rgba(195,175,115,0.6) 0%, rgba(155,135,85,0.5) 100%)',
    w: 4,
    h: 12,
    radius: '2px',
  },
  scale: 0.9,
};

// ─── Elara (Peacock - Royal Maid costume) ───
export const ELARA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 45%, #5a9a8a 0%, #3a7a6a 60%, #2a6058 100%)',
    w: 20,
    h: 20,
    radius: '48% 48% 42% 42%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      { bg: '#4a8878', w: 7, h: 5, top: -4, left: 0, radius: '50% 20% 20% 50%' },
      { bg: '#4a8878', w: 7, h: 5, top: -4, left: 13, radius: '20% 50% 50% 20%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 7, left: 4, radius: '50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 7, left: 12, radius: '50%' },
      { bg: '#e8d840', w: 2, h: 2, top: 7, left: 5, radius: '50%' },
      { bg: '#e8d840', w: 2, h: 2, top: 7, left: 13, radius: '50%' },
      { bg: '#2a1a0a', w: 4, h: 3, top: 13, left: 8, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #1a1a2a 0%, #101018 60%, #080810 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      { bg: '#f0f0f0', w: 12, h: 14, top: 2, left: 3, radius: '2px 2px 4px 4px' },
      { bg: '#e8d840', w: 2, h: 2, top: 3, left: 4, radius: '50%' },
      { bg: '#e8d840', w: 2, h: 2, top: 3, left: 7, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #1a1a2a 0%, #101018 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#5a9a8a', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #1a1a2a 0%, #101018 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#5a9a8a', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #080810 0%, #040408 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #080810 0%, #040408 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  headAccessory: {
    bg: 'linear-gradient(180deg, #3a8a5a 0%, #2a7a4a 100%)',
    w: 18,
    h: 8,
    radius: '4px',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    offsetY: 4,
    details: [
      { bg: '#5abada', w: 3, h: 6, top: -5, left: 4, radius: '50% 50% 2px 2px' },
      { bg: '#e8d840', w: 2, h: 2, top: -8, left: 5, radius: '50%' },
      { bg: '#5abada', w: 3, h: 6, top: -5, left: 8, radius: '50% 50% 2px 2px' },
      { bg: '#e8d840', w: 2, h: 2, top: -8, left: 9, radius: '50%' },
      { bg: '#5abada', w: 3, h: 6, top: -5, left: 12, radius: '50% 50% 2px 2px' },
      { bg: '#e8d840', w: 2, h: 2, top: -8, left: 13, radius: '50%' },
    ],
  },
  scale: 0.95,
};

// ─── Thorne (Kangaroo - Royal Guard costume) ───
export const THORNE_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #b87840 0%, #986030 60%, #7a4820 100%)',
    w: 22,
    h: 20,
    radius: '45% 45% 40% 40%',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    details: [
      { bg: '#a06830', w: 6, h: 5, top: -2, left: 0, radius: '50% 20% 20% 50%' },
      { bg: '#a06830', w: 6, h: 5, top: -2, left: 16, radius: '20% 50% 50% 20%' },
      { bg: '#c8906a', w: 4, h: 3, top: 0, left: 1, radius: '50%' },
      { bg: '#c8906a', w: 4, h: 3, top: 0, left: 17, radius: '50%' },
      { bg: '#c09060', w: 10, h: 7, top: 11, left: 6, radius: '40% 40% 50% 50%' },
      { bg: '#1a1a0a', w: 4, h: 4, top: 7, left: 4, radius: '50%' },
      { bg: '#1a1a0a', w: 4, h: 4, top: 7, left: 14, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 5, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 15, radius: '50%' },
      { bg: '#5a3020', w: 5, h: 3, top: 12, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #8a1a1a 0%, #701010 60%, #580808 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 5px rgba(0,0,0,0.2)',
    details: [
      { bg: '#d4a54a', w: 6, h: 6, top: 2, left: 2, radius: '2px' },
      { bg: '#c49530', w: 4, h: 4, top: 3, left: 3, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 7, left: 9, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 12, left: 9, radius: '50%' },
      { bg: '#d4a54a', w: 20, h: 2, top: 17, left: 0, radius: '1px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #8a1a1a 0%, #701010 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#b87840', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #8a1a1a 0%, #701010 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#b87840', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #580808 0%, #400000 100%)',
    w: 8,
    h: 12,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 4, top: 8, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #580808 0%, #400000 100%)',
    w: 8,
    h: 12,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 4, top: 8, left: 0, radius: '3px' },
    ],
  },
  headAccessory: {
    bg: 'linear-gradient(180deg, #8a1a1a 0%, #701010 100%)',
    w: 26,
    h: 10,
    radius: '4px 4px 2px 2px',
    shadow: '0 2px 5px rgba(0,0,0,0.25)',
    offsetY: 5,
    details: [
      { bg: '#8a1a1a', w: 16, h: 8, top: -6, left: 5, radius: '4px 4px 0 0' },
      { bg: '#d4a54a', w: 18, h: 2, top: -1, left: 4, radius: '1px' },
      { bg: '#d4a54a', w: 5, h: 5, top: 2, left: 11, radius: '2px' },
    ],
  },
  scale: 1.05,
};

// ─── Tallo (Giraffe - Prisoner / Escape Artist costume) ───
export const TALLO_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e8c870 0%, #c8a050 60%, #a88038 100%)',
    w: 20,
    h: 18,
    radius: '45% 45% 40% 40%',
    shadow: '0 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#7a5020', w: 4, h: 3, top: -2, left: 4, radius: '2px 2px 1px 1px' },
      { bg: '#7a5020', w: 4, h: 3, top: -2, left: 12, radius: '2px 2px 1px 1px' },
      { bg: '#a87038', w: 3, h: 3, top: -1, left: 5, radius: '50%' },
      { bg: '#a87038', w: 3, h: 3, top: -1, left: 12, radius: '50%' },
      { bg: '#1a1a0a', w: 4, h: 4, top: 6, left: 4, radius: '50%' },
      { bg: '#1a1a0a', w: 4, h: 4, top: 6, left: 12, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 6, left: 5, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 6, left: 13, radius: '50%' },
      { bg: '#3a2010', w: 4, h: 3, top: 12, left: 8, radius: '50%' },
      { bg: '#8a6020', w: 5, h: 3, top: 13, left: 5, radius: '50%' },
      { bg: '#3a2010', w: 2, h: 4, top: 3, left: 5, radius: '1px' },
      { bg: '#3a2010', w: 2, h: 4, top: 3, left: 13, radius: '1px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 50%, #b8b8b8 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#1a1a1a', w: 18, h: 3, top: 3, left: 0 },
      { bg: '#1a1a1a', w: 18, h: 3, top: 9, left: 0 },
      { bg: '#1a1a1a', w: 18, h: 3, top: 15, left: 0 },
      { bg: '#c49530', w: 5, h: 5, top: 6, left: 7, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #e0e0e0 0%, #c8c8c8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#c8a050', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #e0e0e0 0%, #c8c8c8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#c8a050', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #e8c870 0%, #c8a050 100%)',
    w: 6,
    h: 14,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#3a2010', w: 2, h: 14, top: 0, left: 2, radius: '1px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #e8c870 0%, #c8a050 100%)',
    w: 6,
    h: 14,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#3a2010', w: 2, h: 14, top: 0, left: 2, radius: '1px' },
    ],
  },
  scale: 1.1,
};

// ─── Lerr (Giraffe - Prisoner / Street Musician costume, slight variation) ───
export const LERR_PARTS: CharacterParts = {
  head: TALLO_PARTS.head,
  leftArm: TALLO_PARTS.leftArm,
  rightArm: TALLO_PARTS.rightArm,
  leftLeg: TALLO_PARTS.leftLeg,
  rightLeg: TALLO_PARTS.rightLeg,
  body: {
    bg: 'linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 50%, #b8b8b8 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#1a1a1a', w: 18, h: 3, top: 3, left: 0 },
      { bg: '#1a1a1a', w: 18, h: 3, top: 9, left: 0 },
      { bg: '#1a1a1a', w: 18, h: 3, top: 15, left: 0 },
      { bg: '#4a7a3a', w: 5, h: 5, top: 6, left: 7, radius: '50%' },
    ],
  },
  scale: 1.1,
};

// ─── Elia (Dog - Scholar costume) ───
export const ELIA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #c8a878 0%, #a88858 60%, #887040 100%)',
    w: 21,
    h: 19,
    radius: '46% 46% 40% 40%',
    shadow: '0 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#a07838', w: 6, h: 9, top: -1, left: -1, radius: '50% 20% 40% 50%' },
      { bg: '#a07838', w: 6, h: 9, top: -1, left: 16, radius: '20% 50% 50% 40%' },
      { bg: '#c09868', w: 8, h: 6, top: 10, left: 7, radius: '40% 40% 50% 50%' },
      { bg: '#2a2a1a', w: 4, h: 4, top: 7, left: 4, radius: '50%' },
      { bg: '#2a2a1a', w: 4, h: 4, top: 7, left: 13, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 5, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 14, radius: '50%' },
      { bg: '#2a1a0a', w: 4, h: 3, top: 12, left: 9, radius: '50%' },
      { bg: 'rgba(200,220,255,0.6)', w: 6, h: 4, top: 6, left: 3, radius: '2px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #2a3a5a 0%, #1a2a4a 60%, #0a1a3a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      { bg: '#4a5a7a', w: 6, h: 14, top: 2, left: 6, radius: '2px' },
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 3, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #2a3a5a 0%, #1a2a4a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#c8a878', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #2a3a5a 0%, #1a2a4a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#c8a878', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #0a1a3a 0%, #040e2a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #0a1a3a 0%, #040e2a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 0.9,
};

// ─── Orla (Owl - Counselor costume) ───
export const ORLA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #d4b880 0%, #b89860 60%, #9a7a48 100%)',
    w: 26,
    h: 24,
    radius: '50%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      { bg: '#a87840', w: 9, h: 7, top: -4, left: 0, radius: '50% 20% 10% 50%' },
      { bg: '#a87840', w: 9, h: 7, top: -4, left: 17, radius: '20% 50% 50% 10%' },
      { bg: '#c49850', w: 6, h: 5, top: -2, left: 2, radius: '50%' },
      { bg: '#c49850', w: 6, h: 5, top: -2, left: 18, radius: '50%' },
      { bg: '#f8f0e0', w: 12, h: 10, top: 9, left: 7, radius: '50%' },
      { bg: '#1a1a0a', w: 6, h: 7, top: 6, left: 4, radius: '50%' },
      { bg: '#1a1a0a', w: 6, h: 7, top: 6, left: 16, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 4, top: 7, left: 5, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 4, top: 7, left: 17, radius: '50%' },
      { bg: '#1a1a0a', w: 2, h: 2, top: 8, left: 6, radius: '50%' },
      { bg: '#1a1a0a', w: 2, h: 2, top: 8, left: 18, radius: '50%' },
      { bg: '#d4a050', w: 5, h: 4, top: 14, left: 11, radius: '3px 3px 4px 4px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #6a5a9a 0%, #5a4a8a 60%, #4a3a7a 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#8a7ab0', w: 14, h: 10, top: 0, left: 3, radius: '3px 3px 50% 50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 9, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #6a5a9a 0%, #5a4a8a 100%)',
    w: 8,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#d4b880', w: 8, h: 5, top: 9, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #6a5a9a 0%, #5a4a8a 100%)',
    w: 8,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#d4b880', w: 8, h: 5, top: 9, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #4a3a7a 0%, #3a2a6a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #4a3a7a 0%, #3a2a6a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 1.0,
};

// ─── Sera (Tiger - Weaver costume) ───
export const SERA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e8b060 0%, #c89040 60%, #a87030 100%)',
    w: 23,
    h: 21,
    radius: '48% 48% 44% 44%',
    shadow: '0 2px 5px rgba(0,0,0,0.18)',
    details: [
      { bg: '#2a1a0a', w: 2, h: 5, top: 2, left: 6, radius: '1px' },
      { bg: '#2a1a0a', w: 2, h: 5, top: 2, left: 15, radius: '1px' },
      { bg: '#2a1a0a', w: 2, h: 4, top: 3, left: 11, radius: '1px' },
      { bg: '#c09040', w: 6, h: 5, top: -3, left: 1, radius: '50% 50% 20% 20%' },
      { bg: '#c09040', w: 6, h: 5, top: -3, left: 16, radius: '50% 50% 20% 20%' },
      { bg: '#e8c8a0', w: 4, h: 3, top: -1, left: 2, radius: '50%' },
      { bg: '#e8c8a0', w: 4, h: 3, top: -1, left: 17, radius: '50%' },
      { bg: '#f0e0d0', w: 11, h: 7, top: 11, left: 6, radius: '50%' },
      { bg: '#2a2a1a', w: 4, h: 4, top: 6, left: 5, radius: '50%' },
      { bg: '#2a2a1a', w: 4, h: 4, top: 6, left: 14, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 6, left: 6, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 6, left: 15, radius: '50%' },
      { bg: '#5a3020', w: 4, h: 3, top: 12, left: 10, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #7a5a8a 0%, #6a4a7a 60%, #5a3a6a 100%)',
    w: 19,
    h: 19,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#e8c880', w: 3, h: 14, top: 2, left: 8, radius: '1px' },
      { bg: '#c0a060', w: 5, h: 3, top: 8, left: 7, radius: '2px' },
      { bg: '#c0a060', w: 5, h: 3, top: 13, left: 7, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #7a5a8a 0%, #6a4a7a 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e8b060', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #7a5a8a 0%, #6a4a7a 100%)',
    w: 8,
    h: 15,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e8b060', w: 8, h: 5, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #5a3a6a 0%, #4a2a5a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #5a3a6a 0%, #4a2a5a 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 9, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 1.0,
};

// ─── Ressa (Fox - Merchant costume) ───
export const RESSA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e87030 0%, #c85818 60%, #a84010 100%)',
    w: 22,
    h: 20,
    radius: '46% 46% 38% 38%',
    shadow: '0 2px 4px rgba(0,0,0,0.2)',
    details: [
      { bg: '#c05010', w: 7, h: 6, top: -3, left: -1, radius: '50% 30% 10% 50%' },
      { bg: '#c05010', w: 7, h: 6, top: -3, left: 16, radius: '30% 50% 50% 10%' },
      { bg: '#e8b890', w: 4, h: 3, top: -1, left: 1, radius: '50%' },
      { bg: '#e8b890', w: 4, h: 3, top: -1, left: 17, radius: '50%' },
      { bg: '#f0e0d8', w: 10, h: 7, top: 11, left: 6, radius: '30% 30% 50% 50%' },
      { bg: '#1a1a0a', w: 4, h: 5, top: 6, left: 4, radius: '50%' },
      { bg: '#1a1a0a', w: 4, h: 5, top: 6, left: 14, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 6, left: 5, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 6, left: 15, radius: '50%' },
      { bg: '#2a1a0a', w: 4, h: 3, top: 12, left: 9, radius: '50%' },
      { bg: '#1a1a1a', w: 2, h: 5, top: 13, left: 5, radius: '1px' },
      { bg: '#1a1a1a', w: 2, h: 5, top: 13, left: 15, radius: '1px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #5a3820 0%, #4a2810 60%, #3a1800 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#8a5a30', w: 14, h: 14, top: 2, left: 2, radius: '3px' },
      { bg: '#d4a54a', w: 3, h: 3, top: 4, left: 4, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 4, left: 11, radius: '50%' },
      { bg: '#c49530', w: 3, h: 8, top: 8, left: 8, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #5a3820 0%, #4a2810 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e87030', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #5a3820 0%, #4a2810 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e87030', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #3a1800 0%, #2a0800 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #3a1800 0%, #2a0800 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 0.95,
};

// ─── Corin (Fox - Courier costume) ───
export const CORIN_PARTS: CharacterParts = {
  head: RESSA_PARTS.head,
  leftArm: RESSA_PARTS.leftArm,
  rightArm: RESSA_PARTS.rightArm,
  leftLeg: RESSA_PARTS.leftLeg,
  rightLeg: RESSA_PARTS.rightLeg,
  body: {
    bg: 'linear-gradient(180deg, #4a5a2a 0%, #3a4a1a 60%, #2a3a0a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#6a8a3a', w: 14, h: 14, top: 2, left: 2, radius: '3px' },
      { bg: '#c49530', w: 6, h: 5, top: 6, left: 6, radius: '2px' },
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 3, radius: '50%' },
    ],
  },
  scale: 0.95,
};

// ─── Fenn (Fox - Student/Detective costume) ───
export const FENN_PARTS: CharacterParts = {
  head: RESSA_PARTS.head,
  leftArm: RESSA_PARTS.leftArm,
  rightArm: RESSA_PARTS.rightArm,
  leftLeg: RESSA_PARTS.leftLeg,
  rightLeg: RESSA_PARTS.rightLeg,
  body: {
    bg: 'linear-gradient(180deg, #4a6a8a 0%, #3a5a7a 60%, #2a4a6a 100%)',
    w: 17,
    h: 17,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.15)',
    details: [
      { bg: '#6a8aaa', w: 13, h: 13, top: 2, left: 2, radius: '3px' },
      { bg: '#d4a54a', w: 4, h: 2, top: 4, left: 7, radius: '1px' },
      { bg: '#d4a54a', w: 4, h: 2, top: 8, left: 7, radius: '1px' },
    ],
  },
  scale: 0.85,
};

// ─── Elda (Sheep - Gift Giver costume) ───
export const ELDA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #f0ece8 0%, #e0dcd8 60%, #d0ccc8 100%)',
    w: 24,
    h: 22,
    radius: '50%',
    shadow: '0 2px 5px rgba(0,0,0,0.12)',
    details: [
      { bg: '#e8e4e0', w: 10, h: 8, top: -5, left: -2, radius: '50%' },
      { bg: '#e8e4e0', w: 10, h: 8, top: -5, left: 16, radius: '50%' },
      { bg: '#f8f4f0', w: 7, h: 6, top: -4, left: 0, radius: '50%' },
      { bg: '#f8f4f0', w: 7, h: 6, top: -4, left: 17, radius: '50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 7, left: 5, radius: '50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 7, left: 15, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 6, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 16, radius: '50%' },
      { bg: '#e8a0a0', w: 8, h: 6, top: 13, left: 8, radius: '40% 40% 50% 50%' },
      { bg: '#2a1a1a', w: 4, h: 3, top: 14, left: 10, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #e85a7a 0%, #d04060 60%, #b82848 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.15)',
    details: [
      { bg: '#f0a0b0', w: 12, h: 4, top: 2, left: 3, radius: '2px 2px 0 0' },
      { bg: '#d4a54a', w: 3, h: 3, top: 7, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 12, left: 8, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #e85a7a 0%, #d04060 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#f0ece8', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #e85a7a 0%, #d04060 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#f0ece8', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #b82848 0%, #9a1030 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #b82848 0%, #9a1030 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 0.95,
};

// ─── Bramwell (Sheep - Shopkeeper costume) ───
export const BRAMWELL_PARTS: CharacterParts = {
  head: ELDA_PARTS.head,
  leftArm: ELDA_PARTS.leftArm,
  rightArm: ELDA_PARTS.rightArm,
  leftLeg: ELDA_PARTS.leftLeg,
  rightLeg: ELDA_PARTS.rightLeg,
  body: {
    bg: 'linear-gradient(180deg, #3a5a3a 0%, #2a4a2a 60%, #1a3a1a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#5a8a5a', w: 14, h: 14, top: 2, left: 2, radius: '3px' },
      { bg: '#d4a54a', w: 4, h: 4, top: 3, left: 3, radius: '2px' },
      { bg: '#fff', w: 8, h: 6, top: 10, left: 5, radius: '2px' },
    ],
  },
  scale: 1.0,
};

// ─── Varek (Wolf - Promoter costume) ───
export const VAREK_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #a0a0a8 0%, #808088 60%, #606068 100%)',
    w: 22,
    h: 20,
    radius: '44% 44% 38% 38%',
    shadow: '0 2px 4px rgba(0,0,0,0.22)',
    details: [
      { bg: '#888890', w: 6, h: 7, top: -3, left: 0, radius: '50% 30% 10% 50%' },
      { bg: '#888890', w: 6, h: 7, top: -3, left: 16, radius: '30% 50% 50% 10%' },
      { bg: '#b8b8c0', w: 4, h: 4, top: -1, left: 1, radius: '50%' },
      { bg: '#b8b8c0', w: 4, h: 4, top: -1, left: 17, radius: '50%' },
      { bg: '#e8e0d8', w: 11, h: 8, top: 10, left: 6, radius: '30% 30% 50% 50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 6, left: 4, radius: '50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 6, left: 14, radius: '50%' },
      { bg: '#e8c840', w: 2, h: 2, top: 6, left: 5, radius: '50%' },
      { bg: '#e8c840', w: 2, h: 2, top: 6, left: 15, radius: '50%' },
      { bg: '#2a1a0a', w: 5, h: 3, top: 13, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #7a3a0a 0%, #6a2a00 60%, #5a1a00 100%)',
    w: 20,
    h: 20,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 5px rgba(0,0,0,0.2)',
    details: [
      { bg: '#c85a00', w: 16, h: 12, top: 2, left: 2, radius: '4px 4px 2px 2px' },
      { bg: '#e8c840', w: 3, h: 3, top: 3, left: 3, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 3, top: 3, left: 14, radius: '50%' },
      { bg: '#fff', w: 8, h: 3, top: 7, left: 6, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #7a3a0a 0%, #6a2a00 100%)',
    w: 8,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#a0a0a8', w: 8, h: 5, top: 9, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #7a3a0a 0%, #6a2a00 100%)',
    w: 8,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#a0a0a8', w: 8, h: 5, top: 9, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #5a1a00 0%, #4a0a00 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 9, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #5a1a00 0%, #4a0a00 100%)',
    w: 8,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 9, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 1.0,
};

// ─── Nox (Wolf - Tourist Guide costume) ───
export const NOX_PARTS: CharacterParts = {
  head: VAREK_PARTS.head,
  leftArm: VAREK_PARTS.leftArm,
  rightArm: VAREK_PARTS.rightArm,
  leftLeg: VAREK_PARTS.leftLeg,
  rightLeg: VAREK_PARTS.rightLeg,
  body: {
    bg: 'linear-gradient(180deg, #2a3a5a 0%, #1a2a4a 60%, #0a1a3a 100%)',
    w: 17,
    h: 17,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.15)',
    details: [
      { bg: '#4a6a9a', w: 13, h: 13, top: 2, left: 2, radius: '3px' },
      { bg: '#e8c840', w: 6, h: 2, top: 4, left: 6, radius: '1px' },
      { bg: '#e8c840', w: 6, h: 2, top: 8, left: 6, radius: '1px' },
    ],
  },
  scale: 0.85,
};

// ─── Slink (Snake - Street Chef costume) ───
export const SLINK_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 55%, #4a8a3a 0%, #3a7a2a 60%, #2a6018 100%)',
    w: 22,
    h: 18,
    radius: '40% 40% 60% 60%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      { bg: '#c0d880', w: 16, h: 6, top: 10, left: 3, radius: '50%' },
      { bg: '#1a1a0a', w: 5, h: 5, top: 4, left: 3, radius: '50%' },
      { bg: '#1a1a0a', w: 5, h: 5, top: 4, left: 14, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 3, top: 5, left: 4, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 3, top: 5, left: 15, radius: '50%' },
      { bg: '#1a1a0a', w: 2, h: 2, top: 6, left: 5, radius: '50%' },
      { bg: '#1a1a0a', w: 2, h: 2, top: 6, left: 16, radius: '50%' },
      { bg: '#c03a3a', w: 6, h: 3, top: 13, left: 8, radius: '2px' },
      { bg: '#c03a3a', w: 2, h: 4, top: 15, left: 10, radius: '1px' },
      { bg: '#c03a3a', w: 2, h: 4, top: 15, left: 12, radius: '1px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 60%, #d8ccb8 100%)',
    w: 16,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.15)',
    details: [
      { bg: '#4a8a3a', w: 12, h: 14, top: 2, left: 2, radius: '2px 2px 4px 4px' },
      { bg: '#c0d880', w: 3, h: 3, top: 4, left: 7, radius: '50%' },
      { bg: '#fff', w: 6, h: 3, top: 10, left: 5, radius: '2px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #4a8a3a 0%, #3a7a2a 100%)',
    w: 6,
    h: 14,
    radius: '4px 4px 6px 6px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#2a6018', w: 6, h: 4, top: 10, left: 0, radius: '2px 2px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #4a8a3a 0%, #3a7a2a 100%)',
    w: 6,
    h: 14,
    radius: '4px 4px 6px 6px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#2a6018', w: 6, h: 4, top: 10, left: 0, radius: '2px 2px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #2a6018 0%, #1a5008 100%)',
    w: 5,
    h: 14,
    radius: '3px 3px 5px 5px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #2a6018 0%, #1a5008 100%)',
    w: 5,
    h: 14,
    radius: '3px 3px 5px 5px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
  },
  headAccessory: {
    bg: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
    w: 24,
    h: 10,
    radius: '50% 50% 4px 4px',
    shadow: '0 2px 4px rgba(0,0,0,0.1)',
    offsetY: 5,
    details: [
      { bg: '#f0e8d8', w: 22, h: 8, top: -5, left: 1, radius: '50%' },
    ],
  },
  scale: 0.95,
};

// ─── Alder (Rabbit - Teacher costume) ───
export const ALDER_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #e0d8d0 0%, #c8c0b8 60%, #b0a8a0 100%)',
    w: 22,
    h: 21,
    radius: '48% 48% 44% 44%',
    shadow: '0 2px 4px rgba(0,0,0,0.15)',
    details: [
      { bg: '#d0c8c0', w: 5, h: 14, top: -12, left: 3, radius: '50% 50% 20% 20%' },
      { bg: '#d0c8c0', w: 5, h: 14, top: -12, left: 14, radius: '50% 50% 20% 20%' },
      { bg: '#e8c8c8', w: 3, h: 10, top: -10, left: 4, radius: '50% 50% 10% 10%' },
      { bg: '#e8c8c8', w: 3, h: 10, top: -10, left: 15, radius: '50% 50% 10% 10%' },
      { bg: '#e8e0d8', w: 10, h: 7, top: 12, left: 6, radius: '50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 7, left: 4, radius: '50%' },
      { bg: '#1a1a1a', w: 4, h: 5, top: 7, left: 14, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 5, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 15, radius: '50%' },
      { bg: '#e8a8a8', w: 5, h: 3, top: 13, left: 9, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #4a3a8a 0%, #3a2a7a 60%, #2a1a6a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#7a6ab0', w: 12, h: 4, top: 0, left: 3, radius: '3px 3px 0 0' },
      { bg: '#d4a54a', w: 3, h: 3, top: 5, left: 8, radius: '50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 10, left: 8, radius: '50%' },
      { bg: '#c49530', w: 8, h: 2, top: 15, left: 5, radius: '1px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #4a3a8a 0%, #3a2a7a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e0d8d0', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #4a3a8a 0%, #3a2a7a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#e0d8d0', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #2a1a6a 0%, #1a0a5a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #2a1a6a 0%, #1a0a5a 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 0.95,
};

// ─── Boro (Buffalo - Custodian costume) ───
export const BORO_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #5a4030 0%, #4a3020 60%, #3a2010 100%)',
    w: 28,
    h: 24,
    radius: '48% 48% 42% 42%',
    shadow: '0 2px 6px rgba(0,0,0,0.25)',
    details: [
      { bg: '#4a3020', w: 6, h: 5, top: 1, left: -2, radius: '30% 50% 50% 30%' },
      { bg: '#4a3020', w: 6, h: 5, top: 1, left: 24, radius: '50% 30% 30% 50%' },
      { bg: '#806040', w: 12, h: 9, top: 12, left: 8, radius: '40% 40% 55% 55%' },
      { bg: '#1a1a0a', w: 5, h: 5, top: 6, left: 5, radius: '50%' },
      { bg: '#1a1a0a', w: 5, h: 5, top: 6, left: 18, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 6, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 7, left: 19, radius: '50%' },
      { bg: '#2a1a0a', w: 6, h: 4, top: 15, left: 11, radius: '50%' },
      { bg: '#3a2a1a', w: 5, h: 7, top: -2, left: 3, radius: '4px 4px 2px 2px' },
      { bg: '#3a2a1a', w: 5, h: 7, top: -2, left: 20, radius: '4px 4px 2px 2px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #6a6a6a 0%, #5a5a5a 60%, #4a4a4a 100%)',
    w: 22,
    h: 22,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 5px rgba(0,0,0,0.22)',
    details: [
      { bg: '#888888', w: 16, h: 14, top: 4, left: 3, radius: '3px' },
      { bg: '#d4a54a', w: 3, h: 3, top: 5, left: 4, radius: '50%' },
      { bg: '#c49530', w: 8, h: 2, top: 16, left: 7, radius: '1px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #6a6a6a 0%, #5a5a5a 100%)',
    w: 9,
    h: 16,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#5a4030', w: 9, h: 5, top: 11, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #6a6a6a 0%, #5a5a5a 100%)',
    w: 9,
    h: 16,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#5a4030', w: 9, h: 5, top: 11, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 100%)',
    w: 9,
    h: 11,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 10, h: 5, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 100%)',
    w: 9,
    h: 11,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#2a1a0a', w: 10, h: 5, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 1.1,
};

// ─── Maris (Cat - Librarian costume) ───
export const MARIS_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #9a9aaa 0%, #808090 60%, #686878 100%)',
    w: 22,
    h: 20,
    radius: '46% 46% 40% 40%',
    shadow: '0 2px 4px rgba(0,0,0,0.18)',
    details: [
      { bg: '#787888', w: 6, h: 6, top: -4, left: 1, radius: '50% 10% 20% 50%' },
      { bg: '#787888', w: 6, h: 6, top: -4, left: 15, radius: '10% 50% 50% 20%' },
      { bg: '#9898a8', w: 4, h: 3, top: -2, left: 2, radius: '50%' },
      { bg: '#9898a8', w: 4, h: 3, top: -2, left: 16, radius: '50%' },
      { bg: '#e8e8f0', w: 8, h: 6, top: 12, left: 7, radius: '50%' },
      { bg: '#1a1a2a', w: 5, h: 6, top: 6, left: 3, radius: '40% 40% 50% 50%' },
      { bg: '#1a1a2a', w: 5, h: 6, top: 6, left: 14, radius: '40% 40% 50% 50%' },
      { bg: '#6a50b8', w: 3, h: 4, top: 7, left: 4, radius: '50%' },
      { bg: '#6a50b8', w: 3, h: 4, top: 7, left: 15, radius: '50%' },
      { bg: '#2a1a1a', w: 4, h: 3, top: 14, left: 9, radius: '50%' },
      { bg: '#f0f0f8', w: 8, h: 2, top: 5, left: 2, radius: '1px' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #3a2a5a 0%, #2a1a4a 60%, #1a0a3a 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.2)',
    details: [
      { bg: '#5a4a7a', w: 12, h: 10, top: 2, left: 3, radius: '3px 3px 50% 50%' },
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 8, radius: '50%' },
      { bg: '#f0f0f8', w: 6, h: 1, top: 13, left: 6, radius: '1px' },
      { bg: '#f0f0f8', w: 5, h: 1, top: 15, left: 7, radius: '1px' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #3a2a5a 0%, #2a1a4a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#9a9aaa', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #3a2a5a 0%, #2a1a4a 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#9a9aaa', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #1a0a3a 0%, #0a0028 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #1a0a3a 0%, #0a0028 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.15)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  scale: 0.9,
};

// ─── Nara (Anteater - Nurse costume, older sister) ───
export const NARA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 60% 50%, #9a8878 0%, #7a6858 60%, #5a4838 100%)',
    w: 28,
    h: 18,
    radius: '35% 65% 55% 45%',
    shadow: '0 2px 5px rgba(0,0,0,0.2)',
    details: [
      { bg: '#7a6858', w: 4, h: 4, top: -2, left: 0, radius: '50% 20% 20% 50%' },
      { bg: '#7a6858', w: 4, h: 4, top: -2, left: 10, radius: '50% 20% 20% 50%' },
      { bg: '#1a1a0a', w: 4, h: 5, top: 4, left: 3, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 5, left: 4, radius: '50%' },
      { bg: '#2a1a0a', w: 3, h: 2, top: 8, left: 5, radius: '50%' },
      { bg: '#c0a890', w: 10, h: 6, top: 10, left: 16, radius: '40%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 60%, #d8d8d8 100%)',
    w: 18,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.15)',
    details: [
      { bg: '#c03040', w: 8, h: 2, top: 4, left: 5, radius: '1px' },
      { bg: '#c03040', w: 5, h: 8, top: 6, left: 7, radius: '1px' },
      { bg: '#d4a54a', w: 3, h: 3, top: 3, left: 3, radius: '50%' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#9a8878', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#9a8878', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #d8d8d8 0%, #c8c8c8 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #d8d8d8 0%, #c8c8c8 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
    ],
  },
  headAccessory: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%)',
    w: 22,
    h: 8,
    radius: '4px 4px 2px 2px',
    shadow: '0 2px 3px rgba(0,0,0,0.1)',
    offsetY: 3,
    details: [
      { bg: '#c03040', w: 10, h: 2, top: 3, left: 6, radius: '1px' },
      { bg: '#c03040', w: 2, h: 5, top: 1, left: 10, radius: '1px' },
    ],
  },
  scale: 0.95,
};

// ─── Vela (Anteater - Nurse costume, younger sister) ───
export const VELA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 60% 50%, #b8a898 0%, #988878 60%, #787058 100%)',
    w: 28,
    h: 18,
    radius: '35% 65% 55% 45%',
    shadow: '0 2px 5px rgba(0,0,0,0.18)',
    details: [
      { bg: '#988878', w: 4, h: 4, top: -2, left: 0, radius: '50% 20% 20% 50%' },
      { bg: '#988878', w: 4, h: 4, top: -2, left: 10, radius: '50% 20% 20% 50%' },
      { bg: '#1a1a0a', w: 4, h: 5, top: 4, left: 3, radius: '50%' },
      { bg: '#fff', w: 2, h: 2, top: 5, left: 4, radius: '50%' },
      { bg: '#2a1a0a', w: 3, h: 2, top: 8, left: 5, radius: '50%' },
      { bg: '#d0b8a0', w: 10, h: 6, top: 10, left: 16, radius: '40%' },
    ],
  },
  body: NARA_PARTS.body,
  leftArm: NARA_PARTS.leftArm,
  rightArm: NARA_PARTS.rightArm,
  leftLeg: NARA_PARTS.leftLeg,
  rightLeg: NARA_PARTS.rightLeg,
  headAccessory: NARA_PARTS.headAccessory,
  scale: 0.9,
};

// ─── Dr. Paloma (Pigeon - Physician costume) ───
export const DR_PALOMA_PARTS: CharacterParts = {
  head: {
    bg: 'radial-gradient(ellipse at 50% 50%, #c0b8d0 0%, #a0a0b8 60%, #8080a0 100%)',
    w: 24,
    h: 22,
    radius: '50%',
    shadow: '0 2px 5px rgba(0,0,0,0.15)',
    details: [
      { bg: '#909090', w: 7, h: 5, top: -3, left: 0, radius: '50% 20% 10% 50%' },
      { bg: '#909090', w: 7, h: 5, top: -3, left: 17, radius: '20% 50% 50% 10%' },
      { bg: '#c0c0d0', w: 5, h: 4, top: -1, left: 1, radius: '50%' },
      { bg: '#c0c0d0', w: 5, h: 4, top: -1, left: 18, radius: '50%' },
      { bg: '#e8e0d0', w: 10, h: 7, top: 13, left: 7, radius: '30% 30% 60% 60%' },
      { bg: '#1a1a2a', w: 5, h: 5, top: 6, left: 4, radius: '50%' },
      { bg: '#1a1a2a', w: 5, h: 5, top: 6, left: 15, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 3, top: 7, left: 5, radius: '50%' },
      { bg: '#e8c840', w: 3, h: 3, top: 7, left: 16, radius: '50%' },
      { bg: '#d4a050', w: 6, h: 5, top: 14, left: 9, radius: '30% 30% 50% 50%' },
      { bg: '#e0c8a0', w: 10, h: 5, top: 7, left: 5, radius: '50%' },
    ],
  },
  body: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 60%, #d8d8d8 100%)',
    w: 19,
    h: 18,
    radius: '6px 6px 4px 4px',
    shadow: '1px 2px 4px rgba(0,0,0,0.12)',
    details: [
      { bg: '#a0b0c0', w: 3, h: 3, top: 3, left: 2, radius: '50%' },
      { bg: '#a0b0c0', w: 3, h: 3, top: 8, left: 2, radius: '50%' },
      { bg: '#a0b0c0', w: 3, h: 3, top: 13, left: 2, radius: '50%' },
      { bg: '#c0b8d0', w: 14, h: 4, top: 0, left: 3, radius: '3px 3px 0 0' },
    ],
  },
  leftArm: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#c0b8d0', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  rightArm: {
    bg: 'linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%)',
    w: 7,
    h: 14,
    radius: '4px 4px 3px 3px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#c0b8d0', w: 7, h: 4, top: 10, left: 0, radius: '3px 3px 5px 5px' },
    ],
  },
  leftLeg: {
    bg: 'linear-gradient(180deg, #d8d8d8 0%, #c8c8c8 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: -1, radius: '3px' },
    ],
  },
  rightLeg: {
    bg: 'linear-gradient(180deg, #d8d8d8 0%, #c8c8c8 100%)',
    w: 7,
    h: 10,
    radius: '3px 3px 4px 4px',
    shadow: '1px 1px 3px rgba(0,0,0,0.12)',
    details: [
      { bg: '#1a1a1a', w: 8, h: 4, top: 6, left: 0, radius: '3px' },
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
