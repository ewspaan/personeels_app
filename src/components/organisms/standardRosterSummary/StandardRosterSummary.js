import React, {useEffect, useState} from "react";
import getFunction from "../../../hooks/getFunction";

function StandardRosterSummary({times}){


    const [timesArray, setTimesArray] = useState(null)
    if(times !== null) {
        setTimesArray(times)
    }
    return(
        <div>
            {/*{timesArray !== null &&*/}
            {/*timesArray.map((time) =>{*/}
            {/*    return (<div>{time.startTime}-{time.endTime}</div>)*/}
            {/*})}*/}
        </div>
    )
}

export default StandardRosterSummary;
