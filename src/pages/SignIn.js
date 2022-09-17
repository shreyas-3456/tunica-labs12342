import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassowrd] = useState('');
	const [error, setError] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const resp = await axios.post(
				'https://react-crud-hiring.herokuapp.com/api/auth/local',
				{
					identifier: email,
					password,
				}
			);
			if (resp.status === 200) {
				navigate('/dashboard');
			}
		} catch (error) {
			setError(true);
		}
	};
	return (
		<div className="container">
			<div className="sign-in-container">
				<div className="title-container">
					<div className="line-orange"></div>
					<h2>CRUD OPERATIONS</h2>
				</div>
				<div className="info-container">
					<h4>Sign In</h4>
					<p>Enter your credentials to access your account</p>
				</div>
				<div className="form-container">
					<form action="">
						<label htmlFor="">Email</label>
						<input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="">Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassowrd(e.target.value)}
						/>
						{error && <p className="signInError">Invalid credentails</p>}
						<button className="form-button" onClick={handleSubmit}>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
