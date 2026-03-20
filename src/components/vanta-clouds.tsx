"use client";

import { useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

type VantaCloudsEffect = {
  destroy: () => void;
};

export function VantaClouds() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaCloudsEffect | null>(null);

  useEffect(() => {
    if (!containerRef.current || effectRef.current) {
      return;
    }

    effectRef.current = CLOUDS({
      el: containerRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      skyColor: 0x0b1220,
      cloudColor: 0x17263a,
      cloudShadowColor: 0x09111d,
      sunColor: 0x68d3ff,
      sunGlareColor: 0x9be7ff,
      sunlightColor: 0x7ef7c6,
      speed: 0.42,
    }) as VantaCloudsEffect;

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="vanta-clouds" aria-hidden="true" />;
}
