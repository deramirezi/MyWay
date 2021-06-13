import React, {useState} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'


function SignUp(props){

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
        <section className="signUp">
            <div className="signUpContainer">
                <label>Email</label>
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

                <label>Password Confirmation</label>
                <input 
                  type="password" 
                  autoFocus 
                  required 
                  value={passwordConfirm} 
                  onChange={(e)=> setPasswordConfirm(e.target.value)}/>
                  <p className="errorMsg">{passwordError}</p>
                    
                <div className="btnContainer">
                    <button onClick={handleSingUp}>Sign Up</button>
                    <p>Already have an account?
                      <span>
                        <Link to="/signin">
                        Sign in
                        </Link>
                      </span>
                    </p> 
                </div>
            </div>
        </section> 
    )
}

export default SignUp;