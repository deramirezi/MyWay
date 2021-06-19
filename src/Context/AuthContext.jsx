import React, { useContext,useState,useEffect } from 'react'
import {auth} from '../APIs/firebase-config'
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){

    const [email, setEmail] = useState(' ');
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

    const handlelogout = async () => {
        firebase.auth()
                .signOut()
                .then(()=>{
                    window.location.href= '/'
                })
    }

    const handlelogin = async () => {
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then((usuario)=>{
                setUser(usuario) 
                window.location.href= '/main'
            })
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

    const value = {
        handlelogout,
        handleSingUp,
        handlelogin,
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        thereIsAccount,
        setThereIsAccount,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        passwordConfirm,
        setPasswordConfirm,
    }
    
    return(
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>    
    )
}