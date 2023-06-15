import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>Users: {users.length}</h3>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} {user.email}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;