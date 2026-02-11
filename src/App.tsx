import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import LoadingScreen from './components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef1 = useRef<HTMLImageElement>(null)
  const imageRef2 = useRef<HTMLImageElement>(null)
  const imageRef3 = useRef<HTMLImageElement>(null)
  const human2Ref = useRef<HTMLImageElement>(null)
  const imageWrapper1 = useRef<HTMLDivElement>(null)
  const imageWrapper2 = useRef<HTMLDivElement>(null)
  const imageWrapper3 = useRef<HTMLDivElement>(null)

  const scrollAmount = useRef(0)
  const currentStage = useRef(0)
  const image123ContainerRef = useRef<HTMLDivElement>(null)
  const bubblesContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!isLoading) {
        const STAGES = {
          STAGE_0: 0,
          STAGE_1: 200,
          STAGE_2: 400,
          STAGE_3: 600,
          STAGE_4: 800,
          STAGE_5: 1000,
          STAGE_6: 1200,
          STAGE_7: 1400,
        }

        const MAX_SCROLL = 1600

        // Helper function to get current stage
        const getStage = (amount: number): number => {
          if (amount < STAGES.STAGE_1) return 0
          if (amount < STAGES.STAGE_2) return 1
          if (amount < STAGES.STAGE_3) return 2
          if (amount < STAGES.STAGE_4) return 3
          if (amount < STAGES.STAGE_5) return 4
          if (amount < STAGES.STAGE_6) return 5
          if (amount < STAGES.STAGE_7) return 6
          return 7
        }

        // Fade in content on load
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
          )
        }

        // Continuous bounce animations for images
        if (imageRef1.current) {
          gsap.to(imageRef1.current, {
            y: -10,
            yoyo: true,
            repeat: -1,
            duration: 0.5,
            ease: 'power1.inOut',
          })
        }

        if (imageRef2.current) {
          gsap.to(imageRef2.current, {
            y: -25,
            yoyo: true,
            repeat: -1,
            duration: 0.5,
            ease: 'power1.inOut',
            delay: 0.2,
          })
        }

        if (imageRef3.current) {
          gsap.to(imageRef3.current, {
            y: -25,
            yoyo: true,
            repeat: -1,
            duration: 0.5,
            ease: 'power1.inOut',
            delay: 0.4,
          })
        }

        if (human2Ref.current) {
          gsap.to(human2Ref.current, {
            y: 25,
            yoyo: !!(getStage(scrollAmount.current) < 1),
            repeat: getStage(scrollAmount.current) < 1 ? -1 : 0,
            duration: 0.5,
            ease: 'power1.inOut',
          })
        }

        // Bubble container animation - seamless continuous upward movement
        if (bubblesContainerRef.current) {
          const bubbleHeight = 1800 // Total height of bubble pattern
          gsap.set(bubblesContainerRef.current, { opacity: 0 })
          gsap.fromTo(
            bubblesContainerRef.current,
            { y: 0 },
            {
              y: -bubbleHeight,
              duration: 12,
              repeat: -1,
              ease: 'none',
            }
          )
        }

        // Stage animation functions
        const animateToStage1 = () => {
          if (imageWrapper1.current) {
            gsap.killTweensOf(imageWrapper1.current)
            gsap.to(imageWrapper1.current, {
              y: 500,
              x: 300,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
          if (imageWrapper2.current) {
            gsap.killTweensOf(imageWrapper2.current)
            gsap.to(imageWrapper2.current, {
              y: 500,
              x: 500,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
          if (imageWrapper3.current) {
            gsap.killTweensOf(imageWrapper3.current)
            gsap.to(imageWrapper3.current, {
              y: 500,
              x: 500,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
          if (human2Ref.current) {
            gsap.killTweensOf(human2Ref.current)
            gsap.to(human2Ref.current, {
              rotation: -90,
              y: -200,
              scale: 0.6,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
          if (bubblesContainerRef.current) {
            gsap.to(bubblesContainerRef.current, {
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
        }

        const animateToStage2 = () => {
          console.log('🎬 Entering Stage 2: More spread')
        }

        const animateToStage3 = () => {
          console.log('🎬 Entering Stage 3: Maximum spread')
        }

        const animateToStage4 = () => {
          console.log('🎬 Entering Stage 4: Final dispersal')
          // if (imageWrapper1.current) {
          //   gsap.to(imageWrapper1.current, {
          //     y: 600,
          //     x: 700,
          //     opacity: 0,
          //     duration: 0.8,
          //     ease: 'power2.out',
          //   })
          // }
          // if (imageWrapper2.current) {
          //   gsap.to(imageWrapper2.current, {
          //     y: 800,
          //     x: 700,
          //     opacity: 0,
          //     duration: 0.8,
          //     ease: 'power2.out',
          //   })
          // }
          // if (imageWrapper3.current) {
          //   gsap.to(imageWrapper3.current, {
          //     y: 650,
          //     x: 700,
          //     opacity: 0,
          //     duration: 0.8,
          //     ease: 'power2.out',
          //   })
          // }
          // if (human2Ref.current) {
          //   gsap.to(human2Ref.current, {
          //     rotation: -90,
          //     scale: 0.3,
          //     duration: 0.8,
          //     ease: 'power2.out',
          //   })
          // }
        }

        const animateToStage5 = () => {
          console.log('🎬 Stage 5: Spiral rotation')
          // if (imageWrapper1.current) {
          //   gsap.to(imageWrapper1.current, {
          //     y: 700,
          //     x: 600,
          //     rotation: 180,
          //     opacity: 0.3,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
          // if (imageWrapper2.current) {
          //   gsap.to(imageWrapper2.current, {
          //     y: 900,
          //     x: 600,
          //     rotation: 180,
          //     opacity: 0.3,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
          // if (imageWrapper3.current) {
          //   gsap.to(imageWrapper3.current, {
          //     y: 750,
          //     x: 600,
          //     rotation: 180,
          //     opacity: 0.3,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
          // if (human2Ref.current) {
          //   gsap.to(human2Ref.current, {
          //     rotation: -120,
          //     scale: 0.2,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
        }

        const animateToStage6 = () => {
          console.log('🎬 Stage 6: Full rotation')
          // if (imageWrapper1.current) {
          //   gsap.to(imageWrapper1.current, {
          //     y: 800,
          //     x: 400,
          //     rotation: 360,
          //     opacity: 0.1,
          //     scale: 0.5,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
          // if (imageWrapper2.current) {
          //   gsap.to(imageWrapper2.current, {
          //     y: 1000,
          //     x: 400,
          //     rotation: 360,
          //     opacity: 0.1,
          //     scale: 0.5,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
          // if (imageWrapper3.current) {
          //   gsap.to(imageWrapper3.current, {
          //     y: 850,
          //     x: 400,
          //     rotation: 360,
          //     opacity: 0.1,
          //     scale: 0.5,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
          // if (human2Ref.current) {
          //   gsap.to(human2Ref.current, {
          //     rotation: -180,
          //     scale: 0.1,
          //     duration: 1,
          //     ease: 'power2.inOut',
          //   })
          // }
        }

        const animateToStage7 = () => {
          console.log('🎬 Stage 7: Complete fade')
          // if (imageWrapper1.current) {
          //   gsap.to(imageWrapper1.current, {
          //     y: 1000,
          //     x: 200,
          //     rotation: 720,
          //     opacity: 0,
          //     scale: 0.1,
          //     duration: 1.2,
          //     ease: 'power3.out',
          //   })
          // }
          // if (imageWrapper2.current) {
          //   gsap.to(imageWrapper2.current, {
          //     y: 1200,
          //     x: 200,
          //     rotation: 720,
          //     opacity: 0,
          //     scale: 0.1,
          //     duration: 1.2,
          //     ease: 'power3.out',
          //   })
          // }
          // if (imageWrapper3.current) {
          //   gsap.to(imageWrapper3.current, {
          //     y: 1050,
          //     x: 200,
          //     rotation: 720,
          //     opacity: 0,
          //     scale: 0.1,
          //     duration: 1.2,
          //     ease: 'power3.out',
          //   })
          // }
          // if (human2Ref.current) {
          //   gsap.to(human2Ref.current, {
          //     rotation: -270,
          //     scale: 0.05,
          //     opacity: 0,
          //     duration: 1.2,
          //     ease: 'power3.out',
          //   })
          // }
        }

        const animateToStage0 = () => {
          console.log('🔄 Returning to Stage 0: Reset')
          if (imageWrapper1.current) {
            gsap.killTweensOf(imageWrapper1.current)
            gsap.to(imageWrapper1.current, {
              y: 0,
              x: 0,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
          if (imageWrapper2.current) {
            gsap.killTweensOf(imageWrapper2.current)
            gsap.to(imageWrapper2.current, {
              y: 0,
              x: 0,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
          if (imageWrapper3.current) {
            gsap.killTweensOf(imageWrapper3.current)
            gsap.to(imageWrapper3.current, {
              y: 0,
              x: 0,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
          if (human2Ref.current) {
            gsap.killTweensOf(human2Ref.current)
            gsap.to(human2Ref.current, {
              y: 25,
              rotation: 0,
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
            })
            gsap.to(human2Ref.current, {
              yoyo: true,
              delay: 0.3,
              repeat: -1,
              duration: 0.8,
              y: 10,
              ease: 'power1.inOut',
            })
          }
          if (bubblesContainerRef.current) {
            gsap.to(bubblesContainerRef.current, {
              opacity: 0,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
        }

        // Wheel event handler
        const handleWheel = (e: WheelEvent) => {
          e.preventDefault()

          // Update scroll amount
          scrollAmount.current += e.deltaY * 0.5
          scrollAmount.current = Math.max(0, Math.min(scrollAmount.current, MAX_SCROLL))

          // Calculate new stage
          const newStage = getStage(scrollAmount.current)

          // Only trigger animation if stage changed
          if (newStage !== currentStage.current) {
            const previousStage = currentStage.current
            currentStage.current = newStage

            console.log(`Stage transition: ${previousStage} → ${newStage}`)

            // Trigger appropriate stage animation
            switch (newStage) {
              case 0:
                animateToStage0()
                break
              case 1:
                animateToStage1()
                break
              case 2:
                animateToStage2()
                break
              case 3:
                animateToStage3()
                break
              case 4:
                animateToStage4()
                break
              case 5:
                animateToStage5()
                break
              case 6:
                animateToStage6()
                break
              case 7:
                animateToStage7()
                break
            }
          }
        }

        window.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
          window.removeEventListener('wheel', handleWheel)
        }
      }
    },
    { dependencies: [isLoading], scope: contentRef }
  )

  return (
    <>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      {!isLoading && (
        <div className="absolute top-0 right-0 w-full h-screen -z-[20] overflow-hidden">
          <div ref={bubblesContainerRef} className="absolute top-0 left-0 w-full">
            {/* First set of bubbles */}
            <div className="absolute top-[80px] right-[320px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[160px] right-[80px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[320px] right-[240px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[128px] h-[128px] object-contain" />
            </div>
            <div className="absolute top-[480px] right-[400px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[192px] h-[192px] object-contain" />
            </div>
            <div className="absolute top-[640px] right-[160px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[800px] right-[480px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[176px] h-[176px] object-contain" />
            </div>
            <div className="absolute top-[960px] right-[128px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[1120px] right-[352px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[208px] h-[208px] object-contain" />
            </div>
            <div className="absolute top-[1280px] right-[288px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[112px] h-[112px] object-contain" />
            </div>
            <div className="absolute top-[1440px] right-[192px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[224px] h-[224px] object-contain" />
            </div>
            <div className="absolute top-[1600px] right-[448px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[1760px] right-[96px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[176px] h-[176px] object-contain" />
            </div>
            <div className="absolute top-[240px] right-[560px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[128px] h-[128px] object-contain" />
            </div>
            <div className="absolute top-[560px] right-[48px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[880px] right-[640px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[192px] h-[192px] object-contain" />
            </div>
            <div className="absolute top-[1200px] right-[512px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[1520px] right-[320px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[208px] h-[208px] object-contain" />
            </div>
            <div className="absolute top-[400px] right-[128px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[112px] h-[112px] object-contain" />
            </div>

            {/* Left side bubbles */}
            <div className="absolute top-[128px] left-[80px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[176px] h-[176px] object-contain" />
            </div>
            <div className="absolute top-[288px] left-[240px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[528px] left-[128px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[208px] h-[208px] object-contain" />
            </div>
            <div className="absolute top-[720px] left-[320px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[128px] h-[128px] object-contain" />
            </div>
            <div className="absolute top-[928px] left-[48px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[1088px] left-[192px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[192px] h-[192px] object-contain" />
            </div>
            <div className="absolute top-[1312px] left-[400px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[1488px] left-[96px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[224px] h-[224px] object-contain" />
            </div>
            <div className="absolute top-[1680px] left-[288px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>

            {/* Duplicate set of bubbles offset by 1800px (112.5rem) for seamless loop */}
            <div className="absolute top-[1880px] right-[320px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[1960px] right-[80px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[2120px] right-[240px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[128px] h-[128px] object-contain" />
            </div>
            <div className="absolute top-[2280px] right-[400px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[192px] h-[192px] object-contain" />
            </div>
            <div className="absolute top-[2440px] right-[160px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[2600px] right-[480px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[176px] h-[176px] object-contain" />
            </div>
            <div className="absolute top-[2760px] right-[128px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[2920px] right-[352px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[208px] h-[208px] object-contain" />
            </div>
            <div className="absolute top-[3080px] right-[288px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[112px] h-[112px] object-contain" />
            </div>
            <div className="absolute top-[3240px] right-[192px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[224px] h-[224px] object-contain" />
            </div>
            <div className="absolute top-[3400px] right-[448px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[3560px] right-[96px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[176px] h-[176px] object-contain" />
            </div>
            <div className="absolute top-[2040px] right-[560px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[128px] h-[128px] object-contain" />
            </div>
            <div className="absolute top-[2360px] right-[48px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[2680px] right-[640px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[192px] h-[192px] object-contain" />
            </div>
            <div className="absolute top-[3000px] right-[512px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[3320px] right-[320px]">
              <img src="/bubble3.png" alt="Bubble" className="w-[208px] h-[208px] object-contain" />
            </div>
            <div className="absolute top-[2200px] right-[128px]">
              <img src="/bubble2.png" alt="Bubble" className="w-[112px] h-[112px] object-contain" />
            </div>

            {/* Duplicate left side bubbles */}
            <div className="absolute top-[1928px] left-[80px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[176px] h-[176px] object-contain" />
            </div>
            <div className="absolute top-[2088px] left-[240px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[2328px] left-[128px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[208px] h-[208px] object-contain" />
            </div>
            <div className="absolute top-[2520px] left-[320px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[128px] h-[128px] object-contain" />
            </div>
            <div className="absolute top-[2728px] left-[48px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
            <div className="absolute top-[2888px] left-[192px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[192px] h-[192px] object-contain" />
            </div>
            <div className="absolute top-[3112px] left-[400px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[144px] h-[144px] object-contain" />
            </div>
            <div className="absolute top-[3288px] left-[96px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[224px] h-[224px] object-contain" />
            </div>
            <div className="absolute top-[3480px] left-[288px]">
              <img src="/bubble1.png" alt="Bubble" className="w-[160px] h-[160px] object-contain" />
            </div>
          </div>
        </div>
      )}
      <main className="w-full h-screen bg-white flex items-center justify-center">
        {!isLoading && (
          <div ref={contentRef} className="text-center relative w-full h-full">
            <div ref={human2Ref} className="absolute h-fit top-[80px] right-[-230px]">
              <img
                src="/human-2.webp"
                alt="Human character"
                style={{
                  maxWidth: '500px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div className="absolute top-0 left-0" ref={image123ContainerRef}>
              <div ref={imageWrapper1} className="z-[40] absolute top-[320px] left-0">
                <img
                  ref={imageRef1}
                  src="/img1.webp"
                  alt="Character 1"
                  style={{
                    maxWidth: '500px',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </div>
              <div ref={imageWrapper2} className="absolute top-[400px] left-[200px] z-30">
                <img
                  ref={imageRef2}
                  src="/img2.webp"
                  alt="Character 2"
                  style={{
                    maxWidth: '500px',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </div>
              <div ref={imageWrapper3} className="absolute top-[23rem] left-[400px] z-[50]">
                <img
                  ref={imageRef3}
                  src="/img3.webp"
                  alt="Character 3"
                  style={{
                    maxWidth: '500px',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
