import React, { useEffect, useRef } from 'react'

function Contact() {
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
        <section className="section" id="contact" ref={ref} style={{ padding: '150px 0', background: 'var(--bg-dark)', position: 'relative' }}>
            <div className="container">
                <div className="reveal contact-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 className="section-title" style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '20px' }}>
                        Connect <span className="gold-text">With Me</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
                        I'm building future tech at Raipur. Have a project idea or a question? Drop it in the gadget mailbox!
                    </p>
                </div>

                <div className="reveal contact-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="glass-card gadget-mailbox" style={{ padding: '60px', background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'visible', border: '1px solid rgba(255,255,255,0.1)' }}>
                        
                        {/* Premium Comic Action Icon */}
                        <div style={{ position: 'absolute', top: '-40px', right: '-40px', fontSize: '5rem', zIndex: 1, filter: 'drop-shadow(5px 5px 0px #000)' }}>📫</div>
                        
                        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div className="input-group" style={{ gridColumn: 'span 1' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', display: 'block', color: 'var(--bg-gold)' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{ 
                                    width: '100%', padding: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontWeight: 'bold' 
                                }} />
                            </div>
                            <div className="input-group" style={{ gridColumn: 'span 1' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', display: 'block', color: 'var(--bg-gold)' }}>Email</label>
                                <input type="email" placeholder="Your Email" style={{ 
                                    width: '100%', padding: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontWeight: 'bold' 
                                }} />
                            </div>
                            <div className="input-group" style={{ gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', display: 'block', color: 'var(--bg-gold)' }}>Message</label>
                                <textarea placeholder="How can I help you?" rows="5" style={{ 
                                    width: '100%', padding: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontWeight: 'bold', resize: 'none' 
                                }} />
                            </div>
                            <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '20px' }}>
                                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.2rem' }}>
                                    Send Message ⚡
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-socials" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '60px' }}>
                         {['GitHub', 'LinkedIn', 'Instagram'].map((s, i) => (
                             <a key={i} href="#" className="glass-card" style={{ padding: '12px 24px', fontWeight: '900', fontSize: '0.8rem', color: '#fff', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)' }}>
                                {s}
                             </a>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
