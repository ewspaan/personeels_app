import React, {useState} from "react";
import styles from "./WeekRooster.module.css"
import {useForm} from "react-hook-form";
import postDataFunction from "../../../hooks/postDataFunction";
import getFunction from "../../../hooks/getFunction";
import {TotalTimeBlock} from "../../molecules/totalTimeBlock/TotalTimeBlock";
import {PlusButton} from "../../atoms/button/PlusButton";
import {MinusButton} from "../../atoms/button/MinusButton";

function StandardRoster(){

    const { register, handleSubmit } = useForm()
//  const [endTime, toggleEndTime] = useState(false)
    const [rosterInfo, setRosterInfo] = useState(null)
//    const [removeCheck, setRemoveCheck] = useState(true)
    const daysOfTheWeek = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]


async function onSubmit(data) {

    console.log("data--> ", data)
    const object = {
            day: data.day,
            startTimeHour: data.startTimeHour,
            startTimeMinute : data.startTimeMinute,
            endTimeHour: data.endTimeHour,
            endTimeMinute : data.endTimeMinute,
            endTime : true,
            multiply: data.multiply,
        }
    console.log("submit object--> ", object)
    const result = await postDataFunction("roster/standard",object)
    console.log("roster result--> ", result)
    getRosterData()

}

async function removeSubmit(data){
    console.log("data--> ", data)
    const object = {
        day: data.day,
        startTimeHour: data.startTimeHour,
        startTimeMinute : data.startTimeMinute,
        endTimeHour: data.endTimeHour,
        endTimeMinute : data.endTimeMinute,
        endTime : true,
        multiply: data.multiply,
    }
    console.log("submit object--> ", object)
    const result = await postDataFunction("roster/remove",object)
    console.log("roster result--> ", result)
    getRosterData()
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
                        value="1"
                        min="0"
                        max="23"
                        {...register("startTimeHour")}
                        />
                    <select
                        className="startMinute"
                        {...register("startTimeMinute")}>
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
                            value="2"
                            min="0"
                            max="23"
                            {...register("endTimeHour")}
                        />
                        <select
                            className="endMinute"
                            {...register("endTimeMinute")}>
                            <option value="0" defaultValue>00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                            <option value="60">61</option>
                        </select>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
        <div>
            <button
                type="button"
                onClick={getRosterData}>
                Info
            </button>
            {daysOfTheWeek.map((weekDay) =>
                <div className={styles.day} key={weekDay}>
                <p>{weekDay}</p>
                {rosterInfo != null &&
                    rosterInfo.map((day,index) => {
                        if (day.day === weekDay) {
                            return (<div key={day.day + index + day.startTimeHour} className={styles.blockRow}>
                                {/*<p>{day.startTime}</p>*/}
                                <TotalTimeBlock
                                    width={day.totalTimeInMinutes}
                                    startTimeHour={day.startTimeHour}
                                    startTimeMinute={day.startTimeMinute}
                                    endTimeHour={day.endTimeHour}
                                    endTimeMinute={day.endTimeMinute}
                                />
                                {/*<p>{day.endTime}</p>*/}
                                <PlusButton
                                    onClick={(e) => onSubmit(day)}/>
                                <MinusButton
                                    onClick={(e) => removeSubmit(day)}/>
                            </div>)
                        }
                        return null
                    })}
                </div>)}
        </div>
        </>
    )
}

export default StandardRoster
