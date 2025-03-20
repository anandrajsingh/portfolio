"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ParallaxHero = () => {
  const { scrollY } = useScroll();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => setScrollPos(latest));
  }, [scrollY]);

  // Shrinking effect
  const scale = Math.max(1 - scrollPos / 500, 0.5); // Minimum size: 50%

  // Instead of moving using x/y, apply it inside transform
  const transformValue = `translate(-50%, -50%) scale(${scale}) translate(${scrollPos * -0.3}px, ${scrollPos * 0.5}px)`;

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 text-black font-bold"
      style={{ transform: transformValue }}
    >
      <span className="text-[12vw] leading-none">Ayush</span>
    </motion.div>
  );
};

export default ParallaxHero;
