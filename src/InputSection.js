import React from 'react'

function InputSection(props) {
    return (
        <section className="input-section">
            <div className="container">
                <h2>Writing area!</h2>
                <input className="type-area" type="text" value={props.inputValue} placeholder="Type fast!" onChange={props.onTextChange}/>
            </div>
        </section>
    )
}

export default InputSection