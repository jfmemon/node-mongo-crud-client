import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/users', {  // server er link("http://localhost:5000/users")
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    alert('User added successfully.');
                    event.target.reset();
                }
            })
            
    }

    const handleInput = event => {
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
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInput} type="text" name="name" id="" placeholder='Name' required />
                <input onBlur={handleInput} type="text" name="address" id="" placeholder='Address' required />
                <input onBlur={handleInput} type="email" name="email" id="" placeholder='Email' required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;