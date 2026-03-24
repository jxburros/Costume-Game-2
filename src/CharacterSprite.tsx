import React from 'react';
import { CharacterParts, BodyPartStyle } from './types';

interface CharacterSpriteProps {
  parts: CharacterParts;
  /** Overall size in px (character fits within this square) */
  size?: number;
  /** Which direction the character is facing */
  facing?: 'left' | 'right';
  /** Whether the character is currently walking */
  walking?: boolean;
  /** Unique id prefix for animation stagger */
  id?: string;
}

function PartDiv({
  style,
  className,
  animClass,
  children,
}: {
  style: BodyPartStyle;
  className?: string;
  animClass?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${animClass || ''} ${className || ''}`}
      style={{
        width: style.w,
        height: style.h,
        background: style.imageUrl ? `url(${style.imageUrl}) center / contain no-repeat` : style.bg,
        borderRadius: style.radius || '4px',
        boxShadow: style.shadow || '1px 2px 4px rgba(0,0,0,0.18)',
        border: style.border || 'none',
        imageRendering: style.imageUrl ? 'high-quality' : 'auto',
      }}
    >
      {/* Render detail overlays */}
      {style.details?.map((d, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: d.w,
            height: d.h,
            background: d.bg,
            top: d.top,
            left: d.left,
            borderRadius: d.radius || '2px',
            pointerEvents: 'none',
          }}
        />
      ))}
      {children}
    </div>
  );
}

/**
 * Renders a character as separate articulated body parts in a paper cut-out style.
 * Each part (head, body, arms, legs) animates independently.
 */
export default function CharacterSprite({
  parts,
  size = 64,
  facing = 'right',
  walking = false,
  id = 'char',
}: CharacterSpriteProps) {
  // All layout is computed in a 64x64 coordinate space, then scaled to fit `size`
  const baseScale = size / 64;
  const charScale = parts.scale || 1;
  const flip = facing === 'left' ? 'scaleX(-1)' : '';

  // Layout offsets relative to a 64x64 canvas (scaled later)
  // Body is the anchor point
  const bodyX = 32 - parts.body.w / 2;
  const bodyY = 26;

  const headX = 32 - parts.head.w / 2;
  const headY = bodyY - parts.head.h + 2;

  const leftArmX = bodyX - parts.leftArm.w + 3;
  const leftArmY = bodyY + 2;

  const rightArmX = bodyX + parts.body.w - 3;
  const rightArmY = bodyY + 2;

  const leftLegX = bodyX + 3;
  const leftLegY = bodyY + parts.body.h - 2;

  const rightLegX = bodyX + parts.body.w - parts.rightLeg.w - 3;
  const rightLegY = bodyY + parts.body.h - 2;

  const accessoryX = parts.headAccessory
    ? 32 - parts.headAccessory.w / 2
    : 0;
  const accessoryY = parts.headAccessory
    ? headY - parts.headAccessory.h + (parts.headAccessory.offsetY ?? 4)
    : 0;

  const walkClass = walking ? 'char-walking' : '';

  return (
    <div
      className="relative char-sprite"
      style={{
        width: 64,
        height: 64,
        transform: `scale(${baseScale * charScale}) ${flip}`,
        transformOrigin: 'center center',
      }}
    >
      {/* Paper texture overlay for cut-out feel */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
          opacity: 0.08,
          mixBlendMode: 'multiply',
          borderRadius: '4px',
        }}
      />

      {/* Left Leg */}
      <div
        className={`absolute z-[1] char-left-leg ${walkClass}`}
        style={{ left: leftLegX, top: leftLegY }}
      >
        <PartDiv style={parts.leftLeg} />
      </div>

      {/* Right Leg */}
      <div
        className={`absolute z-[1] char-right-leg ${walkClass}`}
        style={{ left: rightLegX, top: rightLegY }}
      >
        <PartDiv style={parts.rightLeg} />
      </div>

      {/* Body */}
      <div
        className="absolute z-[2] char-body"
        style={{ left: bodyX, top: bodyY }}
      >
        <PartDiv style={parts.body} />
      </div>

      {/* Left Arm */}
      <div
        className={`absolute z-[3] char-left-arm ${walkClass}`}
        style={{ left: leftArmX, top: leftArmY, transformOrigin: 'top right' }}
      >
        <PartDiv style={parts.leftArm} />
      </div>

      {/* Right Arm */}
      <div
        className={`absolute z-[3] char-right-arm ${walkClass}`}
        style={{ left: rightArmX, top: rightArmY, transformOrigin: 'top left' }}
      >
        <PartDiv style={parts.rightArm} />
      </div>

      {/* Head */}
      <div
        className="absolute z-[4] char-head"
        style={{ left: headX, top: headY }}
      >
        <PartDiv style={parts.head} />
      </div>

      {/* Head Accessory (hat, crown, etc.) */}
      {parts.headAccessory && (
        <div
          className="absolute z-[5] char-head-accessory"
          style={{ left: accessoryX, top: accessoryY }}
        >
          <PartDiv style={parts.headAccessory} />
        </div>
      )}
    </div>
  );
}
