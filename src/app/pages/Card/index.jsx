import React, { useEffect, useState } from 'react'

const Card = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = "Профиль"
    }, [])

    return (
        <React.Fragment>
            <div className="mainWindow2" id="MainWindow2">

            </div>  
        </React.Fragment>
    )
}

export default Card