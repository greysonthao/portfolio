import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Video({ source }) {
  const matches = useMediaQuery("(min-width:480px)");

  return (
    <Box
      margin={matches ? "5rem 0 2rem 0" : "0rem 0 2rem 0"}
      display="flex"
      justifyContent="center"
    >
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
