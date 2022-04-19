import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const AllUsers = () => {
    const { AllUsers } = useSelector((store) => store)
    console.log('AllUsers', AllUsers);
    return (
        <Box sx={{display:"flex"}}>
            {AllUsers && AllUsers.map((user) => {
                return <Box key={user._id} sx={{display:"flex" ,width: "fit-content", m: "auto", p: 2, mt: "100px", borderRadius: 2, bgcolor: "#ffffff", boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}  >
                    <Box>
                        <Typography Align="left" sx={{ p: 2 }} >Name:- {user.name}</Typography>
                        <Typography Align="left" sx={{ p: 2 }} >Ocupation:- {user.ocupation}</Typography>
                        <Typography Align="left" sx={{ p: 2 }} >Gender:- {user.gender}</Typography>
                        <Typography Align="left" sx={{ p: 2 }} >Age:- {user.age}</Typography>
                        <Typography Align="left" sx={{ p: 2 }} >Mobile:-{user.mobile}</Typography>
                    </Box>
                    {/* <Button onClick={() => { navigate("/edit") }} sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { bgcolor: "#696969" } })]}>Edit</Button> */}
                </Box>
            })}
        </Box>
    )
}

/*
adress: "visakhapatnam"
age: 26
email: "mohanmohan@123.gmail.com"
gender: "male"
mobile: 8500222928
name: "mohan"
ocupation: "student"
password
*/