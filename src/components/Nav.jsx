import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { AUTHBUTTON } from "./logicbutton"
import { LogoutBUTTON } from "./Logout"

export const Nav = ()=>{
    const {userData,auth} = useSelector((store) => store)

    const navigate = useNavigate()
    return (
        <Box sx={{display: 'flex',justifyContent:"space-evenly",bgcolor:"#a6afff",alignItems: 'center'}} position="sticky">
            <Button sx={{bgcolor: "#000000", m: 1, color: "#f2f2ff"}} onClick={() =>navigate("/")}>Home</Button>
            {!auth?<AUTHBUTTON/>:<LogoutBUTTON/>}
            <Typography>Hi  {userData.name?userData.name:""}</Typography>
        </Box>
    )
}