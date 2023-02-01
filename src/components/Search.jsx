import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [songs, setSongs] = useState([{ track: "" }]);
  const [userInput, setUserInput] = useState("");

  const collectedData = (e) => {
    setUserInput(e.target.value);
  };

  console.log(userInput);

  const fetchData = (inputs) => {
    const params = { term: inputs, media: "music", limit: 20 };
    axios
      .get("https://itunes.apple.com/search?", { params })
      .then((response) => {
        console.log(response.data);
        setSongs(response.data.results);
      });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          collectedData(e);
        }}
        value={userInput}
      />
      <button onClick={() => fetchData(userInput)}>fetch data</button>

      {songs.map((s) => (
        <div>
          <h3>{s.trackName}</h3>
          <img src={s.artworkUrl100} alt="" />
          <h5>{s.artistName}</h5>
        </div>
      ))}
    </div>
  );
};

export default Search;
