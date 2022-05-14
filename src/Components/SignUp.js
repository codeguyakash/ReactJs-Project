import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, FormControl, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from "./NavbarHome";

function SignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignUp = (e) => {
    e.preventDefault();
    if (fullname === "" || email === "" || password === "") {
      alert("All Fields Required");
    } else {
      console.log(fullname);
      console.log(email);
      console.log(password);
      alert("Sign Up Success");
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <Box mt={5}>
        <h1 className="text-primary">fakebook</h1>
      </Box>
      <form onSubmit={SignUp}>
        <FormControl>
          <Box
            m={2} 
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow={5}
            width={400}
            gap={2}
            p={5}
          >
            <AccountCircleIcon sx={{ fontSize: 100 }} />
            <h4>Create a new account</h4>
            <TextField
              fullWidth
              type="text"
              variant="filled"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              label="Full Name"
            ></TextField>
            <TextField
              fullWidth
              type="email"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email ID"
            ></TextField>
            <TextField
              fullWidth
              type="password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            ></TextField>

            <Button fullWidth type="submit" variant="contained" color="success">
              SIGN UP
            </Button>

            <Link id="Link" to="/">
              Already have an account?
            </Link>
          </Box>
        </FormControl>
      </form>
    </>
  );
}
export default SignUp;

// Mobile No. : 9810707983
// Password : 123@abcd
