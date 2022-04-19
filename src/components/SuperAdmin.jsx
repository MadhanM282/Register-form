import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { AllUsersAction, loginAction } from "../REDUX/AUTH/Action"

export const SuperAdmin = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [Data, SetData] = useState({
        email: "",
        password: ""
    })

    const Post = () => {
        
        axios.post("https://login-sowedane-api.herokuapp.com/superadmin", Data).then(({data})=>{
            console.log('data', data);
            dispatch((AllUsersAction(data)))
            navigate("/users")
        })
    }

    const handelChange = (e) => {
        const { id, value } = e.target
        SetData({ ...Data, [id]: value })
    }

    return(
        <Box sx={{ width: "300px", margin: "auto", mt: "100px" }} component="form">
            <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="email" label="email" variant="outlined" />
            <TextField onChange={(e) => handelChange(e)} sx={{ m: 1, width: "90%" }} id="password" label="password" variant="outlined" />
            <Button onClick={(e) => {
                e.preventDefault();
                Post();
            }} type="submit" sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Login</Button>
        </Box>
    )

}