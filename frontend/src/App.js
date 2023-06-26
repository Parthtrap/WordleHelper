import React, { useEffect } from "react";

function App() {
	const [possibleWords, setPossibleWords] = React.useState(["EARTH"]);
	const [selectedColor, setSelectedColor] = React.useState("gray");
	const [selectedCharacter, setSelectedCharacter] = React.useState("A");
	const [selectedPosition, setSelectedPosition] = React.useState("1");

	useEffect(() => {}, []);

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
	return (
		<>
			<div class="grid grid-cols-3">
				<div class="col-span-2 flex flex-wrap">
					{possibleWords.map((element) => {
						return (
							<div className="m-3 bg-slate-300 shadow-sm text-center rounded-full w-20 h-fit">
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
								value="gray"
								className="mr-2"
								checked={selectedColor === "gray"}
								onChange={handleColorChange}
							/>
							Gray
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
							className="border-2 border-black rounded-full w-10 text-center"
							value={selectedPosition}
							onChange={handlePositionChange}
						/>
					</div>

					<button className="border-2 border-black rounded-full px-2 mx-2">
						Submit
					</button>
					<button className="border-2 border-black rounded-full px-2">
						Reset
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
