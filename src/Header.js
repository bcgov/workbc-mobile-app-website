import React from 'react'
import logo from './bcid-logo-rev-en.svg'
import logoSmall from './bcid-symbol-rev.svg'
//import workBCLogo from './workbc-header-logo.svg'

function Header (props) {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="https://www2.gov.bc.ca">
              <img 
                className="img-fluid d-none d-md-block"
                src={logo} 
                width="177"
                height="44"
                alt="B.C. Government Logo" />
              <img 
                className="img-fluid d-md-none" 
                src={logoSmall} 
                width="63" 
                height="44" 
                alt="B.C. Government Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                {props.language=== "en"&&<li className="nav-item"><a className="nav-link" href="/">Home</a></li>}
                {props.language=== "fr"&&<li className="nav-item"><a className="nav-link" href="/HomeFR">Accueil</a></li>}
                
                {props.language=== "en"&&<li className="nav-item"><a className="nav-link" href="/PrivacyAndLicenseAgreement">End User License Agreement</a></li>}
                {props.language=== "fr"&&<li className="nav-item"><a className="nav-link" href="/PrivacyAndLicenseAgreementFR">Accord de Licence d'Utilisateur Final</a></li>}
              </ul>
            </div>
            <ul className="navbar-nav justify-content-end">
                {props.language=== "en"&&<li className="nav-item"><button style={{color: 'white'}} className="btn btn-outline-primary" onClick={() => props.setLanguage("fr")}>Français</button></li>}
                {props.language=== "fr"&&<li className="nav-item"><button style={{color: 'white'}} className="btn btn-outline-primary" onClick={() => props.setLanguage("en")}>English</button></li>}
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header