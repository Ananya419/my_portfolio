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
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label">// Who Am I</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-grid">
                    <div>
                        <div className="reveal">
                            <p>
                                I'm <strong style={{ color: 'var(--indigo-b)' }}>Ananya Shahi</strong>, a B.Tech Computer Science student
                                at <strong style={{ color: 'var(--teal-b)' }}>Kalinga University</strong>, specializing in
                                <strong style={{ color: 'var(--violet)' }}> Artificial Intelligence & Machine Learning</strong>.
                                Currently in my 3rd year with a CGPA of 8.8.
                            </p>
                            <p>
                                I love transforming ideas into intelligent solutions that make a real difference —
                                from health prediction systems to deepfake detectors and energy automation projects.
                                My goal is to build AI that is not just smart, but actually useful.
                            </p>
                        </div>

                        <div className="about-stats reveal">
                            {[
                                { num: '5+',  label: 'Projects Built' },
                                { num: '8.8', label: 'CGPA Score' },
                                { num: '4',   label: 'Certifications' },
                            ].map((s, i) => (
                                <div key={i} className="stat-card">
                                    <div className="stat-number">{s.num}</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="about-info-grid reveal" style={{ marginTop: 24 }}>
                            {[
                                { icon: '🎓', label: 'University', value: 'Kalinga University, Raipur' },
                                { icon: '📚', label: 'Degree',     value: 'B.Tech CSE — AI & ML' },
                                { icon: '📅', label: 'Batch',      value: '2023 – 2027' },
                                { icon: '📍', label: 'Location',   value: 'Raipur, Chhattisgarh' },
                                { icon: '📧', label: 'Email',      value: 'shahiananya381@gmail.com' },
                            ].map((item, i) => (
                                <div key={i} className="info-row">
                                    <span className="info-icon">{item.icon}</span>
                                    <div>
                                        <span className="info-label">{item.label}</span>
                                        <span className="info-value">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reveal">
                        <div className="about-photo-card">
                            <div className="about-photo-inner">
                                <img src="/profile.jpg" alt="Ananya Shahi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
