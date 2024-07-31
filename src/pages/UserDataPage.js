import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserDataPage.css'; // Import the CSS file

function UserDataPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', points: 0, since: '' });

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/all').then(response => setUsers(response.data));
  }, []);

  const addUser = () => {
    const userToAdd = { ...newUser };
    axios.post('http://localhost:8080/api/users/new', userToAdd).then(response => {
      setUsers([...users, response.data]);
      setNewUser({ name: '', points: 0, since: '' });
    });
  };

  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Since</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.since}</td>
              <td>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="form">
        <h2>Add New User</h2>
        <label>
          Name:
          <input 
            type="text" 
            value={newUser.name} 
            onChange={e => setNewUser({ ...newUser, name: e.target.value })} 
          />
        </label>
        <label>
          Since:
          <input 
            type="date" 
            value={newUser.since} 
            onChange={e => setNewUser({ ...newUser, since: e.target.value })} 
          />
        </label>
        <label>
          Points:
          <input 
            type="number" 
            value={newUser.points} 
            onChange={e => setNewUser({ ...newUser, points: parseInt(e.target.value) })} 
          />
        </label>
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}

export default UserDataPage;
