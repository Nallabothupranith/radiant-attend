import { motion } from 'framer-motion';

const GeometricShapes = () => {
  const shapes = [
    {
      id: 1,
      size: 'w-32 h-32',
      position: 'top-20 left-10',
      delay: 0,
      rotation: 45,
    },
    {
      id: 2,
      size: 'w-24 h-24',
      position: 'top-40 right-20',
      delay: 2,
      rotation: -30,
    },
    {
      id: 3,
      size: 'w-40 h-40',
      position: 'bottom-20 left-1/4',
      delay: 4,
      rotation: 60,
    },
    {
      id: 4,
      size: 'w-28 h-28',
      position: 'top-1/2 right-10',
      delay: 1,
      rotation: 90,
    },
    {
      id: 5,
      size: 'w-36 h-36',
      position: 'bottom-40 right-1/3',
      delay: 3,
      rotation: -45,
    },
    {
      id: 6,
      size: 'w-20 h-20',
      position: 'top-60 left-2/3',
      delay: 5,
      rotation: 120,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`geometric-shape ${shape.size} ${shape.position} opacity-30`}
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
          }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            rotateX: shape.rotation,
            rotateY: shape.rotation * 0.8,
            rotateZ: shape.rotation * 0.5
          }}
          transition={{
            duration: 2,
            delay: shape.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 10,
          }}
          style={{
            background: `linear-gradient(135deg, 
              hsla(249, 33%, 42%, 0.15) 0%, 
              hsla(270, 50%, 55%, 0.15) 50%,
              hsla(290, 60%, 60%, 0.15) 100%)`,
            backdropFilter: 'blur(10px)',
            border: '1px solid hsla(249, 33%, 42%, 0.2)',
            borderRadius: '12px',
            transformStyle: 'preserve-3d',
          }}
        />
      ))}

      {/* Additional floating particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `hsla(${249 + index * 10}, 50%, 60%, 0.6)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GeometricShapes;