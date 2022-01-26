import React, { useEffect, useState } from 'react'

const Card = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = "CARD"
    }, [])

    return (
        <>
            <div className="CardWindow" id="CardWindow">
            
            </div>  
        </>
    )
}

export default Card