import React from "react";
import styles from "./Profile.module.css";
import {Heading} from "../../atoms/heading/Heading";


function ProfileEmployee({username,firstName,lastName,email,telephoneNumber,dateOfBirth}){


    return(
        <div  className={styles.profile}>
            <Heading level={2} children={"Profiel:"}/>
            <ul>
                <li><p>Naam:</p><p>{firstName} {lastName}</p></li>
                <li><p>Email:</p><p>{email}</p></li>
                <li><p>Telefoonnummer:</p><p>{telephoneNumber}</p></li>
                <li><p>Geboortedatum:</p><p>{dateOfBirth}</p></li>
            </ul>
        </div>
    )
}

export default ProfileEmployee