import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './pages/home/index'
import HistoryPage from './pages/history/index'
import Header from './components/header/index'

const history = createBrowserHistory()

const App = () => {
    return (
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/history' component={HistoryPage}/>
            </Switch>
        </Router>
    )
}

export default App