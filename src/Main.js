import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import PrivacyPolicy from './Components/PrivacyAndTermsOfUse/PrivacyAndTermsOfUse'
import BCeIDLanding from './Components/BCeIDLanding/BCeIDLanding'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/PrivacyAndTermsOfUse" component={PrivacyPolicy} />
                    <Route path="/BCeIDLanding" component={BCeIDLanding} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main