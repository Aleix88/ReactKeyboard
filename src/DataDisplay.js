import React, {useState, useEffect} from 'react'

function DataDisplay(props) {
    return (
        <div className="display">
            <p>{`${props.title}: ${props.value}`}</p>
        </div>
    )
}

export default DataDisplay