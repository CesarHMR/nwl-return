import { WidgetButton } from "./components/WidgetButton"
import { WidgetWindow } from "./components/WidgetWindow"
import { useState } from "react"

export function App() {
  const [isWidgetOpen, setWidgetState] = useState(true)

  function ToggleWidgetState(){
    (document.getElementById("widget-window") as HTMLDivElement).className = `widget-window ${!isWidgetOpen}`;
    setWidgetState(!isWidgetOpen);
  }


  return (
    
    <div className="widget">
      
      <WidgetWindow />

      <button className="widget-button" onClick={ToggleWidgetState}>

        <WidgetButton />
        <span>Feedback</span>

      </button>

    </div>
  )
}