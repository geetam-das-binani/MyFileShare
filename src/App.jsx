import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { UploadData } from "../api";

export default function App() {
	const fileInput = useRef();
	const [File, setFile] = useState("");
	const [Result, setResult] = useState("");

	const handleClick = () => {
		fileInput.current.click();
	};
	const sendFileData = async () => {
		const data = new FormData();
		// data.append("name", File.name);
		data.append("file", File);

		const response = await UploadData(data);

		setResult(response.data.path);
	};
	useEffect(() => {
		if (File) {
			sendFileData();
		}
	}, [File]);

	return (
		<div className="container">
			<div className="left">
				<img
					src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
					alt="nature picture"
				/>
			</div>
			<div className="right">
				<h2>Simple File Sharing</h2>
				<h3>Upload files below</h3>
				<Button
					onClick={handleClick}
					style={{ margin: "1rem 0" }}
					variant="contained"
				>
					Upload
				</Button>
				<input
					onChange={({ target }) => setFile(target.files[0])}
					ref={fileInput}
					type="file"
					hidden
				/>
				{Result && <h3>Click the below link to download</h3>}

				<a style={{ textDecoration: "none" }} href={Result}>
					{Result}
				</a>
			</div>
		</div>
	);
}
