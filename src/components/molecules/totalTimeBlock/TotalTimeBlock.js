import React from "react";
import styles from "./TotalTimeBlock.module.css"

export const TotalTimeBlock = ({width,startTimeHour,startTimeMinute,endTimeHour,endTimeMinute}) => {

    const lengthSpanBlack = {width:width}
    const lengthSpanBegin = {width : startTimeHour*60 + startTimeMinute}
    const lengthSpanEnd = { width: 1440 - width - startTimeHour*60 - startTimeMinute}
    return (
        <div className={styles.block}>
            <span className={styles.block_white} style={lengthSpanBegin}> </span>
            <span className={styles.block_black} style={lengthSpanBlack}> </span>
            {/*<span className={styles.block_white} style={lengthSpanEnd}> </span>*/}
        </div>)
}
