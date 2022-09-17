import { useState } from 'react';

const Modal = ({ setModalOpen, data: arrayData }) => {
	const intailState = {
		name: '',
		Email: '',
		Phone: '',
		enrollNum: '',
		dataOfAdmission: '',
	};
	const [data, setData] = useState({
		...intailState,
	});
	const handleChange = (e) => {
		const name = e.target.name;
		setData((oldState) => {
			return { ...oldState, [name]: e.target.value };
		});
	};
	const handleSubmit = () => {
		setModalOpen(false);
		arrayData.push(data);
		setData({ ...intailState });
	};
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="title">
					<h1>Add / Edit Student</h1>
				</div>
				<div className="modal-input-container">
					<div className="modal-input">
						<label htmlFor="">Name</label>
						<input
							type="text"
							name="name"
							value={data.name}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-input">
						<label htmlFor="">Email</label>
						<input
							type="email"
							name="Email"
							value={data.Email}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-input">
						<label htmlFor="">Phone</label>
						<input
							type="ph"
							name="Phone"
							value={data.Phone}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-input">
						<label htmlFor="">Enroll Number</label>
						<input
							type="text"
							name="enrollNum"
							value={data.enrollNum}
							onChange={handleChange}
						/>
					</div>
					<div className="modal-input">
						<label htmlFor="">Date of admission</label>
						<input
							type="text"
							name="dataOfAdmission"
							value={data.dataOfAdmission}
							onChange={handleChange}
						/>
					</div>

					<button className="modal-button" onClick={handleSubmit}>
						submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
