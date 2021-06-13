import React, {useState, useEffect} from 'react';
import Authentication from './Authentication/Authentication'
import {useFirebaseApp} from 'reactfire'

function App() {
  const firebase = useFirebaseApp();
  return (
    <div className="App">
      <Authentication/>
    </div>
  );
}

export default App;
