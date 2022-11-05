import React from 'react';
import { useState } from 'react';
import { Registration } from './registration';
export const Login=(props)=>{

    const [email ,setEmail]=useState('');
    const[password, setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    
    return(
        <div className='auth-form-container'>
        <form  className="login-form "onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange ={(e)=> setEmail(e.target.value)}  type="email" placeholder='abc@gamil.com' id="email" name="email" required/>
            <label htmlFor="password">Password</label>
            <input  value={password }onChange ={(e)=> setPassword(e.target.value)} type="password" placeholder='********' id="password" name="password" required/>
            <button className ="button" type="submit">Log In</button>
        </form>
        <button className='link-button' type='link' onClick={()=>props.onFormSwitch('registration')} > Don't have an Account? Register Here! </button>
        </div>
    )
} 