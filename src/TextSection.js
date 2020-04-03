import React, {useState ,useEffect} from 'react'
import WordContainer from './WordContainer'

function TextSection(props) {

    const [wordIndex, setWordIndex] = useState(0)

    return (
        <section className="text-section">
            <div className="container">
                <WordContainer words={props.words} currentWord={props.wordIndex}/>
            </div>
        </section>
    )
}

export default TextSection