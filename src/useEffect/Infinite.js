import React,{useState,useEffect} from 'react'

function Infinite() {

   const [count,setCount] = useState(0);
   console.log('render');
   // yeh infinite time chalega, console O/P:"render" , "useeffect".......infinite times
   useEffect(()=>{
      console.log("Use Effect");
      // Remember primitive data type like string , num mei state set krte time to direct val compare krleta hai react rether than checking address, kyunki direct check hai

      let num = Math.random()*100;
      setCount(num); 
   });

   // to kabhi useEffect mei setState krna ho to aisa khulle mei mat krna, yaa to koi condition lagake krna jo specific tikmes hi chale ya 
   // phir pass dependency arrays that useeffect runs only 1 time
   return (
      <div>
         <h1>Clicked {count} times</h1>
         <button onClick={()=>{setCount(count+1)}}>Click</button>
      </div>
   )
}

export default Infinite
