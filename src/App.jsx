import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //    [readOnlyData, functionToUpdateReadOnlyData] = sourceOfData(defaultData);
  const [count, setCount] = useState(0);
  const [favouriteFruit] = useState("mango");

  /*
  Lifecycle methods:
  - componentDidMount - when the component first loads 
  - componentWillUnmount - when the component unloads from the page
  - componentDidUpdate - when the component re-renders
  */

  // componentDidUpdate - still things to do!
  useEffect(() => {
    console.log("App component updated!");
    console.log("Count is now: " + count);
  }, [count]);
  // useEffect(callback, dependencies);

  useEffect(() => {
    console.log("User's favourite fruit is: " + favouriteFruit);
  }, [favouriteFruit]);

  useEffect(() => {
    console.log("Count or favouriteFruit updated!");
  }, [count, favouriteFruit])

  // componentDidMount specifically does NOT depend on any state variables
  useEffect(() => {
    console.log("App component has booted up!");

    // componentWilUnmount is just a return value from a useEffect
    return (() => {
      console.log("App component is unloading from the page now.");
    });

  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((previousCount) => previousCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
