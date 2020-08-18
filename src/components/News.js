import React from 'react'


function News(props) {
    return (
        <section id="news">
        <div className="container-fluid">
          <div className="row header-text text-center">
            <div className="col-lg-12">
              <h3>NEW<span>S</span></h3>
            </div>
          </div>
          <div className="row over-pa">
            <div className="col-lg-9 col-md-9 m-auto">
              <div className="row">
                <div className="col-lg-8 col-md-12 text-center">
                  <div className="news_thumbnail col-lg-12 col-md-12">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                      <img src="/images/pokemon-unite.jpg" alt="pokemon unite" className="img-fluid"
                        style={{ width: '100%' }} />
                      <div className="news_content" style={{ backgroundColor: '#da471b' }}>Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Earum quasi illo laudantium explicabo atque
                      fugit culpa, unde esse et dolore, praesentium alias optio impedit deleniti
                                        cupiditate sequi tempora distinctio nulla.</div>
                    </a>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">
                      <div className="news_thumbnail col-lg-6 ">
                        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                          <img src="/images/pokemon-tcg-battle-academy.jpg" alt="pokemon unite"
                            className="img-fluid" />
                          <div className="news_content" style={{ backgroundColor: '#da471b' }}>Lorem ipsum
                          dolor sit amet consectetur, adipisicing elit. Earum quasi illo
                          laudantium explicabo atque fugit culpa, unde esse et dolore, praesentium
                          alias optio impedit deleniti cupiditate sequi tempora distinctio
                          nulla.
                                            </div>
                        </a>
                      </div>
                      <div className="news_thumbnail col-lg-6">
                        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                          <img src="/images/pokemon-presents-roundup-169-en.jpg" alt="pokemon unite"
                            className="img-fluid" />
                          <div className="news_content" style={{ backgroundColor: '#da471b' }}>Lorem ipsum
                          dolor sit amet consectetur, adipisicing elit. Earum quasi illo
                          laudantium explicabo atque fugit culpa, unde esse et dolore, praesentium
                          alias optio impedit deleniti cupiditate sequi tempora distinctio
                          nulla.
                                            </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 m-auto">
                  <div className="news_thumbnail col-lg-12 col-md-12">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                      <img src="/images/pokemon-cafe-mix-169.jpg" alt="pokemon unite" className="img-fluid" />
                      <div className="news_content" style={{ backgroundColor: '#da471b' }}>Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Earum quasi illo laudantium explicabo atque
                                        fugit culpa.</div>
                    </a>
                  </div>
                  <div className="news_thumbnail col-lg-12 col-md-12">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                      <img src="/images/sword-shield-169-en.jpg" alt="pokemon unite" className="img-fluid" />
                      <div className="news_content" style={{ backgroundColor: '#da471b' }}>Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Earum quasi illo laudantium explicabo atque
                                        fugit culpa, unde esse et dolore.</div>
                    </a>
                  </div>
                  <div className="news_thumbnail col-lg-12 col-md-12">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md ">
                      <img src="/images/2020-players-cup-pokken-invitational-169.jpg" alt="pokemon unite"
                        className="img-fluid" />
                      <div className="news_content" style={{ backgroundColor: '#da471b' }}>Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Earum quasi illo laudantium explicabo atque
                                        fugit culpa.</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}



export default News

