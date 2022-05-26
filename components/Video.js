import React from "react";
import Box from "@mui/material/Box";

export default function Video({ source }) {
  return (
    <Box margin="5rem 0 6rem 0" display="flex" justifyContent="center">
      <iframe
        width="560"
        height="315"
        src={source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
}
