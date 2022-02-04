import React, { useEffect, useState } from 'react'
import TheGame from '../../components/game/game'

const Card = () => {
    

    useEffect(() => {
        document.title = "CARD"
    }, [])


    return (
        <>
            <div className="CardWindow" id="CardWindow">
                <div className="TopPart" id="TopPart"></div>
                <div className="GameWindow" id="GameWindow">
                    <TheGame/>
                </div>
                <div className="BottomPart" id="BottomPart"></div>
            </div>  
        </>
    )
}

export default Card