"use client";

import { useEffect, useRef } from "react";
import { SkinViewer, IdleAnimation } from "skinview3d";

export default function PlayerModel({ username, level }: { username: string; level: number | string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const viewer = new SkinViewer({ canvas: canvasRef.current, width: 300, height: 400 });
      viewer.loadSkin(`https://minotar.net/skin/${username}`);
      viewer.animation = new IdleAnimation();
      viewer.controls.minPolarAngle = Math.PI / 2;
      viewer.controls.maxPolarAngle = Math.PI / 2;

      return () => {
        viewer.dispose();
      };
    }
  }, [username]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="bg-gray-900/80 px-3 py-1 rounded text-sm font-mono absolute -top-4 z-10">
        <span className="text-blue-400">[{level}]</span> {username}
      </div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}