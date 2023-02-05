import React from 'react'

const Doctors = () => {
  return (
    <div className='doctors'>
      <div className="container">
        <table class="table table-striped table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Department</th>
              <th>Discription</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mehdi Ali</td>
              <td>pharmastics</td>
              <td>12345678910</td>
              <td>demo@gmail.com</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr Owais</td>
              <td>MBBs</td>
              <td>12345678910</td>
              <td>demo@gmail.com</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dr Ata</td>
              <td>pharmastics</td>
              <td>12345678910</td>
              <td>demo@gmail.com</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mehdi Ali</td>
              <td>pharmastics</td>
              <td>12345678910</td>
              <td>demo@gmail.com</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mehdi Ali</td>
              <td>pharmastics</td>
              <td>12345678910</td>
              <td>demo@gmail.com</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Doctors