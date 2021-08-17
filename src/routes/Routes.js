import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../../../personeels_app/src/pages/LoginPage";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import HomePage from "../pages/HomePage";
import HeaderTop from "../components/organisms/header/HeaderTop";
import SignUpPage from "../pages/SignUp";
import ProfilePage from "../pages/ProfilePage";



function Routes() {

    return(
        <>
                <HeaderTop/>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route path="/login" component={ LoginPage }/>
                    <Route path="/signup" component={ SignUpPage }/>
                    <UserRoute exact path="/profiel">
                        <ProfilePage/>
                    </UserRoute>
                    <AdminRoute exact path="/dezeweek">
                    </AdminRoute>
                    <AdminRoute exact path="/roostermaken">
                    </AdminRoute>
                    <AdminRoute exact path="/personeel">
                    </AdminRoute>
                    <AdminRoute exact path="/personeel/toevoegen">
                    </AdminRoute>
                    <AdminRoute exact path="/bedrijf">
                    </AdminRoute>
            </Switch>
        </>
    )
}

export default Routes
