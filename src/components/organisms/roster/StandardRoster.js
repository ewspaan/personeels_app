import React, {useState} from "react";
import styles from "./WeekRooster.module.css"
import {useForm} from "react-hook-form";
import postDataFunction from "../../../hooks/postDataFunction";
import getFunction from "../../../hooks/getFunction";

function StandardRoster(){

    const { register, handleSubmit } = useForm()
    const [endTime, toggleEndTime] = useState(false)
    const [rosterInfo, setRosterInfo] = useState(null)


async function onSubmit(data) {

    console.log("data--> ", data)
    const object = {
            day: data.day,
            startTimeHour: data.startHour,
            startTimeMinute : data.startMinute,
            endTimeHour: data.endHour,
            endTimeMinute : data.endMinute,
            endTime : true,
            multiply: data.multiply,
        }
    console.log("object--> ", object)
    const result = await postDataFunction("roster/standard",object)
    console.log("roster result--> ", result)

}

async function getRosterData(){

    const data = await getFunction("roster/roster")
    setRosterInfo(data)
    console.log("get roster data--> ",data)
}

return(
    <>
        <div className={styles.roster}>
            <form
                className={styles.day}
                onSubmit={handleSubmit(onSubmit)}>
                <select
                    className={styles.selectTime}
                    {...register("day")}>
                    <option value="Monday" defaultValue>Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday" >Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <div className={styles.selectTime}>
                    <input
                        className="startHour"
                        type="number"
                        min="0"
                        max="23"
                        {...register("startHour")}
                        />
                    <select
                        className="startMinute"
                        {...register("startMinute")}>
                        <option value="0" defaultValue>00</option>
                        <option value="15" >15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                </div>
                <div className={styles.selectTime}>
                        <input
                            className="endHour"
                            type="number"
                            min="0"
                            max="23"
                            {...register("endHour")}
                        />
                        <select
                            className="endMinute"
                            {...register("endMinute")}>
                            <option value="0" defaultValue>00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                            <option value="60">61</option>
                        </select>
                </div>
                {/*<div>*/}
                {/*    <p>Eindtijd:</p>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={(e)=> toggleEndTime(!endTime)}>Ja</button>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={(e)=> toggleEndTime(endTime)}>Nee</button>*/}
                {/*</div>*/}
                    <select className="multiply"
                            {...register("multiply")}>
                        <option value="1">1x</option>
                        <option value="2">2x</option>
                        <option value="3" defaultValue>3x</option>
                        <option value="4">4x</option>
                        <option value="5">5x</option>
                    </select>
                <button type="submit">Send</button>
            </form>
        </div>
        <div>
            <button
                type="button"
                onClick={getRosterData}>
                Info
            </button>
            {rosterInfo != null && <div>
                <p>Monday</p>
                {rosterInfo.map((day,index) => {
                if (day.day === "MONDAY") {
                    return <p key={day.day + index}>Starttijd: {day.startTime} eindtijd: {day.endTime}</p>
                }
                return null
            })}
            </div>}
            {rosterInfo != null && <div>
                <p>Tuesday</p>
                {rosterInfo.map((day,index) => {
                    if (day.day === "TUESDAY") {
                        return <p key={day.day + index}>Starttijd: {day.startTime} eindtijd: {day.endTime}</p>
                    }
                    return null
                })}
            </div>}
        </div>
        </>
    )
}

export default StandardRoster
