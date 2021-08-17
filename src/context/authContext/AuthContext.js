import React, { createContext, useState, useEffect, useContext } from 'react';
import getFunction from "../../hooks/getFunction"
import axios from "axios";

const AuthContext = createContext({});

function AuthContextProvider ({ children }){

    const [authState, setAuthState] = useState({
        status: "pending",
        error: null,
        user: null,
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        async function getUserInfo() {
            try {
                await setUserAndCompany();
            } catch (e) {
                setAuthState({
                    ...authState,
                    error: e,
                    user: null,
                    status: "done",
                });
                console.error(e);
            }
        }
        if (authState.user === null && token) {
            getUserInfo();
        } else {
            setAuthState({
                ...authState,
                error: null,
                user: null,
                status: "done",
            });
        }
    }, []);

    async function login({username, password}){
        try {
            console.log("login start")
            const result = await axios.post(`http://localhost:8080/api/auth/login`,
                {username, password})
            console.log("login result--> ", result)
            await localStorage.setItem("token", result.data.accessToken);
        }
        catch {
            console.error()
            return false
        }
        setUserAndCompany()
        return true
    }

    function logout() {
        localStorage.clear();
        setAuthState({
            ...authState,
            user: null,
            house: null,
        })
    }

    async function setUserAndCompany(){
            const data = await getFunction("users/download")
            console.log("setUserAndHouse--> " , data)
            setAuthState({
                ...authState,
                user: {
                    id: data.id,
                    username: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    },
                status: "done",
            })
    }


    return(
        <AuthContext.Provider value={{ ...authState, login, logout, setUserAndHouse: setUserAndCompany }}>
            {authState.status === "done" && children}
            {authState.status === "pending" && <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

function useAuthState() {
    const authState = useContext(AuthContext);
    const isDone = authState.status === "done";
    const isAuthenticated = authState.user !== null && isDone;

    return {
        ...authState,
        isAuthenticated: isAuthenticated,
    }
}

export {
    AuthContext,
    useAuthState,
    AuthContextProvider,
};
