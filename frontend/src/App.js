import React, { useEffect, useState } from "react";
import API from "./api";
import UserForm from "./UserForm";
import UserList from "./UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    await API.post("/users", user);
    fetchUsers();
  };

  const updateUser = async (user) => {
    await API.put(`/users/${user.id}`, user);
    setEditUser(null);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editUser={editUser}
      />

      <UserList
        users={users}
        onEdit={setEditUser}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default App;
