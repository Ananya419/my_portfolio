import React, { useEffect, useRef } from 'react'

const achievements = [
    {
        title: '🏆 1st Place — Startup Competition Winner',
        description: 'Awarded for the "Automated Power Monitoring System". Selected as the top innovative startup concept at the Intra-Institutional level.',
        icon: '✨'
    },
    {
        title: '🚀 Top 6 Finalist — HackGenX (April 2025)',
        description: 'National-level Hackathon. Recognized for creating an advanced AI solution among top participants across India.',
        icon: '💻'
    }
]

const certifications = [
    { 
        title: 'Feb 2026 Daily Challenge',  
        issuer: 'LeetCode Badge',  
        date: 'Feb 2026',  
        desc: 'Completed February daily coding challenge streak without breaks.' 
    },
    { 
        title: '50+ Problems Solved',  
        issuer: 'LeetCode',  
        date: '2026',  
        desc: 'Consistent problem solving across data structures and algorithms.' 
    },
    { 
        title: 'SQL Database Expert', 
        issuer: 'HackerRank Certified', 
        date: 'July 2024', 
        desc: 'Advanced SQL queries, optimization, and DB management.' 
    },
    { 
        title: 'C Programming (5-Star)', 
        issuer: 'HackerRank', 
        date: '2024', 
        desc: 'Mastery of C data structures, pointers, and memory.' 
    },
    { 
        title: 'AI & Machine Learning',  
        issuer: 'Teach Nook',  
        date: 'Feb 2024',  
        desc: 'Neural networks, supervised & deep learning.' 
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
        <section className="section" id="achievements" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label">// Recognition</span>
                    <h2 className="section-title">Awards & Certs</h2>
                </div>

                <div className="achievements-grid">
                    <div className="reveal">
                        <h3 className="ach-group-title">🏆 Major wins</h3>
                        {achievements.map((ach, i) => (
                            <div key={i} className="ach-card">
                                <h4>{ach.title}</h4>
                                <p>{ach.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                        <h3 className="ach-group-title">📜 Certifications</h3>
                        {certifications.map((cert, i) => (
                            <div key={i} className="cert-card">
                                <h4>{cert.title}</h4>
                                <p>{cert.desc}</p>
                                <div className="cert-meta">
                                    <span className="cert-badge">{cert.issuer}</span>
                                    <span className="cert-date-text">{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
