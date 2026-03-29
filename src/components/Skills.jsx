import React, { useEffect, useRef } from 'react'

const skillsData = [
    {
        category: 'Languages',
        icon: '💻',
        skills: ['Python', 'C', 'SQL'],
        class: 'c1'
    },
    {
        category: 'ML Frameworks',
        icon: '🤖',
        skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'EDA', 'Feature Engineering'],
        class: 'c2'
    },
    {
        category: 'Data Science',
        icon: '📊',
        skills: ['Pandas', 'NumPy', 'Model Optimization', 'MLOps (Basic)'],
        class: 'c3'
    },
    {
        category: 'Development',
        icon: '🛠️',
        skills: ['Flask', 'REST APIs', 'OpenCV', 'GitHub', 'MySQL'],
        class: 'c4'
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
        <section className="section skills-section" id="skills" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label">// My Tech Stack</span>
                    <h2 className="section-title">Skills & Expertise</h2>
                </div>

                <div className="skills-grid">
                    {skillsData.map((cat, i) => (
                        <div key={i} className={`skill-cat-card ${cat.class} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="skill-cat-icon">{cat.icon}</div>
                            <h3 className="skill-cat-name">{cat.category}</h3>
                            <div className="skill-tags">
                                {cat.skills.map((skill, j) => (
                                    <span key={j} className="skill-tag">
                                        {skill}
                                    </span>
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
