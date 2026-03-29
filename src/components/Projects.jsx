import React, { useEffect, useRef } from 'react'

const projects = [
    {
        title: '🏆 Automated Power Monitor',
        date: 'Sept — Nov 2024',
        description: 'STARTUP WINNER. CV-based human presence detection for smart energy. Reduced power consumption by 15%.',
        tech: ['OpenCV', 'Python', 'IoT'],
        icon: '⚡',
        link: 'https://github.com/Ananya419/Automated-Power-Monitoring-System'
    },
    {
        title: 'Neuroinsight AI',
        date: 'Feb — March 2026',
        description: 'Deep learning model for complex neurological pattern analysis from EEG data using TensorFlow.',
        tech: ['Deep Learning', 'Python', 'EEG'],
        icon: '🧠',
        link: 'https://github.com/Ananya419/Neuroinsight_AI'
    },
    {
        title: 'SymptomIQ',
        date: 'Jan — Feb 2025',
        description: 'Health prediction system using ML and REST APIs deployed with Flask and Gemini API.',
        tech: ['ML', 'Flask', 'REST APIs'],
        icon: '🏥',
        link: 'https://github.com/Ananya419/SymptomIQ'
    },
    {
        title: 'Library/Student Management',
        date: 'Aug — Dec 2024',
        description: 'Comprehensive system with Tkinter UI + MySQL backend for book tracking and data engineering.',
        tech: ['Python', 'Tkinter', 'MySQL'],
        icon: '📚',
        link: 'https://github.com/Ananya419/Student-Management-System'
    },
    {
        title: 'DeepFake Detector',
        date: 'Jan — Feb 2025',
        description: 'Deep learning classification using TensorFlow, achieving high accuracy in detecting manipulated images.',
        tech: ['TensorFlow', 'Deep Learning', 'CV'],
        icon: '🎭',
        link: 'https://github.com/Ananya419/DeepFakeDetection'
    },
    {
        title: 'Trading Bot',
        date: 'Dec 2024 — Jan 2025',
        description: 'Automated trading system using Python and REST APIs for real-time technical indicator analysis.',
        tech: ['Python', 'APIs', 'Automation'],
        icon: '📈',
        link: 'https://github.com/Ananya419/Trading_Bot'
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
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label">// Featured Work</span>
                    <h2 className="section-title">Latest Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div key={i} className="project-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="project-banner">
                                <div className="project-banner-icon">{project.icon}</div>
                                <div className="photo-glow" style={{ opacity: 0.4 }} />
                            </div>
                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-date">{project.date}</div>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View on GitHub →
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
