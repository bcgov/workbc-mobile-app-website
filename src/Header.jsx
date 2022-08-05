import React from "react"
import Logo from "./bcid-logo-rev-en.svg"
import LogoSmall from "./bcid-symbol-rev.svg"
// import workBCLogo from './workbc-header-logo.svg'

function Header(props) {
    const { language, setLanguage } = props

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="https://www2.gov.bc.ca">
                        <img className="img-fluid d-none d-md-block" src={Logo} width="177" height="44" alt="B.C. Government Logo" />
                        <img className="img-fluid d-md-none" src={LogoSmall} width="63" height="44" alt="B.C. Government Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            {language === "en" && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                            )}
                            {language === "fr" && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/HomeFR">
                                        Accueil
                                    </a>
                                </li>
                            )}

                            {language === "en" && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/PrivacyAndLicenseAgreement">
                                        End User License Agreement
                                    </a>
                                </li>
                            )}
                            {language === "fr" && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/PrivacyAndLicenseAgreementFR">
                                        Accord de Licence {`d'Utilisateur`} Final
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <ul className="navbar-nav justify-content-end">
                        {language === "en" && (
                            <li className="nav-item">
                                <button
                                    type="button"
                                    style={{ color: "white" }}
                                    className="btn btn-outline-primary"
                                    onClick={() => setLanguage("fr")}
                                >
                                    Français
                                </button>
                            </li>
                        )}
                        {language === "fr" && (
                            <li className="nav-item">
                                <button
                                    type="button"
                                    style={{ color: "white" }}
                                    className="btn btn-outline-primary"
                                    onClick={() => setLanguage("en")}
                                >
                                    English
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
