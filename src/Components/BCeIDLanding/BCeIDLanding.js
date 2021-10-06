import React from 'react'
import OpenApp from "react-open-app";

function BCeIDLanding() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Success!</h1>
                    <p>Please click the link below to go back to the mobile application, then login with your BCeID.</p>
                    <OpenApp
                        href="/BCeIDLanding"
                        android={`${process.env.REACT_APP_ANDROID}`}
                        ios={`${process.env.REACT_APP_IOS}`}
                    >
                        Continue
                    </OpenApp>
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

export default BCeIDLanding;