import React, {  } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import News from './components/News'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Banner from './components/Banner'
import About from './components/About'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bg ">
          <div className="container">
            <Link className="navbar-brand" to="/">Pokeforest</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav menu-item ml-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#banner">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pokedex">Pokedex</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#news">News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link bor" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md " data-toggle="modal" data-target="#exampleModal"><i
                    className="fab fa-angellist"></i> Play</a>
                </li>
              </ul>
            </div>
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="input-group play-input mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text faq-icon">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control box-lg" placeholder="Username"
                          aria-label="username" />
                      </div>
                      <div className="input-group play-input mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text faq-icon">
                            <i className="fas fa-lock"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control box-lg" placeholder="Password"
                          aria-label="password" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <a to="#">Register</a>
                    <button type="button" className="dropboxx" data-dismiss="modal">Close</button>
                    <button type="button" className="dropboxx2" data-dismiss="modal">Sign in</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/pokedex" component={Pokedex}/>
      </Switch>

       {/*Footer */}
      <Footer/>
    </Router>

  );
}

function Home() {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="Home">

       {/*Banner */}
      <Banner/>
      
      {/*News */}
      <News />

       {/*About */}
      <About/>
      
      {/*Pokedex */}
      <section id="pokedex">
        <div className="container">
          <div className="row header-text text-center about-header">
            <div className="col-lg-12">
              <h3>POK<span>E</span>DEX</h3>
            </div>
          </div>
          <div className="row">
            <div id="app"> <Carousel items={items} active={0} /> </div>
          </div>

          <div className="row">
            <div className="explore"><Link to="#">Explore More Pokemon</Link></div>
          </div>
        </div>
      </section>

     {/*Subs */}
      <section id="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="sub-main">
                <div className="row">
                  <div className="col-lg-8 col-md-7">
                    <h3>Stay Connected With Us</h3>
                  </div>
                  <div className="col-lg-3 col-md-5 subscribe-btn">
                    <Link to="#">Subcribe Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
