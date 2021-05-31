import React, { useEffect } from 'react'


const HomePage = () => {

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

export default HomePage