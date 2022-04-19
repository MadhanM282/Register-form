export const LOGIN = "LOGIN";

export const LOGOUT = "LOGOUT";


export const loginAction = (payload)=>({type: LOGIN,payload});

export const logoutAction = () => ({type: LOGOUT});
