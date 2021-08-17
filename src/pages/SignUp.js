import React from 'react';
import styles from "./Page.module.css";
import SignUpForm from "../components/organisms/signUpForm/SignUpForm";

function SignUpPage(){




    return(

        <div className={styles.page}>
            <SignUpForm/>
        </div>
    )


}

export default SignUpPage;
