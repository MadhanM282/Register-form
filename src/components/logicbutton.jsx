import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router"

export const AUTHBUTTON = ()=>{
    const navigate = useNavigate()
    return (
        <Box sx={{display: 'flex',justifyContent:"space-between",width:"30%"}}>
            <Button sx={{bgcolor: "#000000", m: 1, color: "#f2f2ff" }} onClick={() =>navigate("/login")}>Login</Button>
            <Button sx={{bgcolor: "#000000", m: 1, color: "#f2f2ff" }} onClick={() =>navigate("/register") }>Signup</Button>
        </Box>
    )
}