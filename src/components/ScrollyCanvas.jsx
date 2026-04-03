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
    
    // Set canvas dimensions to match inner window resolution for sharp rendering
    // Usually handled by a resize observer, let's keep it simple and tie it to window
    // But realistically, canvas.width and canvas.height must be set before drawing
    // We update canvas dim only if it changed to avoid expensive redraw setup
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const { width, height } = canvas;
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    // object-fit: cover logic
    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
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
