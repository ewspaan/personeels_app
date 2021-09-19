import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import HeaderTop from "../components/organisms/header/HeaderTop";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import AddPage from "../pages/AddPage";
import EmployeePage from "../pages/EmployeePage";
import RosterPage from "../pages/RosterPage";
import StandardRosterPage from "../pages/StandardRosterPage";



function Routes() {

    return(
        <>
                <HeaderTop/>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route path="/login" component={ LoginPage }/>
                    <Route path="/signup" component={ SignUp }/>
                    <UserRoute exact path="/profiel">
                        <ProfilePage/>
                    </UserRoute>
                    <AdminRoute exact path="/dezeweek">
                        <RosterPage/>
                    </AdminRoute>
                    <AdminRoute exact path="/roostermaken">
                        <StandardRosterPage/>
                    </AdminRoute>
                    <AdminRoute exact path="/personeel">
                        <EmployeePage/>
                    </AdminRoute>
                    <AdminRoute exact path="/personeel/toevoegen">
                        <AddPage/>
                    </AdminRoute>
                    <AdminRoute exact path="/bedrijf">
                    </AdminRoute>
            </Switch>
        </>
    )
}

export default Routes
