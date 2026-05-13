import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = ringX + 'px'
        ring.style.top = ringY + 'px'
      }
      requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', onMouseMove)
    animateRing()

    // Hover effects
    const addHover = () => {
      if (ring) { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.opacity = '0.8' }
      if (dot) dot.style.opacity = '0'
    }
    const removeHover = () => {
      if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '0.5' }
      if (dot) dot.style.opacity = '1'
    }

    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
