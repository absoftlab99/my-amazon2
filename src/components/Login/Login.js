import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/gogole.png';
import './Login.css'

const Login = () => {
    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form className='form'>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" id="email" placeholder='Your email' required/><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" name="password" id="password" placeholder='Your password' required/>
                <input type="button" id='button' value="Login" />
                <div id='small'>
                <small>New to Emajhon? <Link id='new' to='/signup'>Create New Account</Link></small>
                </div><br></br>
                <hr></hr>
                <button id='google'><img id='img' src={google} alt="google" /></button>
            </form>
        </div>
    );
};

export default Login;