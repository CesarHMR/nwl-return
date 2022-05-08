import { Bug } from "phosphor-react"
import { CloseButton } from "./CloseButton"

import bugImage from '../assets/Bug.svg'
import ideaImage from '../assets/Idea.svg'
import otherImage from '../assets/Other.svg'

const feedbackType = {
    BUG: {
        title: 'Bug',
        image: bugImage,
        alt: 'worm'
    },
    IDEA: {
        title: 'Idea',
        image: ideaImage,
        alt: 'lamp on'
    },
    OTHER: {
        title: 'Other',
        image: otherImage,
        alt: 'thinking cloud'
    }
}

export function WidgetWindow(){
    function CloseWindow(){
        (document.getElementById("widget-window") as HTMLDivElement).className = `widget-window false`;
    }

    return (
        <div className="widget-window true" id="widget-window">
            <header>
                Deixe seu feedback
                <CloseButton/>
            </header>

            <div>
                {Object.entries(feedbackType).map(() => {
                    return <button className="feedback-button">a</button>
                })}
            </div>

            <footer>
                Feito pela com ♥ pela Rocketcity!
            </footer>
        </div>
    )
}