import React, { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styles from "./AnimatedPhone.module.css";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const screens = [
  { src: "/phone_2.png", alt: "Phone screen showing analytics" },
  { src: "/phone_3.png", alt: "Phone screen showing notifications" },
  { src: "/gridbg.png", alt: "Abstract grid wallpaper" },
];

export const AnimatedPhone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeScreen, setActiveScreen] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const tiltStyle = useMemo<CSSProperties>(() => {
    if (prefersReducedMotion) return {};
    return {
      "--tilt-x": `${tilt.x.toFixed(2)}deg`,
      "--tilt-y": `${tilt.y.toFixed(2)}deg`,
    } as CSSProperties;
  }, [prefersReducedMotion, tilt.x, tilt.y]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const cycleDelay = 4600;
    const timer = window.setInterval(() => {
      setActiveScreen((index) => (index + 1) % screens.length);
    }, cycleDelay);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!prefersReducedMotion) return;
    setActiveScreen(0);
  }, [prefersReducedMotion]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    const tiltX = (relativeX - 0.5) * 14;
    const tiltY = (relativeY - 0.5) * -10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={containerRef}
      className={styles.wrapper}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-label="Interactive phone mock"
    >
      <div
        className={`${styles.phone} ${prefersReducedMotion ? styles.reducedMotion : ""}`}
        style={tiltStyle}
      >
        <img className={styles.shadow} src="/phone_shadow.png" alt="Phone shadow" loading="lazy" />

        <div className={styles.device}>
          <img className={styles.body} src="/phone.png" alt="Phone hardware shell" loading="lazy" />

          <div className={styles.screenStack} aria-live="polite">
            {screens.map((screen, index) => (
              <img
                key={screen.src}
                className={`${styles.screen} ${index === activeScreen ? styles.screenActive : ""}`}
                src={screen.src}
                alt={screen.alt}
                loading="lazy"
              />
            ))}
          </div>

          <div className={styles.glow} aria-hidden />
          <div className={styles.sparkle} aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default AnimatedPhone;
