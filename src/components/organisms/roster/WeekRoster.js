import React, {useEffect, useState} from "react";
import {Heading} from "../../atoms/heading/Heading";
import getFunction from "../../../hooks/getFunction";
import styles from "./WeekRooster.module.css"

function WeekRoster(){

    const [employee, setEmployee] = useState(null);
    const [update,toggleUpdate] = useState(false);
//    const [check, toggleCheck] = useState(false);

    useEffect(() => {
        async function getRoommates() {

            const result = await getFunction(`users/all`);
            if(result === false){
                setEmployee(null);
            }else {
                await setEmployee(result);
            }
        }
        getRoommates();
    },[update]);

    function setTime(employee){
        console.log("zondag" , employee)
        toggleUpdate(true)
    }

    return(
        <div>
            <Heading level={1} children="Rooster week "/>
            <div className={styles.roster}>
                <div className={styles.staff}>
                    <Heading level={4} children="weeknummer: "/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.staffMember}>
                            {roommate.firstName} {roommate.lastName}
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Maandag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}
                             onClick={e => setTime(roommate)}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Dinsdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Woensdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Donderdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Vrijdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Zaterdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Zondag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div
                            className={styles.timeCard}
                            onClick={e => setTime(roommate)}
                        >
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WeekRoster
