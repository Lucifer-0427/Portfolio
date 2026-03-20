"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SkillNode = {
  label: string;
  category: string;
  accent: string;
  icon: string;
};

type SkillsUniverseProps = {
  skills: SkillNode[];
};

type Point3D = {
  x: number;
  y: number;
  z: number;
};

const goldenAngle = Math.PI * (3 - Math.sqrt(5));

function buildSpherePoints(count: number): Point3D[] {
  return Array.from({ length: count }, (_, index) => {
    const t = count === 1 ? 0 : index / (count - 1);
    const y = 1 - t * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;

    return {
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    };
  });
}

function rotatePoint(point: Point3D, rx: number, ry: number): Point3D {
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const x1 = point.x * cosY + point.z * sinY;
  const z1 = -point.x * sinY + point.z * cosY;

  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const y2 = point.y * cosX - z1 * sinX;
  const z2 = point.y * sinX + z1 * cosX;

  return { x: x1, y: y2, z: z2 };
}

export function SkillsUniverse({ skills }: SkillsUniverseProps) {
  const dragState = useRef({
    isDragging: false,
    lastX: 0,
    lastY: 0,
    targetVelocityX: 0.0018,
    targetVelocityY: -0.0012,
    targetRotationX: -0.4,
    targetRotationY: 0.55,
    rotationX: -0.4,
    rotationY: 0.55,
  });
  const animationRef = useRef<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string>(skills[0]?.label ?? "");
  const [rotation, setRotation] = useState({ x: -0.4, y: 0.55 });

  const basePoints = useMemo(() => buildSpherePoints(skills.length), [skills.length]);

  useEffect(() => {
    const animate = () => {
      const state = dragState.current;
      if (!state.isDragging) {
        state.targetRotationX += state.targetVelocityY;
        state.targetRotationY += state.targetVelocityX;
        state.targetVelocityX *= 0.989;
        state.targetVelocityY *= 0.989;

        if (Math.abs(state.targetVelocityX) < 0.0006) {
          state.targetVelocityX = 0.0006;
        }

        if (Math.abs(state.targetVelocityY) < 0.00035) {
          state.targetVelocityY = -0.00035;
        }
      }

      state.rotationX += (state.targetRotationX - state.rotationX) * 0.12;
      state.rotationY += (state.targetRotationY - state.rotationY) * 0.12;

      setRotation({
        x: state.rotationX,
        y: state.rotationY,
      });
      animationRef.current = window.requestAnimationFrame(animate);
    };

    animationRef.current = window.requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePointerUp = () => {
      dragState.current.isDragging = false;
    };

    window.addEventListener("pointerup", handlePointerUp);
    return () => window.removeEventListener("pointerup", handlePointerUp);
  }, []);

  const projectedSkills = basePoints
    .map((point, index) => {
      const rotated = rotatePoint(point, rotation.x, rotation.y);
      const depth = (rotated.z + 1) / 2;
      const scale = 0.7 + depth * 0.55;

      return {
        ...skills[index],
        x: rotated.x * 210,
        y: rotated.y * 170,
        z: rotated.z,
        scale,
        opacity: 0.18 + depth * 0.95,
      };
    })
    .sort((a, b) => a.z - b.z);

  const lines = [];
  for (let index = 0; index < projectedSkills.length; index += 1) {
    const current = projectedSkills[index];
    const next = projectedSkills[(index + 2) % projectedSkills.length];
    const cross = projectedSkills[(index + 5) % projectedSkills.length];
    lines.push([current, next]);
    lines.push([current, cross]);
  }

  return (
    <section className="skills-universe terminal-panel">
      <div className="skills-universe__header">
        <div>
          <p className="terminal-label">{"// Skills.json"}</p>
          <h2>Drag to explore my technical toolkit.</h2>
          <p className="section-copy">
            Hover a skill to highlight it. Drag the sphere to rotate and inspect
            the full set from different angles.
          </p>
        </div>

        <div className="skills-universe__meta">
          <span className="status-pill">Interactive</span>
          <span className="status-pill status-pill--green">Hover + drag enabled</span>
        </div>
      </div>

      <div
        className="skills-orb-stage"
        onPointerDown={(event) => {
          dragState.current.isDragging = true;
          dragState.current.lastX = event.clientX;
          dragState.current.lastY = event.clientY;
          (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragState.current.isDragging) {
            return;
          }

          const dx = event.clientX - dragState.current.lastX;
          const dy = event.clientY - dragState.current.lastY;
          dragState.current.lastX = event.clientX;
          dragState.current.lastY = event.clientY;
          dragState.current.targetRotationY += dx * 0.0065;
          dragState.current.targetRotationX += dy * 0.0065;
          dragState.current.targetVelocityX = dx * 0.00042;
          dragState.current.targetVelocityY = dy * 0.00042;
          setRotation({
            x: dragState.current.rotationX,
            y: dragState.current.rotationY,
          });
        }}
      >
        <div className="skills-orb" aria-hidden="true">
          <div className="skills-orb__glow" />
          <div className="skills-orb__core" />
          <svg className="skills-orb__mesh" viewBox="0 0 1000 760" preserveAspectRatio="none">
            {lines.map(([start, end], index) => (
              <line
                key={index}
                x1={500 + start.x}
                y1={380 + start.y}
                x2={500 + end.x}
                y2={380 + end.y}
              />
            ))}
          </svg>

          {projectedSkills.map((skill, index) => {
            const isActive = hoveredSkill === skill.label;

            return (
              <button
                key={`${skill.label}-${index}`}
                type="button"
                className={`skill-node${isActive ? " skill-node--active" : ""}`}
                style={
                  {
                    "--skill-x": `${skill.x}px`,
                    "--skill-y": `${skill.y}px`,
                    "--skill-scale": skill.scale,
                    "--skill-opacity": skill.opacity,
                    "--skill-accent": skill.accent,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setHoveredSkill(skill.label)}
                onFocus={() => setHoveredSkill(skill.label)}
              >
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="skill-node__icon"
                  loading="lazy"
                />
                <span className="skill-node__label">{skill.label}</span>
                <span className="skill-node__category">{skill.category}</span>
              </button>
            );
          })}
        </div>

        <div className="skills-orb-caption">
          <span>Drag to rotate</span>
          <span>Hover to inspect</span>
        </div>
      </div>

      <div className="skills-universe__footer">
        <p className="skills-universe__focus">
          Active skill: <strong>{hoveredSkill}</strong>
        </p>
      </div>
    </section>
  );
}
