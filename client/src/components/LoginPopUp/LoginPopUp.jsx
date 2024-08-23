import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import {assets} from '../../assets/assets'
import PropTypes from 'prop-types'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login")
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData(data => ({...data, [name]: value}))
    }

    const onLogin = async (e) => {
        e.preventDefault()
        let newUrl = url;
        if(currState === "Login") {
            newUrl += '/api/user/login'
        } else {
            newUrl += '/api/user/register'
        }

        try {
            const response = await axios.post(newUrl, data)
            
            if(response.data.success) {
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
                setShowLogin(false)
            } else {
                alert(response.data.message)
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState ==="Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your name' required />}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your email' required />
                    <div className="password-input-container">
                        <input type={showPassword ? "text" : "password"} name='password' onChange={onChangeHandler} value={data.password} placeholder='Your password' required />
                        <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                    </div>
                </div>
                {currState === "Sign Up" ? <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p> By continuing, i agree to the terms of use & privecy policy.</p>
                </div> : <></>}
                <button type='submit'>{currState === 'Sign Up'? "Create account" : "login"}</button>
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
