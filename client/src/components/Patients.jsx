import React from 'react'

const Patients = () => {
  return (
    <div className='patients'>
      <div className="container">
        <table class="table table-striped table-bordered table-hover thead-dark">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Time of Registration</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mehdi Ali</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mehdi Ali</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mehdi Ali</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mehdi Ali</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>shebaz</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Rafy</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Ramzan</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Perdeep</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Huzefa</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>11</td>
              <td>Parvez</td>
              <td>12345678910</td>
              <td>Male</td>
              <td>24</td>
              <td>B+</td>
              <td>02-05-2023</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Patients