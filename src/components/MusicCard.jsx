import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";

const MusicCard = ({ artistName, albumCover, trackName }) => {
  return (
    <>
      <Card sx={{ display: "flex", width: 1, m: 1, height: 4 / 5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 1,
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", width: 1 }}>
            <Typography component="div" variant="p">
              {trackName.slice(0, 14)}..
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {artistName.slice(0, 10)}
            </Typography>
          </CardContent>
          {/* 
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>*/}
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={albumCover}
          alt="Live from space album cover"
        />
      </Card>

      {/* <Box width="100px">
        <Card>
          <img src={albumCover} alt="" />
          <CardContent>
            <Typography gutterBottom varient="h5" component="div">
              {artistName}
            </Typography>
            <Typography varient="body2" color="text.secondary">
              {trackName}
            </Typography>
          </CardContent>
        </Card>
      </Box> */}
    </>
  );
};

export default MusicCard;
