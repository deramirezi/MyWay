import React, {useState} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'


function SignUp(){

  const {
        handleSingUp,
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        passwordConfirm,
        setPasswordConfirm} = useAuth()


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