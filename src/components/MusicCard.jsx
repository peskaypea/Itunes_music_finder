import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const MusicCard = ({ artistName, albumCover, trackName, albumName }) => {
  return (
    <>
      <Card
        sx={{
          ":hover": {
            boxShadow: 20,
          },
          display: "flex",
          m: 1,
          width: {
            xs: 300, // 0px
            // 600px
            // 900px
            lg: 400, // 1200px
            xl: 500, // 1536px
          },
          height: {
            xs: 100,
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
            width: 1 / 2,
            height: 1,
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", width: 1 }}>
            <Typography component="div" variant="p" sx={{ fontSize: 12 }}>
              {albumName.slice(0, 14)}..
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontSize: 12 }}
            >
              {artistName.slice(0, 10)}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
              sx={{ fontSize: 12 }}
            >
              {trackName.slice(0, 10)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default MusicCard;
