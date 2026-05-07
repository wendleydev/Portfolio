import React, { useEffect, useRef, useState } from "react";

/**
 * Raios decorativos no hero. Em viewport estreito (&lt;640px) e com
 * prefers-reduced-motion o componente não renderiza — melhor para
 * acessibilidade e desempenho em mobile.
 */
export default function ThunderCanvas({ lettersPositions = [] }) {
  const canvasRef = useRef(null);
  const [effectsEnabled, setEffectsEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const isNarrowViewport = window.matchMedia("(max-width: 639px)");

    const update = () => {
      setEffectsEnabled(
        !prefersReducedMotion.matches && !isNarrowViewport.matches,
      );
    };

    update();
    prefersReducedMotion.addEventListener("change", update);
    isNarrowViewport.addEventListener("change", update);
    return () => {
      prefersReducedMotion.removeEventListener("change", update);
      isNarrowViewport.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!effectsEnabled) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let w;
    let h;

    function sizeCanvas() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    }

    sizeCanvas();

    function Thunder(options = {}) {
      this.lifespan = options.lifespan || Math.round(Math.random() * 10 + 30);
      this.maxlife = this.lifespan;
      this.color = options.color || "#fefefe";
      this.glow = options.glow || "#2323fe";
      this.x = options.x ?? Math.random() * w;
      this.y = options.y ?? Math.random() * h;
      this.width = options.width || 2;
      this.direct = options.direct || Math.random() * Math.PI * 2;
      this.max = options.max || Math.round(Math.random() * 10 + 28);
      this.segments = [...new Array(this.max)].map(() => {
        return {
          direct: this.direct + (Math.PI * Math.random() * 0.2 - 0.1),
          length: Math.random() * 20 + 80,
          change: Math.random() * 0.04 - 0.02,
        };
      });

      this.update = function () {
        this.lifespan--;
      };

      this.draw = function () {
        let [sx, sy] = [this.x, this.y];

        ctx.beginPath();
        ctx.moveTo(sx, sy);

        for (let i = 0; i < this.segments.length; i++) {
          let seg = this.segments[i];
          seg.direct += seg.change;
          sx += Math.cos(seg.direct) * seg.length;
          sy += Math.sin(seg.direct) * seg.length;
          ctx.lineTo(sx, sy);
        }

        ctx.strokeStyle = this.color;
        ctx.shadowColor = this.glow;
        ctx.shadowBlur = 15;
        ctx.lineWidth = this.width;
        ctx.stroke();
        ctx.shadowBlur = 0;
      };
    }

    const thunders = [];

    function spawnPoint() {
      if (lettersPositions?.length > 0) {
        const p =
          lettersPositions[
            Math.floor(Math.random() * lettersPositions.length)
          ];
        return { x: p.x, y: p.y };
      }
      return { x: w * 0.35, y: h * 0.35 };
    }

    let cancelled = false;
    let rafId = 0;

    function animate() {
      if (cancelled) return;

      ctx.clearRect(0, 0, w, h);

      if (Math.random() < 0.08) {
        const pt = spawnPoint();
        thunders.push(new Thunder({ x: pt.x, y: pt.y }));
      }

      for (let i = thunders.length - 1; i >= 0; i--) {
        const t = thunders[i];
        t.update();
        t.draw();
        if (t.lifespan <= 0) {
          thunders.splice(i, 1);
        }
      }

      rafId = requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      sizeCanvas();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [lettersPositions, effectsEnabled]);

  if (!effectsEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 z-20 pointer-events-none"
    ></canvas>
  );
}
