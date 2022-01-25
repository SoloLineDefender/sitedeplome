import React, { useEffect } from 'react'

const MainPage = () => {

    useEffect(() => {
        document.title = 'Главная'
        
    })
    var hi = window.innerHeight
    var wi = window.innerWidth
    var a = {hi,wi}

    

    const test = () => {
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

    const test2 = () => {
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
        let ViewArrow = document.getElementById("ViewBox")
        let WritenText = document.getElementById("WriteText")
        let k = 0
        let f = ViewArrow.childNodes.length
        for (;k<ViewArrow.childNodes.length;k++) {
            f--
            let ThisElement = ViewArrow.children[k]
            if(WritenText.value == ThisElement.innerText){
                ThisElement.remove()
            }
            else if (f<=0) {
                TextSomeOne.innerHTML = "Такого Элемента нет"
            }
         }
    }
    


    function test6 (){
        let d = document.getElementById("SVG")
        console.dir(d)
        let s = document.getElementById("WriteText")
        let f = d.firstElementChild
        console.dir(f.attributes[0])
        f.attributes[0].value = s.value
        f.attributes[3].value = s.value
        //Попытаться провести кводрат линиями
    }

    const myref = React.createRef()
    const test7 = () => {
        let a = document.getElementById("WriteText2")
        myref.a.value = 1234
    }

    const test8 = () => {

    }
    
    return (
        <>
            <div className="mainWindow" id="MainWindow" name="mainWindow">
                <div className="inputBox">
                    <input type="text" id="WriteText2" className="text2" name="text2" ref={myref}/>
                    <input type="text" id="WriteText" className="text" name="text" onChange={test}/>
                    <button className="enter" id="enter" onClick={test4}>Создать элемент с таким названием</button>
                    <button className="enter" id="enter" onClick={test5}>Удалить элемент с таким названием</button>
                    <button className="enter" id="enter" onClick={test4}>Поменять цвет квадрата</button>
                    <button className="enter" id="enter" onClick={test7}>test console</button>
                </div>
                <svg className="svg" id="SVG" height="200px" width="200px">
                    <path stroke="red" strokeWidth="3" d="M20,20 L20,100 100,100 100,20 z" fill="blue"/>
                </svg>
                <div className="textSome" id="textSomeOne" name="123" >
                    
                </div>
                <div className="viewBox" id="ViewBox" name="ViewBox"></div>
            </div>
            {/* {test2()} */}
        </>
    )


}

export default MainPage