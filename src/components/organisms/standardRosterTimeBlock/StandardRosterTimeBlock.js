import React, {useState} from "react";
import {TotalTimeBlock} from "../../molecules/totalTimeBlock/TotalTimeBlock";
import {CheckButtonCorrect} from "../../atoms/checkButton/CheckButtonCorrect";
import {CheckButtonInCorrect} from "../../atoms/checkButton/CheckButtonInCorrect";
import {PlusButton} from "../../atoms/button/PlusButton";
import {MinusButton} from "../../atoms/button/MinusButton";
import styles from "./StanderdRosterTimeBlock.module.css"

function StandardRosterTimeBlock({width,startTimeHour,startTimeMinute,removeCheck}){


    const [check, setCheck] = useState(true)

    setCheck(removeCheck)

    return(
        <div className={styles.block}>
            <TotalTimeBlock
                width={width}
                startTimeHour={startTimeHour}
                startTimeMinute={startTimeMinute}
            />
            <PlusButton/>
            {check === true ?
                <div className={styles.block}>
                    <CheckButtonInCorrect/>
                    <CheckButtonCorrect/>
                </div>:
                <MinusButton/>}
        </div>
    )
}

export default StandardRosterTimeBlock
