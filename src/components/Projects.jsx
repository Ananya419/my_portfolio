import React, { useEffect, useRef } from 'react'

const projects = [
    {
        title: 'Automated Power Monitor',
        description: 'STARTUP WINNER. CV-based human presence detection for smart energy.',
        tech: ['OpenCV', 'Python', 'IoT'],
        icon: '⚡',
        link: 'https://github.com/Ananya419/Automated-Power-Monitoring-System',
        color: 'var(--amber)'
    },
    {
        title: 'Neuroinsight AI',
        description: 'Deep learning model for neurological pattern analysis from EEG data.',
        tech: ['Deep Learning', 'PyTorch'],
        icon: '🧠',
        link: 'https://github.com/Ananya419/Neuroinsight_AI',
        color: 'var(--sky)'
    },
    {
        title: 'SymptomIQ',
        description: 'Health prediction system using ML and Flask/Gemini APIs.',
        tech: ['ML', 'Flask', 'Gemini'],
        icon: '🏥',
        link: 'https://github.com/Ananya419/SymptomIQ',
        color: 'var(--teal)'
    },
    {
        title: 'DeepFake Detector',
        description: 'TensorFlow classification for detecting manipulated images.',
        tech: ['TensorFlow', 'CV'],
        icon: '🎭',
        link: 'https://github.com/Ananya419/DeepFakeDetection',
        color: 'var(--violet)'
    },
    {
        title: 'Trading Bot',
        description: 'Automated trading system using real-time technical indicators.',
        tech: ['Python', 'APIs'],
        icon: '📈',
        link: 'https://github.com/Ananya419/Trading_Bot',
        color: 'var(--indigo)'
    }
]

function Projects() {
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
        <section className="section" id="projects" ref={ref} style={{ padding: '120px 0', background: 'var(--bg-deep)' }}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label" style={{ color: 'var(--indigo-b)', fontWeight: 'bold', fontSize: '0.9rem', display: 'block', marginBottom: '12px' }}>// Built with Passion</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '60px' }}>Selected Panels</h2>
                </div>

                <div className="projects-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: '40px' 
                }}>
                    {projects.map((p, i) => (
                        <div key={i} className="pop-card reveal project-panel" style={{ 
                            padding: '0', 
                            overflow: 'hidden',
                            background: 'var(--bg-mid)',
                            transitionDelay: `${i * 0.1}s`,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ 
                                height: '220px', 
                                background: p.color, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                fontSize: '5rem',
                                borderBottom: '4px solid #000'
                            }}>
                                <span style={{ filter: 'drop-shadow(4px 4px 0px #000)' }}>{p.icon}</span>
                            </div>
                            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ 
                                    fontFamily: 'var(--font-head)', 
                                    fontSize: '1.6rem', 
                                    fontWeight: '900',
                                    marginBottom: '12px'
                                }}>{p.title}</h3>
                                <p style={{ 
                                    fontSize: '1rem', 
                                    color: 'var(--text-secondary)',
                                    marginBottom: '24px',
                                    lineHeight: '1.6',
                                    flex: 1
                                }}>{p.description}</p>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                    {p.tech.map((t, j) => (
                                        <span key={j} style={{ 
                                            background: '#000', 
                                            color: '#fff', 
                                            padding: '6px 12px', 
                                            fontSize: '0.8rem', 
                                            fontWeight: 'bold',
                                            borderRadius: '6px'
                                        }}>{t}</span>
                                    ))}
                                </div>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ 
                                    fontWeight: '900', 
                                    color: p.color,
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    letterSpacing: '1px',
                                    display: 'inline-block',
                                    borderBottom: `2px solid ${p.color}`,
                                    paddingBottom: '4px',
                                    alignSelf: 'start'
                                }}>
                                    Live Preview →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
