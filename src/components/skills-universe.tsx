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

type ProjectedSkill = SkillNode & {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  radius: number;
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const hoveredSkillRef = useRef(skills[0]?.label ?? "");
  const [hoveredSkill, setHoveredSkill] = useState(skills[0]?.label ?? "");
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const geometryRef = useRef({
    width: 1000,
    height: 760,
    centerX: 500,
    centerY: 380,
    radiusX: 235,
    radiusY: 185,
  });
  const projectedSkillsRef = useRef<ProjectedSkill[]>([]);
  const loadedIconsRef = useRef(new Map<string, HTMLImageElement>());
  const dragState = useRef({
    isDragging: false,
    activePointerId: -1,
    lastX: 0,
    lastY: 0,
    velocityX: 0.00035,
    velocityY: -0.00022,
    targetRotationX: -0.4,
    targetRotationY: 0.55,
    rotationX: -0.4,
    rotationY: 0.55,
  });

  const basePoints = useMemo(() => buildSpherePoints(skills.length), [skills.length]);
  const meshPoints = useMemo(
    () => buildMeshPoints(isCoarsePointer ? 18 : 34),
    [isCoarsePointer],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const sync = () => setIsCoarsePointer(mediaQuery.matches);
    sync();

    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const dispose: Array<() => void> = [];

    skills.forEach((skill) => {
      if (loadedIconsRef.current.has(skill.icon)) {
        return;
      }

      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.src = skill.icon;
      const rerender = () => {
        if (!animationRef.current) {
          return;
        }
      };
      image.addEventListener("load", rerender);
      loadedIconsRef.current.set(skill.icon, image);
      dispose.push(() => image.removeEventListener("load", rerender));
    });

    return () => {
      dispose.forEach((cleanup) => cleanup());
    };
  }, [skills]);

  useEffect(() => {
    const updateGeometry = () => {
      const stage = stageRef.current;
      const canvas = canvasRef.current;
      if (!stage || !canvas) {
        return;
      }

      const rect = stage.getBoundingClientRect();
      const width = Math.max(320, rect.width);
      const height = Math.max(isCoarsePointer ? 460 : 620, rect.height || 0);
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const radiusX = Math.min(width * 0.31, isCoarsePointer ? 150 : 238);
      const radiusY = radiusX * (isCoarsePointer ? 0.8 : 0.82);

      geometryRef.current = {
        width,
        height,
        centerX: width / 2,
        centerY: height / 2 - (isCoarsePointer ? 10 : 0),
        radiusX,
        radiusY,
      };
    };

    updateGeometry();
    const resizeObserver = new ResizeObserver(updateGeometry);
    if (stageRef.current) {
      resizeObserver.observe(stageRef.current);
    }
    window.addEventListener("resize", updateGeometry);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [isCoarsePointer]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const draw = () => {
      const context = canvas.getContext("2d");
      if (!context) {
        animationRef.current = window.requestAnimationFrame(draw);
        return;
      }

      const state = dragState.current;
      const geometry = geometryRef.current;

      if (!state.isDragging) {
        state.targetRotationX += state.velocityY;
        state.targetRotationY += state.velocityX;

        if (isCoarsePointer) {
          state.velocityX *= 0.92;
          state.velocityY *= 0.92;

          if (Math.abs(state.velocityX) < 0.00001) {
            state.velocityX = 0;
          }

          if (Math.abs(state.velocityY) < 0.00001) {
            state.velocityY = 0;
          }
        } else {
          state.velocityX *= 0.986;
          state.velocityY *= 0.986;

          if (Math.abs(state.velocityX) < 0.00005) {
            state.velocityX = 0.00005;
          }

          if (Math.abs(state.velocityY) < 0.00003) {
            state.velocityY = -0.00003;
          }
        }
      }

      const easing = isCoarsePointer ? 0.18 : 0.085;
      state.rotationX += (state.targetRotationX - state.rotationX) * easing;
      state.rotationY += (state.targetRotationY - state.rotationY) * easing;

      context.clearRect(0, 0, geometry.width, geometry.height);

      const glowGradient = context.createRadialGradient(
        geometry.centerX,
        geometry.centerY,
        geometry.radiusX * 0.15,
        geometry.centerX,
        geometry.centerY,
        geometry.radiusX * 1.28,
      );
      glowGradient.addColorStop(0, "rgba(55, 85, 195, 0.12)");
      glowGradient.addColorStop(1, "rgba(55, 85, 195, 0)");
      context.fillStyle = glowGradient;
      context.beginPath();
      context.ellipse(
        geometry.centerX,
        geometry.centerY,
        geometry.radiusX * 1.16,
        geometry.radiusY * 1.16,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.strokeStyle = "rgba(55, 85, 195, 0.18)";
      context.lineWidth = 1.2;
      context.beginPath();
      context.ellipse(
        geometry.centerX,
        geometry.centerY,
        geometry.radiusX,
        geometry.radiusY,
        0,
        0,
        Math.PI * 2,
      );
      context.stroke();

      context.strokeStyle = "rgba(55, 85, 195, 0.08)";
      context.lineWidth = 1;
      [0.32, -0.28].forEach((tilt) => {
        context.beginPath();
        context.ellipse(
          geometry.centerX,
          geometry.centerY,
          geometry.radiusX,
          geometry.radiusY,
          tilt,
          0,
          Math.PI * 2,
        );
        context.stroke();
      });

      const rotatedMesh = meshPoints.map((point) => {
        const rotated = rotatePoint(point, state.rotationX, state.rotationY);
        return {
          x: geometry.centerX + rotated.x * geometry.radiusX,
          y: geometry.centerY + rotated.y * geometry.radiusY,
          z: rotated.z,
        };
      });

      context.lineWidth = isCoarsePointer ? 0.7 : 0.8;
      for (let i = 0; i < rotatedMesh.length; i += 1) {
        for (let j = i + 1; j < rotatedMesh.length; j += 1) {
          const a = rotatedMesh[i];
          const b = rotatedMesh[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const threshold = isCoarsePointer ? geometry.radiusX * 0.76 : geometry.radiusX * 0.7;
          if (distance > threshold) {
            continue;
          }

          context.strokeStyle = `rgba(55, 85, 195, ${Math.max(
            0.05,
            ((a.z + b.z + 2) / 4) * 0.24,
          )})`;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      const projectedSkills = basePoints
        .map((point, index) => {
          const rotated = rotatePoint(point, state.rotationX, state.rotationY);
          const depth = (rotated.z + 1) / 2;
          const scale = isCoarsePointer ? 0.64 + depth * 0.42 : 0.68 + depth * 0.48;
          const radius = (isCoarsePointer ? 22 : 28) * scale;

          return {
            ...skills[index],
            x: geometry.centerX + rotated.x * geometry.radiusX,
            y: geometry.centerY + rotated.y * geometry.radiusY,
            z: rotated.z,
            scale,
            radius,
            opacity: 0.22 + depth * 0.88,
          };
        })
        .sort((a, b) => a.z - b.z);

      projectedSkillsRef.current = projectedSkills;

      projectedSkills.forEach((skill) => {
        const icon = loadedIconsRef.current.get(skill.icon);
        const isActive = hoveredSkillRef.current === skill.label;

        context.save();
        context.globalAlpha = skill.opacity;
        context.translate(skill.x, skill.y);

        if (isActive) {
          context.shadowColor = `${skill.accent}88`;
          context.shadowBlur = isCoarsePointer ? 12 : 18;
        }

        if (icon && icon.complete) {
          const size = skill.radius * 2;
          context.drawImage(icon, -size / 2, -size / 2, size, size);
        } else {
          context.fillStyle = skill.accent;
          context.beginPath();
          context.arc(0, 0, skill.radius * 0.6, 0, Math.PI * 2);
          context.fill();
        }

        context.shadowBlur = 0;
        context.fillStyle = isActive ? "rgba(24, 37, 84, 0.98)" : "rgba(42, 52, 57, 0.92)";
        context.font = `${Math.max(11, Math.round(skill.radius * 0.42))}px var(--font-display), monospace`;
        context.textAlign = "center";
        context.fillText(skill.label, 0, skill.radius + 16);

        if (!isCoarsePointer) {
          context.fillStyle = "rgba(86, 97, 102, 0.88)";
          context.font = `${Math.max(10, Math.round(skill.radius * 0.28))}px var(--font-body), monospace`;
          context.fillText(skill.category, 0, skill.radius + 31);
        }

        context.restore();
      });

      animationRef.current = window.requestAnimationFrame(draw);
    };

    animationRef.current = window.requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [basePoints, isCoarsePointer, meshPoints, skills]);

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
      setIsDragging(false);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (
        dragState.current.isDragging &&
        event.pointerId === dragState.current.activePointerId
      ) {
        const dx = event.clientX - dragState.current.lastX;
        const dy = event.clientY - dragState.current.lastY;
        const dragScale = isCoarsePointer ? 0.0048 : 0.0058;
        const velocityScale = isCoarsePointer ? 0.00006 : 0.00018;

        dragState.current.lastX = event.clientX;
        dragState.current.lastY = event.clientY;
        dragState.current.targetRotationY += dx * dragScale;
        dragState.current.targetRotationX += dy * dragScale;
        dragState.current.velocityX = dx * velocityScale;
        dragState.current.velocityY = dy * velocityScale;
        return;
      }

      if (isCoarsePointer) {
        return;
      }

      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const hitSkill = [...projectedSkillsRef.current]
        .reverse()
        .find((skill) => {
          const dx = x - skill.x;
          const dy = y - skill.y;
          return Math.sqrt(dx * dx + dy * dy) <= skill.radius * 0.9;
        });

      const nextHovered = hitSkill?.label ?? skills[0]?.label ?? "";
      if (nextHovered !== hoveredSkillRef.current) {
        hoveredSkillRef.current = nextHovered;
        setHoveredSkill(nextHovered);
      }
    };

    const handlePointerUp = (event: PointerEvent) => stopDragging(event.pointerId);
    const handlePointerCancel = (event: PointerEvent) => stopDragging(event.pointerId);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerCancel);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerCancel);
    };
  }, [isCoarsePointer, skills]);

  return (
    <section className="skills-universe terminal-panel">
      <div className="skills-universe__header">
        <p className="terminal-label">{"// Skills.json"}</p>
      </div>

      <div
        ref={stageRef}
        className={`skills-orb-stage${isDragging ? " is-dragging" : ""}`}
        onPointerDown={(event) => {
          event.preventDefault();
          if (!event.isPrimary) {
            return;
          }

          dragState.current.isDragging = true;
          dragState.current.activePointerId = event.pointerId;
          dragState.current.lastX = event.clientX;
          dragState.current.lastY = event.clientY;
          setIsDragging(true);
        }}
      >
        <canvas
          ref={canvasRef}
          className="skills-orb-canvas"
          aria-label="Interactive rotating skills globe"
        />

        <div className="skills-orb-caption">
          <span>{isCoarsePointer ? "Drag to explore" : "Drag to rotate"}</span>
          <span>{isCoarsePointer ? "Touch-tuned motion" : "Hover to inspect"}</span>
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
