import React, { useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import ChannelsPanelSwitch from './elements/switch'
import ChannelsPanelList from './elements/list'

export const ChannelsPanelContext = React.createContext(null)

const ChannelsPanelComponent = () => {
    const [isToggle, setToggleState] = useState(false)
    const classes = cn({
        'channels-panel': true,
        'toggle': isToggle
    })

    return (
        <ChannelsPanelContext.Provider value={{isToggle, setToggleState}}>
            <div className={classes}>
                <ChannelsPanelSwitch />
                <ChannelsPanelList />
            </div>
        </ChannelsPanelContext.Provider>
    )
}

export default ChannelsPanelComponent