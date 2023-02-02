import React, { useState } from "react";
import axios from "axios";
import { TextField, IconButton, Container, Grid, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MusicCard from "./MusicCard";

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
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 6,
          mb: 4,
          backGround: "none",
        }}
      >
        <TextField
          type="text"
          id="standard-basic"
          label="Search Music Libary"
          onChange={(e) => {
            collectedData(e);
          }}
          onKeyPress={handleEnter}
          value={userInput}
        ></TextField>

        <IconButton
          component="label"
          onClick={() => fetchData(userInput)}
          size="small"
        >
          <SearchIcon />
        </IconButton>
      </Container>

      <Container>
        <Grid container>
          {songs.map((song, index) => (
            <Grid
              item
              key={index}
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {song.artworkUrl100 && (
                <MusicCard
                  albumCover={song.artworkUrl100}
                  artistName={song.artistName}
                  trackName={song.trackName}
                  style={{
                    width: "100%",
                  }}
                ></MusicCard>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Search;
