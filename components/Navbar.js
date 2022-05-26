import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from "../images/t-logo-black.png";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Modal from "@mui/material/Modal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  p: 4,
  opacity: "100%",
  background:
    "linear-gradient(90deg, rgba(82,159,252,1) 0%, rgba(136,189,255,1) 50%, rgba(255,250,234,1) 100%)",
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const matches = useMediaQuery("(min-width:480px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      {matches ? (
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "transparent" }}
        >
          <Toolbar>
            <Box padding="1rem 1rem">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Touger Thao logo"
                  width="75px"
                  height="75px"
                />
              </Link>
            </Box>
            <Box marginLeft="auto">
              <List component={Stack} direction="row">
                <ListItem disablePadding={true}>
                  <Scroll.Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={handleClose}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.3,
                      }}
                    >
                      <Typography
                        color="black"
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="bold"
                        margin="0 1.5rem 0 0"
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        Skills
                      </Typography>
                    </motion.div>
                  </Scroll.Link>
                </ListItem>
                <ListItem disablePadding={true}>
                  <Scroll.Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={handleClose}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.3,
                      }}
                    >
                      <Typography
                        color="black"
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="bold"
                        sx={{ margin: "0 1.5rem 0 0", cursor: "pointer" }}
                      >
                        Projects
                      </Typography>
                    </motion.div>
                  </Scroll.Link>
                </ListItem>
                <ListItem disablePadding={true}>
                  <Scroll.Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={handleClose}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.3,
                      }}
                    >
                      <Typography
                        color="black"
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="bold"
                        sx={{ margin: "0 1.5rem 0 0", cursor: "pointer" }}
                      >
                        Contact
                      </Typography>
                    </motion.div>
                  </Scroll.Link>
                </ListItem>
              </List>
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "transparent" }}
        >
          <Toolbar>
            <Box padding="1rem 0" id="ttlogo">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Touger Thao logo"
                  width="50px"
                  height="50px"
                />
              </Link>
            </Box>
            <Box marginLeft="auto">
              <MenuIcon
                fontSize="large"
                onClick={handleOpen}
                sx={{
                  color: "black",
                  cursor: "pointer",
                  margin: "2.05rem 1rem",
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="right">
            <CloseIcon
              fontSize="large"
              onClick={handleClose}
              sx={{ color: "black", cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Scroll.Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleClose}
            >
              <Typography
                variant="h3"
                component={motion.h1}
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                }}
                whileTap={{ scale: 0.9 }}
                textAlign="left"
                color="white"
                sx={{ margin: "2rem 0 2rem 0" }}
              >
                SKILLS
              </Typography>
            </Scroll.Link>
            <Scroll.Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleClose}
            >
              <Typography
                variant="h3"
                component={motion.h1}
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                }}
                whileTap={{ scale: 0.9 }}
                textAlign="left"
                color="white"
                sx={{ margin: "2rem 0 2rem 0" }}
              >
                PROJECTS
              </Typography>
            </Scroll.Link>
            <Scroll.Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleClose}
            >
              <Typography
                variant="h3"
                component={motion.h1}
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                }}
                whileTap={{ scale: 0.9 }}
                textAlign="left"
                color="white"
                sx={{ margin: "2rem 0 2rem 0" }}
              >
                CONTACT
              </Typography>
            </Scroll.Link>
            <Box display="flex" justifyContent="left" marginTop="50%">
              <Link
                href="https://twitter.com/2jurr"
                target="_blank"
                rel="noopener norefer"
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    scale: 1.3,
                    originX: 0,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TwitterIcon
                    fontSize="large"
                    sx={{ color: "white", marginRight: "2rem" }}
                  />
                </Box>
              </Link>
              <Link
                href="https://github.com/tougerthao"
                target="_blank"
                rel="noopener norefer"
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    scale: 1.3,
                    originX: 0,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GitHubIcon
                    fontSize="large"
                    sx={{ color: "white", marginRight: "2rem" }}
                  />
                </Box>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tougerthao/"
                target="_blank"
                rel="noopener norefer"
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    scale: 1.3,
                    originX: 0,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
