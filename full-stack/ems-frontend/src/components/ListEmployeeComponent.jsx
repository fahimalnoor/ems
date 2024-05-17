import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [

        {
            "id": 1,
            "firstName": "Al Noor",
            "lastName": "Fahim",
            "email": "fahim@mail.com"
        },
        {
            "id": 2,
            "firstName": "Second",
            "lastName": "Fahim3",
            "email": "fahim2@mail.com"
        },
        {
            "id": 3,
            "firstName": "Third",
            "lastName": "Fahim3",
            "email": "fahim3@mail.com"
        }
]

  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee =>
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent