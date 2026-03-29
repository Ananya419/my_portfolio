import React, { useState, useEffect } from 'react'

const navItems = [
    { label: 'About',        href: '#about' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact',      href: '#contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
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
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo">Ananya.</a>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={active === item.href.slice(1) ? 'active' : ''}
                                onClick={e => handleClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
