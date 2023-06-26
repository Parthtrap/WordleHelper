import React, { useEffect } from "react";
import axios from "axios";

function App() {
	const [possibleWords, setPossibleWords] = React.useState(["LOADING..."]);
	const [selectedColor, setSelectedColor] = React.useState("grey");
	const [selectedCharacter, setSelectedCharacter] = React.useState("A");
	const [selectedPosition, setSelectedPosition] = React.useState("1");

	useEffect(() => {
		axios.get("http://localhost:8000").then((res) => {
			console.log(res.data);
			setPossibleWords(res.data);
		});
	}, []);

	const handleColorChange = (event) => {
		console.log(event.target.value);
		setSelectedColor(event.target.value);
	};

	const handleCharacterChange = (event) => {
		var letters = /^[A-Za-z]+$/;
		if (event.target.value.match(letters)) {
			setSelectedCharacter(
				event.target.value[event.target.value.length - 1].toUpperCase()
			);
			console.log(selectedCharacter);
		}
	};

	const handlePositionChange = (event) => {
		var numbers = /^[1-5]+$/;
		if (event.target.value.match(numbers)) {
			setSelectedPosition(
				event.target.value[event.target.value.length - 1]
			);
			console.log(selectedPosition);
		}
	};

	const handleSubmit = () => {
		const options = {
			headers: { "X-Custom-Header": "value" },
		};
		axios
			.post(
				"http://localhost:8000",
				{
					color: selectedColor,
					character: selectedCharacter,
					position: selectedPosition,
				},
				options
			)
			.then((res) => {
				console.log(res.data);
				setPossibleWords(res.data);
			});
	};

	const handleReset = () => {
		axios.get("http://localhost:8000/reset").then((res) => {
			console.log(res.data);
			setPossibleWords(res.data);
		});
	};

	return (
		<>
			<div className="grid grid-cols-5">
				<div className="col-span-4 flex flex-wrap h-screen overflow-scroll">
					{possibleWords.map((element) => {
						return (
							<div
								key={element}
								className="m-3 bg-slate-300 shadow-sm text-center rounded-full w-24 h-fit"
							>
								{element}
							</div>
						);
					})}
				</div>
				<div className="mt-10 border-4 border-black w-fit rounded-xl m-5 p-5">
					<span className="text-lg font-bold">Colour</span>
					<div>
						<label>
							<input
								type="radio"
								value="grey"
								className="mr-2"
								checked={selectedColor === "grey"}
								onChange={handleColorChange}
							/>
							Grey
						</label>
						<br />
						<label>
							<input
								type="radio"
								value="yellow"
								className="mr-2"
								checked={selectedColor === "yellow"}
								onChange={handleColorChange}
							/>
							Yellow
						</label>
						<br />
						<label>
							<input
								type="radio"
								value="green"
								className="mr-2"
								checked={selectedColor === "green"}
								onChange={handleColorChange}
							/>
							Green
						</label>
					</div>
					<div className="flex my-3">
						<span className="text-lg font-bold mr-2">
							Character
						</span>
						<input
							type="text"
							className="border-2 border-black rounded-full w-10 text-center"
							value={selectedCharacter}
							onChange={handleCharacterChange}
						/>
					</div>
					<div className="flex my-3">
						<span className="text-lg font-bold mr-2">Position</span>
						<input
							type="text"
							disabled={selectedColor == "grey" ? true : false}
							className="border-2 border-black rounded-full w-10 text-center"
							value={
								selectedColor == "grey" ? "-" : selectedPosition
							}
							onChange={handlePositionChange}
						/>
					</div>

					<button
						className="border-2 border-black rounded-full px-2 mx-2"
						onClick={handleSubmit}
					>
						Submit
					</button>
					<button
						className="border-2 border-black rounded-full px-2"
						onClick={handleReset}
					>
						Reset
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
