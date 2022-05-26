import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CookieIcon from "@mui/icons-material/Cookie";
import whiteLogo from "../images/t-logo-white.png";
import Image from "next/image";
import * as Scroll from "react-scroll";

export default function Footer() {
  return (
    <>
      <Box backgroundColor="black" padding="8rem 3rem 10rem 3rem">
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="center">
            <Link href="/" sx={{ cursor: "pointer" }}>
              <Image
                src={whiteLogo}
                alt="Touger Thao Logo"
                width="100"
                height="100"
              />
            </Link>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            sx={{ margin: "2rem 0 0 0" }}
          >
            <Link
              href="https://twitter.com/2jurr"
              target="_blank"
              rel="noopener norefer"
            >
              <Typography
                variant="body1"
                margin="0 3rem 0 0"
                textAlign="center"
                fontWeight="bold"
                fontSize="1.5rem"
                sx={{ color: "white" }}
              >
                Twitter
              </Typography>
            </Link>
            <Link
              href="https://github.com/tougerthao"
              target="_blank"
              rel="noopener norefer"
            >
              <Typography
                variant="body1"
                margin="0 3rem 0 0"
                textAlign="center"
                fontWeight="bold"
                fontSize="1.5rem"
                sx={{ color: "white" }}
              >
                Github
              </Typography>
            </Link>
            <Link
              href="https://www.linkedin.com/in/tougerthao/"
              target="_blank"
              rel="noopener norefer"
            >
              <Typography
                variant="body1"
                textAlign="center"
                fontWeight="bold"
                fontSize="1.5rem"
                sx={{ color: "white" }}
              >
                LinkedIn
              </Typography>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ margin: "2rem 0 0 0" }}
          >
            <Typography color="white">© 2022 Touger Thao</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
