import React, { useEffect, useRef, useState } from 'react'

function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e
            if (dotRef.current) {
                dotRef.current.style.left = `${x}px`
                dotRef.current.style.top = `${y}px`
            }
            if (ringRef.current) {
                ringRef.current.style.left = `${x}px`
                ringRef.current.style.top = `${y}px`
            }
        }

        const handleMouseDown = () => setIsMouseDown(true)
        const handleMouseUp = () => setIsMouseDown(false)

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, .stat-card, .project-card, .skill-cat-card')) {
                setIsHovering(true)
            }
        }
        const handleMouseOut = () => setIsHovering(false)

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <div className="custom-cursor-container">
            <div 
                ref={dotRef} 
                className={`cursor-dot ${isMouseDown ? 'active' : ''}`} 
            />
            <div 
                ref={ringRef} 
                className={`cursor-ring ${isHovering ? 'expand' : ''} ${isMouseDown ? 'active' : ''}`} 
            />
        </div>
    )
}

export default CustomCursor
