import React, { useState, useEffect } from 'react'

const roles = [
    'AI/ML Engineer',
    'Python Developer',
    'Deep Learning Enthusiast',
    'Computer Vision Specialist',
    'Problem Solver',
]

function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const [displayed, setDisplayed] = useState('')

    useEffect(() => {
        const role = roles[roleIdx]
        let t
        if (!deleting && charIdx < role.length) {
            t = setTimeout(() => { setDisplayed(role.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 65)
        } else if (!deleting && charIdx === role.length) {
            t = setTimeout(() => setDeleting(true), 2000)
        } else if (deleting && charIdx > 0) {
            t = setTimeout(() => { setDisplayed(role.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 35)
        } else if (deleting && charIdx === 0) {
            setDeleting(false)
            setRoleIdx(p => (p + 1) % roles.length)
        }
        return () => clearTimeout(t)
    }, [charIdx, deleting, roleIdx])

    return (
        <section className="hero" id="hero" style={{ perspective: '1000px', overflow: 'hidden' }}>
            <div className="container hero-split">

                {/* ======= TEXT SIDE ======= */}
                <div className="hero-text">
                    <div className="hero-badge">
                        <div className="hero-badge-dot" />
                        Status: System Idle
                    </div>

                    <h1 className="hero-name" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', lineHeight: '0.8', marginBottom: '20px' }}>
                        Hi, I'm<br />
                        <span className="gold-text">Ananya</span>
                    </h1>

                    <div className="hero-role glass-card" style={{ padding: '12px 24px', display: 'inline-block', marginBottom: '24px', color: '#fff', border: '1px solid rgba(255,215,0,0.3)' }}>
                        {displayed}<span className="typing-cursor" />
                    </div>

                    <p className="hero-desc" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '520px', lineHeight: '1.6' }}>
                        A 3rd year student from Raipur inventing 
                        <strong style={{ color: 'var(--bg-gold)' }}> AI & ML Gadgets</strong>. 
                        Turning future tech into today's reality.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn-primary">
                                <span>⚡</span> My Inventions
                            </a>
                            <a href="./resume.html" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <span>📄</span> Resume
                            </a>
                        </div>
                        <a href="#contact" className="btn-outline">
                            <span>🚀</span> Say Hello
                        </a>
                    </div>
                </div>

                {/* ======= VISUAL SIDE (User Photo + 2X BIG Hero Mascot) ======= */}
                <div className="hero-visual" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
                    <div className="profile-card-wrapper" style={{ position: 'relative', zIndex: 2, marginLeft: '-50px' }}>
                        {/* WIDER PROFILE CARD */}
                        <div className="pop-card profile-card" style={{ 
                            width: '400px', 
                            height: '580px', 
                            background: 'rgba(255,255,255,0.02)', 
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            position: 'relative',
                            transform: 'rotate(2deg)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                        }}>
                            <img 
                                src="./profile.jpg" 
                                alt="Ananya Shahi" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    objectPosition: 'top center'
                                }} 
                            />
                        </div>

                        {/* BIG HERO MASCOT HAS BEEN REMOVED to allow the Global "Popping" Mascot to take over the screen */}

                    </div>
                </div>
            </div>
            
            {/* Background Glow */}
            <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)', zIndex: -1 }} />
        </section>
    )
}

export default Hero
