import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Herosection from "../components/Herosection";
import Paper from "@mui/material/Paper";
import UnderHero from "../components/UnderHero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import whiteBackground from "../images/white-background-with-blue.png";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Touger Thao: Front-end Developer</title>
        <meta
          name="description"
          content="A front-end developer from Minnesota."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection />
      <UnderHero />
      <Skills />
      <Paper
        square={true}
        sx={{
          /*           backgroundImage: `url(${whiteBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center", */
          background: "#fffaea",
          roundedCorners: false,
        }}
      >
        <Container maxWidth="lg">
          <Projects />
        </Container>
      </Paper>
      <Contact />
      <Footer />
    </div>
  );
}
