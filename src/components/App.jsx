import React, { useState, useEffect } from 'react';

const App = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="con-md-12">
                    <ul className="col-md-12">
                        {users.map(user => (
                            <li key={user.id} className="list-group-item">{user.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default App;
