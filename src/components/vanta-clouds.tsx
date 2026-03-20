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
      skyColor: 0xe8cfba,
      cloudColor: 0xf7f1e5,
      cloudShadowColor: 0xb8542c,
      sunColor: 0xd96c2d,
      sunGlareColor: 0xf8dfab,
      sunlightColor: 0xf6bc62,
      speed: 0.8,
    }) as VantaCloudsEffect;

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="vanta-clouds" aria-hidden="true" />;
}
