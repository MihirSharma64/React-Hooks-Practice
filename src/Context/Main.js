import React, {useState} from 'react';
import Demo from './Demo';
import MyContext from './Context';

function Main() {
	console.log('Render');
	const [count, setCount] = useState(0);
	return (
		//   <div>
		//<button onClick={() => setCount(count + 1)}>Click</button>
		//	<Demo />
		//</div>
		<div>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<MyContext.Provider value={count}>
				<Demo />
			</MyContext.Provider>
		</div>
	);
}

export default Main;
// provider ke andar jo bhi wrapped hote hai unki subscription hojati hai context ki value se agar wo usecontext kr rhe hote hai to
// matlab jab bhi context ki value change hogi to pkka se wo rerender honge hi honge chhahe memo bhi use krlo
