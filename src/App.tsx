
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
  const scrollAmount = useRef(0);
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

      // Animate first image - bounce
      if (imageRef1.current) {
        gsap.to(imageRef1.current, {
          y: -10,
          duration: 0.4,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1
        });
      }

      // Animate second image - bounce
      if (imageRef2.current) {
        gsap.to(imageRef2.current, {
          y: -25,
          duration: 0.4,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
          delay: 0.2
        });
      }

      // Animate third image - bounce
      if (imageRef3.current) {
        gsap.to(imageRef3.current, {
          y: -25,
          duration: 0.4,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
          delay: 0.4
        });
      }

      // Wheel event for parallax
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();

        scrollAmount.current += e.deltaY * 0.5;
        scrollAmount.current = Math.max(0, Math.min(scrollAmount.current, 1000));

        // if (image123ContainerRef.current) {
        //   gsap.to(image123ContainerRef.current, {
        //     y: scrollAmount.current * 0.6 - 10,
        //     x: scrollAmount.current * 1,
        //     opacity: Math.max(0, 1 - scrollAmount.current / 500),
        //     duration: 0.5,
        //     delay: 0.15,
        //     ease: 'power2.out'
        //   });
        // }

        // Image 1: Move up and LEFT
        if (imageRef1.current) {
          gsap.to(imageRef1.current, {
            y: scrollAmount.current * 0.6 - 10,
            x: scrollAmount.current * 1,
            opacity: Math.max(0, 1 - scrollAmount.current / 500),
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out'
          });
        }

        // Image 2: Move UP (minimal horizontal)
        if (imageRef2.current) {
          gsap.to(imageRef2.current, {
            y: scrollAmount.current * 1.0 - 25,
            x: scrollAmount.current * 1,
            opacity: Math.max(0, 1 - scrollAmount.current / 500),
            duration: 0.5,
            delay: 0.2,
            ease: 'power2.out'
          });
        }

        // Image 3: Move up and RIGHT
        if (imageRef3.current) {
          gsap.to(imageRef3.current, {
            y: scrollAmount.current * 0.7 - 25,
            x: scrollAmount.current * 1,
            opacity: Math.max(0, 1 - scrollAmount.current / 500),
            duration: 0.5,
            delay: 0.1,
            ease: 'power2.out'
          });
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, { dependencies: [isLoading], scope: [contentRef, image123ContainerRef] });

  return (
    <>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      <main className='w-full h-screen bg-white flex items-center justify-center'>
        {!isLoading && (
          <div ref={contentRef} className='text-center relative'>
            <div className='absolute top-0 left-0' ref={image123ContainerRef}>
              <img
                ref={imageRef1}
                src="/img1.webp"
                alt="Loading..."
                className=''
                style={{
                  maxWidth: '500px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
              <img
                ref={imageRef2}
                src="/img1.webp"
                className='absolute top-[-100px] left-[200px]'
                alt="Loading..."
                style={{
                  maxWidth: '500px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
              <img
                ref={imageRef3}
                src="/img1.webp"
                alt="Loading..."
                className='absolute top-[100px] left-[350px]'
                style={{
                  maxWidth: '500px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
