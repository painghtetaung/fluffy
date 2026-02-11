import { useState } from 'react'
import CanvasApp from './CanvasApp'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollIndicator from './components/ScrollIndicator'
import JapaneseText from './components/JapaneseText'

function App() {
  const [currentStage, setCurrentStage] = useState(0)

  return (
    <>
      <Header currentStage={currentStage} />
      <ScrollIndicator currentStage={currentStage} />
      <JapaneseText currentStage={currentStage} />
      <CanvasApp onStageChange={setCurrentStage} />
      <Footer />
    </>
  )
}

export default App
