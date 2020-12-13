import React from 'react';


function About() {
    return (
        <div className="container aboutme-page">
            <div className="row pt-10">
                <div className="col-lg-6">
                    <p>
                        I'm a web developer based in Wrocław. I specialise in designing and building sites. My adventure with programming started in 2018 and it became my biggest goal in life since then. My main focus lies on the JavaScript, React, Angular development and Front-end.
                        I also have a commercial exprecience, it helped me to develop my programming skills in JS, AngularJS and a little bit in PHP. Now I keep learning JS frameworks, Typesciprt and Node.js, and create my own projects and projects with other programmers too.
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