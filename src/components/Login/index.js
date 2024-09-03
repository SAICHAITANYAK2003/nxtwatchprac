import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  FormPage,
  FormLogo,
  UserInputContainer,
  LabelBadge,
  UserInput,
  UserPassword,
  CheckBox,
  CheckboxLabel,
  ShowPasswordContainer,
  SubmitButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    userInput: '',
    userPassword: '',
    isErrorMsg: false,
    errorMsg: '',
    isPasswordVisible: false,
  }
  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }
  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }
  onSubmitFailure = errorMsg => {
    this.setState({isErrorMsg: true, errorMsg})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  onLoginForm = async event => {
    event.preventDefault()

    const {userInput, userPassword} = this.state
    const userDetails = {username: userInput, password: userPassword} // userDetails should have the username and password as keys
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userInput, userPassword, isErrorMsg, errorMsg, isPasswordVisible} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormPage onSubmit={this.onLoginForm}>
          <FormLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <UserInputContainer>
            <LabelBadge htmlFor="inputLabel">USERNAME</LabelBadge>
            <UserInput
              type="text"
              placeholder="Username"
              id="inputLabel"
              value={userInput}
              onChange={this.onChangeInput}
            />
          </UserInputContainer>
          <UserInputContainer>
            <LabelBadge htmlFor="passwordLabel">PASSWORD</LabelBadge>
            <UserPassword
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              id="passwordLabel"
              value={userPassword}
              onChange={this.onChangePassword}
            />
          </UserInputContainer>
          <ShowPasswordContainer>
            <CheckBox
              type="checkbox"
              id="checkBox"
              onClick={this.onClickShowPassword}
            />
            <CheckboxLabel htmlFor="checkBox">Show Password</CheckboxLabel>
          </ShowPasswordContainer>
          <SubmitButton type="submit">Login</SubmitButton>
          {isErrorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </FormPage>
      </LoginContainer>
    )
  }
}

export default Login
