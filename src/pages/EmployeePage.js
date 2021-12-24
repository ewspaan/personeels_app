import React, {useEffect, useState} from 'react';
import styles from "./Page.module.css";
import {NavLink} from "react-router-dom";
//import {useAuthState} from "../context/authContext/AuthContext";
import getFunction from "../hooks/getFunction";
import ProfileEmployee from "../components/organisms/profile/ProfileEmployee";


function EmployeePage(){

//    const { user } = useAuthState();
    const [employee, setEmployee] = useState(null);
    //   const [update,toggleUpdate] = useState(false);
//    const [check, toggleCheck] = useState(false);

    useEffect(() => {
        async function getRoommates() {

            const result = await getFunction(`users/all`);
                if(result === false){
                    setEmployee(null);
                }else {
                    await setEmployee(result);
                }
            console.log("Roommates--> " , result);
        }
        getRoommates();
    },[]);

    return(
        <div className={styles.page}>
            {employee === null && <p>Er zijn geen personeelsleden. Voeg ze <NavLink to="/personeel/toevoegen">hier</NavLink> toe</p>}
            {employee !== null && employee.map((roommate,index) => (
                <ProfileEmployee
                        key={index}
                        firstName={roommate.firstName}
                        lastName={roommate.lastName}
                        email={roommate.email}
                        telephoneNumber={roommate.telephoneNumber}
                        dateOfBirth={roommate.dateOfBirth}
                        username={roommate.username}
                        id={roommate.id}
                />
            ))
            }
        </div>
    )
}

export default EmployeePage
