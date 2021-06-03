import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/header/index'

const HistoryPage = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = "История"
    }, [])

    return (
        <React.Fragment>
            <div className="">{HeaderComponent}</div>
            <div className="container">
                <h1>123</h1>
            </div>
        </React.Fragment>
    )
}

export default HistoryPage