import React, {useState, useEffect} from 'react';
import './Ue3.css';

function Ue3() {
	console.log('render');
	const [count, setCount] = useState(0);
	const [darkmode, setDarkMode] = useState(false);

	// Aisa krne se jab countset hoga ya darkmode set hoga tab re render hoga phi use effect chalega dono hi case mei..But kya hume darkmode ke change se kuch show krna hai useeffect mei? Hume  to bas count change hone pe useeffect chalana hai phirse taaki title change hojaye phir
	// useEffect(() => {
	// 	console.log('use Effect');
	// 	// document.title = `Clicked ${count} times`;
	// });

	// to hum chhate hai ki bas jab count state change ho tabhi useefect chale, darkmode pe nhi
	// to aisa krne ke liye third variation use krenge, aisa krne pe jab count ka state change hoga tabhi useeefect chalega
	// 3rd varitaion -> non empty dependency array.
	// so the values that we pass to dependency array, only unke state change hone pe useeffect runs
	// 1st render ke baad to ofc chalega hi useeffect
	useEffect(() => {
		console.log('use Effect');
		document.title = `Clicked ${count} times`;
	}, [count]); // wo state set krdiya jispe useeffect depend krega
	return (
		<div className={darkmode === true ? 'view dark-mode' : 'view'}>
			<label htmlFor="darkMode">Dark Mode</label>
			<input type="checkbox" checked={darkmode} onChange={() => setDarkMode(!darkmode)} />
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				{count}
			</button>
		</div>
	);
}

export default Ue3;
