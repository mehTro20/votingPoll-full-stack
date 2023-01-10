import React, { useEffect, useState } from "react";
import Axios from "axios";
import AddParty from "./components/addParty";
import DeletParty from "./components/deleteParty";
import Vote from "./components/editParty";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [post, setPost] = useState([]);

  const getData = () => {
    Axios.get(`http://localhost:4000/parties`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        //  console.log(error.response.data.error)
      });
  };
  useEffect(() => {
    Axios.get("http://localhost:4000/parties").then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  return (
    <div>
      <button onClick={getData}>Get</button>
      Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.name}</h3>
            <p>
              {item.leader}, since .{item.startingDate}
            </p>
          </div>
        );
      })}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/AddParty" element={<AddParty />}></Route>
            <Route path="/DeleteParty" element={<DeletParty />}></Route>
            <Route path="/Vote" element={<Vote />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
