import React, {useState} from 'react'
import axios from 'axios';

function Write() {

  let [inputData, setInputData] = useState(""); 

  const saveData = async () => {
    try {
      await axios.post("http://localhost:5000/connectdatabase", {content: inputData});
      alert("data saved");
    } catch (error) {
      console.log("error while saving data to mongodb", error.message);
    }
  }

  return (
    <div>
      <input 
        type="string"
        placeholder='enter some text'
        value={inputData}
        onChange={ e => setInputData(e.target.value)}/>
      <button onClick={saveData}>Save Data</button>
      <p>{inputData}</p>
    </div>
  )
}

export default Write