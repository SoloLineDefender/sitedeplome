import React, { useEffect } from 'react'
import ChannelsPanelComponent from '../../components/channels-panel'

const MainPage = () => {

    useEffect(() => {
        document.title = 'Главная'
    })

    return (
        <React.Fragment>
            <div className="container--content">
                <ChannelsPanelComponent />
                <div className="content">
                    <div className="container-rec-chanel">
                        <div className="chanel-left"></div>
                        <div className="chanel-ahead"></div>
                        <div className="chanel-right"></div>
                    </div>
                    <div className="chanel-list">
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                        <div className="chanel-img"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage