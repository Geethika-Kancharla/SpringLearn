import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const navigate = useNavigate();

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = {
            firstName: fname,
            lastName: lname,
            email
        }
        console.log(employee);
        axios.post("http://localhost:8080/api/employees", employee)
            .then((response) => {
                console.log(response.data);
            })
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='h-screen flex flex-col justify-center items-center border border-black'>
                <h1 className='text-center font-bold text-2xl p-5'>AddEmployee</h1>
                <div className='space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>First Name</label>
                        <input type='text' placeholder='Enter first name' className='w-72 placeholder:text-black border border-black p-2 rounded-md' value={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>Last Name</label>
                        <input type='text' placeholder='Enter last name' className='w-72 placeholder:text-black border border-black p-2 rounded-md' value={lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>Email Id</label>
                        <input type='email' placeholder='Enter email id' className='w-72 placeholder:text-black border border-black p-2 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <button type='submit' className='mt-5  bg-green-800 w-fit rounded-md text-white p-2'>Submit</button>
            </div>
        </form>
    )
}

export default AddEmployee