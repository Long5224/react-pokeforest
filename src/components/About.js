import React from 'react'


function About(props) {
    return (
        <section id="about">
            <div className="container">
                <div className="row header-text text-center about-header">
                    <div className="col-lg-12">
                        <h3>ABOU<span>T</span></h3>
                    </div>
                </div>
                <div className="row about-pa">
                    <div className="col-lg-10 col-md-12 m-auto about-item">
                        <div className="row">
                            <div className="col-lg-4 col-sm-8 m-sm-auto col-md-5 text-center">
                                <div className="about-img ai-one">
                                    <img  alt="about-img" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1"></div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about-txt">
                                    <span className="separet-span">About Us</span>
                                    <h3 className="">PokeForest Studio</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe doloremque, expedita
                                    ducimus nisi aliquam, corporis, quidem cumque earum dicta porro dolore nam molestiae
                                    autem est eveniet mollitia accusamus sapiente culpa.</p>
                                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-12 m-auto about-item"></div>
                    <div className="col-lg-10 col-md-12 m-auto about-item"></div>
                </div>
            </div>
        </section>
    )
}



export default About

