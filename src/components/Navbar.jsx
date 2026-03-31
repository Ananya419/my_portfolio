import React, { useState, useEffect } from 'react'

const navItems = [
    { label: 'About',        href: '#about' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Contact',      href: '#contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const ids = navItems.map(n => n.href.slice(1))
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i])
                if (el && window.scrollY >= el.offsetTop - 200) {
                    setActive(ids[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}>
                <a href="#" className="nav-logo pop-card" style={{ 
                    padding: '10px 20px', 
                    background: 'var(--grad-primary)', 
                    color: '#fff', 
                    borderRadius: '14px',
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    boxShadow: '6px 6px 0px #000',
                    border: '3px solid #000'
                }}>
                    ANANYA.AI
                </a>
                
                <ul className="nav-links" style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={active === item.href.slice(1) ? 'active' : ''}
                                onClick={e => handleClick(e, item.href)}
                                style={{ 
                                    fontWeight: '900', 
                                    textTransform: 'uppercase', 
                                    fontSize: '0.85rem',
                                    letterSpacing: '1px'
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
