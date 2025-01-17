import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListEmployee = () => {

  const [employees, setEmployees] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    fetch('http://localhost:8080/api/employees')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setEmployees(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }

  const updateEmployee = (id) => {
    navigate(`/edit/${id}`)
  }

  const deleteEmployee = (id) => {
    axios.delete("http://localhost:8080/api/employees/" + id)
      .then((response) => {
        getAllEmployees();
        console.log(id);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <div className='flex justify-center'>
      <div className="w-3/5  flex flex-col space-y-3">
        <h1 className='text-center font-bold text-3xl'>List Employees</h1>
        <Link to='/try'><button className='mt-5 text-left bg-blue-500 w-fit rounded-md text-white p-2 m-5'>Add Employee</button></Link>
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

              <th scope="col" className="px-6 py-3">
                Actions
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



                  <td className="px-6 py-4 ">
                    <div className='space-x-2'>
                      <button className='bg-blue-500 text-white p-2 w-fit rounded-lg' onClick={() => { updateEmployee(employee.id) }}>Update</button>
                      <button className='bg-red-500 text-white p-2 w-fit rounded-lg' onClick={() => { deleteEmployee(employee.id) }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default ListEmployee



// Handling form data

// const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     category: "",
//     stockQuantity: "",
//     releaseDate: "",
//     productAvailable: false,
//   });
//   const [image, setImage] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   }; this is Employee entity package com.learn.Learn.entity;