import React from 'react'

// const initialState = {
//     counter: 0,
//     name: ''
// }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {
//                 counter: state.counter + 1,
//                 name: state.name + 's'
//             }

//         case 'decrement':
//             return {
//                 counter: state.counter - 1,
//                 name: ''
//             }
//         default:
//             return state
//     }
// }

const HeaderComponent = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <header className="header" id="header">
            <div className="Header-all-style">
                
            </div>
            {/* <div>
                <span>{state.counter}</span>
                <span>{state.name}</span>
            </div>
            <button onClick={() => dispatch({
                type: 'increment'
            })}>+</button>
            <button onClick={() => dispatch({
                type: 'decrement'
            })}>-</button> */}
        </header>
    )
}

export default HeaderComponent