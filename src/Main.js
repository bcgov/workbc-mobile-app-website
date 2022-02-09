import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import HomeFR from './Components/Fr/HomeFR'
import PrivacyAndLicenseAgreement from './Components/PrivacyAndLicenseAgreement/PrivacyAndLicenseAgreement'
import PrivacyAndLicenseAgreementFR from './Components/PrivacyAndLicenseAgreement/PrivacyAndLicenseAgreementFR'
import BCeIDLanding from './Components/BCeIDLanding/BCeIDLanding'

function Main(props) {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/PrivacyAndLicenseAgreement"
                        render={() => (<PrivacyAndLicenseAgreement {...props}/>)} />
                    <Route path="/PrivacyAndLicenseAgreementFR" 
                        render={() => (<PrivacyAndLicenseAgreementFR {...props}/>)} />
                    <Route path="/BCeIDLanding" component={BCeIDLanding} />
                    <Route path="/HomeFR" 
                        render={() => (<HomeFR {...props}/>)} />
                    <Route path="/" 
                        render={() => (<Home {...props}/>)} />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main