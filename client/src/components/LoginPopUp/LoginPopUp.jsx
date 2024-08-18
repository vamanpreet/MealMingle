import React, { useState } from 'react'
import './LoginPopUp.css'
import {assets} from '../../assets/assets'
import PropTypes from 'prop-types'

const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState ==="Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                {currState === "Sign Up" ? <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p> By continuing, i agree to the terms of use & privecy policy.</p>
                </div> : <></>}
                <button>{currState === 'Sign Up'? "Create account" : "login"}</button>
                {currState === "Login" ?
                <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
                <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login</span></p>}
            </form>
        </div>
    )
}

LoginPopUp.propTypes = {
    setShowLogin: PropTypes.func.isRequired 
}

export default LoginPopUp
