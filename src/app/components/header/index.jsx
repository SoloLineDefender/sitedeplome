import React from 'react'

const HeaderComponent = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="logo-container">
                    <a href="/" className="logo-img"></a>
                    {/* <div className="logo-img"/> */}
                    <a href="/" className="breand">JUST TALK</a>
                </div>
                <div className="search-container">
                    <input type="text" className="search-box" />
                    <div className="search-img"></div>
                </div>
                <div className="profile-container">
                    <a href="/profile" className="profile-img"></a>
                </div>
            </div>
        </header>
    )
}

// background-image: url(../../../../public/logo/logo-breand.jpg);
// style={{backgroundImage: `url(${})`}}
export default HeaderComponent