import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <section class="login">
		<div class="login_box">
			<div class="left">
				<div class="contact">
					<form action="">
						<h1><strong>Sign Up</strong></h1>
						<input type="text" placeholder="Username"/>
						<input type="password" placeholder="Password"/>
						<input type="email" placeholder="Email Id"/>
						<input type="text" placeholder="Enter Aadhar Card Number"/>
						<label for="myfile">Upload image of Aadhar Card below:</label>
						<input type="file" id="myfile" name="myfile"/>
						<input type="text" placeholder="Your Emergency Contacts:"/>
						<NavLink to="/login" className="submit">Sumit</NavLink>
						<h4><Link to="/login">Already have an account?</Link></h4>
					</form>
				</div>
			</div>
			<div class="right">
			</div>
		</div>
	</section>

  )
}

export default Signup