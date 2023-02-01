import React, { useState } from "react";
import axios from "axios";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [songs, setSongs] = useState([{ track: "" }]);
  const [userInput, setUserInput] = useState("");

  const collectedData = (e) => {
    setUserInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchData(userInput);
    }
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
      <TextField
        type="text"
        id="standard-basic"
        label="Search Music Libary"
        variant="standard"
        onChange={(e) => {
          collectedData(e);
        }}
        onKeyPress={handleEnter}
        value={userInput}
      ></TextField>

      <IconButton
        color="primary"
        component="label"
        onClick={() => fetchData(userInput)}
        size="small"
      >
        <SearchIcon />
      </IconButton>

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
