export interface ImageConfig {
  id: string
  src: string
  zIndex: number
  position: {
    x: number
    y: number
    width: number
    height: number
  }
  bounce: {
    amount: number
    duration: number
    delay: number
  }
  stage1: {
    x: number
    y: number
    duration: number
    delay: number
    rotation?: number
    scale?: number
  }
}

export const imagesConfig: ImageConfig[] = [
  {
    id: 'img1',
    src: '/img1.webp',
    zIndex: 7,
    position: { x: 230, y: -150, width: 720, height: 720 },
    bounce: { amount: -10, duration: 0.6, delay: 0 },
    stage1: { x: 300, y: 500, duration: 0.5, delay: 0.3 },
  },
  {
    id: 'img2',
    src: '/img2.webp',
    zIndex: 8,
    position: { x: 100, y: -250, width: 720, height: 720 },
    bounce: { amount: -25, duration: 0.5, delay: 0.2 },
    stage1: { x: 500, y: 500, duration: 0.4, delay: 0.4 },
  },
  {
    id: 'img3',
    src: '/img3.webp',
    zIndex: 2,
    position: { x: -100, y: -150, width: 720, height: 720 },
    bounce: { amount: -25, duration: 0.5, delay: 0.4 },
    stage1: { x: 500, y: 500, duration: 0.4, delay: 0.4 },
  },
  {
    id: 'img4',
    src: '/img4.webp',
    zIndex: 5,
    position: { x: 300, y: -350, width: 720, height: 720 },
    bounce: { amount: -25, duration: 0.5, delay: 0.6 },
    stage1: { x: 300, y: 500, duration: 0.5, delay: 0.3 },
  },
  {
    id: 'img5',
    src: '/img5.webp',
    zIndex: 4,
    position: { x: 200, y: -700, width: 700, height: 700 },
    bounce: { amount: -25, duration: 0.5, delay: 0.7 },
    stage1: { x: 400, y: 600, duration: 0.5, delay: 0.3 },
  },
  {
    id: 'img6',
    src: '/img6.webp',
    zIndex: 6,
    position: { x: 100, y: -500, width: 720, height: 720 },
    bounce: { amount: -10, duration: 0.6, delay: 0 },
    stage1: { x: 200, y: 800, duration: 0.5, delay: 0.3 },
  },
  {
    id: 'img7',
    src: '/img7.webp',
    zIndex: 8,
    position: { x: -100, y: -150, width: 720, height: 720 },
    bounce: { amount: -10, duration: 0.3, delay: 0 },
    stage1: { x: 200, y: 800, duration: 0.5, delay: 0.3 },
  },
  {
    id: 'img8',
    src: '/img8.webp',
    zIndex: 2,
    position: { x: -100, y: -600, width: 700, height: 700 },
    bounce: { amount: -10, duration: 0.3, delay: 0 },
    stage1: { x: 200, y: 1200, duration: 0.5, delay: 0.3 },
  },
  {
    id: 'img9',
    src: '/img9.webp',
    zIndex: 0,
    position: { x: -100, y: -800, width: 720, height: 720 },
    bounce: { amount: -15, duration: 0.4, delay: 0.1 },
    stage1: { x: 800, y: 800, duration: 0.5, delay: 0.1 },
  },
  {
    id: 'img10',
    src: '/img10.webp',
    zIndex: 1,
    position: { x: -300, y: -800, width: 720, height: 720 },
    bounce: { amount: -20, duration: 0.5, delay: 0.3 },
    stage1: { x: 800, y: 800, duration: 0.5, delay: 0.35 },
  },
  {
    id: 'img11',
    src: '/img11.webp',
    zIndex: 3,
    position: { x: -500, y: -800, width: 720, height: 720 },
    bounce: { amount: -18, duration: 0.45, delay: 0.5 },
    stage1: { x: 400, y: 1300, duration: 0.5, delay: 0.4 },
  },
  {
    id: 'img12',
    src: '/img12.webp',
    zIndex: 3,
    position: { x: -500, y: -400, width: 650, height: 650 },
    bounce: { amount: -22, duration: 0.55, delay: 0.2 },
    stage1: { x: 500, y: 800, duration: 0.5, delay: 0.4 },
  },
  {
    id: 'img13',
    zIndex: 2,
    src: '/img13.webp',
    position: { x: -600, y: -600, width: 720, height: 720 },
    bounce: { amount: -12, duration: 0.35, delay: 0.4 },
    stage1: { x: 800, y: 900, duration: 0.5, delay: 0.5 },
  },
  {
    id: 'img14',
    src: '/img14.webp',
    zIndex: 6,
    position: { x: -700, y: -200, width: 720, height: 720 },
    bounce: { amount: -25, duration: 0.5, delay: 0.6 },
    stage1: { x: 800, y: 1000, duration: 0.5, delay: 0.55 },
  },
  {
    id: 'img15',
    src: '/img15.webp',
    zIndex: 0,
    position: { x: -700, y: -300, width: 680, height: 680 },
    bounce: { amount: -16, duration: 0.42, delay: 0.1 },
    stage1: { x: 400, y: 1100, duration: 0.5, delay: 0.6 },
  },
  {
    id: 'img16',
    zIndex: 3,
    src: '/img16.webp',
    position: { x: -800, y: -200, width: 720, height: 720 },
    bounce: { amount: -20, duration: 0.48, delay: 0.3 },
    stage1: { x: 500, y: 1200, duration: 0.5, delay: 0.65 },
  },
  {
    id: 'img17',
    zIndex: 3,
    src: '/img5.webp',
    position: { x: -900, y: -200, width: 720, height: 720 },
    bounce: { amount: -20, duration: 0.48, delay: 0.1 },
    stage1: { x: 500, y: 1200, duration: 0.5, delay: 0.65 },
  },
  {
    id: 'img18',
    zIndex: 1,
    src: '/img8.webp',
    position: { x: -900, y: -500, width: 720, height: 720 },
    bounce: { amount: -20, duration: 0.48, delay: 0.4 },
    stage1: { x: 500, y: 1200, duration: 0.5, delay: 0.65 },
  },
  {
    id: 'img19',
    zIndex: 1,
    src: '/img2.webp',
    position: { x: -1000, y: -500, width: 720, height: 720 },
    bounce: { amount: -20, duration: 0.48, delay: 0.2 },
    stage1: { x: 500, y: 1200, duration: 0.5, delay: 0.65 },
  },
  {
    id: 'img20',
    zIndex: 0,
    src: '/img7.webp',
    position: { x: -1000, y: -100, width: 600, height: 600 },
    bounce: { amount: -20, duration: 0.48, delay: 0.2 },
    stage1: { x: 500, y: 1200, duration: 0.5, delay: 0.65 },
  },
  {
    id: 'img21',
    zIndex: 0,
    src: '/img4.webp',
    position: { x: -900, y: -900, width: 720, height: 720 },
    bounce: { amount: -20, duration: 0.48, delay: 0.4 },
    stage1: { x: 500, y: 1500, duration: 0.5, delay: 0.65 },
  },
]

export const human2Config = {
  id: 'human2',
  src: '/human-2.webp',
  zIndex: 3,
  position: { x: -270, y: -240, width: 600, height: 1150 },
  bounce: { amount: 25, duration: 0.5, delay: 0 },
  stage1: {
    rotation: -90,
    y: 450,
    scale: 0.5,
    duration: 0.8,
    delay: 0.5,
    x: 0
  },
}

export const bubblesConfig = {
  duration: 12,
  opacity: 0.5,
  animationHeight: 1800,
}

export const stageConfig = {
  scrollThreshold: 200,
  maxScroll: 1600,
  transitionDuration: 0.8,
  transitionEase: 'power2.out',
}
