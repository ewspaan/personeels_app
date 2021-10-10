import React from "react";
import styles from "./Page.module.css";

import WeekRoster from "../components/organisms/roster/WeekRoster";


function RosterPage(){

    return(
        <div className={styles.page}>
            <WeekRoster/>
        </div>
    );
}


export default RosterPage;
