import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import logo100Ladrillos from './logo_100_ladrillos.svg'
import Signup from './components/Signup';
import google from './google.png';
import facebook from './facebook.png';
import microsoftWindowsLogo from './microsoft-windows-logo.png';

export default class App extends Component {

  createStyles() {
    return {
      width: '100%',
    }
  }

  stylesHr() {
    return {
      border: "1px solid #eaeaea",
      height: "1px",
      marginTop: "11px",
      marginLeft: "13px",
      width: "84.4px",
    }
  }
  stylesSocialNetworkContainer() {
    return {
      border: "1px solid #eaeaea",
      height: "48x",
      width: "48px",
      textAlign: "center",
      padding: "8px",
    }
  }
  stylesSocialNetworkImages() {
    return {
      width: "32px",
      height: "32px",
    }
  }

  stylesSigin() {
    return {
      color: "#ff5a60",
      fontWeight: "bold",
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar
          altLogo="Logo 100 Ladrillos"
          srcLogo={logo100Ladrillos}
        />
        <div className='container row' style={this.createStyles()}>
          <div className="col-12 col-lg-6">
            <img alt="imagen" />
          </div>
          <div className="col-12 col-lg-5">
            <h3>Crear tu cuenta</h3>
            <div>
              <p>
                Al aceptar crear una cuenta en 100 Ladrillos <br />
                aceptas nuestro <a href="https://100ladrillos.zendesk.com/hc/es/articles/360001074632-Aviso-de-Privacidad">Aviso de Privacidad</a>, <a href="https://100ladrillos.zendesk.com/hc/es/articles/360001106571-Derechos-ARCO"> Derechos Arco </a>
                y nuestros <a href="https://100ladrillos.zendesk.com/hc/es/articles/360001099131-T%C3%A9rminos-y-Condiciones">Términos y Condiciones</a>.
              </p>
            </div> <br />

            <Signup />

            <div className="row">
              <div className="col" style={this.stylesHr()}></div>
              <div className="col-8 text-center">o regístrate con:</div>
              <div className="col" style={this.stylesHr()}></div>
            </div>

            <br />

            <div className="row">
              <div className="col-4">
                <div style={this.stylesSocialNetworkContainer()}>
                  <img src={google} alt="Google" style={this.stylesSocialNetworkImages()} />
                </div>
              </div>
              <div className="col-4">
                <div style={this.stylesSocialNetworkContainer()}>
                  <img src={microsoftWindowsLogo} alt="Microsoft Windows Logo" style={this.stylesSocialNetworkImages()} />
                </div>
              </div>
              <div className="col-4">
                <div style={this.stylesSocialNetworkContainer()}>
                  <img src={facebook} alt="Facebook" style={this.stylesSocialNetworkImages()} />
                </div>
              </div>
            </div>

            <br />

            <div className="text-center">
              <span>¿Ya tienes tu cuenta?</span> <br />
              <a href="/" style={this.stylesSigin()}>Iniciar sesión</a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
