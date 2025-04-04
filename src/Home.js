import React, {useState} from 'react'
import { useParams, useLocation } from 'react-router';
import HomeFR from './Components/Fr/HomeFR';

function Home(props) {
    props.setLanguage("en")
    const { URLParam } = useParams()
    console.log(URLParam)
    const startingTab = URLParam === "delete" ? 4 : 0
    const [activeTab, setActiveTab] = useState(startingTab)
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
                            <li className="nav-item" role="tab">
                                <a className={activeTab === 0? 'nav-link active show': 'nav-link'} data-tab="0" id="home-tab" data-toggle="tab" href="#home" onClick={()=>{handleClickActiveTab(0)}}>WorkBC App</a>
                            </li>
                            <li className="nav-item" role="tab">
                                <a className={activeTab === 1? 'nav-link active show': 'nav-link'} data-tab="1"  id="setup-tab" data-toggle="tab" href="#setup" onClick={()=>{handleClickActiveTab(1)}}>Set up</a>
                            </li>
                            <li className="nav-item" role="tab">
                                <a className={activeTab === 2? 'nav-link active show': 'nav-link'} data-tab="2" id="download-tab" data-toggle="tab" href="#download" onClick={()=>{handleClickActiveTab(2)}}>Download</a>
                            </li>
                            <li className="nav-item" role="tab">
                                <a className={activeTab === 3? 'nav-link active show': 'nav-link'} data-tab="3" id="auth-tab" data-toggle="tab" href="#auth" onClick={()=>{handleClickActiveTab(3)}}>Authentication</a>
                            </li>
                            <li className="nav-item" role="tab">
                                <a className={activeTab === 4? 'nav-link active show': 'nav-link'} data-tab="4" id="delete-tab" data-toggle="tab" href="#delete" onClick={()=>{handleClickActiveTab(4)}}>Account Deletion</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className={activeTab === 0? 'tab-pane fade active show': 'tab-pane fade'} id="home" aria-labelledby="home-tab">
                                    <p>The WorkBC app provides British Columbians with a way to apply for and access WorkBC services and supports. You can securely message your employment counsellor, view your case details, access the WorkBC job board, and track and action items on your personal action plan.</p>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteScreensEn1.png"
                                            alt="Let's Get Started screenshot" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img 
                                            className="w-50"
                                            src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                            alt="What do you want to do today screenshot" />
                                            <br/><br/>
                                        </div>
                                        <div className="col-md-4 text-center">
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
                                                            alt="App Store WorkBC app download" />
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a href="https://play.google.com/store/apps/details?id=ca.bc.gov.workbc">
                                                        <img 
                                                            src="/images/stores/google-play-badge-en.svg"
                                                            //width="63% \9"
                                                            height="41.99px"
                                                            alt="Google Play WorkBC app download" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </div>
                            <div className={activeTab === 1? 'tab-pane fade active show': 'tab-pane fade'} id="setup">
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
                                                        <li><a href="#download" data-tab="2" onClick={()=>{handleClickActiveTab(2)}}>Download the WorkBC app</a></li>
                                                        <li>Open the app</li>
                                                        <li>Select "Let's Get Started" to start directly in the app, or "See What You Can Do" to take a short tour of WorkBC services</li>
                                                        <li>Review and accept the End User License Agreement for the app: <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a></li>
                                                        <li>You will land on the screen, "What do you want to do today?"</li>
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
                                                <div className="col-md-3 text-center">
                                                   <img 
                                                        className="w-100"
                                                        src="/images/screens/WorkBCAppSiteScreensEn2.png"
                                                        alt="What do you want to do today screenshot" />
                                                    <br/><br/>
                                                </div>
                                                <div className="col-md-9">
                                                    {/*<ol>
                                                        <li>I have an Account – Select this option if you are already a WorkBC Employment Services client and have and existing or previous account with Online Employment Services (OES).</li>
                                                        <li>I do not have an Account – This option is for those who are new to WorkBC services and need to apply, or for WorkBC clients who have not yet registered with OES. Note that you will need your BC Services Card or a Basic BCeID for authentication.</li>
                                                        <ul>
                                                            <li aria-labelledby="bullet"><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">Information on BC Services Card</a></li>
                                                            <li aria-labelledby="bullet"><a href="https://www.bceid.ca">Information on Basic BCeID</a></li>
                                                        </ul>
                                                        <li>I want to continue as a Guest – If you want to see what app features are available without logging in or creating an account, choose this option.</li>
                                                        <li>I don’t know if I have an Account – If you are unsure if you have an account with WorkBC online services, enter a few pieces of information to find out.</li>
                                                    </ol>*/}
                                                     <div className="row">
                                                        <div className="col-md-3"><h4>I have an Account</h4></div>
                                                        <div className="col-md-6">Select this option if you are already a WorkBC Employment Services client AND have and existing or previous account with Online Employment Services (OES).<br/></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3"><br/><h4>I do not have an Account</h4></div>
                                                        <div className="col-md-6">
                                                            <br/>
                                                            If you are new to WorkBC services and need to apply, or you are a WorkBC client that has not registered with OES, you will need to set up an account.
                                                            <br/>
                                                            <b>Note: </b>First, you will need set up a BC Services Card Login or register for a Basic BCeID for authentication.
                                                            <ul>
                                                                <li aria-labelledby="bullet"><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">Learn how to set up the BC Services Card Login</a></li>
                                                                <li aria-labelledby="bullet"><a href="https://www.bceid.ca">Learn how to register for a Basic BCeID</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3"><br/><h4>I want to continue as a Guest</h4></div>
                                                        <div className="col-md-6"><br/>If you want to see what app features are available without logging in or creating an account, choose this option.<br/></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3"><br/><h4>I don’t know if I have an Account</h4></div>
                                                        <div className="col-md-6"><br/>If you are unsure if you have an account with WorkBC online services, enter a few pieces of information to find out.<br/></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                                 
                            </div>
                            <div className={activeTab === 2? 'tab-pane fade active show': 'tab-pane fade'}  id="download">
                                <h2>Download the WorkBC App</h2>
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
                                                            <li>Beta versions are not supported</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <ul>
                                                            <li>Android 6 and above operating systems are supported</li>
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
                            <div className={activeTab === 3? 'tab-pane fade active show': 'tab-pane fade'}  id="auth">
                                <h2>Authentication</h2>
                                <p>In order to access WorkBC online services, you must confirm your identity through one of the following forms: BC Services Card Login or Basic BCeID. </p><br/>
                                <h3 className="text-primary">BC Services Card Login</h3>
                                <p>To access services provided through the WorkBC app, you can log in or register using the BC Services Card Login. The service provided through this app will confirm personal information such as your name and date of birth, and will populate this information on registration screens if you are registering for online services through the WorkBC app. Your information is protected under the Freedom of Information and Protection of Privacy Act (FOIPPA).</p>
                                <ul>
                                    <li><a href="https://www2.gov.bc.ca/gov/content/governments/government-id/bcservicescardapp">Learn how to set up and use the BC Services Card Login</a></li>
                                    <li><a href="/PrivacyAndLicenseAgreement">Review the End User License Agreement</a></li>
                                </ul><br/>
                                <h3 className="text-primary">Basic BCeID</h3>
                                <p>You can also use a Basic BCeID to securely access WorkBC online services. If you don’t have a Basic BCeID, you can register for one in minutes by providing some personal information such as your name, user ID and a password. Your information is protected under the Freedom of Information and Protection of Privacy Act (FOIPPA). To learn more:</p>
                                <ul>
                                    <li><a href="https://www.bceid.ca/">Learn how to register and use Basic BCeID</a></li>
                                    <li><a href="/PrivacyAndLicenseAgreement">Review the End User License Agreement</a></li>
                                </ul>
                            </div>
                            <div className={activeTab === 4? 'tab-pane fade active show': 'tab-pane fade'}  id="delete">
                                <h2>Account Deletion Requests</h2>
                                <ul>
                                    <li>While signed into the WorkBC App, go to the Menu and select 'Delete Account':</li>
                                    <div className="col-md-6 text-center">
                                        <img 
                                        className="w-50"
                                        src="/images/screens/sidebar-menu-EN.png"
                                        alt="Sidebar menu screenshot" />
                                        <br/><br/>
                                    </div>
                                    <li>You will be directed to the ‘Delete Your Account’ screen:</li>
                                    <div className="col-md-6 text-center">
                                        <img 
                                        className="w-50"
                                        src="/images/screens/account-delete-EN.png"
                                        alt="Account delete screenshot" />
                                        <br/><br/>
                                    </div>
                                    <li>Select ‘Yes’ on the ‘Delete Your Account’ screen, and confirm the Delete request when prompted</li>
                                </ul>

                                <h4>The data you provide is not deleted. For further information on data collection and retention, please refer to the <a href="/PrivacyAndLicenseAgreement">End User License Agreement</a></h4>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="mb-0">If you have questions, please contact <a href="mailto:WorkBC.support@gov.bc.ca">WorkBC.support@gov.bc.ca</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home;
