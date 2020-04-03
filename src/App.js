import React, {useState, useEffect, useRef} from 'react'
import TextSection from './TextSection'
import InputSection from './InputSection'
import Ranking from './Ranking'
import TimeCounter from './TimeCounter'
import './App.css'
import DataDisplay from './DataDisplay'

function App() {

    const API_URL = "https://random-word-api.herokuapp.com/word?number=1000"

    const [input, setInput] = useState("")
    const [words, setWords] = useState([])
    const [wordIndex, setWordIndex] = useState(0)
    const [hits, setHits] = useState(0)
    const [wpm, setWpm] = useState(0)
    const [didStart, setDidStart] = useState(false)

    const [time, setTime] = useState(60)
    const timeInterval = useRef(null)

    useEffect(()=>{
        return () => {
            clearInterval(timeInterval.current)
            timeInterval.current = null
        }
    }, [])

    useEffect(()=> {
        fetch(API_URL)
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            setWords(json)
        })
    }, [])

    function handleTextChange(event) {
        let value = event.target.value
        if (!didStart) {
            setDidStart(true)
            timeInterval.current = setInterval(()=>{
                setTime((prevTime) => prevTime - 1)
            }, 1000)
        }
        if (words[wordIndex] === value) {
            setHits(prevHits => prevHits + 1)
            setWordIndex(prevIndex => prevIndex + 1)
            setInput("")
        } else {
            setInput(value)
        }
    }

    if (hits !== 0 && wpm !== parseInt((hits * 60) / (60-time))) {
        setWpm(() => {
            console.log (hits)
            if (hits === 0) {
                return 0
            }
            return parseInt((hits * 60) / (60-time))
        })
    }

    if (time <= 0) {
        clearInterval(timeInterval.current)
    }

    return (
        <div>
            <div class="display-wrappers">
                <TimeCounter time={time}/>
                <DataDisplay title="Hits" value={hits}/>
                <DataDisplay title="Wpm" value={wpm}/>
            </div>
            <TextSection words={words} wordIndex={wordIndex}/>
            <InputSection onTextChange={handleTextChange} inputValue={input}/>
            <Ranking/>
        </div>
    )
}

export default App