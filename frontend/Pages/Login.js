import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
		<div className="account-login">
			<form id="login-form" action="/signin" method="post">
				<h2>LOGIN</h2>
				<label for="email">EMAIL ADDRESS</label>
				<input type="text" id="loginEmail" name="loginEmail" placeholder="EMAIL ADDRESS"></input>

				<label for="password">PASSWORD</label>
				<input type="password" id="loginPassword" name="loginPassword" placeholder="EMAIL ADDRESS"></input>

				<input type="hidden" name="_csrf" value="{{ csrfToken }}"></input>
				<button className="sign-in-button" type="submit">LOGIN</button>
			</form>

			<form id="create-new-user-form" action="/signup" method="post">
				<h2>CREATE ACCOUNT</h2>
				<label for="email">EMAIL ADDRESS</label>
				<input type="text" id="email" name="email" placeholder="EMAIL ADDRESS"></input>

				<label for="password">PASSWORD</label>
				<input type="password" id="password" name="password" placeholder="EMAIL ADDRESS"></input>

				<input type="hidden" name="_csrf" value="{{ csrfToken }}"></input>
				<button className="create-account-button" type="submit">CREATE ACCOUNT</button>
			</form>
		</div>
    );
  }
}

export default Login;
