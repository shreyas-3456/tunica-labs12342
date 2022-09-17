import React from 'react';
import Sidebar from '../Components/Sidebar';
import { dollarYellow, hatBlue, orangeBook, person } from '../assets';
const Dashboard = () => {
	return (
		<div className="dashboard-container">
			<Sidebar />
			<div className="dashboard-box">
				<div className="card-container">
					<div className="card">
						<img src={hatBlue} alt="" />
						<h1>243</h1>
					</div>
					<div className="card">
						<img src={orangeBook} alt="" />
						<h1>13</h1>
					</div>
					<div className="card">
						<img src={dollarYellow} alt="" />
						<h1>INR 556,000</h1>
					</div>
					<div className="card card-orange">
						<img src={person} alt="" />
						<h1>3</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
