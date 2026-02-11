import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import LoadingScreen from './components/LoadingScreen'

interface ImageData {
  img: HTMLImageElement
  x: number
  y: number
  width: number
  height: number
  loaded: boolean
}

interface Bubble {
  img: HTMLImageElement
  x: number
  y: number
  width: number
  height: number
}

function CanvasApp() {
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const scrollAmount = useRef(0)
  const currentStage = useRef(0)

  // Image refs
  const imagesRef = useRef<{
    img1?: ImageData
    img2?: ImageData
    img3?: ImageData
    img4?: ImageData
    img5?: ImageData
    img6?: ImageData
    img7?: ImageData
    img8?: ImageData
    human2?: ImageData
    bubbles: Bubble[]
  }>({
    bubbles: [],
  })

  const animationStateRef = useRef({
    img1: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img2: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img3: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img4: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img5: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img6: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img7: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    img8: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    human2: { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
    bubbles: { y: 0, opacity: 0 },
  })

  const bounceStateRef = useRef({
    img1: 0,
    img2: 0,
    img3: 0,
    img4: 0,
    img5: 0,
    img6: 0,
    img7: 0,
    img8: 0,
    human2: 0,
  })

  useEffect(() => {
    if (isLoading) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Load images
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      })
    }

    Promise.all([
      loadImage('/img1.webp'),
      loadImage('/img2.webp'),
      loadImage('/img3.webp'),
      loadImage('/img4.webp'),
      loadImage('/img5.webp'),
      loadImage('/img6.webp'),
      loadImage('/img7.webp'),
      loadImage('/img8.webp'),
      loadImage('/human-2.webp'),
      loadImage('/bubble1.png'),
      loadImage('/bubble2.png'),
      loadImage('/bubble3.png'),
    ]).then(
      ([img1, img2, img3, img4, img5, img6, img7, img8, human2, bubble1, bubble2, bubble3]) => {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        imagesRef.current = {
          img1: {
            img: img1,
            x: centerX + 230,
            y: centerY - 150,
            width: 720,
            height: 720,
            loaded: true,
          },
          img2: {
            img: img2,
            x: centerX + 100,
            y: centerY - 250,
            width: 720,
            height: 720,
            loaded: true,
          },
          img3: {
            img: img3,
            x: centerX - 100,
            y: centerY - 150,
            width: 720,
            height: 720,
            loaded: true,
          },
          img4: {
            img: img4,
            x: centerX + 300,
            y: centerY - 350,
            width: 720,
            height: 720,
            loaded: true,
          },
          img5: {
            img: img5,
            x: centerX + 200,
            y: centerY - 700,
            width: 700,
            height: 700,
            loaded: true,
          },
          img6: {
            img: img6,
            x: centerX + 100,
            y: centerY - 500,
            width: 720,
            height: 720,
            loaded: true,
          },
          img7: {
            img: img7,
            x: centerX - 100,
            y: centerY - 150,
            width: 720,
            height: 720,
            loaded: true,
          },
          img8: {
            img: img8,
            x: centerX - 100,
            y: centerY - 600,
            width: 700,
            height: 700,
            loaded: true,
          },
          human2: {
            img: human2,
            x: centerX - 270,
            y: centerY - 240,
            width: 600,
            height: 1150,
            loaded: true,
          },
          bubbles: generateBubbles([bubble1, bubble2, bubble3]),
        }

        startAnimation()
      }
    )

    function generateBubbles(bubbleImages: HTMLImageElement[]): Bubble[] {
      const bubbles: Bubble[] = []
      const bubbleData = [
        { x: -320, y: 80, w: 160, img: 1 },
        { x: -80, y: 160, w: 160, img: 0 },
        { x: -240, y: 320, w: 128, img: 2 },
        { x: -400, y: 480, w: 192, img: 0 },
        { x: -160, y: 640, w: 144, img: 1 },
        { x: -480, y: 800, w: 176, img: 2 },
        { x: -128, y: 960, w: 160, img: 0 },
        { x: -352, y: 1120, w: 208, img: 1 },
        { x: -288, y: 1280, w: 112, img: 2 },
        { x: -192, y: 1440, w: 224, img: 0 },
        { x: -448, y: 1600, w: 144, img: 1 },
        { x: -96, y: 1760, w: 176, img: 2 },
        { x: -560, y: 240, w: 128, img: 0 },
        { x: -48, y: 560, w: 160, img: 2 },
        { x: -640, y: 880, w: 192, img: 1 },
        { x: -512, y: 1200, w: 144, img: 0 },
        { x: -320, y: 1520, w: 208, img: 2 },
        { x: -128, y: 400, w: 112, img: 1 },
        { x: 80, y: 128, w: 176, img: 2 },
        { x: 240, y: 288, w: 144, img: 1 },
        { x: 128, y: 528, w: 208, img: 0 },
        { x: 320, y: 720, w: 128, img: 2 },
        { x: 48, y: 928, w: 160, img: 1 },
        { x: 192, y: 1088, w: 192, img: 0 },
        { x: 400, y: 1312, w: 144, img: 2 },
        { x: 96, y: 1488, w: 224, img: 0 },
        { x: 288, y: 1680, w: 160, img: 1 },
      ]

      bubbleData.forEach((data) => {
        bubbles.push({
          img: bubbleImages[data.img],
          x: data.x,
          y: data.y,
          width: data.w,
          height: data.w,
        })
      })

      // Duplicate for seamless loop (offset by 1800px)
      bubbleData.forEach((data) => {
        bubbles.push({
          img: bubbleImages[data.img],
          x: data.x,
          y: data.y + 1800,
          width: data.w,
          height: data.w,
        })
      })

      return bubbles
    }

    function startAnimation() {
      // Start bounce animations with GSAP

      gsap.to(bounceStateRef.current, {
        img7: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
      gsap.to(bounceStateRef.current, {
        img8: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
      gsap.to(bounceStateRef.current, {
        img6: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      gsap.to(bounceStateRef.current, {
        img1: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      gsap.to(bounceStateRef.current, {
        img2: -25,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.2,
      })

      gsap.to(bounceStateRef.current, {
        img3: -25,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.4,
      })

      gsap.to(bounceStateRef.current, {
        img5: -25,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.7,
      })

      gsap.to(bounceStateRef.current, {
        img4: -25,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.6,
      })

      gsap.to(bounceStateRef.current, {
        human2: 25,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      // Bubble animation
      const bubbleHeight = 1800
      gsap.fromTo(
        animationStateRef.current.bubbles,
        { y: 0 },
        {
          y: -bubbleHeight,
          duration: 12,
          repeat: -1,
          ease: 'none',
        }
      )

      render()
    }

    function render() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw white background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw bubbles (when visible) - behind characters
      if (animationStateRef.current.bubbles.opacity > 0) {
        ctx.globalAlpha = animationStateRef.current.bubbles.opacity * 0.5
        imagesRef.current.bubbles.forEach((bubble) => {
          const offsetY = animationStateRef.current.bubbles.y
          ctx.drawImage(
            bubble.img,
            canvas.width / 2 + bubble.x,
            bubble.y + offsetY,
            bubble.width,
            bubble.height
          )
        })
        ctx.globalAlpha = 1
      }

      // Draw character images - on top of everything

      // Draw img8
      if (imagesRef.current.img8) {
        const base = imagesRef.current.img8
        const state = animationStateRef.current.img8
        const bounce = bounceStateRef.current.img8
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img3
      if (imagesRef.current.img3) {
        const base = imagesRef.current.img3
        const state = animationStateRef.current.img3
        const bounce = bounceStateRef.current.img3
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw human2
      if (imagesRef.current.human2) {
        const base = imagesRef.current.human2
        const state = animationStateRef.current.human2
        const bounce = bounceStateRef.current.human2
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img5
      if (imagesRef.current.img5) {
        const base = imagesRef.current.img5
        const state = animationStateRef.current.img5
        const bounce = bounceStateRef.current.img5
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img4

      if (imagesRef.current.img4) {
        const base = imagesRef.current.img4
        const state = animationStateRef.current.img4
        const bounce = bounceStateRef.current.img4
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img6
      if (imagesRef.current.img6) {
        const base = imagesRef.current.img6
        const state = animationStateRef.current.img6
        const bounce = bounceStateRef.current.img6
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img1
      if (imagesRef.current.img1) {
        const base = imagesRef.current.img1
        const state = animationStateRef.current.img1
        const bounce = bounceStateRef.current.img1
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img2
      if (imagesRef.current.img2) {
        const base = imagesRef.current.img2
        const state = animationStateRef.current.img2
        const bounce = bounceStateRef.current.img2
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      // Draw img7
      if (imagesRef.current.img7) {
        const base = imagesRef.current.img7
        const state = animationStateRef.current.img7
        const bounce = bounceStateRef.current.img7
        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(base.x + state.x, base.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(base.img, 0, 0, base.width, base.height)
        ctx.restore()
      }

      animationFrameRef.current = requestAnimationFrame(render)
    }

    // Stage animation functions
    const animateToStage1 = () => {
      console.log('🎬 Entering Stage 1')
      gsap.to(animationStateRef.current.img7, {
        y: 800,
        x: 200,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img8, {
        y: 1200,
        x: 200,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img6, {
        y: 800,
        x: 200,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
      })

      gsap.to(animationStateRef.current.img5, {
        y: 600,
        x: 400,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
      })

      gsap.to(animationStateRef.current.img4, {
        y: 500,
        x: 300,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
      })

      gsap.to(animationStateRef.current.img1, {
        y: 500,
        x: 300,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img2, {
        y: 500,
        x: 500,
        delay: 0.4,
        duration: 0.4,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img3, {
        y: 500,
        x: 500,
        duration: 0.4,
        delay: 0.4,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.human2, {
        rotation: -90,
        y: 450,
        scale: 0.5,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.bubbles, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    const animateToStage0 = () => {
      console.log('🔄 Returning to Stage 0')

      gsap.to(animationStateRef.current.img6, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img7, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img8, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img5, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img4, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img1, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img2, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.img3, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.human2, {
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      gsap.to(animationStateRef.current.bubbles, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    // Wheel event handler
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      scrollAmount.current += e.deltaY * 0.5
      scrollAmount.current = Math.max(0, Math.min(scrollAmount.current, 1600))

      const newStage = scrollAmount.current < 200 ? 0 : 1

      if (newStage !== currentStage.current) {
        currentStage.current = newStage
        if (newStage === 0) {
          animateToStage0()
        } else {
          animateToStage1()
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isLoading])

  return (
    <>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      {!isLoading && (
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        />
      )}
    </>
  )
}

export default CanvasApp
