/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Paper from "@mui/material/Paper";
import pinkToBlue from "../images/pink-to-blue.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ReCAPTCHA from "react-google-recaptcha";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Contactsection() {
  const [token, setToken] = React.useState("");
  const StyledButton = styled(Button)({
    backgroundColor: "white",
    color: "black",
    padding: ".75rem 3rem",
    minWidth: "10rem",
    fontWeight: "bold",
    borderColor: "white",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      borderColor: "white",
    },
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const { ref, inView } = useInView();
  const animation = useAnimation();

  const reRef = useRef();

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [animation, inView]);

  const onChange = (value) => {
    if (value.length > 0) {
      setToken(value);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (token.length < 1) {
      return alert("Please fill out reCAPTCHA before submitting the form.");
    }

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        reRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("The contact form has been sent!");
    e.target.reset();
  };

  return (
    <>
      <Paper
        square={true}
        sx={{
          backgroundImage: `url(${pinkToBlue.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          roundedCorners: false,
        }}
      >
        <Container maxWidth="lg">
          <Box
            ref={ref}
            padding="4rem 0 8rem 0"
            component={motion.div}
            animate={animation}
          >
            <Typography
              variant="h3"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="bold"
              id="contact"
            >
              Contact
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  fontSize="1.2rem"
                  fontWeight="300"
                  sx={{ margin: "2rem 0 1rem 0" }}
                >
                  Wanna connect? Fill out the form and I'll respond within 24
                  hours.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <form ref={reRef} onSubmit={sendEmail}>
                    <Box display="flex" flexDirection="column">
                      <Box
                        margin="2rem 0 1rem 0"
                        display="flex"
                        justifyContent="center"
                      >
                        <TextField
                          id="filled-basic"
                          label="Name"
                          variant="filled"
                          type="text"
                          name="name"
                          fullWidth={true}
                        />
                      </Box>
                      <Box
                        margin="0rem 0 1rem 0"
                        display="flex"
                        justifyContent="center"
                      >
                        <TextField
                          id="filled-basic"
                          label="Email Address"
                          variant="filled"
                          type="email"
                          name="email"
                          fullWidth={true}
                        />
                      </Box>
                      <Box
                        margin="0rem 0 1rem 0"
                        display="flex"
                        justifyContent="center"
                      >
                        <TextField
                          id="filled-multiline-static"
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          variant="filled"
                          fullWidth={true}
                        />
                      </Box>
                      <Box display="flex" justifyContent="center">
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                          size="normal"
                          ref={reRef}
                          onChange={onChange}
                        />
                      </Box>
                      <Box
                        margin="1rem 0 1rem 0"
                        display="flex"
                        justifyContent="center"
                      >
                        <StyledButton
                          variant="outlined"
                          type="submit"
                          value="Send"
                          sx={{ boxShadow: 5 }}
                        >
                          Submit
                        </StyledButton>
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </>
  );
}
