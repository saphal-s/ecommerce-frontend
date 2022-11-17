import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App'
import Abouts from './components/pages/Abouts'
import Contacts from './components/pages/Contacts'
import Details from './components/pages/Details'
import More from './components/pages/More'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/contact" component={Contacts}/>
                <Route exact path="/about" component={Abouts}/>
                <Route exact path="/more" component={More}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
