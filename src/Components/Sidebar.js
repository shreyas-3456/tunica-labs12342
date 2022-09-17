import {
	arrow,
	bookmark,
	dollar,
	file,
	hat,
	home,
	profilePic,
	setting,
} from '../assets';

import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Sibebar = () => {
	return (
		<nav className="navbar">
			<Navbar />
			<aside className="sidebar-dashboard">
				<div className="side-title-container">
					<div className="line-orange"></div>
					<h4>CRUD OPERATIONS</h4>
				</div>
				<div className="image-container">
					<img src={profilePic} alt="" />
					<h4 style={{ marginTop: '20px' }}>Karthi Madesh</h4>
					<p style={{ color: '#FEAF00', marginTop: '20px' }}>Admin</p>
				</div>
				<div className="sidebar-button-container">
					<div className="button-icon  ">
						<NavLink
							className="icon-link  "
							to="/dashboard"
							style={({ isActive }) => {
								return { background: isActive ? '#FEAF00 ' : 'none' };
							}}
						>
							<img src={home} alt="" />
							<p>Home</p>
						</NavLink>
					</div>
					<div className="button-icon ">
						<NavLink className="icon-link">
							<img src={bookmark} alt="" />
							<p>Course</p>
						</NavLink>
					</div>
					<div className="button-icon">
						<NavLink
							className="icon-link"
							to="/student"
							style={({ isActive }) => {
								return { background: isActive ? '#FEAF00 ' : 'none' };
							}}
						>
							<img src={hat} alt="" />
							<p>Students</p>
						</NavLink>
					</div>
					<div className="button-icon">
						<NavLink className="icon-link">
							<img src={dollar} alt="" />
							<p>Payments</p>
						</NavLink>
					</div>
					<div className="button-icon">
						<NavLink className="icon-link">
							<img src={file} alt="" />
							<p>Reports</p>
						</NavLink>
					</div>
					<div className="button-icon">
						<NavLink className="icon-link">
							<img src={setting} alt="" />
							<p>Settings</p>
						</NavLink>
					</div>
				</div>
				<div className="aside-bottom">
					<div className="aside-icon">
						<Link className="icon-link">
							<p>Logout</p>
							<img src={arrow} alt="" />
						</Link>
					</div>
				</div>
			</aside>
		</nav>
	);
};

export default Sibebar;
