import React, { useEffect, useState } from 'react'

const ListEmployee = () => {

  const [employees, setEmployees] = useState([])


  useEffect(() => {
    fetch('http://localhost:8080/api/employees')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setEmployees(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee Id
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => (
              <tr key={employee.id} className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">

                <td className="px-6 py-4">
                  {employee.id}
                </td>
                <td className="px-6 py-4">
                  {employee.firstName}
                </td>
                <td className="px-6 py-4">
                  {employee.lastName}
                </td>
                <td className="px-6 py-4 ">
                  {employee.email}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}

export default ListEmployee
