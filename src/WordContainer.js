import React from 'react'
import Word from './Word'

function WordContainer(props) {
    let currentWord = props.currentWord
    // let words = props.words.map((word, index) => {
    //     const isDone = index < currentWord
    //     const isFocus = index === currentWord
    //     return <Word isDone={isDone} isFocus={isFocus} key={word} value={word}/>
    // })
    let words = props.words.filter((word, index) => index >= currentWord)
    .map((word, index) => {
        return <Word isDone={false} isFocus={index == 0} key={word} value={word}/>
    })
    
    return (
        <div className="words-container">
            <div className="words-wrapper">
                {words}
            </div>
        </div>
    )
}

export default WordContainer