import { useState } from 'react';
import { upDown } from '../assets';
import { data } from '../assets/data/data';
import Item from '../Components/Item';
import Modal from '../Components/Modal';
import Sidebar from '../Components/Sidebar';

const Student = () => {
	const [modalOpen, setModalOpen] = useState(false);
	if (modalOpen) {
	}
	return (
		<div className="dashboard-container">
			<Sidebar />
			<div className="dashboard-box">
				<div className="student-nav">
					<h1>Students List</h1>
					<img src={upDown} alt="" />
					<button onClick={() => setModalOpen(true)}>ADD NEW STUDENT</button>
				</div>
				{modalOpen && <Modal setModalOpen={setModalOpen} data={data} />}
				<table className="data-container">
					<tbody>
						<tr className="container-heading">
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Enroll number</th>
							<th>Date of admission</th>
						</tr>
						{data.map((item, index) => {
							return <Item {...item} key={index} />;
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Student;
