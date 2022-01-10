import React, { useEffect } from 'react'

const MainPage = () => {

    useEffect(() => {
        document.title = 'Главная'
        
    })
    
    var main = document.getElementById("renderer")
    var hi = window.innerHeight
    var wi = window.innerWidth
    var a = {hi,wi}

    

    function test (){
        return (
            console.log(a.wi,a.hi)
        )
        
    };

    function test2(){
        {setInterval(() => {
            test()
        }, 3000)}
    }


    
    function test3(){
        setInterval(() => {
            return(console.log(inputText.value))            
        }, 3000);

    }
    
    return (
        <React.Fragment>
            
            <div className="mainWindow" id="MainWindow" name="mainWindow">
                <input type="text" id="WriteText" className="text" name="text" value="1234" />
                ssss
            </div>
            
            {test2()}
            {test3()}
        </React.Fragment>
    )


}

export default MainPage