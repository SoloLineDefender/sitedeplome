import React, { useEffect } from 'react'

const MainPage = () => {

    useEffect(() => {
        document.title = 'Главная'
        
    })

    function test (){
        console.log("document.width")
    };

    return (
        <React.Fragment>
            <div className="mainWindow">{test()}</div>
        </React.Fragment>
    )
}

export default MainPage