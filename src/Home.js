import React, {useState} from 'react'
import HomeFR from './Components/Fr/HomeFR';

function Home(props) {
    props.setLanguage("en")
    const [activeTab, setActiveTab] = useState(0)
    const handleClickActiveTab = (e) => {
        setActiveTab(e)
    }
   
    return (
        props.language === "fr" ? <HomeFR {...props} /> :
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>WorkBC App</h1>
                    <div>
                        <ul className="nav nav-tabs mb-2" role="tablist">
                            <li className="nav-item">
                                <a className={activeTab === 0? 'nav-link active show': 'nav-link'} data-tab="0" id="home-tab" data-toggle="tab" href="#home" onClick={()=>{handleClickActiveTab(0)}}>WorkBC App</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 1? 'nav-link active show': 'nav-link'} data-tab="1"  id="setup-tab" data-toggle="tab" href="#setup" onClick={()=>{handleClickActiveTab(1)}}>Set up</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 2? 'nav-link active show': 'nav-link'} data-tab="2" id="download-tab" data-toggle="tab" href="#download" onClick={()=>{handleClickActiveTab(2)}}>Download</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab === 3? 'nav-link active show': 'nav-link'} data-tab="3" id="auth-tab" data-toggle="tab" href="#auth" onClick={()=>{handleClickActiveTab(3)}}>Authentication</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className={activeTab === 0? 'tab-pane fade active show': 'tab-pane fade'} id="home" aria-labelledby="home-tab">
                                    <p>The <strong>WorkBC app</strong> provides British Columbians with a way to apply for and access WorkBC services and supports. You can securely message your employment counsellor, view your case details, access the WorkBC job board, and track and action items on your to-do list.</p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteScreensEn1.png"
                                            alt="Let's Get Started screenshot" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                            alt="What do you want to do today screenshot" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteScreensEn3.png"
                                            alt="Job Board/Job Search screenshot" />
                                            <br/><br/>
                                        </div>
                                    </div>
                                    <div>
                                        <br/>
                                        <p>The app is an extension of WorkBC’s Online Employment Services (OES) portal, and provides a quick, convenient, and secure method to access everything you need. Download the app today to your iOS or Android mobile device.</p>
                                        <br/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col">
                                                    <h4>For iOS (iPhone or iPad)</h4>
                                                </div>
                                                <div className="col">
                                                    <h4>For Android mobile devices</h4>
                                                </div>
                                            </div>
                                           <div className="row">
                                                <div className="col">
                                                   <a href="https://apps.apple.com/us/app/workbc/id1581502913">
                                                        <img 
                                                            src="/images/stores/App-Store-Badge-en.svg"
                                                            //width="58% \9"
                                                            height="40px"
                                                            alt="App Store WorkBC app download link" />
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                        <img 
                                                            src="/images/stores/google-play-badge-en.svg"
                                                            //width="63% \9"
                                                            height="41.99px"
                                                            alt="Google Play WorkBC app download link" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </div>
                            <div className={activeTab === 1? 'tab-pane fade active show': 'tab-pane fade'}  id="setup">
                                <h2>How to set up the app</h2>
                                <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-2">
                                                   <img 
                                                        className="img-thumbnail"
                                                        src="/images/screens/WorkBCLogo-en.svg"
                                                        alt="WorkBC app logo" />
                                                </div>
                                                <div className="col-md-10">
                                                    <ol>
                                                        <li><a href="#download" data-tab="2" onClick={()=>{handleClickActiveTab(2)}}>Download</a> the WorkBC app</li>
                                                        <li>Open the app</li>
                                                        <li>Select <strong>Let's Get Started</strong> to start directly in the app, or <strong>See What You Can Do</strong> to take a short tour of WorkBC services</li>
                                                        <li>Review and accept the <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a> for the app</li>
                                                        <li>You will land on the screen, <strong>What do you want to do today?</strong></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <br/><br/>
                                <h2>What do you want to do today?</h2>
                                <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-2">
                                                   <img 
                                                        className="w-75"
                                                        src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                                        alt="What do you want to do today screenshot" />
                                                    <br/><br/>
                                                </div>
                                                <div className="col-md-10">
                                                    <ol>
                                                        <li>I <strong>have</strong> an Account – Select this option if you are already a WorkBC Employment Services client and have and existing or previous account with Online Employment Services (OES).</li>
                                                        <li>I <strong>do not</strong> have an Account – This option is for those who are new to WorkBC services and need to apply, or for WorkBC clients who have not yet registered with OES. Note that you will need your <strong><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">BC Services Card</a></strong> or a <a href="https://www.bceid.ca">Basic BCeID</a> for authentication.</li>
                                                        <li>I want to continue as a <strong>Guest</strong> – If you want to see what app features are available without logging in or creating an account, choose this option.</li>
                                                        <li>I <strong>don’t know</strong> if I have an Account – If you are unsure if you have an account with WorkBC online services, enter a few pieces of information to find out.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                 
                            </div>
                            <div className={activeTab === 2? 'tab-pane fade active show': 'tab-pane fade'}  id="download">
                                <h2>WorkBC App</h2>
                                <p>The WorkBC app gets you where you need to go. Download the app to access WorkBC services and supports.</p>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img 
                                                className="img-thumbnail"
                                                src="/images/screens/WorkBCLogo-en.svg"
                                                alt="WorkBC app logo" />
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col">
                                                    <div>
                                                        <h4>For iOS (iPhone or iPad)</h4>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <h4>For Android mobile devices</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div>
                                                        <a href="https://apps.apple.com/us/app/workbc/id1581502913">
                                                            <img 
                                                            src="/images/stores/App-Store-Badge-en.svg"
                                                            //width="42% \9"
                                                            height="40px"
                                                            alt="App Store WorkBC app download link" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                            <img 
                                                            src="/images/stores/google-play-badge-en.svg"
                                                            //width="48% \9"
                                                            height="41.99px"
                                                            alt="Google Play WorkBC app download link" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col">
                                                    <div>
                                                        <ul>
                                                            <li>iOS 11 and above operating systems are supported</li>
                                                            <li>Beta versions are <u>not</u> supported</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <ul>
                                                            <li>Android 6 and above operating systems are supported</li>
                                                            <li>Beta versions are <u>not</u> supported</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Android is a trademark of Google LLC.</p>
                                    <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
                                    <p>iPhone and iPad are registered trademarks of Apple Inc., registered in the U.S. and other countries.</p>
                                    <p>Apple, the Apple logo, iPhone, and iPod touch are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries.</p>
                                    <p>iOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.</p>
                            </div>
                            <div className={activeTab === 3? 'tab-pane fade active show': 'tab-pane fade'}  id="auth">
                                <h2>Authentication</h2>
                                <p>In order to access WorkBC online services, you must confirm your identity through one of the following forms: <strong>BC Services Card</strong> or <strong className="text-muted">Basic BCeID</strong>. </p><br/>
                                <h3 className="text-primary">BC Services Card</h3>
                                <p>To access services provided through the WorkBC app, you can log in or register using the <a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">BC Services Card app</a>. The service provided through this app will confirm personal information such as your name and date of birth, and will populate this information on registration screens if you are registering for online services through the WorkBC app. Your information is protected under the Freedom of Information and Protection of Privacy Act (FOIPPA). To learn more, review the <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a>.</p><br/>
                                <h3 className="text-primary">Basic BCeID</h3>
                                <p>You can also use a <a href="https://www.bceid.ca/">Basic BCeID</a> to securely access WorkBC online services. If you don’t have a Basic BCeID, you can get set up in minutes by providing some personal information such as your name, user ID and a password. Your information is protected under the Freedom of Information and Protection of Privacy Act (FOIPPA). To learn more, review the <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a>.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="mb-0">If you have questions, please contact <a href="mailto:WorkBCAppSupport@gov.bc.ca">WorkBCAppSupport@gov.bc.ca</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home;