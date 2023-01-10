import React, { useState } from "react";
import Axios from "axios";
// import { response } from "express";
// import e from "cors";

function AddParty() {
  const [partyDetails, setPartyDetails] = useState({
    name: "",
    date: "",
    leader: "",
    number: "",
  });
  const [party, setParty] = useState([]);

  const partyHandle = (e) => {
    setPartyDetails({ ...partyDetails, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    setParty([...party, partyDetails]);

    Axios.post(`http://localhost:4000/parties`, { partyDetails }).then(
      (response) => {
        console.log(response);
        console.log(response.data);
        return response.data
      }
    );
  };
  console.log(party);

  return (
    <div>
      <h5>Party Registration</h5>
      <form onSubmit={submitHandle}>
        <label>
          Official Name:
          <input type="text" name="name" onChange={partyHandle} />
        </label>
        <label>
          Starting Date:
          <input type="text" name="date" onChange={partyHandle} />
        </label>
        <label>
          Party Leader:
          <input type="text" name="leader" onChange={partyHandle} />
        </label>
        <label>
          No. of Members:
          <input type="number" name="number" onChange={partyHandle} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddParty;
