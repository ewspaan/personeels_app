import React from "react";
import styles from "./Page.module.css";
import StandardRoster from "../components/organisms/roster/StandardRoster";


function StandardRosterPage(){



    return(
        <div className={styles.page}>
           <StandardRoster/>
        </div>
    );
}


export default StandardRosterPage;
