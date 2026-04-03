import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 76; // 0 to 75

const ScrollyCanvas = ({ scrollYProgress }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);


  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(2, '0');
      img.src = `/sequence/frame_${frameNum}_delay-0.056s.png`;
      img.onload = () => {
        loadedCount++;
        // Try to draw the first frame immediately when it's loaded
        if (i === 0 && canvasRef.current) {
          drawImage(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    
    // High-DPI rendering for sharper frames
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas.width !== cssWidth * dpr || canvas.height !== cssHeight * dpr) {
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
    }

    // Reset transform so scaling doesn't stack
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const imgRatio = img.width / img.height;
    const canvasRatio = cssWidth / cssHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    // object-fit: cover logic
    if (canvasRatio > imgRatio) {
      drawWidth = cssWidth;
      drawHeight = cssWidth / imgRatio;
      offsetX = 0;
      offsetY = (cssHeight - drawHeight) / 2;
    } else {
      drawWidth = cssHeight * imgRatio;
      drawHeight = cssHeight;
      offsetX = (cssWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0) {
      const idx = Math.floor(latest);
      if (images[idx]) {
        drawImage(images[idx]);
      }
    }
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const currentFrame = Math.floor(frameIndex.get());
        if (images[currentFrame]) {
            drawImage(images[currentFrame]);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  return (
    <canvas ref={canvasRef} className="w-full h-full block" />
  );
};

export default ScrollyCanvas;
