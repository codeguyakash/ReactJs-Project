import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Box, FormControl, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from "./NavbarHome";
console.log("9810707983 & 123@abcd");

function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    if (mobile === "" || password === "") {
      // alert("Both Fields Required");
      setError(true);
    } else {
      const userdata = {
        user_detail: mobile,
        lang: "en",
        user_password: password,
      };
      saveData(userdata);
    }
  };

  const saveData = (user) => {
    axios
      .post("https://www.iqihealth.net/admin/user_login_email_mobile", user)
      .then((response) => {
        console.log(response);
        let data = response.data;
        if (data.status === false) {
          alert("You are Not Registered User");
        } else {
          localStorage.setItem("user", JSON.stringify(response.data.data[0]));
          navigate("/dashboard");
        }
      });
  };

  return (
    <>
      <Navbar />
      <Box mt={5}>
        <h1 className="text-primary">fakebook</h1>
      </Box>
      <form onSubmit={onLogin}>
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
            <h4>Log in to fakebook</h4>

            <TextField
              error={error}
              fullWidth
              type="text"
              variant="filled"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              label="Mobile No."
            />

            <TextField
              error={error}
              fullWidth
              type="password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />

            <Button fullWidth type="submit" variant="contained" color="primary">
              Log In
            </Button>
            <Link id="Link" to="/signup">
              Sign Up for fakebook
            </Link>
          </Box>
        </FormControl>
      </form>
    </>
  );
}
export default Login;

// Mobile No. : 9810707983
// Password : 123@abcd
