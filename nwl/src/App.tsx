import { WidgetButton } from "./components/WidgetButton"
import { WidgetWindow } from "./components/WidgetWindow"
import { useState } from "react"

export function App() {
  
  function ToggleWidgetState(){
    let window = (document.getElementById("widget-window") as HTMLDivElement)
    let state = window.className == 'widget-window true' ? 'false' : 'true'
    window.className = `widget-window ${state}`;
    console.log(state)
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