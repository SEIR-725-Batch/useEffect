import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState(null);
  const [counter, setCounter] = useState(0);
  // Only reads useState the first time the component is built
  // setColor can update the state and read things again
  console.log(color);
  
  const fetchColors = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`r is ${r}, g is ${g}, and b is ${b}`)
    fetch(`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setColor(res)
        })
  }

  // React will only run useEffect if it's just built
  useEffect(() => {
    fetchColors()
  }, [counter])

  const updateCounter = () => {
    // const updatedTotal = counter + 1;
    // console.log(`The updatedTotal is ${updatedTotal}`);
    setCounter(counter + 1);
  }
  // The second argument stops useEffect from running when the rest of App.js is built

  // if(color) {
  //   return (<img src={color.image.bare} alt={color.name.value} />)
  // } else {
  //   return "Loading"
  // }

  return (
    <>
      <h1>Hello World</h1>
      {color ? <img src={color.image.bare} alt={color.name.value} /> : <h2>Loading</h2>}
      <button onClick={() => {setCounter(counter + 1)}}>Click Me</button>
      <h3>Counter: {counter}</h3>
    </>
  );
}

export default App;
