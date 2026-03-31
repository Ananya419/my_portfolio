import React, { useEffect, useRef } from 'react'

function About() {
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
            { threshold: 0.1 }
        )
        const els = ref.current?.querySelectorAll('.reveal')
        els?.forEach(el => obs.observe(el))
        return () => els?.forEach(el => obs.unobserve(el))
    }, [])

    return (
        <section className="section" id="about" ref={ref} style={{ padding: '150px 0', background: 'var(--bg-deep)', position: 'relative' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <div className="about-text-content">
                    <div className="reveal">
                        <span className="section-label" style={{ color: 'var(--indigo-b)', fontWeight: 'bold', fontSize: '0.9rem', display: 'block', marginBottom: '16px' }}>// Who Am I?</span>
                        <h2 className="section-title" style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '36px' }}>The Human Component</h2>
                        
                        <div className="pop-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', marginBottom: '40px', position: 'relative' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                                I'm <strong style={{ color: '#fff' }}>Ananya Shahi</strong>, a B.Tech CSE student
                                at <strong style={{ color: 'var(--teal-b)' }}>Kalinga University</strong>. I specialize in 
                                <strong style={{ color: 'var(--violet)' }}> Artificial Intelligence</strong> — but I'm also 
                                a collector of data and a builder of digital worlds.
                            </p>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                My goal is to build AI that is not just smart, but actually useful. From health 
                                prediction to smart power monitors, I love solving real-world puzzles with code.
                            </p>
                        </div>
                    </div>

                    <div className="about-stats reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        {[
                            { num: '5+',  label: 'Gadgets Built' },
                            { num: '8.8', label: 'Invention CGPA' },
                            { num: '4',   label: 'Blueprints' },
                        ].map((s, i) => (
                            <div key={i} className="stat-card pop-card" style={{ padding: '24px', textAlign: 'center', background: 'var(--bg-mid)' }}>
                                <div className="stat-number" style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--indigo-b)' }}>{s.num}</div>
                                <div className="stat-label" style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--text-muted)' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ======= VISUAL SIDE (User Photo Frame) ======= */}
                <div className="reveal visual-anchor" style={{ height: '500px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="pop-card photo-frame" style={{ 
                        width: '320px', 
                        height: '420px', 
                        background: 'var(--bg-mid)', 
                        border: '8px solid #000',
                        borderRadius: '24px',
                        boxShadow: '15px 15px 0px #000',
                        overflow: 'hidden',
                        position: 'relative',
                        transform: 'rotate(2deg)'
                    }}>
                        <img 
                            src="./profile.jpg" 
                            alt="Ananya Shahi" 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover', 
                                objectPosition: 'top center' // FIX: head clipping
                            }} 
                        />
                        
                        <div className="pop-card" style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            background: 'var(--amber)',
                            color: '#000',
                            padding: '6px 12px',
                            fontWeight: '900',
                            fontSize: '0.75rem',
                            borderRadius: '8px',
                            transform: 'rotate(-5deg)',
                            border: '3px solid #000'
                        }}>
                             B.TECH CSE 🎓
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
