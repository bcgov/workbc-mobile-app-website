import React from 'react'
//import screen1 from '../public/images/screens/WorkBCAppSiteScreensEn1.png'


function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>WorkBC App</h1>
                    <div>
                        <ul class="nav nav-tabs mb-2" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active show" id="home-tab" data-toggle="tab" href="#home">WorkBC App</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="setup-tab" data-toggle="tab" href="#setup">Set up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="download-tab" data-toggle="tab" href="#download">Download</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="auth-tab" href="#authentication">Authentication</a>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p>The <strong>WorkBC app</strong> provides B.C. residents with a way to apply for and access WorkBC services and supports. You can securely message your employment counsellor, view your case details, access the WorkBC job board, and track and action items on your to-do list.</p>
                                    <div class="row">
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
                                    <div class="row">
                                        <div className="col-md-6">
                                            <div class="row">
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
                                            <div class="row">
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
                            <div class="tab-pane fade" id="setup">
                                <h2>How to set up the app</h2>
                                <div class="row">
                                        <div className="col-md-6">
                                            <div class="row">
                                                <div className="col-2 col-md-6 col-xs-12">
                                                   <img 
                                                            className="img-thumbnail d-none d-md-block"
                                                            src="/images/screens/WorkBCLogo-en.svg"
                                                            //width="58% \9"
                                                            height="50% \9"
                                                            alt="WorkBC app logo" />
                                                </div>
                                                <div className="col-2 col-md-6 col-xs-12">
                                                    <ol>
                                                        <li>Download the WorkBC app</li>
                                                        <li>Open the app</li>
                                                        <li>Select <strong>Let's Get Started</strong> to start directly in the app, or <strong>See What You Can Do</strong> to take a short tour of WorkBC services</li>
                                                        <li>Review and accept the <a href="./Components/PrivacyAndLicenseAgreement">End User License Agreement for the app</a></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <h2>What do you want to do today</h2>
                                <div class="row">
                                        <div className="col-md-6">
                                            <div class="row">
                                                <div className="col-2 col-md-6 col-xs-12">
                                                   <img 
                                                            className="img-fluid d-none d-md-block"
                                                            src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                                            width="200px"
                                                            height="404px"
                                                            alt="What do you want to do today screenshot" />
                                                </div>
                                                <div className="col-2 col-md-6 col-xs-12">
                                                    <ol>
                                                        <li>I have an Account – Select this option if you are already a WorkBC Employment Services client and have and existing or previous account with Online Employment Services (OES).</li>
                                                        <li>I do not have an Account – This option is for those who are either new to WorkBC Services and need to apply, or for WorkBC clients who have not yet registered with OES. Note that you will need your BC Services Card or a Basic BCeID for authentication.</li>
                                                        <li>I want to continue as a Guest – If you want to see what app features are available without logging in or creating an account, choose this option.</li>
                                                        <li>I don’t know if I have an Account – If you are unsure if you have an account with WorkBC online services, enter a few pieces of information to do an account look up.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                 
                            </div>
                            <div class="tab-pane fade" id="dropdown1">
                                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                            </div>
                            <div class="tab-pane fade" id="dropdown2">
                                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <p className="mb-0">If you have questions, please contact <a href="mailto:WorkBCAppSupport@gov.bc.ca">WorkBCAppSupport@gov.bc.ca</a></p>
                </div>
                {/* 
                    <h1>Work Experience Opportunities Grant Program</h1>
                    <p>Welcome to the Work Experience Opportunities Grant Program application. Please click "start" below to get started. </p>
                    <p>For more information please click <a href="https://www.workbc.ca/Employment-Services/Work-Experience-Opportunities-Grant.aspx" target="_blank" rel="noopener noreferrer">here.</a></p>       
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2>Get Started</h2>
                    <p><a href="/form" className="btn btn-lg btn-primary">Start</a><br/></p>
                </div>
            </div>
            */}
            </div>
        </div>
    )
}

export default Home;