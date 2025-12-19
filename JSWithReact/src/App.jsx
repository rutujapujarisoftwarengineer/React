import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Rutuja Pujari";
  let x = 10;
  let y = 20;

  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    }
    else if (op == "-") {
      return a - b;
    }
    else {
      return a * b;
    }
  }
  return (
    <div>
      <h1>{operation(5, 3, "+")}</h1>
      <h1>{operation(5, 3, "-")}</h1>
      <h1>{operation(5, 3, "")}</h1>

    </div>
  );
}

// function fruit() {
//     return "Apple";
//   }
//  <h1>JSX with Curly Braces</h1>
// <h2>{name}</h2>
// <h1>{x + y}</h1>

//  <h1>{name ? name : "User not Found"}</h1> 
//  <h2>{fruit()}</h2>

//Using Objects and Arrays with JSX
// function App() {
//   const userObj = {
//     name: "anil Sidhu",
//     email: "anil@test.com",
//     age: 29,
//   };

//   return (
//     <div>
// <h1>{userObj.name}</h1>
//       <h1>{userObj.email}</h1>
// <h1>{userObj.age}</h1>
//     </div>
//   );
// }

// Working with arrays:
// function App() {
//   const userArray = ["sam", "peter", "bruce"];

//   return (
//     <div>
// <h1>{userArray[0]}</h1>
//     </div>
//   );
// }

// Using HTML Tag Attributes with JSX
// function App() {
//   const name = "peter";
//   let path =
// "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

//   return (
//     <div>
//       <input type="text" value={name} id={name} />
//       <br />
//       <img src={path} />
//     </div>
//   );
// }

export default App;
