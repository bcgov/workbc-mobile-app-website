import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import PrivacyAndLicenseAgreement from './Components/PrivacyAndLicenseAgreement/PrivacyAndLicenseAgreement'
import PrivacyAndLicenseAgreementFR from './Components/PrivacyAndLicenseAgreement/PrivacyAndLicenseAgreementFR'
import BCeIDLanding from './Components/BCeIDLanding/BCeIDLanding'

function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/PrivacyAndLicenseAgreement" component={PrivacyAndLicenseAgreement} />
                    <Route path="/PrivacyAndLicenseAgreementFR" component={PrivacyAndLicenseAgreementFR} />
                    <Route path="/BCeIDLanding" component={BCeIDLanding} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main