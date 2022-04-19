import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router"
import { Button, Typography } from "@mui/material"
export const UserData = ()=>{
    const {userData,auth} = useSelector((store) => store)
    const navigate = useNavigate()
    if(!auth){
        return <Navigate to="/login" />
    }
    return(
        <Box sx={{width:"fit-content",m:"auto",p:2,mt:"100px",borderRadius:2,bgcolor:"#ffffff",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}  >
            <Box>
                <Typography Align="left" sx={{p:2}} >Name: {userData.name}</Typography>
                <Typography Align="left" sx={{p:2}} >Gender: {userData.gender}</Typography>
                <Typography Align="left" sx={{p:2}} >Age: {userData.age}</Typography>
                <Typography Align="left" sx={{p:2}} >Email: {userData.email}</Typography>
            </Box>
            <Button onClick={() => {navigate("/edit")}} sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': {bgcolor: "#696969"} })]}>Edit</Button>
        </Box>
    )
}
