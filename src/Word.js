import React from 'react'

function Word(prop) {
    return (
        <p 
            className={`word ${prop.isFocus && "focus-word"} ${prop.isDone && "done-word"}`}
        >
            {prop.value}
        </p>
    )
}

export default Word