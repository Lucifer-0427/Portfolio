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

function buildMeshPoints(count: number): Point3D[] {
  return Array.from({ length: count }, (_, index) => {
    const t = count === 1 ? 0 : index / (count - 1);
    const y = 1 - t * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index * 1.35;

    return {
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    };
  });
}

export function SkillsUniverse({ skills }: SkillsUniverseProps) {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const dragState = useRef({
    isDragging: false,
    activePointerId: -1,
    lastX: 0,
    lastY: 0,
    targetVelocityX: 0.00035,
    targetVelocityY: -0.00022,
    targetRotationX: -0.4,
    targetRotationY: 0.55,
    rotationX: -0.4,
    rotationY: 0.55,
  });
  const animationRef = useRef<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string>(skills[0]?.label ?? "");
  const [rotation, setRotation] = useState({ x: -0.4, y: 0.55 });

  const basePoints = useMemo(() => buildSpherePoints(skills.length), [skills.length]);
  const meshPoints = useMemo(() => buildMeshPoints(36), []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const sync = () => setIsCoarsePointer(mediaQuery.matches);
    sync();

    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const animate = () => {
      const state = dragState.current;
      if (!state.isDragging) {
        state.targetRotationX += state.targetVelocityY;
        state.targetRotationY += state.targetVelocityX;
        state.targetVelocityX *= isCoarsePointer ? 0.996 : 0.994;
        state.targetVelocityY *= isCoarsePointer ? 0.996 : 0.994;

        if (Math.abs(state.targetVelocityX) < (isCoarsePointer ? 0.00003 : 0.00008)) {
          state.targetVelocityX = isCoarsePointer ? 0.00003 : 0.00008;
        }

        if (Math.abs(state.targetVelocityY) < (isCoarsePointer ? 0.00002 : 0.00005)) {
          state.targetVelocityY = isCoarsePointer ? -0.00002 : -0.00005;
        }
      }

      state.rotationX += (state.targetRotationX - state.rotationX) * (isCoarsePointer ? 0.04 : 0.055);
      state.rotationY += (state.targetRotationY - state.rotationY) * (isCoarsePointer ? 0.04 : 0.055);

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
  }, [isCoarsePointer]);

  useEffect(() => {
    const stopDragging = (pointerId?: number) => {
      if (
        pointerId !== undefined &&
        dragState.current.activePointerId !== -1 &&
        pointerId !== dragState.current.activePointerId
      ) {
        return;
      }
      dragState.current.isDragging = false;
      dragState.current.activePointerId = -1;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (
        !dragState.current.isDragging ||
        event.pointerId !== dragState.current.activePointerId
      ) {
        return;
      }

      const dx = event.clientX - dragState.current.lastX;
      const dy = event.clientY - dragState.current.lastY;
      const dragScale = isCoarsePointer ? 0.0038 : 0.0065;
      const velocityScale = isCoarsePointer ? 0.00012 : 0.00022;
      dragState.current.lastX = event.clientX;
      dragState.current.lastY = event.clientY;
      dragState.current.targetRotationY += dx * dragScale;
      dragState.current.targetRotationX += dy * dragScale;
      dragState.current.targetVelocityX = dx * velocityScale;
      dragState.current.targetVelocityY = dy * velocityScale;
      setRotation({
        x: dragState.current.rotationX,
        y: dragState.current.rotationY,
      });
    };

    const handlePointerUp = (event: PointerEvent) => {
      stopDragging(event.pointerId);
    };

    const handlePointerCancel = (event: PointerEvent) => {
      stopDragging(event.pointerId);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerCancel);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerCancel);
    };
  }, [isCoarsePointer]);

  const projectedSkills = basePoints
    .map((point, index) => {
      const rotated = rotatePoint(point, rotation.x, rotation.y);
      const depth = (rotated.z + 1) / 2;
      const scale = 0.7 + depth * 0.55;

      return {
        ...skills[index],
        x: rotated.x * 245,
        y: rotated.y * 195,
        z: rotated.z,
        scale,
        opacity: 0.18 + depth * 0.95,
      };
    })
    .sort((a, b) => a.z - b.z);

  const projectedMeshPoints = meshPoints.map((point) => {
    const rotated = rotatePoint(point, rotation.x, rotation.y);
    return {
      x: 500 + rotated.x * 235,
      y: 380 + rotated.y * 185,
      z: rotated.z,
    };
  });

  const meshLines: Array<[typeof projectedMeshPoints[number], typeof projectedMeshPoints[number]]> = [];
  for (let i = 0; i < projectedMeshPoints.length; i += 1) {
    for (let j = i + 1; j < projectedMeshPoints.length; j += 1) {
      const a = projectedMeshPoints[i];
      const b = projectedMeshPoints[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 180) {
        meshLines.push([a, b]);
      }
    }
  }

  return (
    <section className="skills-universe terminal-panel">
      <div className="skills-universe__header">
        <p className="terminal-label">{"// Skills.json"}</p>
      </div>

      <div
        className="skills-orb-stage"
        onPointerDown={(event) => {
          event.preventDefault();
          if (!event.isPrimary) {
            return;
          }
          dragState.current.isDragging = true;
          dragState.current.activePointerId = event.pointerId;
          dragState.current.lastX = event.clientX;
          dragState.current.lastY = event.clientY;
        }}
      >
        <div className="skills-orb" aria-hidden="true">
          <div className="skills-orb__glow" />
          <div className="skills-orb__core" />
          <svg className="skills-orb__mesh" viewBox="0 0 1000 760" preserveAspectRatio="none">
            {meshLines.map(([start, end], index) => (
              <line
                key={index}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                style={{
                  opacity: Math.max(0.06, ((start.z + end.z + 2) / 4) * 0.42),
                }}
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
