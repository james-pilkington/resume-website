import React, {useState} from 'react';
import app from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function Write() {

  console.log(process.env);
  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "resume/portfolio"));
    set(newDocRef, {
      title: inputValue1,
      description: inputValue2,
      liveURL: inputValue3,
      gitURL: inputValue4,
    }).then( () => {
      alert("data saved successfully")
    }).catch((error) => {
      alert("error: ", error.message);
    })
  }


  return (
    <div>

      <h1>WRITE/HOMEPAGE</h1>

      <input type='text' value={inputValue1} 
      onChange={(e) => setInputValue1(e.target.value)}/> 

      <input type='text' value={inputValue2} 
      onChange={(e) => setInputValue2(e.target.value)}/> <br/>

      <input type='text' value={inputValue3} 
      onChange={(e) => setInputValue3(e.target.value)}/> <br/>

      <input type='text' value={inputValue4} 
      onChange={(e) => setInputValue4(e.target.value)}/> <br/>

      <button onClick={saveData}>SAVE DATA</button>
      <br />
      <br />
      <br />
      <button className='button1' onClick={ () => navigate("/updateread")}>GO UPDATE READ</button> <br />
      <button className='button1' onClick={ () => navigate("/read")}>GO READ PAGE</button>
    </div>
  )
}

export default Write