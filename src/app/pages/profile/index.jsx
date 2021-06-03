import React, { useEffect, useState } from 'react'

const PofilePage = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = "Профиль"
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <h1>123</h1>
            </div>
        </React.Fragment>
    )
}

export default PofilePage