import React from 'react'

const UserList = () => {
    const users = [
        {
            firstName: "John",
            lastName: "Doe",
            birthDate: "1976-10-18",
            startDate: "2022-12-17",
            street: "35, selfy road",
            city: "Clearwater",
            states: "Minnesota",
            zipCode: "56450",
            department: "Engineering",
          },
          {
            firstName: "Jane",
            lastName: "Snow",
            birthDate: "1979-01-23",
            startDate: "2022-12-17",
            street: "35, long street",
            city: "Chicago",
            states: "Illinois",
            zipCode: "56450",
            department: "Manager",
          }
    ]
    const renderCard = () => users.map(user => (
        <div className='content'>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <span>{user.department}</span>
        </div>
    ))

  return (
    <div>
        {users.length ? renderCard() : <p>No User</p>}
    </div>
  )
}

export default UserList