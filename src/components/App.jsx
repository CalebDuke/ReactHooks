import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Films from "./Films";
// import People from "./People";


fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json));


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/films" component={Films} />
          <Route exact path="/people/:id" component={SinglePerson} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;




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
