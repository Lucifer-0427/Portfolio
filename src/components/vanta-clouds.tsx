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
      skyColor: 0x06101d,
      cloudColor: 0x16314f,
      cloudShadowColor: 0x081321,
      sunColor: 0x56d2ff,
      sunGlareColor: 0x2d84ff,
      sunlightColor: 0x5bdaa4,
      speed: 0.55,
    }) as VantaCloudsEffect;

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="vanta-clouds" aria-hidden="true" />;
}
