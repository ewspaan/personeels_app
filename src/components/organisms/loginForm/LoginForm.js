import React, { useState } from "react";
import styles from "./LoginForm.module.css"
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {useAuthState} from "../../../context/authContext/AuthContext";
import {useHistory} from "react-router-dom";

let renderCount = 0;


function LoginForm(){

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [sending, setSending] = useState(false)
    const [showPassword, toggleShowPassword] = useState("text")
    const toggleClick = () => showPassword === "password" ? toggleShowPassword("text") : toggleShowPassword("password")
    const [error, setError] = useState("")
    const { login } = useAuthState();
    const history = useHistory();
    renderCount++

    async function submitLogin(dataLogin){
        setSending(true)
        setError("")
        const result = await login(dataLogin)
        if (!result){
            setError("Gebruikersnaam of wachtwoord zijn onjuist!")
        }
        setSending(false)
        history.push('/profiel');
    }

    return(
        <div className={styles.page}>
            <span className="counter">Render Count: {renderCount}</span>
            <form
                className={styles.page}
                onSubmit={handleSubmit(submitLogin)}>
                <label htmlFor="username">Gebruikersnaam:</label>
                <input
                    className="username"
                    {...register("username", { required: "Gebruikersnaam moet worden ingevuld" })} />
                <ErrorMessage errors={errors} name="username" />
                <label htmlFor="password">Wachtwoord:</label>
                <input
                    className="password"
                    type={showPassword}
                    {...register("password", { required: "Wachtwoord moet worden ingevuld" })}
                />
                <ErrorMessage errors={errors} name="password" />
                <input
                    name="togglePassword"
                    id="togglePassword"
                    type="checkbox"
                    onClick={toggleClick}/>
                <label htmlFor="togglePassword">Toon wachtwoord</label>
                <button
                    type="submit"
                    disabled={sending}>
                    {sending === false ? "Versturen" : "Versturen..." }
                </button>
                <p>{error}</p>
            </form>
        </div>
    )
}

export default LoginForm;
