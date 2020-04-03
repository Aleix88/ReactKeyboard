import React from 'react'

function zeroPad(number, nZeros) {
    const zerosToAdd = nZeros - number.toString().length;
    let result = ""
    if (zerosToAdd < 1) {
        return number;
    }
    for (let i = 0; i < zerosToAdd; i++) {result += "0"}
    return result + number;
}

function TimeCounter(props) {

    let minutes = zeroPad(parseInt(props.time/60), 2)
    let seconds = zeroPad(props.time  - minutes * 60, 2)

    return (
        <div className="display">
            <p>Time: {minutes}:{seconds}</p>
        </div>
    )
}

export default TimeCounter