import React, { useEffect, useRef } from 'react'

const awards = [
    {
        title: '🏆 1st Place Winner',
        org: 'Intra-Institutional Startup Competition',
        desc: 'Awarded for "Automated Power Monitoring System" (Oct 2024).',
        icon: '🥇',
        color: 'var(--bg-gold)',
        rot: '-2deg'
    },
    {
        title: '🚀 Top 6 Finalist',
        org: 'HackGenX National Hackathon',
        desc: 'Recognized as a leading national-level innovator (April 2025).',
        icon: '🔝',
        color: '#fff',
        rot: '1deg'
    },
    {
        title: '⚔️ LeetCode Milestone',
        org: 'DSA & Streak Warrior',
        desc: 'Feb & March 2026 Daily Streak & 50+ Problems Solved in Python.',
        icon: '🐍',
        color: '#fff',
        rot: '-1deg'
    },
    {
        title: '💎 HackerRank Expert',
        org: 'SQL & C Programming',
        desc: 'Certified SQL Professional and 5-Star C Language achievement.',
        icon: '🏅',
        color: '#fff',
        rot: '2deg'
    },
    {
        title: '🤖 AI Specialization',
        org: 'Certified by Teach Nook',
        desc: 'Advanced Artificial Intelligence & ML Certification (Feb 2024).',
        icon: '🧠',
        color: '#fff',
        rot: '-2deg'
    }
]

function Achievements() {
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
        <section className="section" id="achievements" ref={ref} style={{ padding: '150px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="reveal winner-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="section-label" style={{ color: 'var(--bg-gold)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '4px' }}>// Recognition</span>
                    <h2 className="section-title" style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: '0.9' }}>
                        I'M A <span className="gold-text">WINNER!</span>
                    </h2>
                </div>

                <div className="awards-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '40px' 
                }}>
                    {awards.map((award, i) => (
                        <div key={i} 
                             className="reveal sticker-card pop-card" 
                             style={{ 
                                 '--rot': award.rot,
                                 transitionDelay: `${i * 0.15}s`,
                                 padding: '40px',
                                 background: 'rgba(255,255,255,0.02)',
                                 border: '3px solid rgba(255,255,255,0.1)',
                                 color: '#fff'
                             }}>
                            <div style={{ 
                                fontSize: '4rem', 
                                marginBottom: '24px', 
                                filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.1))' 
                            }}>
                                {award.icon}
                            </div>
                            <h3 style={{ 
                                fontWeight: '900', 
                                fontSize: '1.4rem', 
                                textTransform: 'uppercase',
                                color: award.color,
                                marginBottom: '12px'
                            }}>
                                {award.title}
                            </h3>
                            <p style={{ 
                                fontSize: '0.95rem', 
                                fontWeight: '900',
                                color: 'var(--bg-gold)',
                                marginBottom: '12px'
                            }}>
                                {award.org}
                            </p>
                            <p style={{ 
                                fontSize: '1rem', 
                                color: 'rgba(255,255,255,0.6)', 
                                lineHeight: '1.5',
                                fontWeight: '600'
                            }}>
                                {award.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Professional Radial Glow Background Overlay */}
            <div style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: -1, 
                opacity: 0.2, 
                background: 'radial-gradient(circle at 50% 50%, var(--bg-indigo) 0%, transparent 70%)' 
            }} />
        </section>
    )
}

export default Achievements
