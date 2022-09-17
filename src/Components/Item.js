import React from 'react';
import { deleteButton, edit } from '../assets';

const Item = (item) => {
	const { name, Email, Phone, enrollNum, dataOfAdmission } = item;
	return (
		<tr className="container-data">
			<th>{name}</th>
			<th>{Email}</th>
			<th>{Phone}</th>
			<th>{enrollNum}</th>
			<th>{dataOfAdmission}</th>
			<th>
				<img src={edit} alt="" />
			</th>
			<th>
				<img src={deleteButton} alt="" />
			</th>
		</tr>
	);
};

export default Item;
