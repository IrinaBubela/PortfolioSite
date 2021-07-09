import React from 'react';


function About() {
    return (
        <div className="container aboutme-page">
            <div className="row pt-10">
                <div className="col-lg-6">
                    <p>
                        I'm a web developer with 1+ year of experience based in Wrocław. <br/> I specialise in designing and building sites. My adventure with programming started in 2018 and it became my biggest goal in life since then. 
                        My main focus lies on the JavaScript, Vue, React development.
                    </p>
                </div>
                <div className="col-lg-6 text-center">
                    <img className="img-fluid aboutme-img" src="assets/img/dev-rounded.svg" alt="dev" />
                </div>
            </div>
        </div>
    );
}



export default About;