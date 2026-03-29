import { useRef, useCallback } from 'react'

/**
 * Hook that adds a 3D tilt effect to any element.
 * Usage: const { ref, onMouseMove, onMouseLeave } = useTilt3D()
 *        <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
 */
export function useTilt3D(maxTilt = 8, glareEnabled = true) {
    const ref = useRef(null)

    const onMouseMove = useCallback((e) => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -maxTilt
        const rotateY = ((x - centerX) / centerX) * maxTilt

        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`

        if (glareEnabled) {
            const glareX = (x / rect.width) * 100
            const glareY = (y / rect.height) * 100
            el.style.setProperty('--glare-x', `${glareX}%`)
            el.style.setProperty('--glare-y', `${glareY}%`)
        }
    }, [maxTilt, glareEnabled])

    const onMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        el.style.setProperty('--glare-x', '50%')
        el.style.setProperty('--glare-y', '50%')
    }, [])

    return { ref, onMouseMove, onMouseLeave }
}

export default useTilt3D
