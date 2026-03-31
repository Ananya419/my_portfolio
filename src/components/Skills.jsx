import React, { useEffect, useRef } from 'react'

const skillsData = [
    {
        category: 'Core Languages',
        icon: '🐍',
        skills: ['Python', 'C', 'SQL'],
        color: 'var(--amber)'
    },
    {
        category: 'ML Frameworks',
        icon: '🤖',
        skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Feature Engineering'],
        color: 'var(--indigo)'
    },
    {
        category: 'Data Science',
        icon: '📊',
        skills: ['Pandas', 'NumPy', 'Model Optimization', 'EDA'],
        color: 'var(--teal)'
    },
    {
        category: 'Development',
        icon: '🛠️',
        skills: ['Flask', 'REST APIs', 'OpenCV', 'GitHub', 'MySQL'],
        color: 'var(--violet)'
    }
]

function Skills() {
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
        <section className="section" id="skills" ref={ref} style={{ padding: '120px 0', background: 'var(--bg-mid)' }}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label" style={{ color: 'var(--indigo-b)', fontWeight: 'bold' }}>// My Gadgets</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '60px' }}>Future Tech Stack</h2>
                </div>

                <div className="skills-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '24px' 
                }}>
                    {skillsData.map((cat, i) => (
                        <div key={i} 
                             className={`pop-card reveal`} 
                             style={{ 
                                padding: '40px',
                                background: 'rgba(255,255,255,0.02)',
                                transitionDelay: `${i * 0.1}s`,
                                position: 'relative',
                                overflow: 'hidden'
                             }}>
                            <div className="skill-cat-icon" style={{ fontSize: '3rem', marginBottom: '24px' }}>{cat.icon}</div>
                            <h3 style={{ 
                                fontFamily: 'var(--font-head)', 
                                fontSize: '1.5rem', 
                                fontWeight: '900',
                                marginBottom: '20px',
                                color: cat.color
                            }}>{cat.category}</h3>
                            <div className="skill-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {cat.skills.map((skill, j) => (
                                    <span key={j} style={{ 
                                        padding: '6px 14px', 
                                        background: 'rgba(255,255,255,0.05)', 
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        fontWeight: '800'
                                    }}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
