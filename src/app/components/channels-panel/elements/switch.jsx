import React, { useContext } from 'react'
import { ChannelsPanelContext } from '../index'

const ChannelsPanelSwitch = () => {
    return (
        <ChannelsPanelContext.Consumer>
            {context =>
                <div className="channels-panel-switch">
                    {context.isToggle && 
                        <div className="text-switch">Подписки</div>
                    }
                    <div className="button-switch"
                    onClick={(e) => { context.setToggleState(context.isToggle ? false : true)}}>
                    </div>
                </div>
            }
        </ChannelsPanelContext.Consumer>
    )
}

export default ChannelsPanelSwitch