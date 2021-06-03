import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainPage from './pages/main/index'
import ProfilePage from './pages/profile/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
const history = createBrowserHistory()

const App = () => {
    return (
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/profile' component={ProfilePage}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App