import { Typography, Container } from "@mui/material";
import NavbarHome from "./NavbarHome";

function About() {
  return (
    <>
      <NavbarHome />

      <Container m={2} align="center" p={5} width={700} >
        <Typography variant="h3" id="about-heading" mt={5} mb={2}>
          About Us
        </Typography>
        <Typography variant="h6" align="justify" id="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting,Lorem Ipsum has been the industry's remaining
          essentially unchanged.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.Lorem Ipsum is simply
          dummy text of the printing industry.
        </Typography>
      </Container>
    </>
  );
}

export default About;
