import React from "react";
import { Route } from "react-router-dom";

function UserRoute({children, ...rest}) {


    return(
        <Route {...rest}
               render={() =>
                   (children)
               }
        />)
}

export default UserRoute;
