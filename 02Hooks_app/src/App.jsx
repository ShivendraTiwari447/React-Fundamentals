
import { useState } from "react";



function App() {

  // agar hmlog yese props ke through denge to data update
  //  nhi hoga esliye hm hooks use krte hai

  //  hooks - use state ,useref useeffect sb hooks hai


  // let counter =10;
  // const addValue =()=>{
  //   // console.log("value added ",Math.random())
  //   counter = counter +1;
  //   console.log("clicked",counter)
  // }

  // ---> now hooks 
  // let [counter, setCounter] = useState(15)
  // const addValue = () => {
  //   console.log(" before clicked ", counter)
  //   counter = counter + 1
  //   setCounter(counter)
  //   console.log(" after clicked ", counter)
  // }

  // const removeValue=()=>{
  //   setCounter(counter-1)
  // }



  let [counter,setCounter]=useState(0);
  const addValue=()=>{
    if(counter>=20){
      console.log("maxlimit exceed")
      
      return
    }
    setCounter(counter+1)

  }

  const removeValue=()=>{
    if(counter<=0){
      console.log("cannot be negative")
      return 
    }
    setCounter(counter-1)
  }

  
  return (
    <>
      <h1>Hooks concepts</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}> Add value {counter}</button> <br /><br /><br />
      <button onClick={removeValue}>Decrease value {counter}

      </button>
    </>
  )
}

export default App;