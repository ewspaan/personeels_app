import React from "react";
import styles from "../header/Header.module.css";
import { useHistory } from 'react-router-dom';
import { Button } from "../../atoms/button/Button";
import { useAuthState } from "../../../context/authContext/AuthContext";
import { Heading } from "../../atoms/heading/Heading";
import HeaderProfile from "./HeaderProfile";

function HeaderTop(){


    const { isAuthenticated ,logout} = useAuthState();
    const history = useHistory();

    return(
        <>
        <header className={styles.headerTop}>
            <Heading children="PersoneelsApp" level={1}/>
            <div className={styles.divTop}>
                <Button
                    type="button"
                    onClick={() => history.push('/')}
                >
                   Home
                </Button>
                {isAuthenticated ? (
                    <Button
                        type="button"
                        onClick={() => {
                            logout()
                            history.push('/')
                        }}
                    >
                        Log uit
                    </Button>
                ) : (
                    <>
                        <Button
                            type="button"
                            onClick={() => history.push('/login')}
                        >
                            Log in
                        </Button>
                        <Button
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            Registreren
                        </Button>
                    </>
                )}
            </div>
        </header>
            {isAuthenticated === true && <HeaderProfile/>}
            </>
    );

}

export default HeaderTop;
