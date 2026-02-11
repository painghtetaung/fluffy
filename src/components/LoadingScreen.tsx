import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LoadingScreen({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}) {
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => {
            setIsLoading(false)
          },
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [setIsLoading])

  if (!isLoading) return null

  return (
    <div
      ref={loadingRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcf6eb',
        zIndex: 9999,
      }}
    >
      <img
        src="/loading.webp"
        alt="Loading..."
        style={{
          maxWidth: '500px',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  )
}
