import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardMenu = () => {
  return (
    <div className="dashboard_menu">
        <div className="container">
          <ul>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/department"}>Department</NavLink>
            </li>
            <li>
              <NavLink to={"/doctors"}>Doctors</NavLink>
            </li>
            <li>
              <NavLink to={"/patients"}>Patients</NavLink>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default DashboardMenu