import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [userName, setUserName] = useState("");
	const [showAlert, doShowAlert] = useState(false);

	let InvalidAlert = (
		<div className="alert alert-danger" role="alert">
			Invalid input, please fix!
		</div>
	);

	const updateInfo = e => {
		let value = e.target.value;
		setInputValue(value);
		if (value === "") {
			doShowAlert(true);
			setInputValue("");
			setUserName("");
		} else {
			doShowAlert(false);
			setUserName("");
		}
	};

	const validateData = () => {
		console.log("validating data... ");
		const usersInput = inputValue.trim();
		if (usersInput === "") {
			console.log("invalid users input");
			setUserName("");
			doShowAlert(true);
		} else {
			setUserName(inputValue);
			doShowAlert(false);
		}
	};

	return (
		<div className="text-center mt-5">
			<input type="text" value={inputValue} onChange={updateInfo} />{" "}
			&nbsp;
			<button className="btn btn-primary" onClick={validateData}>
				Say hello
			</button>
			<hr width="100%" />
			{showAlert == false && userName != "" && <h1>Hello {userName}</h1>}
			{showAlert && InvalidAlert}
		</div>
	);
}
