import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/employees/${id}`)
                .then(response => {
                    setFname(response.data.firstName);
                    setLname(response.data.lastName);
                    setEmail(response.data.email);
                    // Assuming image data is base64 encoded or similar format
                    // setImage(response.data.imageData);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstName', fname);
        formData.append('lastName', lname);
        formData.append('email', email);
        if (image) {
            formData.append('imageFile', image);
        }

        const url = id ? `http://localhost:8080/api/employees/${id}` : 'http://localhost:8080/api/employees/';

        axios({
            method: id ? 'put' : 'post',
            url: url,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then((response) => {
                console.log(response.data);
                navigate("/");
            })
            .catch((error) => console.error(error));
    };

    const pageTitle = id ? 'Update Employee' : 'Add Employee';

    return (
        <form onSubmit={handleSubmit}>
            <div className='h-screen flex flex-col justify-center items-center border border-black'>
                <h1 className='text-center font-bold text-2xl p-5'>{pageTitle}</h1>
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
                    <div className='flex flex-col space-y-2'>
                        <label className='font-semibold'>Image</label>
                        <input type='file' className='w-72 placeholder:text-black border border-black p-2 rounded-md' onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                </div>
                <button type='submit' className='mt-5 bg-green-800 w-fit rounded-md text-white p-2'>Submit</button>
            </div>
        </form>
    );
};

export default AddEmployee;