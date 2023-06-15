import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDeleteUser = user => {
        console.log(user);
        const agree = window.confirm(`Are you sure, you want to delete ${user.name}?`)
        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                        alert('User deleted successfully.');
                    }
                })
        }
    }
    return (
        <div>
            <h3>Users: {displayUsers.length}</h3>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user.name}
                        {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>
                                Update User
                            </button>
                        </Link>
                        <button onClick={() => handleDeleteUser(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;