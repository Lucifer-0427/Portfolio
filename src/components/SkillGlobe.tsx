"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SkillNode = {
  label: string;
  category: string;
  accent: string;
  icon: string;
};

type SkillGlobeProps = {
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

export function SkillGlobe({ skills }: SkillGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const loadedIconsRef = useRef(new Map<string, HTMLImageElement>());
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
  const dragState = useRef({
    isDragging: false,
    activePointerId: -1,
    lastX: 0,
    lastY: 0,
    velocityX: -0.0003,
    velocityY: -0.00016,
    targetRotationX: -0.35,
    targetRotationY: 0.55,
    rotationX: -0.35,
    rotationY: 0.55,
  });

  const basePoints = useMemo(() => buildSpherePoints(skills.length), [skills.length]);
  const meshPoints = useMemo(
    () => buildMeshPoints(isCoarsePointer ? 16 : 24),
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
    const icons = new Map<string, HTMLImageElement>();
    let cancelled = false;

    skills.forEach((skill) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.onload = () => {
        if (!cancelled) {
          loadedIconsRef.current.set(skill.icon, image);
        }
      };
      image.src = skill.icon;
      icons.set(skill.icon, image);
    });

    loadedIconsRef.current = icons;

    return () => {
      cancelled = true;
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
      const height = Math.max(isCoarsePointer ? 420 : 600, rect.height || 0);
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

      const radiusX = Math.min(width * 0.31, isCoarsePointer ? 150 : 228);
      const radiusY = radiusX * (isCoarsePointer ? 0.82 : 0.84);

      geometryRef.current = {
        width,
        height,
        centerX: width / 2,
        centerY: height / 2,
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
        state.velocityX *= isCoarsePointer ? 0.93 : 0.986;
        state.velocityY *= isCoarsePointer ? 0.93 : 0.986;

        if (!isCoarsePointer) {
          if (Math.abs(state.velocityX) < 0.00004) {
            state.velocityX = -0.00004;
          }
          if (Math.abs(state.velocityY) < 0.00002) {
            state.velocityY = -0.00002;
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
        geometry.radiusX * 0.12,
        geometry.centerX,
        geometry.centerY,
        geometry.radiusX * 1.35,
      );
      glowGradient.addColorStop(0, "rgba(56, 189, 248, 0.16)");
      glowGradient.addColorStop(0.55, "rgba(99, 102, 241, 0.08)");
      glowGradient.addColorStop(1, "rgba(56, 189, 248, 0)");
      context.fillStyle = glowGradient;
      context.beginPath();
      context.ellipse(
        geometry.centerX,
        geometry.centerY,
        geometry.radiusX * 1.22,
        geometry.radiusY * 1.22,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.strokeStyle = "rgba(125, 211, 252, 0.14)";
      context.lineWidth = 1.1;
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

      context.strokeStyle = "rgba(148, 163, 184, 0.06)";
      [0.34, -0.28].forEach((tilt) => {
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

      context.lineWidth = isCoarsePointer ? 0.55 : 0.65;
      for (let i = 0; i < rotatedMesh.length; i += 1) {
        for (let j = i + 1; j < rotatedMesh.length; j += 1) {
          const a = rotatedMesh[i];
          const b = rotatedMesh[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const threshold = isCoarsePointer ? geometry.radiusX * 0.72 : geometry.radiusX * 0.64;
          if (distance > threshold) {
            continue;
          }

          context.strokeStyle = `rgba(56, 189, 248, ${Math.max(
            0.02,
            ((a.z + b.z + 2) / 4) * 0.16,
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
          const scale = isCoarsePointer ? 0.72 + depth * 0.38 : 0.78 + depth * 0.46;
          const radius = (isCoarsePointer ? 24 : 30) * scale;

          return {
            ...skills[index],
            x: geometry.centerX + rotated.x * geometry.radiusX,
            y: geometry.centerY + rotated.y * geometry.radiusY,
            z: rotated.z,
            scale,
            radius,
            opacity: 0.28 + depth * 0.82,
          };
        })
        .sort((a, b) => a.z - b.z);

      projectedSkillsRef.current = projectedSkills;

      projectedSkills.forEach((skill) => {
        const isActive = hoveredSkillRef.current === skill.label;
        const icon = loadedIconsRef.current.get(skill.icon);

        context.save();
        context.globalAlpha = skill.opacity;
        context.translate(skill.x, skill.y);

        const gradient = context.createRadialGradient(0, 0, 0, 0, 0, skill.radius * 1.55);
        gradient.addColorStop(0, skill.accent);
        gradient.addColorStop(1, "rgba(15, 23, 42, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(0, 0, skill.radius * 1.22, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = "rgba(8, 15, 34, 0.92)";
        context.beginPath();
        context.arc(0, 0, skill.radius * 0.86, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = isActive ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.18)";
        context.lineWidth = isActive ? 1.3 : 1;
        context.beginPath();
        context.arc(0, 0, skill.radius * 0.86, 0, Math.PI * 2);
        context.stroke();

        if (icon?.complete) {
          const iconSize = skill.radius * 1.45;
          context.save();
          context.beginPath();
          context.arc(0, 0, skill.radius * 0.72, 0, Math.PI * 2);
          context.clip();
          context.drawImage(icon, -iconSize / 2, -iconSize / 2, iconSize, iconSize);
          context.restore();
        } else {
          context.fillStyle = skill.accent;
          context.beginPath();
          context.arc(0, 0, skill.radius * 0.46, 0, Math.PI * 2);
          context.fill();
        }

        if (isActive) {
          context.strokeStyle = skill.accent;
          context.lineWidth = 1.4;
          context.beginPath();
          context.arc(0, 0, skill.radius * 1.08, 0, Math.PI * 2);
          context.stroke();
        }

        if (isActive) {
          context.fillStyle = "rgba(255,255,255,0.98)";
          context.font = `${Math.max(11, Math.round(skill.radius * 0.54))}px var(--font-display), sans-serif`;
          context.textAlign = "center";
          context.fillText(skill.label, 0, skill.radius + 18);

          if (!isCoarsePointer) {
            context.fillStyle = "rgba(148, 163, 184, 0.88)";
            context.font = `${Math.max(10, Math.round(skill.radius * 0.34))}px var(--font-body), sans-serif`;
            context.fillText(skill.category, 0, skill.radius + 33);
          }
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
        const dragScale = isCoarsePointer ? 0.0048 : 0.0056;
        const velocityScale = isCoarsePointer ? 0.00006 : 0.00017;

        dragState.current.lastX = event.clientX;
        dragState.current.lastY = event.clientY;
        dragState.current.targetRotationY -= dx * dragScale;
        dragState.current.targetRotationX += dy * dragScale;
        dragState.current.velocityX = -dx * velocityScale;
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
          return Math.sqrt(dx * dx + dy * dy) <= skill.radius * 0.92;
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
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/20 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Skills Globe</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Interactive skills globe
          </h3>
        </div>
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          Active skill: <span className="font-semibold text-white">{hoveredSkill}</span>
        </p>
      </div>

      <div
        ref={stageRef}
        className={`relative min-h-[28rem] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.8),rgba(2,6,23,0.96))] sm:min-h-[38rem] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
        <canvas ref={canvasRef} className="block h-full w-full" aria-label="Interactive rotating skills globe" />
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-2">
          <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
            Drag to rotate
          </span>
          <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
            Hover to inspect
          </span>
        </div>
      </div>
    </section>
  );
}
