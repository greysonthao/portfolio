/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Video from "../components/Video";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const astralSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Chart.js",
  "MUI",
  "Firebase",
  "Git",
  "JSON",
];

const lionGuardSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Git",
  "JSON",
];

const playfulPoniesSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "MUI",
  "Git",
  "JSON",
  "Rust",
  "CosmWasm",
  "Terrain",
  "Docker",
];

export default function Projects() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const astralSkillsButtons = astralSkills.map((skill) => (
    <Paper
      key={skill}
      square={true}
      sx={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        margin: ".3rem .15rem .3rem .15rem",
        padding: ".5rem",
        boxShadow: "4",
      }}
    >
      {skill}
    </Paper>
  ));

  const playfulPoniesButtons = playfulPoniesSkills.map((skill) => (
    <Paper
      key={skill}
      square={true}
      sx={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        margin: ".3rem .15rem .3rem .15rem",
        padding: ".5rem",
        boxShadow: "4",
      }}
    >
      {skill}
    </Paper>
  ));

  const lionGuardButtons = lionGuardSkills.map((skill) => (
    <Paper
      key={skill}
      square={true}
      sx={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        margin: ".3rem .15rem .3rem .15rem",
        padding: ".5rem",
        boxShadow: "4",
      }}
    >
      {skill}
    </Paper>
  ));

  return (
    <>
      <Box padding="4rem 0 1rem 0">
        <Typography
          variant="h3"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="bold"
          id="projects"
        >
          Projects
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box margin="2rem 0 3rem 0">
              <Typography
                variant="h4"
                fontWeight="bold"
                fontFamily="'Montserrat', sans-serif"
              >
                Playful Ponies Dapp
              </Typography>
              <Box
                display="flex"
                justifyContent="left"
                sx={{ flexWrap: "wrap", maxWidth: "100%" }}
              >
                {playfulPoniesButtons}
              </Box>
              <Typography
                variant="body1"
                fontSize="1.2rem"
                fontWeight="300"
                sx={{ margin: "1rem 0 1rem 0" }}
              >
                Mint non-fungible tokens (NFTs) on the Terra blockchain testnet.
                The NFTs are digital artwork created by my daughters (7 and 5
                years old).
              </Typography>
              <Box display="flex" justifyContent="center">
                <Link
                  href="https://github.com/tougerthao/pp-frontend"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      marginRight: "1rem",
                      color: "#529ffc",
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Github
                  </Button>
                </Link>
                <Link
                  href="https://playful-ponies-dapp.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#529ffc",
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Live Site
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Video
                source={"https://www.youtube-nocookie.com/embed/MYXarhkJ5lo"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box margin="2rem 0 3rem 0">
              <Typography
                variant="h4"
                fontWeight="bold"
                fontFamily="'Montserrat', sans-serif"
              >
                Astral Finance Tracker
              </Typography>
              <Box
                display="flex"
                justifyContent="left"
                sx={{ flexWrap: "wrap", maxWidth: "100%" }}
              >
                {astralSkillsButtons}
              </Box>
              <Typography
                variant="body1"
                fontSize="1.2rem"
                fontWeight="300"
                sx={{ margin: "1rem 0 1rem 0" }}
              >
                Track real-time cryptocurrency prices via the CoinGecko crypto
                market API. Create an account to save a watchlist of your
                favorite cryptoassets.
              </Typography>
              <Box display="flex" justifyContent="center">
                <Link
                  href="https://github.com/tougerthao/crypto-price-tracker"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      marginRight: "1rem",
                      color: "#529ffc",
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Github
                  </Button>
                </Link>
                <Link
                  href="https://astralfinance.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#529ffc",
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Live Site
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={
                {
                  /* margin: "2rem 1rem 1rem 1rem", */
                }
              }
            >
              <Video
                source={"https://www.youtube-nocookie.com/embed/_Ha1kiagvyw"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box margin="3rem 0 3rem 0">
              <Typography
                variant="h4"
                fontWeight="bold"
                fontFamily="'Montserrat', sans-serif"
              >
                Lion Guard Matching Game
              </Typography>
              <Box
                display="flex"
                justifyContent="left"
                sx={{ flexWrap: "wrap", maxWidth: "100%" }}
              >
                {lionGuardButtons}
              </Box>
              <Typography
                variant="body1"
                fontSize="1.2rem"
                fontWeight="300"
                sx={{ margin: "1rem 0 1rem 0" }}
              >
                A card matching game featuring nine different characters from my
                children's favorite Disney television show, "The Lion Guard."
              </Typography>
              <Box display="flex" justifyContent="center">
                <Link
                  href="https://github.com/tougerthao/react-card-matching-game"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Button
                    variant="outlined"
                    sx={{
                      marginRight: "1rem",
                      color: "#529ffc",
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Github
                  </Button>
                </Link>
                <Link
                  href="https://tougerthao.github.io/react-card-matching-game/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#529ffc",
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Live Site
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box margin="0rem 0rem 6rem 0rem">
              <Video
                source={"https://www.youtube-nocookie.com/embed/MTvkwZcmWms"}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
