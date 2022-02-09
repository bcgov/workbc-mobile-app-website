import React from 'react'
import Home from '../../Home';

function HomeFR(props) {
    props.setLanguage("fr")
    return (
        props.language === "en" ? <Home {...props} /> :
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>WorkBC App</h1>
                    <div>
                        <ul className="nav nav-tabs mb-2" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active show" id="home-tab" data-toggle="tab" href="#home">WorkBC App</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="setup-tab" data-toggle="tab" href="#setup">Installer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="download-tab" data-toggle="tab" href="#download">Télécharger</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="auth-tab" data-toggle="tab" href="#auth">Authentification</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p>La <strong>WorkBC app</strong> donne aux Britanno-Colombiens un moyen d’accéder aux services et aux mesures de soutien de WorkBC et d’en faire la demande. Vous pouvez communiquer en toute sécurité avec votre conseiller en emploi, visualiser les détails de votre dossier, consulter le tableau d’offres d’emploi de WorkBC, suivre et gérer les éléments de votre liste de choses à faire.</p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteFr1.png"
                                            alt="Allons-y capture d'écran" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteFr2.png"
                                            alt="Que souhaitez-vous fair aujourd'hui capture d'écran" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteFr3.png"
                                            alt="Offres d'emploi capture d'écran" />
                                            <br/><br/>
                                        </div>
                                    </div>
                                    <div>
                                        <br/>
                                        <p>L’appli est le prolongement du portail des Services à l’emploi en ligne de WorkBC. C’est un moyen rapide, pratique et sûr d’accéder à tout ce dont vous avez besoin. Téléchargez cette application dès maintenant sur votre appareil mobile iOS ou Android.</p>
                                        <br/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col">
                                                    <h4>Pour iOS (iPhone ou iPad)</h4>
                                                </div>
                                                <div className="col">
                                                    <h4>Pour les appareils mobiles Android</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <a href="https://apps.apple.com/us/app/workbc/id1581502913">
                                                            <img 
                                                            src="/images/stores/App-Store-Badge-fr.svg"
                                                            //width="58% \9"
                                                            height="40px"
                                                            alt="Lien de téléchargement de la WorkBC app - L'App Store" />
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                            <img 
                                                            src="/images/stores/google-play-badge-fr.svg"
                                                            //width="63% \9"
                                                            height="41.99px"
                                                            alt="Lien de téléchargement de la WorkBC app - Google Play" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </div>
                            <div className="tab-pane fade" id="setup">
                                <h2>Comment installer l’application</h2>
                                <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-2">
                                                   <img 
                                                            className="img-thumbnail"
                                                            src="/images/screens/WorkBCLogo-fr.svg"
                                                            alt="Logo de la WorkBC app" />
                                                </div>
                                                <div className="col-md-10">
                                                    <ol>
                                                        {/* <li><a href="#download">Téléchargez</a> la WorkBC app</li> */}
                                                        <li>Téléchargez la WorkBC app</li>
                                                        <li>Ouvrez l’appli</li>
                                                        <li>Sélectionnez <strong>Allons-y</strong> pour vous servir directement de l’application, ou <strong>Voir ce que vous pouvez faire</strong> pour avoir une idée des services de WorkBC</li>
                                                        <li>Lisez et acceptez le <a href="/PrivacyAndLicenseAgreementFR">contrat de licence d’utilisateur final</a> de l’application</li>
                                                        <li>Vous atterrirez sur l'écran, <strong>Que souhaitez-vous faire aujourd'hui?</strong></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <br/><br/>
                                <h2>Que souhaitez-vous faire aujourd'hui?</h2>
                                <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img 
                                                        className="w-75"
                                                        src="/images/screens/WorkBCAppSiteFr2.png"
                                                        alt="Que souhaitez-vous fair aujourd'hui capture d'écran" />
                                                    <br/><br/>
                                                </div>
                                                <div className="col-md-10">
                                                    <ol>
                                                        <li>J'<strong>ai</strong> un compte – Sélectionnez cette option si vous êtes déjà client des Services à l’emploi de WorkBC et avez actuellement ou avez déjà eu un compte auprès des Services à l’emploi en ligne.</li>
                                                        <li>Je <strong>n'ai pas</strong> de compte – Cette option est pour les nouveaux clients des Services de WorkBC qui doivent présenter une demande ou pour les clients de WorkBC qui ne sont pas encore inscrits auprès des Services à l’emploi en ligne. Notez que vous aurez besoin de votre <strong><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">BC Services Card</a></strong> ou d’un <a href="https://www.bceid.ca">Basic BCeID</a> aux fins d’authentification.</li>
                                                        <li>Je souhaite continuer en tant qu'<strong>invité</strong> – Si vous souhaitez vous informer des fonctionnalités de l’application sans vous connecter ni créer de compte, choisissez cette option.</li>
                                                        <li>Je <strong>ne sais pas</strong> si j'ai un compte – Si vous n’êtes pas sûr d’avoir un compte auprès des Services en ligne de WorkBC, saisissez quelques renseignements pour le savoir.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                 
                            </div>
                            <div className="tab-pane fade" id="download">
                                <h2>WorkBC App</h2>
                                <p>La WorkBC app vous mène là où vous devez aller. Téléchargez-la pour accéder aux services et aux mesures de soutien de WorkBC.</p>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img 
                                                className="img-thumbnail"
                                                src="/images/screens/WorkBCLogo-fr.svg"
                                                alt="Logo de la WorkBC app" />
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col">
                                                    <h4>Pour iOS (iPhone ou iPad)</h4>
                                                </div>
                                                <div className="col">
                                                    <h4>Pour les appareils mobiles Android</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <a href="https://apps.apple.com/us/app/workbc/id1581502913">
                                                            <img 
                                                            src="/images/stores/App-Store-Badge-fr.svg"
                                                            //width="42% \9"
                                                            height="40px"
                                                            alt="Lien de téléchargement de la WorkBC app - L'App Store" />
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                            <img 
                                                            src="/images/stores/google-play-badge-fr.svg"
                                                            //width="48% \9"
                                                            height="41.99px"
                                                            alt="Lien de téléchargement de la WorkBC app - Google Play" />
                                                    </a>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col">
                                                    <div>
                                                        <ul>
                                                            <li>Les systèmes d'exploitation iOS 11 et versions supérieurs sont pris en charge</li>
                                                            <li>Les versions bêta <u>ne sont pas</u> prises en charge</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <ul>
                                                            <li>Les systèmes d'exploitation Android 6 et versions supérieures sont pris en charge</li>
                                                            <li>Les versions bêta <u>ne sont pas</u> prises en charge</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Android est une marque de commerce de Google LLC.</p>
                                    <p>Google Play et le logo de Google Play sont des marques de commerce de Google LLC.</p>
                                    <p>iPhone et iPad sont des marques déposées d’Apple Inc. aux États-Unis et dans d’autres pays.</p>
                                    <p>Apple, le logo d’Apple, iPhone et iPod touch sont des marques déposées d’Apple Inc. aux États-Unis et dans d’autres pays. App Store est une marque de service d’Apple Inc. déposée aux États-Unis et dans d’autres pays.</p>
                                    <p>iOS est une marque de commerce ou une marque déposée de Cisco aux États-Unis et dans d’autres pays et est utilisée sous licence.</p>
                            </div>
                            <div className="tab-pane fade" id="auth">
                                <h2>Authentification</h2>
                                <p>Pour accéder aux Services en ligne de WorkBC, vous devez confirmer votre identité par l’un des moyens suivants : la <strong>BC Services Card</strong> ou un <strong className="text-muted">Basic BCeID</strong>. </p><br/>
                                <h3 className="text-primary">BC Services Card</h3>
                                <p>Pour accéder aux services offerts grâce à l’application WorkBC, vous pouvez vous connecter ou vous inscrire au moyen de la <a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">BC Services Card app</a>. Le service fourni au moyen de cette application va confirmer les renseignements personnels comme votre nom et votre date de naissance et les afficher sur les écrans d’inscription si vous vous inscrivez aux services en ligne avec l’application WorkBC. Vos renseignements sont protégés sous le régime de la Loi sur l’accès à l’information et la protection de la vie privée (LAIPVP). Pour en savoir plus, lisez le  <a href="/PrivacyAndLicenseAgreementFR">contrat de licence d’utilisateur final</a>.</p><br/>
                                <h3 className="text-primary">Basic BCeID</h3>
                                <p>Vous pouvez également utiliser un <a href="https://www.bceid.ca/">Basic BCeID</a> pour accéder en toute sécurité aux Services en ligne de WorkBC. Si vous n’avez pas de Basic BCeID, vous pouvez en obtenir un en quelques minutes en indiquant quelques renseignements personnels comme votre nom, votre identifiant et un mot de passe. Vos renseignements sont protégés sous le régime de la Loi sur l’accès à l’information et la protection de la vie privée (LAIPVP). Pour en savoir plus, lisez le  <a href="/PrivacyAndLicenseAgreementFR">contrat de licence d’utilisateur final</a>.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="mb-0">Si vous avez des questions, veuillez contacter <a href="mailto:WorkBCAppSupport@gov.bc.ca">WorkBCAppSupport@gov.bc.ca</a></p>
                </div>
            </div>
        </div>
    )
}

export default HomeFR;