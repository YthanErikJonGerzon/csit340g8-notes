import Notes from './Components/Notes.jsx'
import Info from './Components/Info.jsx'
import { useState, useEffect } from "react";
import { SettingsContext } from './SettingsContext.js'
function App() {
  const [largeText, setLargeText] = useState(() => {
  const saved = localStorage.getItem("largeText");
  return saved === "true";
});

useEffect(() => {
  localStorage.setItem("largeText", largeText);
}, [largeText]);
  return (
  <SettingsContext.Provider value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Juan Dela Cruz" />
      </div>
    </SettingsContext.Provider>
  )
}
 
export default App