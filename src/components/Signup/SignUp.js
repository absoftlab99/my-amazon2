import google from '../../images/gogole.png';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    
    const {createUser, logInWithPopUp} = useContext(AuthContext);
    const navigator = useNavigate();

    const signUpHandler = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        createUser(email, password, confirm)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
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
    console.log(createUser);
    return (
        <div className='login-form1'>
            <h2>Sign Up</h2>
            <form onSubmit={signUpHandler} className='form1'>
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" id="email1" placeholder='Your email' required/><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" name="password" id="password1" placeholder='Password' required/>
                <label htmlFor="confirm">Confirm Password</label><br></br>
                <input type="password" name="confirm" id="confirm" placeholder='Confirm Password' required/><br></br>
                <input type="submit" id='button1' value="Sign Up" />
                <div id='small'>
                <small>Already have an account? <Link id='new1' to='/login'>Please Login</Link></small>
                </div><br></br>
                <hr></hr>
            </form>
            <div className='google'>
            <button onClick={popUpHandler} id='google1'><img id='img1' src={google} alt="google" /></button>
            </div>
        </div>
    );
};

export default SignUp;