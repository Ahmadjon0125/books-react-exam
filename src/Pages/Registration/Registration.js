import './registration.scss'
import signUpImg from '../../assets/images/signUpImg.png'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'
import { NavLink, Outlet } from "react-router-dom"
import Login from '../Login/Login'
import useLang from '../../hooks/useLang'


export function Registration() {
	let [lang] = useLang()
	const {token, setToken} = useAuth()
	console.log(token)

  function signUpForm(evt) {
		evt.preventDefault()

		const signUpFormData = new FormData()
		const {
			First_name, Last_name, Phone, Email, Password,
		} = evt.target.elements

		signUpFormData.append('first_name', First_name.value)
		signUpFormData.append('last_name', Last_name.value)
		signUpFormData.append('phone', Phone.value)
		signUpFormData.append('email', Email.value)
		signUpFormData.append('password', Password.value)

		axios
			.post(`https://book-service-layer.herokuapp.com/user/register`, signUpFormData)
			.then(response => setToken(response.data))
			.catch(err => console.log(err))
	}
  return (
    <div className="container">
			<div className="signUp">
				<div className="signUp__left">
					<img
						src={signUpImg}
						alt="signUpImg"
						width={500}
						height={500}
						className="signUp__left-img"
					/>
				</div>
				<div className="signUp__right">
					<h2 className="signUp__title">Sign up</h2>
					<p className="signUp__text">Already have an account? <NavLink to="/">Sign in</NavLink></p>
					<form className="signUp__form" onSubmit={signUpForm}>
						<input
							className="signUp__input"
							type="text"
							name="First_name"
							placeholder="First name"
						/>
						<input
							className="signUp__input"
							type="text"
							name="Last_name"
							placeholder="Last name"
						/>
						<input
							className="signUp__input"
							type="tel"
							name="Phone"
							placeholder="Phone"
						/>
						<input
							className="signUp__input"
							type="email"
							name="Email"
							placeholder="Email"
						/>
						<input
							className="signUp__input"
							type="password"
							name="Password"
							placeholder="Password"
						/>
						<button className="signUp__button" type="submit">
							Next step
						</button>
					</form>
				</div>
			</div>
			{/* <Outlet/> */}
		</div>
  )
}


