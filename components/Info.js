import React from "react"

export default function Info(){
    return(
        <div className="info">
            <div className="img-container">
            <img src="../images/me.jpeg" />
            </div>
            <div className="info-content-container">
                <div className="name-title-email">
                    <p className="name">Corey King</p>
                    <p className="title">Sweet Dude</p>
                    <p className="email">corey@corey.com</p>
                </div>
                <div className="info-btn-container">
                    <a href="mailto:corey@corey.com" className="email-btn"><img src="../images/Mail.png" />Email</a>
                    <a href="https://www.linkedin.com" className="linkedin"><img src="../images/linkedin.png" />LinkedIn</a>
                </div>
            </div>
        </div>
    )
}