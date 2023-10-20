import React, {useState} from 'react'

function Write() {

  let [inputData, setInputData] = useState(""); 

  const saveData = async () => {
    console.log(inputData);
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