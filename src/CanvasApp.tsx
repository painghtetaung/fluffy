import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import LoadingScreen from './components/LoadingScreen'
import { imagesConfig, human2Config, bubblesConfig, stageConfig } from './config/imagesConfig'

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

interface CanvasAppProps {
  onStageChange?: (stage: number) => void
}

function CanvasApp({ onStageChange }: CanvasAppProps) {
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const scrollAmount = useRef(0)
  const currentStage = useRef(0)

  const imagesRef = useRef<{
    img1?: ImageData
    img2?: ImageData
    img3?: ImageData
    img4?: ImageData
    img5?: ImageData
    img6?: ImageData
    img7?: ImageData
    img8?: ImageData
    img9?: ImageData
    img10?: ImageData
    img11?: ImageData
    img12?: ImageData
    img13?: ImageData
    img14?: ImageData
    img15?: ImageData
    img16?: ImageData
    human2?: ImageData
    bubbles: Bubble[]
  }>({
    bubbles: [],
  })

  const buildAnimationState = () => {
    const state: any = {
      bubbles: { x: 0, y: 0, opacity: 0 },
      title: { opacity: 0 },
    }
    imagesConfig.forEach((config) => {
      state[config.id] = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 }
    })
    state.human2 = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 }
    return state
  }

  const buildBounceState = () => {
    const state: any = {}
    imagesConfig.forEach((config) => {
      state[config.id] = 0
    })
    state.human2 = 0
    return state
  }

  const animationStateRef = useRef(buildAnimationState())
  const bounceStateRef = useRef(buildBounceState())

  useEffect(() => {
    if (isLoading) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      })
    }

    Promise.all([
      ...imagesConfig.map((config) => loadImage(config.src)),
      loadImage(human2Config.src),
      loadImage('/bubble1.png'),
      loadImage('/bubble2.png'),
      loadImage('/bubble3.png'),
    ]).then((loadedImages) => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      const bubbleImages = loadedImages.slice(-3) as HTMLImageElement[]

      const images: any = { bubbles: generateBubbles(bubbleImages) }

      imagesConfig.forEach((config, index) => {
        images[config.id] = {
          img: loadedImages[index],
          x: centerX + config.position.x,
          y: centerY + config.position.y,
          width: config.position.width,
          height: config.position.height,
          loaded: true,
        }
      })

      images.human2 = {
        img: loadedImages[imagesConfig.length],
        x: centerX + human2Config.position.x,
        y: centerY + human2Config.position.y,
        width: human2Config.position.width,
        height: human2Config.position.height,
        loaded: true,
      }

      imagesRef.current = images

      startAnimation()
    })

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
      imagesConfig.forEach((config) => {
        gsap.to(bounceStateRef.current, {
          [config.id]: config.bounce.amount,
          duration: config.bounce.duration,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: config.bounce.delay,
        })
      })

      gsap.to(bounceStateRef.current, {
        human2: human2Config.bounce.amount,
        duration: human2Config.bounce.duration,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: human2Config.bounce.delay,
      })

      gsap.fromTo(
        animationStateRef.current.bubbles,
        { y: 0 },
        {
          y: -bubblesConfig.animationHeight,
          duration: bubblesConfig.duration,
          repeat: -1,
          ease: 'none',
        }
      )

      render()
    }

    function render() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (animationStateRef.current.bubbles.opacity > 0) {
        ctx.globalAlpha = animationStateRef.current.bubbles.opacity
        imagesRef.current.bubbles.forEach((bubble) => {
          const offsetX = animationStateRef.current.bubbles.x
          const offsetY = animationStateRef.current.bubbles.y
          ctx.drawImage(
            bubble.img,
            canvas.width / 2 + bubble.x + offsetX,
            bubble.y + offsetY,
            bubble.width,
            bubble.height
          )
        })
        ctx.globalAlpha = 1
      }

      const drawables = [
        ...imagesConfig.map((config) => ({ ...config, isHuman2: false })),
        { ...human2Config, isHuman2: true },
      ].sort((a, b) => a.zIndex - b.zIndex)

      let titleDrawn = false

      drawables.forEach((item) => {
        if (!titleDrawn && item.zIndex >= 3 && animationStateRef.current.title.opacity > 0) {
          ctx.save()
          ctx.globalAlpha = animationStateRef.current.title.opacity
          ctx.font = '900 220px sans-serif'
          ctx.fillStyle = '#203D99'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('Fluffy HüGs', canvas.width / 2, canvas.height / 2)
          ctx.restore()
          titleDrawn = true
        }
        const imageData = imagesRef.current[item.id as keyof typeof imagesRef.current] as
          | ImageData
          | undefined
        if (!imageData) return

        const state = animationStateRef.current[
          item.id as keyof typeof animationStateRef.current
        ] as {
          x: number
          y: number
          rotation: number
          scale: number
          opacity: number
        }
        const bounce = bounceStateRef.current[
          item.id as keyof typeof bounceStateRef.current
        ] as number

        ctx.save()
        ctx.globalAlpha = state.opacity
        ctx.translate(imageData.x + state.x, imageData.y + state.y + bounce)
        ctx.rotate((state.rotation * Math.PI) / 180)
        ctx.scale(state.scale, state.scale)
        ctx.drawImage(imageData.img, 0, 0, imageData.width, imageData.height)
        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(render)
    }

    const animateToStage1 = () => {
      imagesConfig.forEach((config) => {
        gsap.to(animationStateRef.current[config.id as keyof typeof animationStateRef.current], {
          x: config.stage1.x,
          y: config.stage1.y,
          duration: config.stage1.duration,
          delay: config.stage1.delay,
          rotation: config.stage1.rotation || 0,
          scale: config.stage1.scale || 1,
          ease: stageConfig.transitionEase,
        })
      })

      gsap.to(animationStateRef.current.human2, {
        rotation: human2Config.stage1.rotation || 0,
        y: human2Config.stage1.y,
        x: human2Config.stage1.x,
        scale: human2Config.stage1.scale || 1,
        duration: human2Config.stage1.duration,
        delay: human2Config.stage1.delay,
        ease: stageConfig.transitionEase,
      })

      // Reset and restart vertical bubble animation
      gsap.killTweensOf(animationStateRef.current.bubbles)
      gsap.set(animationStateRef.current.bubbles, { x: 0 })
      gsap.fromTo(
        animationStateRef.current.bubbles,
        { y: 0 },
        {
          y: -bubblesConfig.animationHeight,
          duration: bubblesConfig.duration,
          repeat: -1,
          ease: 'none',
        }
      )

      gsap.to(animationStateRef.current.bubbles, {
        opacity: bubblesConfig.opacity,
        duration: stageConfig.transitionDuration,
        ease: stageConfig.transitionEase,
      })

      gsap.to(animationStateRef.current.title, {
        opacity: 1,
        duration: stageConfig.transitionDuration,
        ease: stageConfig.transitionEase,
      })
    }

    const animateToStage0 = () => {
      imagesConfig.forEach((config) => {
        gsap.to(animationStateRef.current[config.id as keyof typeof animationStateRef.current], {
          y: 0,
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: stageConfig.transitionDuration,
          ease: stageConfig.transitionEase,
        })
      })

      gsap.to(animationStateRef.current.human2, {
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: stageConfig.transitionDuration,
        ease: stageConfig.transitionEase,
      })

      gsap.to(animationStateRef.current.bubbles, {
        opacity: 0,
        duration: stageConfig.transitionDuration,
        ease: stageConfig.transitionEase,
      })

      gsap.to(animationStateRef.current.title, {
        opacity: 0,
        duration: stageConfig.transitionDuration,
        ease: stageConfig.transitionEase,
      })
    }

    const animateToStage2 = () => {
      // Animate human2 to stage 2 position
      if (human2Config.stage2) {
        gsap.to(animationStateRef.current.human2, {
          rotation: human2Config.stage2.rotation || 0,
          y: human2Config.stage2.y,
          x: human2Config.stage2.x,
          scale: human2Config.stage2.scale || 1,
          duration: human2Config.stage2.duration,
          delay: human2Config.stage2.delay,
          ease: stageConfig.transitionEase,
        })
      }

      // Stop vertical bubble animation and start horizontal
      gsap.killTweensOf(animationStateRef.current.bubbles)
      gsap.set(animationStateRef.current.bubbles, { y: 0 })

      // Animate bubbles horizontally (right to left)
      gsap.fromTo(
        animationStateRef.current.bubbles,
        { x: canvas.width },
        {
          x: -canvas.width,
          duration: bubblesConfig.duration,
          repeat: -1,
          ease: 'none',
        }
      )

      // Hide title in stage 2
      gsap.to(animationStateRef.current.title, {
        opacity: 0,
        duration: stageConfig.transitionDuration,
        ease: stageConfig.transitionEase,
      })
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      scrollAmount.current += e.deltaY * 0.5
      scrollAmount.current = Math.max(0, Math.min(scrollAmount.current, stageConfig.maxScroll))

      let newStage = 0
      if (scrollAmount.current >= stageConfig.stage2Threshold) {
        newStage = 2
      } else if (scrollAmount.current >= stageConfig.scrollThreshold) {
        newStage = 1
      }

      if (newStage !== currentStage.current) {
        currentStage.current = newStage
        onStageChange?.(newStage)
        if (newStage === 0) {
          animateToStage0()
        } else if (newStage === 1) {
          animateToStage1()
        } else {
          animateToStage2()
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
  }, [isLoading, onStageChange])

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
            zIndex: 20,
          }}
        />
      )}
    </>
  )
}

export default CanvasApp
