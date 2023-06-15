import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifyCount > 0) {
                alert('User updated.');
                event.target.reset();
            }
        })

    }

    const handleUpdateInput = event => {
        event.preventDefault();
        const fieldName = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };  // ager user gulo'o newUser a add kora 
        newUser[fieldName] = value;  // newUser er value ta hobe oi event.target.value(fieldName er value)
        setUser(newUser);  // setUser er value hobe newUser er value;
    }

    return (
        <div>
            <h3>Please add a new user.</h3>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleUpdateInput} type="text" name="name" id="" defaultValue={storedUser.name} placeholder='Name' required /><br />
                <input onChange={handleUpdateInput} type="text" name="address" id="" defaultValue={storedUser.address} placeholder='Address' required /><br />
                <input onChange={handleUpdateInput} type="email" name="email" id="" defaultValue={storedUser.email} placeholder='Email' required /><br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;