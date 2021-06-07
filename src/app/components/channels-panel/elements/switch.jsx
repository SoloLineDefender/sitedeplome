import React, { useContext } from 'react'
import { ChannelsPanelContext } from '../index'

const ChannelsPanelSwitch = () => {
    return (
        <ChannelsPanelContext.Consumer>
            {context =>
                <div className="channels-panel-switch" 
                onClick={(e) => {
                    context.setToggleState(context.isToggle ? false : true)
                }}>

                </div>
            }
        </ChannelsPanelContext.Consumer>
    )
}

export default ChannelsPanelSwitch