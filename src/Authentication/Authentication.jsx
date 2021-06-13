import React,{useEffect, useState} from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import SignIn from './signin';
import SignUp from './signup';
import Main from '../Main/Main'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function Authentication () {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [thereIsAccount, setThereIsAccount] = useState(false)

    const firebase = useFirebaseApp();
 
    const clearInputs = () => {
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
        setPasswordConfirm('');
    }

    const handlelogin = async () => {
        clearErrors()
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch( error => {
              switch(error.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message);
                    break;
                }
            })
    }

    const handleSingUp = async () => {
      clearErrors();  
      if(password==passwordConfirm){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch( error => {
              switch(error.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(error.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(error.message);
                    break;
            }
        })
      }else{
        setPasswordError("Contraseñas no coinciden")
      }
    }

    const handleLogout = async () => {
        firebase
            .auth()
            .signOut();
    }

    const authenticationEvent = () => {
        firebase
            .auth()
            .onAuthStateChanged( user =>{
                if(user){
                    clearInputs();
                    setUser(user)
                } else{
                    setUser('')
                }
            })
    }

    useEffect(()=>{
        authenticationEvent();
    },[])

return( 
    <div>
        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path="/signin">
                <SignIn
                     email={email} 
                     setEmail={setEmail} 
                     password={password}
                     setPassword={setPassword}
                     handlelogin={handlelogin}
                     handleSingUp={handleSingUp}
                     thereIsAccount={thereIsAccount}
                     setThereIsAccount={setThereIsAccount}
                     emailError={emailError}
                     passwordError={passwordError}
                     passwordConfirm={passwordConfirm}
                     setPasswordConfirm={setPasswordConfirm}/>   
                </Route>
                <Route path="/signup">
                <SignUp
                     email={email} 
                     setEmail={setEmail} 
                     password={password}
                     setPassword={setPassword}
                     handlelogin={handlelogin}
                     handleSingUp={handleSingUp}
                     thereIsAccount={thereIsAccount}
                     setThereIsAccount={setThereIsAccount}
                     emailError={emailError}
                     passwordError={passwordError}
                     passwordConfirm={passwordConfirm}
                     setPasswordConfirm={setPasswordConfirm}/>   
                </Route>
            </Switch> 
        </Router>
         
    </div>  
    )
}

export default Authentication;

