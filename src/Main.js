import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import HomeFR from './Components/Fr/HomeFR'
import PrivacyAndLicenseAgreement from './Components/PrivacyAndLicenseAgreement/PrivacyAndLicenseAgreement'
import PrivacyAndLicenseAgreementFR from './Components/PrivacyAndLicenseAgreement/PrivacyAndLicenseAgreementFR'
import BCeIDLanding from './Components/BCeIDLanding/BCeIDLanding'
import PrivacyTerms from './Components/PrivacyAndLicenseAgreement/PrivacyTerms'
import PrivacyTermsFR from './Components/PrivacyAndLicenseAgreement/PrivacyTermsFR'
//import AppleSiteAssociation from './apple-app-site-association.json'

function Main(props) {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route path="/PrivacyPolicy" render={() => (<PrivacyTerms {...props}/>)}/>
                    <Route path="/PrivacyPolicyFR" render={() => (<PrivacyTermsFR {...props}/>)}/>
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