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
  const scrollDirection = useRef<'up' | 'down'>('down')
  const animationStage = useRef(0)
  const image123ContainerRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!isLoading) {
        // Fade in content
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
          )
        }

        // Create master timeline for all scroll animations
        const scrollTimeline = gsap.timeline({ paused: true })

        // Add animations for wrapper 1
        if (imageWrapper1.current) {
          scrollTimeline.to(
            imageWrapper1.current,
            {
              y: 600,
              x: 800,
              opacity: 0,
              ease: 'none',
            },
            0
          )
        }

        // Add animations for wrapper 2 (slightly different timing)
        if (imageWrapper2.current) {
          scrollTimeline.to(
            imageWrapper2.current,
            {
              y: 1000,
              x: 800,
              opacity: 0,
              ease: 'none',
            },
            0
          )
        }

        // Add animations for wrapper 3
        if (imageWrapper3.current) {
          scrollTimeline.to(
            imageWrapper3.current,
            {
              y: 700,
              x: 800,
              opacity: 0,
              ease: 'none',
            },
            0
          )
        }

        // Animate first image - bounce (on the image itself)
        if (imageRef1.current) {
          gsap.to(imageRef1.current, {
            y: -10,
            yoyo: true,
            repeat: -1,
            duration: 1.2,
            ease: 'power1.inOut',
          })
        }

        // Animate second image - bounce
        if (imageRef2.current) {
          gsap.to(imageRef2.current, {
            y: -25,
            yoyo: true,
            repeat: -1,
            duration: 1.2,
            ease: 'power1.inOut',
            delay: 0.2,
          })
        }

        // Animate third image - bounce
        if (imageRef3.current) {
          gsap.to(imageRef3.current, {
            y: -25,
            yoyo: true,
            repeat: -1,
            duration: 1.2,
            ease: 'power1.inOut',
            delay: 0.4,
          })
        }

        // Wheel event for parallax
        const handleWheel = (e: WheelEvent) => {
          e.preventDefault()

          // Update scroll amount
          scrollAmount.current += e.deltaY * 0.5
          scrollAmount.current = Math.max(0, Math.min(scrollAmount.current, 1000))

          // Calculate progress (0 to 1)
          const progress = scrollAmount.current / 1000

          // Update timeline progress - this automatically handles direction!
          scrollTimeline.progress(progress)

          // Detect scroll direction
          scrollDirection.current = e.deltaY > 0 ? 'down' : 'up'

          // Determine current stage based on progress
          let currentStage = 0
          if (progress > 0.2) currentStage = 1
          if (progress > 0.4) currentStage = 2
          if (progress > 0.6) currentStage = 3
          if (progress > 0.8) currentStage = 4

          // Check if stage changed
          if (currentStage !== animationStage.current) {
            const previousStage = animationStage.current
            animationStage.current = currentStage

            console.log(`Stage: ${previousStage} → ${currentStage} (${scrollDirection.current})`)

            // Stage-specific animations
            if (scrollDirection.current === 'down') {
              // SCROLLING DOWN - Entering new stage
              switch (currentStage) {
                case 1:
                  console.log('🎬 Stage 1: Initial animations')

                  // Add animations for human2

                  // // Example: Rotate wrapper1
                  // if (imageWrapper1.current) {
                  //   scrollTimeline.to(imageWrapper1.current, {
                  //     duration: 0.6,
                  //     ease: 'back.out(1.7)'
                  //   });
                  // }

                  // if (imageWrapper2.current) {
                  //   scrollTimeline.to(imageWrapper2.current, {
                  //     duration: 0.6,
                  //     ease: 'elastic.out(1, 0.5)'
                  //   });
                  // }
                  //   // Example: Fade out wrapper3
                  //   if (imageWrapper3.current) {
                  //     scrollTimeline.to(imageWrapper3.current, {
                  //      duration: 0.6,
                  //     ease: 'back.out(1.7)'
                  //     });
                  //   }

                  // Add animations for wrapper 1
                  if (imageWrapper1.current) {
                    scrollTimeline.to(
                      imageWrapper1.current,
                      {
                        y: 600,
                        x: 800,
                        opacity: 0,
                        ease: 'none',
                      },
                      0
                    )
                  }

                  // Add animations for wrapper 2 (slightly different timing)
                  if (imageWrapper2.current) {
                    scrollTimeline.to(
                      imageWrapper2.current,
                      {
                        y: 1000,
                        x: 800,
                        opacity: 0,
                        ease: 'none',
                      },
                      0
                    )
                  }

                  // Add animations for wrapper 3
                  if (imageWrapper3.current) {
                    scrollTimeline.to(
                      imageWrapper3.current,
                      {
                        y: 700,
                        x: 800,
                        opacity: 0,
                        ease: 'none',
                      },
                      0
                    )
                  }

                  if (human2Ref.current) {
                    scrollTimeline.to(
                      human2Ref.current,
                      {
                        rotation: -90,
                        scale: 0.3,
                        ease: 'back.out(1.7)',
                      },
                      0
                    )
                  }
                  break

                case 2:
                  console.log('🎬 Stage 2: Mid animations')
                  // Example: Scale up wrapper2

                  break

                case 3:
                  console.log('🎬 Stage 3: Advanced animations')
                  // Example: Add extra rotation to human2
                  // if (human2Ref.current) {
                  //   gsap.to(human2Ref.current, {
                  //     rotation: '-=45',
                  //     duration: 0.8,
                  //     ease: 'power2.out'
                  //   });
                  // }
                  break

                case 4:
                  console.log('🎬 Stage 4: Final stage!')

                  break
              }
            } else {
              // SCROLLING UP - Returning to previous stage
              switch (
                currentStage
                // case 0:
                //   console.log('🔄 Back to Stage 0: Reset');
                //   if (imageWrapper1.current) {
                //     gsap.to(imageWrapper1.current, { rotation: 0, duration: 0.6 });
                //   }
                //   break;

                // case 1:
                //   console.log('🔄 Back to Stage 1');
                //   if (imageWrapper2.current) {
                //     gsap.to(imageWrapper2.current, { scale: 1, duration: 0.6 });
                //   }
                //   break;

                // case 2:
                //   console.log('🔄 Back to Stage 2');
                //   if (human2Ref.current) {
                //     gsap.to(human2Ref.current, { rotation: '+=45', duration: 0.8 });
                //   }
                //   break;

                // case 3:
                //   console.log('🔄 Back to Stage 3');
                //   if (imageWrapper3.current) {
                //     gsap.to(imageWrapper3.current, { opacity: 1, duration: 0.5 });
                //   }
                //   break;
              ) {
              }
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
            <div ref={human2Ref} className="absolute top-0 right-[-230px] bottom-[-800px]">
              <img
                src="/human-2.webp"
                alt="Loading..."
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
                  alt="Loading..."
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
                  alt="Loading..."
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
                  alt="Loading..."
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
