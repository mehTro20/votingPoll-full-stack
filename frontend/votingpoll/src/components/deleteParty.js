import React, { useState } from "react";
import Axios from "axios";

function DeletParty() {
  const [removeParty, setRemoveParty] = useState("");

  const handleChange = (e) => {
    setRemoveParty({ id: e.target.value });
  };

  const handleRemove = (e) => {
    e.preventDefault();

    Axios.delete(`http://localhost:4000/parties/${removeParty.id}`).then(
      (res) => {
        console.log(res);
        console.log(res.data);
      }
    );
  };

  return (
    <div>
      <h5>Remove Party</h5>
      <form onSubmit={handleRemove} >
        <label>
          Insert Party ID:
          <input type="text" name="id" onChange={handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeletParty;
