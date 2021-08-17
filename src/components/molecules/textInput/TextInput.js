import React from "react";
import styles from "./TextInput.module.css"
import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";

export const TextInput = ({name, label, errorMessage}) => {

    const { register, formState: { errors } } = useForm()

    return(
        <div className={styles.inputField}>
            <label htmlFor={name}>
                {label}
            </label>
            <input
                className={name}
                {...register({name}, {required: `${errorMessage}`})}
            />
            <ErrorMessage errors={errors} name={name}/>
        </div>
    )
}


