import React, {useContext} from 'react';
import MyContext from './Context';
import DemoChild from './DemoChild';

// function Demo() {
// 	const val = useContext(MyContext);
// 	console.log(val);
// 	return <DemoChild></DemoChild>;
// }
// export default Demo;

// Abhi humara kya ho rha hai?Bas jo default value di thi wohi yeh use kr rhe hai
// hum chahte hai ki jab bhi default value change kr rhe hai to jo jo compoennt wo valur consume  kr rhe hai usnem wo valuee change hojaye aaur wo  rerender hojaye
// Iske liye jin jin component mei yeh facility chahiye unhe Provider component ke andar wrap krna hota hai
// jaise maanlo theme dark se light kiya upar parent pe to neeche jo jo use kr rhe the unme bhi light hona chahiye aur rerender
// jo jo Provider ke andar wrap honge wo updated value consume kr skte hai, matlab subsreibe hogye wo uss value ke saath

{
	/* <MyContext.Provider value="">
   <Demo/> // demo child ke liye alag se likhne ke zarurat nhi hai, demo ke sabhi child pe chali jayegi apne app, jo jo useContext krega
</MyContext.Provider> */
}

// abjab parent render hoga to sabhi child render honge, jinme kuch change nhi bhi huya hoga(kyunki unme context ka use nhi kiya humne) wo bhi render hojayenge, to usko rokne ke liye React.Memo hota hai.. but jo components context use kr rhe hai, wo to rerender honge hi honge change hone pe

// function Demo() {
// 	console.log('Demo render');
// 	const val = useContext(MyContext);
// 	console.log(val);
// 	return <DemoChild></DemoChild>;
// }
// export default Demo;

// Ab agar demo mei use context na use kre phir bhi wo render hoga phirse:
// function Demo() {
// 	console.log('Demo render');
// 	return <DemoChild></DemoChild>;
// }
// export default Demo;

// Isko stop krne ke liye React.memo use krte hai:
function Demo() {
	console.log('Demo render');
	return <DemoChild></DemoChild>;
}
export default React.memo(Demo);
