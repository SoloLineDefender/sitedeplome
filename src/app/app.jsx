import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainPage from './pages/main/index'
const history = createBrowserHistory()

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={MainPage}/>
            </Switch>
        </Router>
    )
}

export default App