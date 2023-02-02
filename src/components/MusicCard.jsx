import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const MusicCard = ({ artistName, albumCover, trackName }) => {
  return (
    <>
      <Card
        sx={{
          ":hover": {
            boxShadow: 20,
          },

          display: "flex",
          width: {
            xs: 50, // 0px
            sm: 100, // 600px
            md: 200, // 900px
            lg: 200, // 1200px
            xl: 200, // 1536px
          },
          m: 1,
          height: {
            xs: 50,
            sm: 100,
            md: 100,
            lg: 100,
            xl: 100,
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100px",
          }}
          image={albumCover}
          alt="album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 1,
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", width: 1 }}>
            <Typography component="div" variant="p" sx={{ fontSize: 12 }}>
              {trackName.slice(0, 14)}..
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontSize: 12 }}
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
