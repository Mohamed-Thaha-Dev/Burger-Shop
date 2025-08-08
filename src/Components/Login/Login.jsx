import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'


const Login = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("Sign Up")
  return (
    <div className='login_popup'>
        <form className='login_popup_container'>
            <div className='login_popup_title'>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className='login_popup_inputs'>
                {currentState ==="Login"?<></>:<input type="text" placeholder='Enter Your Name' required/> }
                <input type="email" placeholder='Enter Your Email' required/>
                <input type="password" placeholder='Enter Password' required/>
            </div>
            <button>{currentState === "Sign Up"?"Create Account":"Login"}</button>
            <div class="login_popup_condition">
                <input type="checkbox" required/>
                <p>By Continuing,I Agree to the terms of use & privacy policy.</p>
            </div>
            {currentState === "Login" ?
            <p>Create a New Account ? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
            <p>Already have a Account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
        </form>
    </div>
  )
}

export default Login