import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/1.png'

export const Sidebar = () => {
    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
                <NavLink className="simple-text logo-normal" to="/">
                    <img src={logo} width="64%" />
                </NavLink>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/">
                            <i className="nc-icon nc-bank"></i>
                            داشبورد
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/UserPost">
                            <i className="nc-icon nc-bank"></i>
                            پست های کاربران
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" className="simple-text logo-normal" to="/axiosCrud">
                            <i className="nc-icon nc-diamond"></i>
                          کار های روزانه ی کاربران
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
