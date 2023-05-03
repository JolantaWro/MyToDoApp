import React from 'react';
import {NavLink} from "react-router-dom";

const Layout = ({children}) => {


    return (
        <>
            <nav className="navbar has-shadow is-spaced">
                <div className="container">
                    <div className="navbar-brand">

                        <NavLink to={"/"} exact className={"is-active"}>
                            <h2 className="navbar-item title is-4">ToDoAp</h2>
                        </NavLink>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink to="/addTask" className="navbar-item" className="is-active">
                                <span className="icon has-text-primary">
                                    <i className="fas fa-folder"/>
                                </span>
                                <span>Dodaj nowe zadanie</span>
                            </NavLink>
                            <NavLink to="/done" className="navbar-item" className="is-active">
                                <span className="icon has-text-primary">
                                    <i className="fas fa-folder"/>
                                </span>
                                <span>Zrobione</span>
                            </NavLink>
                            <NavLink to="/do" className="navbar-item" className="is-active">
                                <span className="icon has-text-danger">
                                    <i className="fas fa-pizza-slice"/>
                                </span>
                                <span>Do zrobienia</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
};

export default Layout;