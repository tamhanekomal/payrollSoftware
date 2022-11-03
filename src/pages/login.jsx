import React from 'react';
import { useState } from 'react';
export const Login=()=>{

    
    
    return(
        <form>
            <label for="email">Email</label>
            <input type="email" placeholder='abc@gamil.com' id="email" name="email" required/>
            <label for="password">Password</label>
            <input type="password" placeholder='********' id="password" name="password" required/>
            <button>Log In</button>
        </form>
    )
} 