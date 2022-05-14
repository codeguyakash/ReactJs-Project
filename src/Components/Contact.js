import React from "react";
import NavbarHome from "./NavbarHome";
import { Typography, FormControl, Box, TextField, Button} from "@mui/material";

function Contact() {
  return (
    <>
      <NavbarHome />
      <Typography variant="h3" id="about-heading" mt={5} mb={2}>
        Contact
      </Typography>
      <form>
        <FormControl>
          <Box
            m={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow={5}
            width={800}
            gap={2}
            p={5}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              type="text"
            ></TextField>

            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
            ></TextField>

            <TextField
              fullWidth
              variant="outlined"
              label="Subject"
              type="text"
            ></TextField>

            <TextField
              fullWidth
              variant="outlined"
              label="Message"
              multiline
              rows={5}
              type="text"
            ></TextField>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
}

export default Contact;
