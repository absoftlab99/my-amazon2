import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import google from '../../images/gogole.png';
import './Login.css'

const Login = () => {
    const {loginUser, logInWithPopUp} = useContext(AuthContext);
    const navigator = useNavigate();

    const logInHandler = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigator('/');
        })
        .catch(error =>{
            console.error(error);
        })
    }
    const popUpHandler = (event) =>{
        event.preventDefault();
        logInWithPopUp()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigator('/');
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={logInHandler} className='form'>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" id="email" placeholder='Your email' required/><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" name="password" id="password" placeholder='Your password' required/>
                <input type="submit" id='button' value="Login" />
                <div id='small'>
                <small>New to Emajhon? <Link id='new' to='/signup'>Create New Account</Link></small>
                </div><br></br>
                <hr></hr>
            </form>
            <div  className='google'>
                <button onClick={popUpHandler} id='google'><img id='img' src={google} alt="google" /></button>
            </div>
        </div>
    );
};

export default Login;