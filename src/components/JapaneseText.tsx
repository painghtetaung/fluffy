import { useEffect, useState } from 'react'

interface JapaneseTextProps {
  currentStage: number
}

const JapaneseText = ({ currentStage }: JapaneseTextProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (currentStage === 2) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [currentStage])

  const line1 = 'いつはほかいったいこの持屋ってののうちでさだろな'
  const line2 = 'もとより場合が満足屋は何しろその'
  const line3 = 'ないまでになるからおきなくっには承諾いですたて、'

  const renderWaveText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          animation: isVisible ? `wave 2s ease-in-out ${index * 0.05}s infinite` : 'none',
          color: '#203D99',
        }}
      >
        {char}
      </span>
    ))
  }

  return (
    <>
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
      <div
        className="fixed inset-0 flex flex-col left-[35rem] items-center justify-center pointer-events-none z-30 transition-opacity duration-800"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="text-center space-y-4">
          <div className="text-3xl font-medium tracking-wider">{renderWaveText(line1)}</div>
          <div className="text-3xl font-medium tracking-wider">{renderWaveText(line2)}</div>
          <div className="text-3xl font-medium tracking-wider mt-14">{renderWaveText(line3)}</div>
        </div>
      </div>
    </>
  )
}

export default JapaneseText
