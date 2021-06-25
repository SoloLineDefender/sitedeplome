import React from 'react'

const HeaderComponent = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="logo-container">
                    <a href="/" className="logo-img"></a>
                    <a href="/" className="breand">JUST TALK</a>
                </div>
                <div className="search-container">
                    <input type="text" spellcheck="false" className="search-box" />
                    <div className="search-img"></div>
                </div>
                <div className="profile-container">
                    <a href="/profile">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent