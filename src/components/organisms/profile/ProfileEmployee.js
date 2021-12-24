import React from "react";
import styles from "./Profile.module.css";
import {Heading} from "../../atoms/heading/Heading";


function ProfileEmployee({id,username,firstName,lastName,email,telephoneNumber,dateOfBirth}){

    return(
        <div className={styles.profile}>
            <Heading level={2} children={"Profiel:"}/>
            <ul>
                <li key={firstName+lastName+id}>Naam: {firstName} {lastName}</li>
                <li key={username+firstName+lastName+id}>Email: {email}</li>
                <li key={username+firstName+id}>Telefoonnummer: {telephoneNumber}</li>
                <li key={username+lastName+id}>Geboortedatum: {dateOfBirth}</li>
            </ul>
        </div>
    )
}

export default ProfileEmployee
