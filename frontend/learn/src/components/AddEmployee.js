import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const AddEmployee = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();

    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
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
    }

    const validateForm = () => {
        let valid = true;
        const errorsCopy = { ...errors }

        if (fname.trim()) {
            errorsCopy.fname = '';
        }
        else {
            errorsCopy.fname = "First Name is required";
            valid = false;
        }

        if (lname.trim()) {
            errorsCopy.lname = '';
        }
        else {
            errorsCopy.lname = "Last Name is required";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        }
        else {
            errorsCopy.email = "Email is required";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;

    }

    const pageTitle = () => {
        if (id)
            return <h1 className='text-center font-bold text-2xl p-5'>Update Employee</h1>
        else
            return <h1 className='text-center font-bold text-2xl p-5'>Add Employee</h1>
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='h-screen flex flex-col justify-center items-center border border-black'>
                {pageTitle()}
                <div className='space-y-3'>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>First Name</label>
                        <input type='text' placeholder='Enter first name' className='w-72 placeholder:text-black border border-black p-2 rounded-md' value={fname} onChange={(e) => setFname(e.target.value)} />
                        {errors.fname && <div className='text-red-600 text-sm'>{errors.fname}</div>}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>Last Name</label>
                        <input type='text' placeholder='Enter last name' className='w-72 placeholder:text-black border border-black p-2 rounded-md' value={lname} onChange={(e) => setLname(e.target.value)} />
                        {errors.lname && <div className='text-red-600 text-sm'>{errors.lname}</div>}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>Email Id</label>
                        <input type='email' placeholder='Enter email id' className='w-72 placeholder:text-black border border-black p-2 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className='text-red-600 text-sm'>{errors.email}</div>}
                    </div>
                </div>
                <button type='submit' className='mt-5  bg-green-800 w-fit rounded-md text-white p-2'>Submit</button>
            </div>
        </form>
    )
}

export default AddEmployee