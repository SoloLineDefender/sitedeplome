import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainPage from './pages/main/index'
import Card from './pages/Card/index'
import Welocom from './pages/Welcom path/index'
const history = createBrowserHistory()

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Welocom}/>
                <Route exact path='/Test'component={MainPage}/>
                <Route exect path='/Card' component={Card}/>
            </Switch>
        </Router>
    )
}

export default App