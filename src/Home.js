import React from 'react'

function Home() {
    return (
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
                                <a className="nav-link" id="setup-tab" data-toggle="tab" href="#setup">Set up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="download-tab" data-toggle="tab" href="#download">Download</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="auth-tab" data-toggle="tab" href="#auth">Authentication</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p>The <strong>WorkBC app</strong> provides B.C. residents with a way to apply for and access WorkBC services and supports. You can securely message your employment counsellor, view your case details, access the WorkBC job board, and track and action items on your to-do list.</p>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img 
                                            className="img-fluid d-none d-md-block"
                                            src="/images/screens/WorkBCAppSiteScreensEn1.png"
                                            width="200px"
                                            height="404px"
                                            alt="Let's Get Started screenshot" />
                                        </div>
                                        <div className="col-md-3">
                                            <img 
                                            className="img-fluid d-none d-md-block"
                                            src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                            width="200px"
                                            height="404px"
                                            alt="What do you want to do today screenshot" />
                                        </div>
                                        <div className="col-md-3">
                                            <img 
                                            className="img-fluid d-none d-md-block"
                                            src="/images/screens/WorkBCAppSiteScreensEn3.png"
                                            width="200px"
                                            height="404px"
                                            alt="Job Board screenshot" />
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
                                                <div className="col-2 col-md-6 col-xs-12">
                                                    <div>
                                                        <h4>For iOS (iPhone or iPad)</h4>
                                                    </div>
                                                </div>
                                                <div className="col-2 col-md-6 col-xs-12">
                                                    <div>
                                                        <h4>For Android mobile devices</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2 col-md-6 col-xs-12">
                                                    <div>
                                                        <a href="https://apps.apple.com/us/app/workbc/id1581502913">
                                                            <img 
                                                            className="img-fluid d-none d-md-block"
                                                            src="/images/stores/App-Store-Badge-en.svg"
                                                            width="58% \9"
                                                            height="40px"
                                                            alt="App Store WorkBC app download link" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-2 col-md-6 col-xs-12">
                                                    <div>
                                                        <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                            <img 
                                                            className="img-fluid d-none d-md-block"
                                                            src="/images/stores/google-play-badge-en.svg"
                                                            width="63% \9"
                                                            height="41.99px"
                                                            alt="Google Play WorkBC app download link" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </div>
                            <div className="tab-pane fade" id="setup">
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
                                                        <li><a href="#download">Download</a> the WorkBC app</li>
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
                                                            className="img-fluid d-none d-md-block"
                                                            src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                                            width="200px"
                                                            height="404px"
                                                            alt="What do you want to do today screenshot" />
                                                </div>
                                                <div className="col-md-10">
                                                    <ol>
                                                        <li>I <strong>have</strong> an Account – Select this option if you are already a WorkBC Employment Services client and have and existing or previous account with Online Employment Services (OES).</li>
                                                        <li>I <strong>do not</strong> have an Account – This option is for those who are either new to WorkBC Services and need to apply, or for WorkBC clients who have not yet registered with OES. Note that you will need your <strong><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">BC Services Card</a></strong> or a <a href="https://www.bceid.ca">Basic BCeID</a> for authentication.</li>
                                                        <li>I want to continue as a <strong>Guest</strong> – If you want to see what app features are available without logging in or creating an account, choose this option.</li>
                                                        <li>I <strong>don’t know</strong> if I have an Account – If you are unsure if you have an account with WorkBC online services, enter a few pieces of information to do an account look up.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                 
                            </div>
                            <div className="tab-pane fade" id="download">
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
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div>
                                                        <h4>For iOS (iPhone or iPad)</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div>
                                                        <h4>For Android mobile devices</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div>
                                                        <a href="https://apps.apple.com/us/app/workbc/id1581502913">
                                                            <img 
                                                            className="img-fluid d-none d-md-block"
                                                            src="/images/stores/App-Store-Badge-en.svg"
                                                            width="42% \9"
                                                            alt="App Store WorkBC app download link" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div>
                                                        <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                            <img 
                                                            className="img-fluid d-none d-md-block"
                                                            src="/images/stores/google-play-badge-en.svg"
                                                            width="48% \9"
                                                            alt="Google Play WorkBC app download link" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div>
                                                        <p>The following operating systems are supported:</p>
                                                        <ul>
                                                            <li>iOS 11 and above</li>
                                                            <li>Beta versions are not supported</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div>
                                                        <p>The following operating systems are supported:</p>
                                                        <ul>
                                                            <li>Android 6 and above</li>
                                                            <li>Beta versions are not supported</li>
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
                            <div className="tab-pane fade" id="auth">
                                <h2>Authentication</h2>
                                <p>In order to access WorkBC online services, you must prove your identity through one of the following forms: <strong>BC Services Card</strong> or <strong className="text-muted">Basic BCeID</strong>. </p><br/>
                                <h3 className="text-primary">BC Services Card</h3>
                                <p>To access services provided through the WorkBC app, you can login or register using the <a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">BC Services Card app</a>. The service provided through this app will confirm personal information such as your name and date of birth, and will pre-populate this information on registration screens if you are registering for online services through the WorkBC app. This information is protected under the Freedom of Information and Protection of Privacy Act (FOIPPA). To learn more, review the <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a>.</p><br/>
                                <h3 className="text-primary">Basic BCeID</h3>
                                <p>You can also use a <a href="https://www.bceid.ca/">Basic BCeID</a> to securely access WorkBC online services. If you don’t have a Basic BCeID, you can get set up in minutes by providing some personal information such as name, user ID and a password. This information is protected under the Freedom of Information and Protection of Privacy Act (FOIPPA). To learn more, review the <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a>.</p>
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