import React from 'react';
import './signin.css';
import {Link, useHistory} from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'


function SignIn(){
  
  const {handlelogin,
         email,
         setEmail,
         password,
         setPassword,
         emailError,
         passwordError,
        } = useAuth()

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

