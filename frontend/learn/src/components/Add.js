import React, { useState } from 'react';
import axios from 'axios';


const EmployeeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:8080/api/employees', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Success");

        } catch (error) {
            console.error('Error response:', error.response);
            console.error('Error message:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;