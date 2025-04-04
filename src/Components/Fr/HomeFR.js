import React, {useState} from 'react'
import Home from '../../Home';

function HomeFR(props) {
    props.setLanguage("fr")
    const [activeTab, setActiveTab] = useState(0)
    const handleClickActiveTab = (e) => {
        setActiveTab(e)
    }
   
    return (
        props.language === "en" ? <Home {...props} /> :
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>WorkBC App</h1>
                    <div>
                        <ul className="nav nav-tabs mb-2" role="tablist">
                            <li className="nav-item">
                                <a className={activeTab === 0? 'nav-link active show': 'nav-link'} id="home-tab" data-toggle="tab" href="#homeFR"onClick={()=>{handleClickActiveTab(0)}}>WorkBC App</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 1? 'nav-link active show': 'nav-link'} id="setup-tab" data-toggle="tab" href="#setupFR"onClick={()=>{handleClickActiveTab(1)}}>Installer</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 2? 'nav-link active show': 'nav-link'} id="download-tab" data-toggle="tab" href="#downloadFR"onClick={()=>{handleClickActiveTab(2)}}>Télécharger</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 3? 'nav-link active show': 'nav-link'} id="auth-tab" data-toggle="tab" href="#authFR"onClick={()=>{handleClickActiveTab(3)}}>Authentification</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 4? 'nav-link active show': 'nav-link'} id="delete-tab" data-toggle="tab" href="#deleteFR"onClick={()=>{handleClickActiveTab(4)}}>Suppression de compte</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className={activeTab === 0? 'tab-pane fade active show': 'tab-pane fade'} id="homeFR" role="tabpanel" aria-labelledby="home-tab">
                                    <p>La WorkBC app donne aux Britanno-Colombiens un moyen d’accéder aux services et aux mesures de soutien de WorkBC et d’en faire la demande. Vous pouvez communiquer en toute sécurité avec votre conseiller en emploi, visualiser les détails de votre dossier, consulter le tableau d’offres d’emploi de WorkBC, suivre et gérer les éléments de votre liste de choses à faire.</p>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteFr1.png"
                                            alt="Allons-y capture d'écran" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteFr2.png"
                                            alt="Que souhaitez-vous fair aujourd'hui capture d'écran" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4 text-center">
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
                            <div className={activeTab === 1? 'tab-pane fade active show': 'tab-pane fade'} id="setupFR">
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
                                                        <li><a href="#downloadFR" data-tab="2" onClick={()=>{handleClickActiveTab(2)}}>Téléchargez la WorkBC app</a></li>
                                                        <li>Ouvrez l’appli</li>
                                                        <li>Sélectionnez &#60;&#60; Allons-y &#62;&#62; pour vous servir directement de l’application, ou &#60;&#60; Voir ce que vous pouvez faire &#62;&#62; pour avoir une idée des services de WorkBC</li>
                                                        <li>Lisez et acceptez le contrat de licence d’utilisateur final de l’application: <a href="/PrivacyAndLicenseAgreementFR">le contrat de licence d’utilisateur final</a></li>
                                                        <li>Vous atterrirez sur l'écran, &#60;&#60; Que souhaitez-vous faire aujourd'hui? &#62;&#62;</li>
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
                                                <div className="col-md-3 text-center">
                                                    <img 
                                                        className="w-100"
                                                        src="/images/screens/WorkBCAppSiteFr2.png"
                                                        alt="Que souhaitez-vous fair aujourd'hui capture d'écran" />
                                                    <br/><br/>
                                                </div>
                                                <div className="col-md-9">
                                                    {/*<ol>
                                                        <li>J'ai un compte – Sélectionnez cette option si vous êtes déjà client des Services à l’emploi de WorkBC et avez actuellement ou avez déjà eu un compte auprès des Services à l’emploi en ligne.</li>
                                                        <li>Je n'ai pas de compte – Cette option est pour les nouveaux clients des Services de WorkBC qui doivent présenter une demande ou pour les clients de WorkBC qui ne sont pas encore inscrits auprès des Services à l’emploi en ligne. Notez que vous aurez besoin de votre BC Services Card ou d’un Basic BCeID aux fins d’authentification.</li>
                                                        <ul>
                                                            <li aria-labelledby="bullet"><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">Informations sur la BC Services Card</a></li>
                                                            <li aria-labelledby="bullet"><a href="https://www.bceid.ca">Informations sur le Basic BCeID</a></li>
                                                        </ul>
                                                        <li>Je souhaite continuer en tant qu'invité – Si vous souhaitez vous informer des fonctionnalités de l’application sans vous connecter ni créer de compte, choisissez cette option.</li>
                                                        <li>Je ne sais pas si j'ai un compte – Si vous n’êtes pas sûr d’avoir un compte auprès des Services en ligne de WorkBC, saisissez quelques renseignements pour le savoir.</li>
                                                    </ol>*/}
                                                    <div className="row">
                                                        <div className="col-md-3"><h4>J'ai un compte</h4></div>
                                                        <div className="col-md-6">Sélectionnez cette option si vous êtes déjà client des Services à l’emploi de WorkBC et avez actuellement ou avez déjà eu un compte auprès des Services à l’emploi en ligne.<br/></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3"><br/><h4>Je n'ai pas de compte</h4></div>
                                                        <div className="col-md-6"><br/>Cette option est pour les nouveaux clients des Services de WorkBC qui doivent présenter une demande ou pour les clients de WorkBC qui ne sont pas encore inscrits auprès des Services à l’emploi en ligne. Notez que vous aurez besoin de votre BC Services Card ou d’un Basic BCeID aux fins d’authentification.
                                                            <ul>
                                                            <li aria-labelledby="bullet"><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">Informations sur la BC Services Card</a></li>
                                                            <li aria-labelledby="bullet"><a href="https://www.bceid.ca">Informations sur le Basic BCeID</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3"><br/><h4>Je souhaite continuer en tant qu'invité</h4></div>
                                                        <div className="col-md-6"><br/>Si vous souhaitez vous informer des fonctionnalités de l’application sans vous connecter ni créer de compte, choisissez cette option.<br/></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3"><br/><h4>Je ne sais pas si j'ai un compte</h4></div>
                                                        <div className="col-md-6"><br/>Si vous n’êtes pas sûr d’avoir un compte auprès des Services en ligne de WorkBC, saisissez quelques renseignements pour le savoir.<br/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                 
                            </div>
                            <div className={activeTab === 2? 'tab-pane fade active show': 'tab-pane fade'} id="downloadFR">
                                <h2>Téléchargez la WorkBC App</h2>
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
                                                            <li>Les versions bêta ne sont pas prises en charge</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <ul>
                                                            <li>Les systèmes d'exploitation Android 6 et versions supérieures sont pris en charge</li>
                                                            <li>Les versions bêta ne sont pas prises en charge</li>
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
                            <div className={activeTab === 3? 'tab-pane fade active show': 'tab-pane fade'} id="authFR">
                                <h2>Authentification</h2>
                                <p>Pour accéder aux Services en ligne de WorkBC, vous devez confirmer votre identité par l’un des moyens suivants : la BC Services Card ou un Basic BCeID. </p><br/>
                                <h3 className="text-primary">BC Services Card</h3>
                                <p>Pour accéder aux services offerts grâce à l’application WorkBC, vous pouvez vous connecter ou vous inscrire au moyen de la BC Services Card app. Le service fourni au moyen de cette application va confirmer les renseignements personnels comme votre nom et votre date de naissance et les afficher sur les écrans d’inscription si vous vous inscrivez aux services en ligne avec l’application WorkBC. Vos renseignements sont protégés sous le régime de la Loi sur l’accès à l’information et la protection de la vie privée (LAIPVP). Pour en savoir plus, lisez le contrat de licence d’utilisateur final.</p>
                                <ul>
                                    <li><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">Site de BC Services Card app</a></li>
                                    <li><a href="/PrivacyAndLicenseAgreementFR">Consulter le contrat de licence d’utilisateur final</a></li>
                                </ul><br/>
                                <h3 className="text-primary">Basic BCeID</h3>
                                <p>Vous pouvez également utiliser un Basic BCeID pour accéder en toute sécurité aux Services en ligne de WorkBC. Si vous n’avez pas de Basic BCeID, vous pouvez en obtenir un en quelques minutes en indiquant quelques renseignements personnels comme votre nom, votre identifiant et un mot de passe. Vos renseignements sont protégés sous le régime de la Loi sur l’accès à l’information et la protection de la vie privée (LAIPVP). Pour en savoir plus, lisez le contrat de licence d’utilisateur final.</p>
                                <ul>
                                    <li><a href="https://www.bceid.ca/">Site de BCeID - Basic BCeID</a></li>
                                    <li><a href="/PrivacyAndLicenseAgreementFR">Consulter le contrat de licence d’utilisateur final</a></li>
                                </ul>
                            </div>
                            <div className={activeTab === 4? 'tab-pane fade active show': 'tab-pane fade'}  id="deleteFR">
                                <h2>Demandes de suppression de compte</h2>
                                <ul>
                                    <li>Lorsque vous êtes connecté à l'application WorkBC, cliquez sur le menu et choisissez Supprimer le compte:</li>
                                    <div className="col-md-6 text-center">
                                        <img 
                                        className="w-50"
                                        src="/images/screens/sidebar-menu-FR.png"
                                        alt="Sidebar menu screenshot" />
                                        <br/><br/>
                                    </div>
                                    <li>Vous serez dirigé vers la page « Supprimer votre compte »:</li>
                                    <div className="col-md-6 text-center">
                                        <img 
                                        className="w-50"
                                        src="/images/screens/account-delete-FR.png"
                                        alt="Account delete screenshot" />
                                        <br/><br/>
                                    </div>
                                    <li>Sélectionnez « Oui » sur la page « Supprimer votre compte » et confirmez la demande de suppression lorsque vous y êtes invité.</li>
                                </ul>

                                <h4>Les données que vous fournissez ne sont pas supprimées. Pour de plus amples informations sur la collecte et la conservation des données, veuillez vous référer à <a href="/PrivacyAndLicenseAgreement">l'accord de licence de l'utilisateur final</a></h4>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="mb-0">Si vous avez des questions, veuillez contacter <a href="mailto:WorkBC.support@gov.bc.ca">WorkBC.support@gov.bc.ca</a></p>
                </div>
            </div>
        </div>
    )
}

export default HomeFR;
