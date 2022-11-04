import React from 'react'
import { useState } from 'react';
import { Login } from './login';

export const Registration=(props)=>{

    const [email ,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const [username,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className='auth-form-container'>
        <form className='registration-form'onSubmit={handleSubmit}>
        <label  htmlFor="email">Username</label>
            <input value={username} onChange ={(e)=> setName(e.target.value)}  type="text" placeholder='Name' id="name" name="name" required/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange ={(e)=> setEmail(e.target.value)}  type="email" placeholder='abc@gamil.com' id="email" name="email" required/>
            <label htmlFor="password">Password</label>
            <input  value={password }onChange ={(e)=> setPassword(e.target.value)} type="password" placeholder='********' id="password" name="password" required/>
            <button className="button"type="submit">Register</button>
        </form>
        <button className="link-button" type='link' onClick={()=>props.onFormSwitch('login')}> Already have Account?Login here</button>
        </div>
    )
}