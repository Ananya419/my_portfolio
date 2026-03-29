import React, { useEffect, useRef, useState } from 'react'

function Contact() {
    const ref = useRef(null)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

    useEffect(() => {
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
            { threshold: 0.1 }
        )
        const els = ref.current?.querySelectorAll('.reveal')
        els?.forEach(el => obs.observe(el))
        return () => els?.forEach(el => obs.unobserve(el))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="section contact-section" id="contact" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-label">// Communication</span>
                    <h2 className="section-title">Get In Touch</h2>
                </div>

                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <h3>Let's build something intelligent! 🚀</h3>
                        <p>
                            I'm currently open for internships and collaborations in AI/ML. 
                            If you have a project or just want to say hi, feel free to reach out!
                        </p>
                        
                        <div className="contact-methods">
                            <a href="mailto:shahiananya381@gmail.com" className="contact-method">
                                <div className="contact-method-icon">📧</div>
                                <div>
                                    <span className="contact-method-label">Email Me</span>
                                    <span className="contact-method-value">shahiananya381@gmail.com</span>
                                </div>
                            </a>
                            <a href="tel:+919580487496" className="contact-method">
                                <div className="contact-method-icon">📱</div>
                                <div>
                                    <span className="contact-method-label">Call/WhatsApp</span>
                                    <span className="contact-method-value">+91 9580487496</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/ananya-shahi-1a1390305/" target="_blank" rel="noopener noreferrer" className="contact-method">
                                <div className="contact-method-icon">💼</div>
                                <div>
                                    <span className="contact-method-label">LinkedIn</span>
                                    <span className="contact-method-value">Ananya Shahi</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                        <div className="contact-form-wrap">
                            {submitted ? (
                                <div className="form-success">
                                    <div className="form-success-icon">✨</div>
                                    <h3>Message Received!</h3>
                                    <p>I'll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input 
                                                className="form-input" 
                                                type="text" 
                                                placeholder="Your name" 
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                                className="form-input" 
                                                type="email" 
                                                placeholder="your@email.com" 
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input 
                                            className="form-input" 
                                            type="text" 
                                            placeholder="What's this about?" 
                                            value={formData.subject}
                                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea 
                                            className="form-textarea" 
                                            placeholder="Your message here..." 
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            required 
                                        />
                                    </div>
                                    <button type="submit" className="btn-submit">Send Message ✈️</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
