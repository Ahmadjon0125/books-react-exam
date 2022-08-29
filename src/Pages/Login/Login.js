import './login.scss'
import signInImg from '../../assets/images/signInImg.png'
import { useRef } from 'react'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'
import {NavLink,  Outlet,  Route, Routes } from "react-router-dom"
import Registration from '../Registration/Registration'

export function Login() {

	const {token, setToken} = useAuth()
	console.log(token);

	const emailVal = useRef()
	const passwordVal = useRef()
	const signInForm = (evt) =>{
		evt.preventDefault()

		axios
			.post("https://book-service-layer.herokuapp.com/user/login", {
				email: emailVal.current.value,
				password: passwordVal.current.value
			})
			.then(res =>{
				if(res.data){
					setToken(res.data)
				}
			})
			.catch(err =>{console.log(err)})

	}


  return (
    <div className="container">
			<div className="signIn">
				<div className="signIn__left">
					<img
						src={signInImg}
						alt="signInImg"
						className="signInImg"
						width={500}
						height={500}
					/>
				</div>
				<div className="signIn__right">
					<h2 className="signIn__title">Sign in</h2>
					<p className="signIn__text">Do not you have an account? <NavLink to="/registration">Sign up</NavLink></p>
					<form className="signIn__form" onSubmit={signInForm}>
						<input
									ref={emailVal}
							className="signIn__input"
							type="email"
							placeholder="Email"
							name="Email"
						/>
						<input
									ref={passwordVal}
							className="signIn__input"
							type="password"
							placeholder="Password"
							name="Password"
						/>
						<button className="signIn__button" type="submit">
							Next step
						</button>
					</form>
				</div>
			</div>
			{/* <Route path="/registration" element={<Registration />}></Route> */}
			{/* <Outlet/> */}
		</div>
  )
}


