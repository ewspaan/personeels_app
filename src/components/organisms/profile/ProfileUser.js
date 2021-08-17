import React from "react";
import styles from "./Profile.module.css";
import {useAuthState} from "../../../context/authContext/AuthContext";
import {Heading} from "../../atoms/heading/Heading";


function ProfileUser(){

    const {  user } = useAuthState();

    return(
        <div  className={styles.profile}>
            <Heading level={2} children={"Profiel:"}/>
            {user &&
            <ul>
                <li><p>Naam:</p><p>{user.firstName} {user.lastName}</p></li>
                <li><p>Email:</p><p>{user.email}</p></li>
            </ul>}
        </div>
    );
}

export default ProfileUser;
