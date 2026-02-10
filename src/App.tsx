
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import LoadingScreen from './components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef1 = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const imageRef3 = useRef<HTMLImageElement>(null);
  const human2Ref = useRef<HTMLImageElement>(null);
  const imageWrapper1 = useRef<HTMLDivElement>(null);
  const imageWrapper2 = useRef<HTMLDivElement>(null);
  const imageWrapper3 = useRef<HTMLDivElement>(null);

  const scrollAmount = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');
  const animationStage = useRef(0);
  const image123ContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!isLoading) {
      // Fade in content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
      }

      // Create quickTo functions for wrappers (scroll effect)
      const quickToWrapper1Y = imageWrapper1.current ? gsap.quickTo(imageWrapper1.current, 'y', { duration: 0.6, ease: 'power2.out' }) : null;
      const quickToWrapper1X = imageWrapper1.current ? gsap.quickTo(imageWrapper1.current, 'x', { duration: 0.6, ease: 'power2.out' }) : null;
      const quickToWrapper1Opacity = imageWrapper1.current ? gsap.quickTo(imageWrapper1.current, 'opacity', { duration: 0.6, ease: 'power2.out' }) : null;

      const quickToWrapper2Y = imageWrapper2.current ? gsap.quickTo(imageWrapper2.current, 'y', { duration: 0.8, ease: 'power2.out' }) : null;
      const quickToWrapper2X = imageWrapper2.current ? gsap.quickTo(imageWrapper2.current, 'x', { duration: 0.8, ease: 'power2.out' }) : null;
      const quickToWrapper2Opacity = imageWrapper2.current ? gsap.quickTo(imageWrapper2.current, 'opacity', { duration: 0.8, ease: 'power2.out' }) : null;

      const quickToWrapper3Y = imageWrapper3.current ? gsap.quickTo(imageWrapper3.current, 'y', { duration: 1.0, ease: 'power2.out' }) : null;
      const quickToWrapper3X = imageWrapper3.current ? gsap.quickTo(imageWrapper3.current, 'x', { duration: 1.0, ease: 'power2.out' }) : null;
      const quickToWrapper3Opacity = imageWrapper3.current ? gsap.quickTo(imageWrapper3.current, 'opacity', { duration: 1.0, ease: 'power2.out' }) : null;

      // Animate first image - bounce (on the image itself)
      if (imageRef1.current) {
        gsap.to(imageRef1.current, {
          y: -10,
          yoyo: true,
          repeat: -1,
          duration: 1.2,
          ease: 'power1.inOut'
        });
      }

      // Animate second image - bounce
      if (imageRef2.current) {
        gsap.to(imageRef2.current, {
          y: -25,
          yoyo: true,
          repeat: -1,
          duration: 1.2,
          ease: 'power1.inOut',
          delay: 0.2
        });
      }

      // Animate third image - bounce
      if (imageRef3.current) {
        gsap.to(imageRef3.current, {
          y: -25,
          yoyo: true,
          repeat: -1,
          duration: 1.2,
          ease: 'power1.inOut',
          delay: 0.4
        });
      }

      // Wheel event for parallax
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();

        scrollAmount.current += e.deltaY * 0.5;
        scrollAmount.current = Math.max(0, Math.min(scrollAmount.current, 1000));

        // Detect scroll direction
        scrollDirection.current = e.deltaY > 0 ? 'down' : 'up';

        // Determine animation stage based on scroll amount
        let newStage = 0;
        if (scrollAmount.current > 200) newStage = 1;
        if (scrollAmount.current > 400) newStage = 2;
        if (scrollAmount.current > 600) newStage = 3;
        if (scrollAmount.current > 800) newStage = 4;

        // Trigger animations when stage changes
        if (newStage !== animationStage.current) {
          const oldStage = animationStage.current;
          animationStage.current = newStage;

          if (scrollDirection.current === 'down') {
            // Scrolling DOWN - add more animations progressively
            console.log(`Stage ${oldStage} → ${newStage} (scrolling down)`);
            // Example: Add rotation animation at stage 2
            if (newStage >= 2 && imageWrapper1.current) {
              gsap.to(imageWrapper1.current, {
                rotation: 10,
                duration: 0.5,
                ease: 'power2.out'
              });
            }
          } else {
            // Scrolling UP - reverse or different animations
            console.log(`Stage ${oldStage} → ${newStage} (scrolling up)`);
            if (newStage < 2 && imageWrapper1.current) {
              gsap.to(imageWrapper1.current, {
                rotation: 0,
                duration: 0.5,
                ease: 'power2.out'
              });
            }
          }
        }

        // Wrapper 1: Move down and left using quickTo
        if (quickToWrapper1Y && quickToWrapper1X && quickToWrapper1Opacity) {
          quickToWrapper1Y(scrollAmount.current * 0.6);
          quickToWrapper1X(scrollAmount.current * 0.8);
        }

        // Wrapper 2: Move down (minimal horizontal) using quickTo
        if (quickToWrapper2Y && quickToWrapper2X && quickToWrapper2Opacity) {
          quickToWrapper2Y(scrollAmount.current * 1.0);
          quickToWrapper2X(scrollAmount.current * 0.8);
        }

        // Wrapper 3: Move down and right using quickTo
        if (quickToWrapper3Y && quickToWrapper3X && quickToWrapper3Opacity) {
          quickToWrapper3Y(scrollAmount.current * 0.7);
          quickToWrapper3X(scrollAmount.current * 0.8);
        }

        if (human2Ref.current) {
          const scale = Math.max(0.3, 1 - scrollAmount.current * 0.0004);
          // const moveX = scrollAmount.current * 0.5;

          // Different rotation based on direction
          const rotationMultiplier = scrollDirection.current === 'down' ? 0.09 : 0.05;
          const rotation = -scrollAmount.current * rotationMultiplier;

          human2Ref.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, { dependencies: [isLoading], scope: contentRef });

  return (
    <>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      <main className='w-full h-screen bg-white flex items-center justify-center'>
        {!isLoading && (
          <div ref={contentRef} className='text-center relative'>
            <div ref={human2Ref} className='absolute top-0 right-[-230px] bottom-[-800px]'>
              <img src="/human-2.webp" alt="Loading..." style={{
                maxWidth: '500px',
                width: 'auto',
                height: 'auto',
              }} />
            </div>
            <div className='absolute top-0 left-0' ref={image123ContainerRef}>
              <div ref={imageWrapper1} className='z-[40] absolute top-0 left-0'>
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
              <div ref={imageWrapper2} className='absolute top-[-80px] left-[200px] z-30'>
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
              <div ref={imageWrapper3} className='absolute top-[60px] left-[400px] z-[50]'>
                <img
                  ref={imageRef3}
                  src="/img3.webp"
                  alt="Loading..."
                  style={{
                    maxWidth: '500px',
                    width: 'auto',
                    height: 'auto'
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
