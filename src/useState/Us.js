import React, {useState} from 'react';

function Us() {
	// derieved data type ka state bana rhe h
	// const [msgObj, setMessage] = useState({message: ''});

	// const handleStateChange = (e) => {
	// let val = e.target.value;
	// aise nhi chalega, class components mei chaljaata yeh lekin yaha nhi
	// hoskta hai object mei 50 levels ho nested, to hooks bas address dekhta hai
	// kyunki humne mutable chnage kiya hai to wo dekhega ki address to same hi hai
	// rather than checking for values, react checks for address only for faster detection, address alag hai to matlab kuch changes huye hai
	// humne setstate wala call krdiya but wo dekhega ki address to same hi hai to kuch change mat kro
	// msgObj.message = val;
	// console.log(myObj.message);

	// To solution: new obj banao,so immutablwe change hoga
	// let obj = {message: val};
	// setMessage(obj);
	// OR :
	// setMessage({message: val});
	// OR :
	// setMessage({...msgObj, message: val});
	// };

	const [msgObj, setMessage] = useState({message: '', id: 1});

	const handleStateChange = (e) => {
		// class components mei setState krte time bas wohi key passs krte the jisme chnage huya baaki apne aap prev wali hi rehti thi.. Isme aisa nhi hota, agar yaha ab setMessage mei bas message bhejunga to ID lost hojayegi:
		// Eg:
		let val = e.target.value;
		// let obj = {message: val}; // ID lost
		// setMessage(obj);

		// SOlution
		let obj = {...msgObj, message: val}; // spread kiya to puri copy bann gyi hogi, ab message ko overwrite krdiya, to ID reserve rahi
		setMessage(obj);
	};

	return (
		<div>
			<input value={msgObj.message} onChange={handleStateChange} />
			<p>{msgObj.message}</p>
		</div>
	);
}

export default Us;
