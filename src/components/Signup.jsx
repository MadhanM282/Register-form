import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const navigate = useNavigate()
    const [Data, SetData] = useState({
        name: "",
        email: "",
        password: "",
        gender:"",
        age:"",
        mobile: 0, 
        adress: "",
        ocupation: "",
    })
    const handelChange = (e) => {
        const { id, value } = e.target
        SetData({ ...Data, [id]: value })
    }
    const PostData = () => {
        axios.post('https://login-sowedane-api.herokuapp.com/register', Data).then(({ data }) => {
            console.log('data', data);
            navigate("/login")
        })
    }
    return (
        <Box sx={{ width: "50%", margin: "auto", mt: "100px"}} component="form">
            <Box sx={{display: "flex" }}>

                <Box>
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="name" label="username" variant="outlined" />
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="email" label="email" variant="outlined" />
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="password" label="password" variant="outlined" />
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="gender" label="gender" variant="outlined" />
                </Box>
                <Box>

                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="age" label="age" variant="outlined" />
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="mobile" label="mobile" variant="outlined" />
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="adress" label="Adress" variant="outlined" />
                    <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="ocupation" label="Ocupation" variant="outlined" />

                </Box>

               
            </Box>
            <Button onClick={(e) => { e.preventDefault(); PostData() }} type="submit" sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': {bgcolor: "#696969"} })]}>Register</Button>
        </Box>
    )
}