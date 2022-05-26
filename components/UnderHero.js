import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function UnderHero() {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Paper square={true} sx={{ backgroundColor: "#272b34" }}>
          <Typography
            variant="h6"
            component="h6"
            padding="1.5rem"
            color="white"
            textAlign="center"
          >
            PROACTIVE
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper square={true} sx={{ backgroundColor: "#22262f" }}>
          <Typography
            variant="h6"
            component="h6"
            padding="1.5rem"
            color="white"
            textAlign="center"
          >
            ADAPTABLE
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper square={true} sx={{ backgroundColor: "#2a2a2a" }}>
          <Typography
            variant="h6"
            component="h6"
            padding="1.5rem"
            color="white"
            textAlign="center"
          >
            COLLABORATIVE
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
