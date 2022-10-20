import React from 'react';
import google from '../../images/gogole.png';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='login-form1'>
            <h2>Sign Up</h2>
            <form className='form1'>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" id="email1" placeholder='Your email' required/><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" name="password" id="password1" placeholder='Password' required/>
                <label htmlFor="confirm">Confirm Password</label><br></br>
                <input type="password" name="confirm" id="confirm" placeholder='Confirm Password' required/><br></br>
                <input type="button" id='button' value="Sign Up" />
                <div id='small'>
                <small>Already have an account? <Link id='new1' to='/login'>Please Login</Link></small>
                </div><br></br>
                <hr></hr>
                <button id='google1'><img id='img1' src={google} alt="google" /></button>
            </form>
        </div>
    );
};

export default SignUp;