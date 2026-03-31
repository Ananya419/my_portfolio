import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const InteractiveBackground = () => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const sparkContainerRef = useRef(null);

    // Cute & Vibrant Cartoon Icons
    const icons = ['✨', '🎈', '☁️', '🔔', '🌀', '📍', '💎'];
    const vibrantSparks = ['🌟', '✨', '🎈', '☁️', '💡', '🤖', '🛰️'];

    useEffect(() => {
        const items = itemsRef.current;
        const sparkContainer = sparkContainerRef.current;

        // 1. Initial drift animation for gadget icons
        items.forEach((item, i) => {
          if (!item) return;
          gsap.to(item, {
            x: 'random(-50, 50)',
            y: 'random(-50, 50)',
            rotation: 'random(-45, 45)',
            duration: 'random(10, 20)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.5,
          });
        });

        // 2. Mouse Repulsion logic (Throttled)
        let mouseX = 0, mouseY = 0;
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updateRepulse = () => {
            items.forEach((item) => {
                if (!item) return;
                const rect = item.getBoundingClientRect();
                const itemX = rect.left + rect.width / 2;
                const itemY = rect.top + rect.height / 2;

                const dx = mouseX - itemX;
                const dy = mouseY - itemY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const angle = Math.atan2(dy, dx);
                    const force = (150 - distance) / 5;
                    const moveX = -Math.cos(angle) * force;
                    const moveY = -Math.sin(angle) * force;

                    gsap.to(item, {
                        x: `+=${moveX}`,
                        y: `+=${moveY}`,
                        duration: 0.8,
                        overwrite: 'auto',
                    });
                }
            });
        };

        const ticker = gsap.ticker.add(updateRepulse);

        // 3. Vibrant Spark Pops (Sparkling & Happy)
        const spawnSpark = () => {
            const spark = document.createElement('div');
            spark.innerText = vibrantSparks[Math.floor(Math.random() * vibrantSparks.length)];
            spark.style.position = 'absolute';
            spark.style.left = `${Math.random() * 90 + 5}%`;
            spark.style.top = `${Math.random() * 90 + 5}%`;
            spark.style.fontSize = '30px';
            spark.style.pointerEvents = 'none';
            spark.style.zIndex = -1;
            spark.style.opacity = 0;
            spark.style.filter = 'drop-shadow(2px 2px 0px #fff)';
            
            sparkContainer.appendChild(spark);

            gsap.to(spark, {
                opacity: 1,
                scale: 1.5,
                y: '-=50',
                duration: 1.5,
                ease: 'back.out(1.7)',
                onComplete: () => {
                    gsap.to(spark, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 1.5,
                        delay: 0.5,
                        onComplete: () => spark.remove()
                    });
                }
            });
        };

        const sparkInterval = setInterval(spawnSpark, 2000); // Spawn every 2 seconds

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            gsap.ticker.remove(updateRepulse);
            clearInterval(sparkInterval);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="interactive-bg-wrapper"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -1,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        >
            {/* 1. Vibrant Background Themes */}
            <div className="comic-sunburst" />
            <div className="comic-grid-overlay" />
            
            {/* 2. Spark Pop Container */}
            <div ref={sparkContainerRef} className="vibrant-sparks" style={{ position: 'absolute', inset: 0, zIndex: -2 }} />
            
            {/* 3. Drifting Cartoon Icons */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (itemsRef.current[i] = el)}
                    style={{
                        position: 'absolute',
                        left: `${Math.random() * 90 + 5}%`,
                        top: `${Math.random() * 90 + 5}%`,
                        fontSize: `clamp(30px, 6vw, 60px)`,
                        userSelect: 'none',
                        filter: 'drop-shadow(4px 4px 0px #fff)',
                        opacity: 0.4,
                        willChange: 'transform'
                    }}
                >
                    {icons[i % icons.length]}
                </div>
            ))}
        </div>
    );
};

export default InteractiveBackground;
