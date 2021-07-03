import React, {useState, useEffect} from 'react';

// 1st variation of useEffect-> when no dependancy arr is passsed
// It runs after every render, functional mei render ka matlab kya hota hai? Pura function phirse run hona..To useeffect pura function run hone ke baad chalega
// Class component mei componentdid mount bas first render ke baad chalta tha aur component did update har renderke baad , yeh useEffect ka yeh wala variation har render ke baad chalta hai to yeh undono ka mixture hai ek tareeke se
// avoid changing state herer to avoid infinite loop
function Ue1() {
	useEffect(() => {
		console.log('use effect');
		document.title = `Clicked ${count} times`;
	});
	console.log('render');
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click
			</button>
		</div>
	);
}

export default Ue1;
