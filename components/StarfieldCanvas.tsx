import React, { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./StarfieldCanvas.module.css";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  parallax: number;
};

type ShootingStar = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  life: number;
};

interface StarfieldCanvasProps {
  density?: number;
  className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export const StarfieldCanvas: React.FC<StarfieldCanvasProps> = ({ density = 140, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarRef = useRef<ShootingStar | null>(null);
  const animationRef = useRef<number>();
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const dpr = clamp(window.devicePixelRatio || 1, 1, 2);

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    const seedStars = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const targetCount = Math.min(320, Math.max(40, Math.floor((width * height) / 12000) + density / 4));
      starsRef.current = Array.from({ length: targetCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.3 + 0.3,
        speed: Math.random() * 0.04 + 0.02,
        parallax: Math.random() * 0.5 + 0.75,
      }));
    };

    const drawStaticField = () => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(255,255,255,0.85)";
      starsRef.current.forEach((star) => {
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fill();
      });
    };

    let lastTimestamp = performance.now();
    let nextShootingStar = lastTimestamp + 4200 + Math.random() * 3200;

    const render = (timestamp: number) => {
      if (!canvas || !context || prefersReducedMotion) return;

      const delta = Math.min(48, timestamp - lastTimestamp);
      lastTimestamp = timestamp;

      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      starsRef.current = starsRef.current.map((star) => {
        let newY = star.y + star.speed * delta * star.parallax;
        if (newY > height) newY = 0;

        context.globalAlpha = 0.35 + Math.random() * 0.65;
        context.fillStyle = "white";
        context.beginPath();
        context.arc(star.x, newY, star.size, 0, Math.PI * 2);
        context.fill();

        return { ...star, y: newY };
      });

      if (timestamp > nextShootingStar) {
        const startX = Math.random() * width * 0.8;
        const startY = Math.random() * height * 0.4;
        shootingStarRef.current = {
          x: startX,
          y: startY,
          velocityX: 6 + Math.random() * 4,
          velocityY: 2 + Math.random() * 2,
          life: 0,
        };
        nextShootingStar = timestamp + 5600 + Math.random() * 4600;
      }

      if (shootingStarRef.current) {
        const star = shootingStarRef.current;
        star.life += delta;
        star.x += star.velocityX;
        star.y += star.velocityY;

        context.strokeStyle = "rgba(255,255,255,0.75)";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(star.x, star.y);
        context.lineTo(star.x - star.velocityX * 5, star.y - star.velocityY * 5);
        context.stroke();

        if (star.x > width + 50 || star.y > height + 50 || star.life > 800) {
          shootingStarRef.current = null;
        }
      }

      animationRef.current = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    seedStars();

    if (prefersReducedMotion) {
      drawStaticField();
      return;
    }

    if (visible) {
      animationRef.current = window.requestAnimationFrame(render);
    }

    const handleResize = () => {
      resizeCanvas();
      seedStars();
      if (prefersReducedMotion) drawStaticField();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [visible, prefersReducedMotion, density]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={`${styles.canvas} ${className ?? ""}`} aria-hidden />;
};

export default StarfieldCanvas;
