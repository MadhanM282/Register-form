import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { loginAction } from "../REDUX/AUTH/Action"

export const Login = () => {
    const {userData,auth} = useSelector((store) => store)
    console.log('userData', userData);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Data, SetData] = useState({
        email: "",
        password: ""
    })

    const Post = () => {
        
        axios.post("https://login-sowedane-api.herokuapp.com/login", Data).then(({data})=>{
            console.log('data', data);
            dispatch(loginAction(data.admin))
            navigate("/")
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