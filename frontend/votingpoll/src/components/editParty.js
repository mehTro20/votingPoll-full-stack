import React, { useEffect, useState } from "react";
import Axios from "axios";

function Vote() {
  const [partyVote, setPartyVote] = useState("");
  const [list, setList] = useState([]);
  const [partyId, setPartyId] = useState("");
  // const [selectParty, setSelectParty] = useState("");

  const handleChange = (e) => {
    // const value = e.target.value;
    // console.log(JSON.parse(partyVote.members));
    setPartyId({ id: e.target.value });
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/parties").then((res) => {
      console.log(res.data);
      setList(res.data);
      // setPartyVote("")
    });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(partyVote);
    console.log(partyId);

    Axios.put(`http://localhost:4000/parties/${partyId.id}`, {
      partyVote,
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <h5>Vote for your Party</h5>
      <form onSubmit={submitForm}>
        <label>
          ID of party:
          <input type="text" name="partyId" onChange={handleChange} />
        </label>
        <label>
          Place your vote:
          <button type="submit" name="partyVote">
            Vote
          </button>
        </label>
      </form>
    </div>
  );
}

export default Vote;
