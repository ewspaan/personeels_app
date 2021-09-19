import React from "react";
import styles from "./WeekRooster.module.css"
import {useForm} from "react-hook-form";
import postDataFunction from "../../../hooks/postDataFunction";

function StandardRoster(){

    const { register, formState: { errors }, handleSubmit } = useForm()


async function submitLogin(data) {


        const object = [{day: data.day,
                        startTime: data.startTime,
                        endTime: data.endTime},
                        {day: data.day,
                        startTime: data.startTime1,
                        endTime: data.endTime1}]
        console.log("rooster--> ", object)
        const result = await postDataFunction("roster/standard",object)
        console.log("roster result--> ", result)

}

return(
        <div>
            <form
                className={styles.page}
                onSubmit={handleSubmit(submitLogin)}>
                <select
                    className="day"
                    {...register("day")}>
                    <option value="Monday" defaultValue>Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday" >Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <label htmlFor="startTime">Begintijd:</label>
                <input
                    type="time"
                    className="startTime"
                {   ...register("startTime" )} />
                <input
                    type="time"
                    className="endTime"
                    {...register("endTime" )} />
                <label htmlFor="startTime1">Begintijd 2:</label>
                <input
                    type="time"
                    className="startTime1"
                    {   ...register("startTime1" )} />
                <input
                    type="time"
                    className="endTime1"
                    {...register("endTime1" )} />
                <button type="submit">Versturen</button>
            </form>
        </div>
    )
}

export default StandardRoster
