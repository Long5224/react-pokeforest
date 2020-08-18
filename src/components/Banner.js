import React from 'react'


function Banner(props) {
    return (
        <section id="banner">
            <div className="container zindex">
                <div className="row">
                    <div className="col-lg-7 banner-txt">
                        <h3>Khám phá thể giới Pokemon cùng Pokeforest</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora a minima soluta. Facere
                        necessitatibus eos exercitationem sequi quibusdam consectetur vero. Minima nesciunt repudiandae
                        odit soluta vitae esse, corporis maxime molestias!
                    </p>
                        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                            Browse Now
                    </a>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-img">
                            <img  alt="banner-img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Banner

