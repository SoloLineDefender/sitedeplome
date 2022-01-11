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
        let a = document.getElementById("WriteText")
        let b = document.getElementById("")
        return (
            console.log(a.value)
        )
        
    };

    function test2(){
        {setInterval(() => {
            test()
        }, 3000)}
    }


    
    function test3(){
        var a = document.getElementById("textSomeOne")
        setInterval(() => {
            return(console.log(a))            
        }, 3000);
        // if (onchange = true) {
        //     let textInput = document.getElementById("WriteText")
        //     let porag = document.getElementById("textSome")
        //     porag.innerText = textInput.value
        //     }
            
    }
    
    return (
        <React.Fragment>
            
            <div className="mainWindow" id="MainWindow" name="mainWindow">
                <input type="text" id="WriteText" className="text" name="text" onChange={test}/>
                <p className="textSome" id="textSomeOne">111</p>
            </div>
            
            {/* {test2()}
            {test3()} */}
        </React.Fragment>
    )


}

export default MainPage