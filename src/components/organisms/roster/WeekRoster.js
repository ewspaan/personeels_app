import React, {useEffect, useState} from "react";
import {Heading} from "../../atoms/heading/Heading";
import getFunction from "../../../hooks/getFunction";
import styles from "./WeekRooster.module.css"
import postDataFunction from "../../../hooks/postDataFunction";
import StandardRosterSummary from "../standardRosterSummary/StandardRosterSummary";

function WeekRoster(){

    const [employee, setEmployee] = useState(null)
    const [update,toggleUpdate] = useState(false)
    const [rosterInfo, setRosterInfo] = useState(null)
    const [date,setDate] = useState("")

    useEffect(() => {
        async function getRoommates() {

            const result = await getFunction(`users/all`)
            if(result === false){
                setEmployee(null)
            }else {
                await setEmployee(result)
            }
        }
        getRoommates()
    },[update])

    function setTime(employee){
        console.log("zondag" , employee)
        toggleUpdate(true)
    }
    useEffect(() => {
        async function setDateRoster() {
            const weekNumber = date.substring(date.search("W")+1,date.length)
            const year =date.substring(0,4)
            const result = await postDataFunction(`week-roster/create-week-roster`,{week: weekNumber,year: year})
            await setRosterInfo(result)
            console.log("rosterInfo-->" , result)
        }
        if(date !== "") {
            setDateRoster()
        }
    },[date])

    return(
        <div>
            <Heading level={1} children="Rooster week "/>
            <label htmlFor="weekRoster">Datum rooster: </label>
            <input type="week"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}/>
            <p>Datum: {date}</p>
            <div className={styles.roster}>
                <div className={styles.staff}>
                    <Heading level={4} children="weeknummer: "/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.staffMember}
                            key={roommate.firstName+roommate.lastName}>
                            {roommate.firstName} {roommate.lastName}
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Maandag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div className={styles.timeCard}
                            key={roommate.firstName+roommate.lastName+"monday"}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Dinsdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div key={roommate.firstName+roommate.lastName+"tuesday"}
                            className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Woensdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div key={roommate.firstName+roommate.lastName+"wednesday"}
                            className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Donderdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div key={roommate.firstName+roommate.lastName+"thursday"}
                            className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Vrijdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div key={roommate.firstName+roommate.lastName+"friday"}
                            className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Zaterdag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div key={roommate.firstName+roommate.lastName+"saturday"}
                            className={styles.timeCard}>
                        </div>
                    ))
                    }
                </div>
                <div className={styles.day}>
                    <Heading level={4} children="Zondag"/>
                    {employee !== null && employee.map((roommate) => (
                        <div key={roommate.firstName+roommate.lastName+"sunday"}
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
