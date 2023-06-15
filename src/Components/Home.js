import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const handleDeleteUser = user => {
        const agree = window.confirm(`Are you sure, you want to delete ${user.name}?`)
        if(agree) {
            console.log(`Deleted user id is ${user._id}`)
        }
    }
    return (
        <div>
            <h3>Users: {users.length}</h3>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} {user.email} <button onClick={() => handleDeleteUser(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;