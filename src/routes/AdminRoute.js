import React from "react";
import { Route } from "react-router-dom";

function AdminRoute({children, ...rest}) {


    return(
        <Route {...rest}
               render={() =>
                   (children)
               }
        />)
}

export default AdminRoute;
