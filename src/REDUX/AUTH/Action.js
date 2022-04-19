export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";

export const ALLUSERS = "ALLUSERS";

export const loginAction = (payload)=>({type: LOGIN,payload});

export const logoutAction = () => ({type: LOGOUT});

export const AllUsersAction = (payload)=>({type: ALLUSERS,payload})


