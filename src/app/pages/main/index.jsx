import React, { useEffect } from 'react'


const MainPage = () => {

    useEffect(() => {
        document.title = 'Главная'
    })

    return (
        <React.Fragment>
            
            <div className="container">
                <h1>hi</h1>
            </div>
        </React.Fragment>
    )
}

export default MainPage