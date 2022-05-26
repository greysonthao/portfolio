/* eslint-disable @next/next/no-img-element */
import React from "react";
import Paper from "@mui/material/Paper";
import heroImage from "../images/hero-background.png";
import Image from "next/image";
import Box from "@mui/material/Box";
import OrderButton from "./OrderButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Herosection() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:480px)");

  return (
    <div>
      <Paper
        square={true}
        sx={{
          height: "90vh",
          backgroundImage: `url(${heroImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        > */}
        <Typography
          variant={matches ? "h1" : "h2"}
          component={motion.h1}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.01,
            },
          }}
          fontWeight="bold"
          textAlign="center"
          padding="8rem 2rem 2rem 2rem"
          fontFamily="'League Spartan', sans-serif"
        >
          TOUGER THAO
        </Typography>
        {/* </motion.div> */}
        <Typography
          variant="h5"
          component={motion.h5}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.2,
            },
          }}
          textAlign="center"
          paddingBottom="3rem"
          fontFamily="'Libre Baskerville', sans-serif"
          fontStyle="italic"
        >
          Front-end Developer
        </Typography>
        {matches && (
          <Box display="flex" justifyContent="center">
            <Box
              marginRight="4rem"
              sx={{ cursor: "pointer" }}
              component={motion.div}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  delay: 0.25,
                },
              }}
            >
              <Link
                href="https://twitter.com/2jurr"
                target="_blank"
                rel="noopener norefer"
                sx={{ color: "black" }}
              >
                <TwitterIcon />
              </Link>
            </Box>
            <Box
              marginRight="4rem"
              sx={{ cursor: "pointer" }}
              component={motion.div}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  delay: 0.29,
                },
              }}
            >
              <Link
                href="https://github.com/tougerthao"
                target="_blank"
                rel="noopener norefer"
                sx={{ color: "black" }}
              >
                <GitHubIcon />
              </Link>
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              component={motion.div}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  delay: 0.31,
                },
              }}
            >
              <Link
                href="https://www.linkedin.com/in/tougerthao/"
                target="_blank"
                rel="noopener norefer"
                sx={{ color: "black" }}
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="center"
          margin="2.5rem 0 2rem 0"
          component={motion.div}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.5,
              delay: 0.35,
            },
          }}
        >
          <OrderButton />
        </Box>
      </Paper>
    </div>
  );
}
