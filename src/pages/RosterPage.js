import React from "react";
import styles from "./Page.module.css";
import {useHistory} from "react-router-dom";
import ProfileUser from "../components/organisms/profile/ProfileUser";
import {Button} from "../components/atoms/button/Button";
import WeekRoster from "../components/organisms/weekRoster/WeekRoster";


function RosterPage(){

    const  history  = useHistory();


    return(
        <div className={styles.page}>
            <WeekRoster/>
        </div>
    );
}


export default RosterPage;