import React, { useEffect } from 'react'

const MainPage = () => {

    useEffect(() => {
        document.title = 'Главная'
        
    })
    var hi = window.innerHeight
    var wi = window.innerWidth
    var a = {hi,wi}

    

    function test (){
        let a = document.getElementById("WriteText")
        let b = document.getElementById("textSomeOne")
        let v = document.createTextNode("")
        function Changetext (){
            b.innerText = a.value
        }
        return (
            Changetext()
        )
        
    }

    function test2(){
        {setInterval(() => {
            test()
        }, 3000)}
    }
    class start {
        
    } 

    
    function test3(){
        let k = document.getElementById("textSomeOne")
        function Consoletest () {
                console.log(k)            
        }
        return(
            Consoletest()
            )            
        // if (onchange = true) {
        //     let textInput = document.getElementById("WriteText")
        //     let porag = document.getElementById("textSome")
        //     porag.innerText = textInput.value
        //     }
            
    }

    class CreateBlock {
    }
    
    function test4 (){
        let somenumber = 1
        let ViewBox = document.getElementById("ViewBox")
        let BlockCreate = document.createElement("div")
        let TextFromInputBox = document.getElementById("WriteText")
        BlockCreate.id = "BlockView"
        BlockCreate.className = "BlockView"
        BlockCreate.innerText = TextFromInputBox.value
        ViewBox.append(BlockCreate)
        
    }

    function test5 (){
        if (value === BlockViewValue){
            
        }
    }
    


    function CheckName (){
        let ViewArrow = document.getElementById("ViewBox")
        
        console.log(ViewArrow.childNodes[0])
    }
    
    return (
        <React.Fragment>
            <div className="mainWindow" id="MainWindow" name="mainWindow">
                <div className="inputBox">
                <input type="text" id="WriteText" className="text" name="text" onChange={test}/>
                <button className="enter" id="enter" onClick={test4}>Создать элемент с таким названием</button>
                <button className="enter" id="enter" onClick={test5}>Удалить элемент с таким названием</button>
                <button className="enter" id="enter" onClick={CheckName}>test console</button>
                </div>
                <p className="textSome" id="textSomeOne" name="123" ></p>
                <div className="viewBox" id="ViewBox" name="ViewBox"></div>
            </div>
            {/* {test2()} */}
        </React.Fragment>
    )


}

export default MainPage