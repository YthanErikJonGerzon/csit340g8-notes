import Notes from './Components/Notes.jsx'
import Info from './Components/Info.jsx'
import { useState } from 'react'
import { SettingsContext } from './SettingsContext.js'
function App() {
  const [largeText, setLargeText] = useState(false)
  return (
     <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Juan Dela Cruz" />
      </div>
    </SettingsContext>
  )
}
 
export default App