import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
  return (
    
	<section className="login">
		<div className="login_box">
			<div className="left">
				<div className="top_link">
					<Link to="/">Return back to Home Page</Link>
					</div>
				<div className="contact">
					<form action="">
						<h1>Login</h1>
						<input type="text" placeholder="USERNAME"/>
						<input type="password" placeholder="PASSWORD"/>
						<NavLink to="/hero" className="submit">Sumit</NavLink>
						<Link to='/signup'>Create an Account</Link>
					</form>
				</div>
			</div>
			<div className="right">
			</div>
		</div>
	</section>

  )
}

export default Login