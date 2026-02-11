interface ScrollIndicatorProps {
  currentStage: number
}

const ScrollIndicator = ({ currentStage }: ScrollIndicatorProps) => {
  const stages = [0, 1, 2]

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
      {stages.map((stage) => (
        <div
          key={stage}
          className="transition-all duration-300"
          style={{
            width: currentStage === stage ? '12px' : '8px',
            height: currentStage === stage ? '12px' : '8px',
            borderRadius: '50%',
            backgroundColor: currentStage === stage ? '#203D99' : '#d4c5b0',
            opacity: currentStage === stage ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default ScrollIndicator
