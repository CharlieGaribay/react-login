import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import logo100Ladrillos from './logo_100_ladrillos.svg'
import Signup from './components/Signup';

export default class App extends Component {

  createStyles() {
    return {
      width: '100%',
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
          <div className="col-12 col-lg-6">
            <h3>Crear tu cuenta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas, dolores sit minus quod tempore reprehenderit facilis, provident earum eaque eum delectus temporibus, eveniet autem eos itaque debitis atque voluptate?
            </p>
            <Signup />
          </div>
        </div>
      </div>
    )
  }
}
