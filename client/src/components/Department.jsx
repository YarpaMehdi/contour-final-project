import React from 'react'

const Department = () => {
  return (
    <div className='department'>
      <div className="container">
        <table class="table table-striped table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Department</th>
              <th>Discription</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>pharmastics</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>pharmastics</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>pharmastics</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>pharmastics</td>
              <td>lorem ipsum</td>
              <td><button className='btn btn-primary'>Edit</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>pharmastics</td>
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

export default Department