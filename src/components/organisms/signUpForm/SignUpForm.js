import React, { useState } from "react";
import styles from "./SignUpForm.module.css"
import { useForm } from "react-hook-form";
import postDataFunction from "../../../hooks/postDataFunction";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

function SignUpForm(){

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [sending, setSending] = useState(false)
    const [showPassword, toggleShowPassword] = useState("text")
    const [error, setError] = useState("")
    const toggleClick = () => showPassword === "password" ? toggleShowPassword("text") : toggleShowPassword("password")

    async function submitLogin(dataSignUp){
        setSending(true)

        if (dataSignUp.password !== dataSignUp.passwordRepeat){
            setError("Wachtwoorden zijn niet gelijk")
        } else {
            const client =  ({
                username: dataSignUp.username,
                password: dataSignUp.password,
                passwordRepeat: dataSignUp.passwordRepeat,
                firstName: dataSignUp.firstName,
                lastName: dataSignUp.lastName,
                companyName: dataSignUp.companyName,
                email: dataSignUp.email,
            });
            setError("");
            console.log("client--> ", client)
            try {
                const result = await axios.post(`http://localhost:8080/api/auth/signup`,
                    client,{headers: {
                            "Content-Type": "application/json",
                        }})
                console.log("axios result--> ", result)
            }
            catch {
                console.error()
            }
        }
        setSending(false)
    }

    return(
        <div className={styles.page}>
            <form
                className={styles.page}
                onSubmit={handleSubmit(submitLogin)}
            >
                <label htmlFor="firstName">Voornaam: </label>
                <input
                    className="firstName"
                    {...register("firstName", {required: "Voornaam moet worden ingevuld"})}
                />
                <ErrorMessage errors={errors} name="firstName" />

                <label htmlFor="lastName">Achternaam: </label>
                <input
                    className="lastName"
                    {...register("lastName", {required: "Achternaam moet worden ingevuld"})}
                />
                <ErrorMessage errors={errors} name="lastName" />

                <label htmlFor="email">Email: </label>
                <input
                    className="email"
                    {...register("email", {required: "Email adres moet worden ingevuld"})}
                />
                <ErrorMessage errors={errors} name="email" />

                <label htmlFor="companyName">Naam bedrijf: </label>
                <input
                    className="companyName"
                    {...register("companyName", {required: "Bedrijfsnaam moet worden ingevuld"})}
                />
                <ErrorMessage errors={errors} name="companyName"/>

                <label htmlFor="username">Gebruikersnaam: </label>
                <input
                    className="username"
                    {...register("username", {required: "Gebruikersnaam moet worden ingevuld"})}
                />
                <ErrorMessage errors={errors} name="username" />
                <label htmlFor="password">Wachtwoord:</label>
                <input
                    className="password"
                    type={showPassword}
                    {...register("password", {required: "Wachtwoord moet worden ingevuld"})}
                />
                <ErrorMessage name="passwordRepeat" errors={errors} />
                <label htmlFor="passwordRepeat">Herhaal wachtwoord:</label>
                <input
                    className="passwordRepeat"
                    type={showPassword}
                    {...register("passwordRepeat", {required: "Wachtwoord moet worden ingevuld"})}
                />
                <ErrorMessage name="passwordRepeat" errors={errors} />
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

export default SignUpForm
