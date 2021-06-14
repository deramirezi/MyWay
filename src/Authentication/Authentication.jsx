import React,{useEffect, useState} from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import SignIn from './signin';
import SignUp from './signup';
import Main from '../Main/Main'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function Authentication () {

return( 
    <div>
        <Router>
            <Switch>
                <Route exact path='/' component={SignIn}/>
                <Route path='/main'   component={Main}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
            </Switch> 
        </Router>
         
    </div>  
    )
}

export default Authentication;

