import React, {useState, useEffect} from 'react';

// Ab sirf componentDidMount jaise act karana hai to 2nd variation use krenge
// In 2nd variation , there is presnce of dependency array
// empty dependency array
// componentdidmount jaise hai to bas first render ke baad chalega
function Ue2() {
   const [count, setCount] = useState(0);
	useEffect(() => {
      console.log('use Effect');
		document.title = `clicked ${count}`;
	}, []);
   console.log('render');
	return (
		<div>
			<p>You clicked the button {count} times</p>
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

export default Ue2;
