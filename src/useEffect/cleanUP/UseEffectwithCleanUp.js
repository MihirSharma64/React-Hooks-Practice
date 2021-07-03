import React, {useState, useEffect} from 'react';

function UseEffectwithCleanUp() {
	console.log('render');
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('use effect');
		document.title = `Clicked ${count} times`;

		// cleanup
		// yeh return wala function iske next useeffect call hone se pehle chalta hai
		// matlab useeffect run hone se pehle we apne predecessor wale useeffect ka yeh return
		// wala function chalata hai
		return () => {
			alert(`I will be called just before the next useeffect is called ${count}`);
		};
	});


   // Ab agar useeffet ko componentdidmount ki tarah use kre matlab empty dependency array pass kre, to useffect to ek baar
   // hi chalega to uske return ke chalne ke liye agla useeffect to hoga nhi koi jisse pehle wo chal jaye
   // to wo returned func tabhi chalega jab component unmount hone wala hoga
   // so that will act as componentwillunmount
   // therefore when useffect is used as componentdidmount , its return func acts as componentwillunmount

   useEffect(() => {
		console.log('use effect');
		document.title = `Clicked ${count} times`;
		return () => {
			alert(`I will be called just before the next useeffect is called ${count}`);
		};
	},[]);

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
}

export default UseEffectwithCleanUp;
