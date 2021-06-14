import React, {useState, useEffect} from 'react';
import Authentication from './Authentication/Authentication'
import {useFirebaseApp} from 'reactfire'
import {AuthProvider} from "./Context/AuthContext"

function App() {
  const firebase = useFirebaseApp();
  return (
    <AuthProvider>
    <div className="App">
      <Authentication/>
    </div>
    </AuthProvider>
  );
}

export default App;
