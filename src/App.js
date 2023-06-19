import {useEffect, useState} from "react";
import './App.css';

import Axios from "axios";




function App() {

  const [listofUsers, setListofUsers] = useState("");
  const [name, setName]= useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  useEffect(()=>{
    Axios.get("").then((response)=>{
      setListofUsers(response.data.myData)
    })
  })


  const createUser =()=>{
    Axios.post("",{
      name : name,
      username : username,
      age : age
    }).then((response)=>{
      setListofUsers([listofUsers, {
        name : name,
        username : username,
        age :  age
    

    }])
    })
  }






  return(
  <>
  <div>
    <input type="text" placeholder="enter your name" onChange={(e)=>{setName(e.target.value)}}  />
    <input type="text" placeholder="ernter your username" onchange={(e)=>{setUsername(e.target.value)}}/>
    <input type = "text" placeholder="enter your age" onChange={(e)=>{setAge(e.target.value)}}/>
    <button type="submit" onClick={createUser}>create user</button>
  </div>

  <div>
  {
    listofUsers.map((user)=>{
      return(
        <>
         <div>
            <h1>name : {user.name}</h1>
            <h1>username : {user.username}</h1>
            <h1>age : {user.age}</h1>
          </div>
        </>
      )
    })
  }
  </div>

  </>
  );
}

export default App;
