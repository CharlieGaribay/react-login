import React, { Component } from 'react'
import '../App.css';
import regex from '../commons/regex'
import connect from '../services/100LadrillosConector';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        touched: false,
        value: "",
        valid: true,
      },
      password: {
        touched: false,
        value: "",
        requirements: Array(6).fill(false),
      },
      confirmPassword: {
        touched: false,
        value: "",
        valid: false,
      },
      showPassword: false,
    }

    this.togglePassword = this.togglePassword.bind(this);
  }

  onChange = e => {
    const { value, name } = e.target;
    if (e.target.name === "email") {
      this.setState(state => {
        state[name].value = value;
        state[name].valid = this.isValidEmail(value);
        return state;
      })
    } else if (e.target.name === "password") {
      this.setState(state => {
        state[name].value = value;
        state[name].requirements = this.isValidPassword(value);
        state[name].touched = true;
        return state;
      })
    } else {
      this.setState(state => {
        state[name].value = value
        state[name].valid = this.isValidPasswordConfirmation(value);
        return state;
      })
    }
  }

  onKeyUp = e => {
    const { value, name } = e.target;
    this.setState(state => {
      state[name].touched = !this.isEmptyValue(value) && !this.isEmpty ? true : false;
      return state;
    })
  }

  isEmptyValue = value => {
    if (value.length === 0) return true;
    return false;
  }

  testRegex = (pattern, value) => {
    const newRegex = new RegExp(pattern);
    return newRegex.test(value);
  }

  isValidEmail = value => {
    if (this.isEmptyValue(value)) return true; // is valid just for validations
    return this.testRegex(regex.email, value);
  }

  isValidPassword = value => {
    let arrPassValidations = []
    arrPassValidations.push(this.testRegex(regex.password.minLenght, value));
    arrPassValidations.push(this.testRegex(regex.password.numeric, value));
    arrPassValidations.push(this.testRegex(regex.password.specialCharacter, value));
    arrPassValidations.push(!this.testRegex(regex.password.string100Ladrillos, value));
    arrPassValidations.push(this.testRegex(regex.password.consecutiveCharacters, value));
    arrPassValidations.push(true); // sequential regex
    return arrPassValidations;
  }

  getClassNamePassword = position => {
    const { touched, requirements } = this.state.password;
    if (touched) return requirements[position] ? "valid" : "invalid"
    else return "normal"
  }

  togglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  isValidPasswordConfirmation = value => {
    if (this.state.password.value === value) return true;
    return false;
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state
    const url = "/api/signUp"
    const payload = {
      "email": email,
      "password": password
    }
    const response_connect = connect(url, payload)
    response_connect.then((res) => {
      console.log(res);
      // update state step: +1 to show next section
    })
  }

  styleShowInvalidEmail() {
    return {
      color: "#dc3545",
      display: !this.state.email.valid ? "block" : "none",
      fontSize: "small",
    }
  }

  styleDisplayPasswords() {
    return {
      display: this.state.email.touched ? "block" : "none",
    }
  }

  stylePasswordEyeIcon() {
    return {
      position: "relative",
      top: "40px",
      float: "right",
      right: "15px",
    }
  }

  stylePasswordRequirements() {
    return {
      color: "#8c8c8c",
      fontSize: "small",
    }
  }

  styleDisplayNextButton() {
    const { email, password, confirmPassword } = this.state
    const form = [email.valid, password.requirements.includes(true), confirmPassword.valid]
    const invalidForm = form.includes(false)
    return {
      display: invalidForm ? "none" : "block",
    }
  }

  render() {
    return (
      <div>
        <form id='signup' onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">¿Cuál es tu correo electrónico?</label>
            <input type="email" className="form-control" name='email' id="email" placeholder="tu@correo.com" onChange={this.onChange} onKeyUpCapture={this.onKeyUp} value={this.state.email.value} />
            <div style={this.styleShowInvalidEmail()}>
              Correo inválido.
            </div>

          </div>
          <div className="mb-3" style={this.styleDisplayPasswords()}>
            <label htmlFor="password" className="form-label">Crea tu contraseña</label>
            <span onClick={this.togglePassword} style={this.stylePasswordEyeIcon()}><i className={`fa-solid ${this.state.showPassword ? 'fa-eye-slash' : 'fa-eye'}`} /></span>
            <input type={this.state.showPassword ? "text" : "password"} className="form-control" name='password' id="password" placeholder="Contraseña" onChange={this.onChange} value={this.state.password.value} />
          </div>
          <div style={this.styleDisplayPasswords()}>
            <div id='password_requirements' style={this.stylePasswordRequirements()}>
              Por razones de seguridad tu contraseña debe tener las siguientes carateristicas:
              <ul>
                <li className={this.getClassNamePassword(0)}>Mínimo 6 caracteres (letras, números y caracteres especiales).</li>
                <li className={this.getClassNamePassword(1)}>Mínimo 1 número.</li>
                <li className={this.getClassNamePassword(2)}>Mínimo 1 de estos caracteres especiales {"!”#$%&/()=?¿^*@‚[]{ };:_><,.-|`+."}</li>
                <li className={this.getClassNamePassword(3)}>No tener la frase “100Ladrillos”.</li>
                <li className={this.getClassNamePassword(4)}>No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).</li>
                <li className={this.getClassNamePassword(5)}>No tener mas de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123).</li>
              </ul>
            </div>
          </div>
          <div className="mb-3" style={this.styleDisplayPasswords()}>
            <label htmlFor="confirmPassword" className="form-label">Confirma tu contraseña</label>
            <input type="password" className="form-control" name='confirmPassword' id="confirmPassword" placeholder="Confirma tu contraseña" onChange={this.onChange} value={this.state.confirmPassword.value} />
          </div>
          <input type="submit" className='btn btn-primary' value="Siguiente" style={this.styleDisplayNextButton()} />
        </form>
      </div>
    )
  }
}
