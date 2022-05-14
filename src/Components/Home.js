import NavbarHome from "./NavbarHome";
import {Typography} from "@mui/material"
function Home() {
  return (
    <>
      <NavbarHome />
      <Typography variant="h3" id="about-heading" mt={5} mb={2}>
        Home
      </Typography>
     
    </>
  );
}
export default Home;
