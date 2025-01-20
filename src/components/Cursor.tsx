import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const cursorPosition = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e:any) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const updatePosition = () => {
      setPosition((prev) => {
        const diffX = cursorPosition.current.x - prev.x;
        const diffY = cursorPosition.current.y - prev.y;

        return {
          x: prev.x + diffX * 0.2,
          y: prev.y + diffY * 0.2,
        };
      });
      requestAnimationFrame(updatePosition);
    };
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="cursor-main fixed top-0 left-0 w-5 h-5 bg-secondary rounded-full pointer-events-none z-50"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default Cursor;
