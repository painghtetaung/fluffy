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

  useGSAP(
    () => {
      if (!isLoading) {
        // Stage thresholds (in pixels)
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
            y: 0,
            // yoyo: !!(getStage(scrollAmount.current) > 1),
            // repeat: getStage(scrollAmount.current) > 1 ? -1 : 0,
            duration: 0.5,
            // rotation: 0,
            ease: 'power1.inOut',
          })
        }

        // Stage animation functions
        const animateToStage1 = () => {
          console.log('🎬 Entering Stage 1: Slight movement')
          if (imageWrapper1.current) {
            gsap.to(imageWrapper1.current, {
              y: 500,
              x: 300,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
          if (imageWrapper2.current) {
            gsap.to(imageWrapper2.current, {
              y: 500,
              x: 500,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
          if (imageWrapper3.current) {
            gsap.to(imageWrapper3.current, {
              y: 500,
              x: 500,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
          if (human2Ref.current) {
            gsap.to(human2Ref.current, {
              repeat: -1,
              yoyo: false,
            })
          }
          if (human2Ref.current) {
            gsap.to(human2Ref.current, {
              delay: 0.2,
              rotation: -90,
              y: -200,
              scale: 0.6,
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
            gsap.to(human2Ref.current, {
              rotation: 0,
              scale: 1,
              opacity: 1,
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
      <main className="w-full h-screen bg-white flex items-center justify-center">
        {!isLoading && (
          <div ref={contentRef} className="text-center relative">
            <div ref={human2Ref} className="absolute top-0 right-[-230px] bottom-[-850px]">
              <img
                src="/human-2.webp"
                alt="Human character"
                style={{
                  maxWidth: '500px',
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            <div className="absolute top-0 left-0" ref={image123ContainerRef}>
              <div ref={imageWrapper1} className="z-[40] absolute top-0 left-0">
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
              <div ref={imageWrapper2} className="absolute top-[-80px] left-[200px] z-30">
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
              <div ref={imageWrapper3} className="absolute top-[60px] left-[400px] z-[50]">
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
