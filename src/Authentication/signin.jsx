import React from 'react';
import './signin.css';
import {Link} from 'react-router-dom'

function SignIn(props){

    const {
        email,
        setEmail,
        password,
        setPassword,
        handlelogin,
        handleSingUp,
        thereIsAccount,
        setThereIsAccount,
        emailError,
        passwordError,
        passwordConfirm,
        setPasswordConfirm} = props

    return(
        <section className="signin">
            <div className="signinContainer">
                <label>Username</label>
                <input 
                  type="text" 
                  autoFocus 
                  required 
                  value={email} 
                  onChange={(e)=> setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input 
                  type="password" 
                  autoFocus 
                  required 
                  value={password} 
                  onChange={(e)=> setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                    
                <div className="btnContainer">
                    <button onClick={handlelogin}>Sign In</button>
                    <p>Don't have an account?
                    <span>
                        <Link to="/signup">
                          Sign Up
                        </Link>
                      </span>
                    </p>
                    
                </div>
            </div>
        </section> 
    )
}

export default SignIn;

