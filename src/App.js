
import { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 
import {Login} from './pages/login';
import {Registration } from'./pages/registration';

function App() {
  const [currentForm ,setCurrentForm]=useState('login')
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (<>
    <div className="App">{
      currentForm == "login"?<Login onFormSwitch={toggleForm}/>:<Registration onformSwitch={toggleForm}/>
    }

   
    </div>
    </>
  );
}

export default App;
