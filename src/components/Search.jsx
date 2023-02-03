import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  IconButton,
  Container,
  Grid,
  Switch,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MusicCard from "./MusicCard";

const Search = () => {
  const [songs, setSongs] = useState([{ track: "" }]);
  const [songs2, setSongs2] = useState([{ track: "" }]);
  const [userInput, setUserInput] = useState("");
  const [gridLayout, setGridLayout] = useState(3);

  const collectedData = (e) => {
    setUserInput(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchData(userInput);
    }
  };

  const pageSlicer = (pageNumber) => {
    let newSongs = [];

    const setSongLength = songs2;

    if (pageNumber === 1) {
      newSongs = setSongLength.slice(0, 20);
      setSongs(newSongs);
    } else if (pageNumber === 2) {
      newSongs = setSongLength.slice(20, 40);
      setSongs(newSongs);
    }
  };

  const handleToggleChange = (e) => {
    e.target.checked ? setGridLayout(6) : setGridLayout(3);
  };

  const fetchData = (inputs) => {
    const params = { term: inputs, media: "music", limit: 40 };
    try {
      axios
        .get("https://itunes.apple.com/search?", { params })
        .then((response) => {
          setSongs(response.data.results);
          setSongs2(response.data.results);
        });
    } catch (err) {
      console.log(err); // Error handle for API response
    }
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
        <Switch
          color="secondary"
          sx={{ display: { xs: "none", md: "block" } }}
          onChange={handleToggleChange}
        />
      </Container>
      <Pagination
        count={2}
        color="secondary"
        onChange={(e, page) => pageSlicer(page)}
        sx={{ display: "flex", justifyContent: "center", mr: 11 }}
      />

      <Container>
        <Grid container>
          {songs.map((song, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
              xs={6}
              md={gridLayout}
            >
              {song.artworkUrl100 && (
                <MusicCard
                  albumCover={song.artworkUrl100}
                  artistName={song.artistName}
                  trackName={song.trackName}
                  albumName={song.collectionCensoredName}
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
