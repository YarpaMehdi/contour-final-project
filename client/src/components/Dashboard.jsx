import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="dashboard_box">
                <figure><img src="images/patients.jpg" alt="" /></figure>
                <div className="content_box">
                  <h2>6</h2>
                  <h3>Patients</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard_box">
                <figure><img src="images/doctors.jpeg" alt="" /></figure>
                <div className="content_box">
                  <h2>5</h2>
                  <h3>Doctors</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dashboard_box">
                <figure><img src="images/nurse.jpg" alt="" /></figure>
                <div className="content_box">
                  <h2>2</h2>
                  <h3>Nurse</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard