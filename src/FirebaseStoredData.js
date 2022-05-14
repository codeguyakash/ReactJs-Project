import { useState } from 'react'
import axios from 'axios'
// import TableFirebase from './Components/TableFirebase'
import { FormControl, TextField, Box, Button } from "@mui/material"

function Data() {

    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const userdata = {
        "name": name, "password": password
    }
    const Submit = (e) => {
        axios.post("https://akash-demo-5a5fc-default-rtdb.firebaseio.com/data.json", userdata).then((response) => console.log(response)); alert("Data Stored Success")
    };

    return (
        <>
            <form onSubmit={Submit} >
                <FormControl>
                    <Box m={5} display="flex" flexDirection="column" alignItems='center' boxShadow={5} width={400} gap={2} p={5}>
                        <TextField type="text" variant="standard" value={name} onChange={(e) => setName(e.target.value)} label="Name"></TextField>
                        <TextField type="password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} label="Password"></TextField>
                        <Button type="submit" variant="contained" color="warning">Submit</Button>
                    </Box>
                </FormControl>
            </form>

            {/* <TableFirebase /> */}


        </>
    )


}
export default Data;