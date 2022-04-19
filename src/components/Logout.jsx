import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { logoutAction } from "../REDUX/AUTH/Action"

export const LogoutBUTTON = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between", width: "30%" }}>
            <Button sx={{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }} onClick={() => {
                navigate("/login")
                dispatch(logoutAction())
            }}>Logout</Button>
        </Box>
    )
}