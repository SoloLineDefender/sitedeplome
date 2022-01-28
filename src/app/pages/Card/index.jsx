import React, { useEffect, useState } from 'react'

const Card = () => {
    

    useEffect(() => {
        document.title = "CARD"
    }, [])


    return (
        <>
            <div className="CardWindow" id="CardWindow">
                <div className="TopPart" id="TopPart"></div>
                <div className="GameWindow" id="GameWindow">
                    
                </div>
                <div className="BottomPart" id="BottomPart"></div>
            </div>  
        </>
    )
}

export default Card