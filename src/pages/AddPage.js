import React from 'react';
import styles from "./Page.module.css";
import AddForm from "../components/organisms/AddForm/AddForm";


function AddPage(){


    return(

        <div className={styles.page}>
            <AddForm/>
        </div>
    )


}

export default AddPage;
