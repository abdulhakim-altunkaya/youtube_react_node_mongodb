import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Read() {

  let [serverData, setServerData] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/connectserver');
        setServerData(response.data.message);  
        console.log(response.data);     
      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
  }, []);
  

  return (
    <div>
      <h1>READ DATA FROM SERVER</h1>
      <p>{serverData}</p>
    </div>
  )
}

export default Read;