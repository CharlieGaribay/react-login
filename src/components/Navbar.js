import React, { Component } from 'react'

export default class Navbar extends Component {
  styles() {
    return {
      color: "#ff5a60",
      fontWeight: "bold",
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse clearfix" id="navbarToggler">
              <img className='float-start' src={this.props.srcLogo} alt={this.props.altLogo} />
              <div className='float-end'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" style={this.styles()}>Cómo funciona</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" style={this.styles()}>Entrar</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
