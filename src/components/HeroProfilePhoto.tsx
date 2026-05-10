import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import profilePhoto from "../assets/profile.jpg";

export function HeroProfilePhoto() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.4 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="hero-profile-photo"
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.26, duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="hero-profile-float"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="hero-profile-tilt"
          style={reduceMotion ? undefined : { rotateX, rotateY }}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="portrait-glow" aria-hidden />
          <div className="portrait-orbit portrait-orbit-one" aria-hidden />
          <div className="portrait-orbit portrait-orbit-two" aria-hidden />
          <div className="portrait-frame">
            <img src={profilePhoto} alt="Dasari Deepika - Frontend Engineer" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
