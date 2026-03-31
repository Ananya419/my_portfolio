import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// TEAM AI: Professional, Cute, and Gadget-focused robots
const base = import.meta.env.BASE_URL; // Handles GitHub Pages subpath '/my_portfolio/'

const mascotPaths = {
    cute: `${base}assets/mascot/cute_mascot.png`,
    gadget: `${base}assets/mascot/gadget_mascot.png`,
    pro: `${base}assets/mascot/tech_ai_mascot.png`,
    hover: `${base}assets/mascot/hover_mascot.png`,
    trophy: `${base}assets/mascot/trophy_mascot.png`,
    wave: `${base}assets/mascot/wave_mascot.png`
};

const GlobalMascot = () => {
    const mascotRef = useRef(null);
    const [message, setMessage] = useState('HEY!!! WELCOME');
    const [currentImage, setCurrentImage] = useState(mascotPaths.pro);
    const [posClass, setPosClass] = useState('mascot-right'); 
    const [isVisible, setIsVisible] = useState(true); // START VISIBLE for Hero section!

    useEffect(() => {
        const mascot = mascotRef.current;

        // 1. Initial State: Smooth drop-in on load 
        gsap.set(mascot, { opacity: 0, scale: 0.8 });
        gsap.to(mascot, { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'back.out(1.5)' });

        // 2. TEAM AI Teleportation: Changes Image, Side, and Message
        const teamTeleport = (newMessage, newPosClass, imageKey) => {
            const tl = gsap.timeline();
            
            // Digital Dissolve
            tl.to(mascot, { opacity: 0, scale: 0.9, filter: 'blur(10px) brightness(3)', duration: 0.3 });
            
            // Switch Squad Member
            tl.add(() => {
                setMessage(newMessage);
                setPosClass(newPosClass);
                setCurrentImage(mascotPaths[imageKey]);
                setIsVisible(true);
            });

            // Holographic Reveal
            tl.to(mascot, { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.5, ease: 'power2.out' });
        };

        // Section Triggers - Alternating SIDES + IMAGES
        ScrollTrigger.create({
            trigger: '#hero',
            start: 'bottom 40%',
            onEnter: () => teamTeleport("Who I'm", 'mascot-left', 'cute'),
            onLeaveBack: () => teamTeleport("HEY!!! WELCOME", 'mascot-right', 'pro') // Restore Hero Mascot!
        });

        ScrollTrigger.create({
            trigger: '#about',
            start: 'bottom 40%',
            onEnter: () => teamTeleport('My Gadgets', 'mascot-right', 'gadget'),
            onLeaveBack: () => teamTeleport("Who I'm", 'mascot-left', 'cute'),
        });

        ScrollTrigger.create({
            trigger: '#skills',
            start: 'bottom 40%',
            onEnter: () => teamTeleport("I'm a Winner", 'mascot-left', 'trophy'),
            onLeaveBack: () => teamTeleport('My Gadgets', 'mascot-right', 'gadget'),
        });

        ScrollTrigger.create({
            trigger: '#achievements',
            start: 'bottom 40%',
            onEnter: () => teamTeleport('My Hardwork', 'mascot-right', 'wave'),
            onLeaveBack: () => teamTeleport("I'm a Winner", 'mascot-left', 'trophy'),
        });

        ScrollTrigger.create({
            trigger: '#projects',
            start: 'bottom 40%',
            onEnter: () => teamTeleport('Connect@!!!', 'mascot-left', 'hover'),
            onLeaveBack: () => teamTeleport('My Hardwork', 'mascot-right', 'wave'),
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div 
            ref={mascotRef} 
            className={`global-mascot hologram-avatar ${posClass}`}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            {/* SQUAD HUD PANEL */}
            <div className="hud-panel">
                <span style={{ fontSize: '0.5rem', display: 'block', opacity: 0.5 }}>[AI_SQUAD_MEMBER]</span>
                {message}
            </div>
            
            <img 
                src={currentImage} 
                alt="AI Squad Member" 
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    willChange: 'transform' 
                }} 
            />
        </div>
    );
};

export default GlobalMascot;
