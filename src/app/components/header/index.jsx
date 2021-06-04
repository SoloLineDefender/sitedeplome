import React from 'react'

const HeaderComponent = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="logo-container">
                    <div className="logo-img"/>
                    <h1 className="breand"></h1>
                </div>
                <div className="search-container">
                    <img src='/logo/logo-breand.png' alt="" className="search-img" />
                    <input type="text" className="search-box" />
                </div>
                <div className="profile-container">
                    <a href="" className="profile"></a>
                </div>
            </div>
        </header>
    )
}

// background-image: url(../../../../public/logo/logo-breand.jpg);
// style={{backgroundImage: `url(${})`}}
export default HeaderComponent