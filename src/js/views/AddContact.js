import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const { name, setName } = useState(null);

	return (
		<div className="container">
			<h1>Add a New Contact</h1>
			<form>
				<div className="form-group">
					<label> Full Name</label>
					<input type="text" className="form-control" placeholder="Full Name" />
				</div>
				<div className="form-group">
					<label> Full Name</label>
					<input type="text" className="form-control" placeholder="Full Name" />
				</div>{" "}
				<div className="form-group">
					<label> Full Name</label>
					<input type="text" className="form-control" placeholder="Full Name" />
				</div>
			</form>
		</div>
	);
};
