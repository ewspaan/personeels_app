import React from 'react';
import {useAuthState} from "../context/authContext/AuthContext";
import styles from "./Page.module.css";
import LoginForm from "../components/organisms/loginForm/LoginForm";



function LoginPage(){

    const { isAuthenticated  } = useAuthState();


    return(
        <div className={styles.page}>
            { isAuthenticated === false ? <LoginForm/> : <p>Je bent al ingelogd</p>}
        </div>
    )


}

export default LoginPage;
