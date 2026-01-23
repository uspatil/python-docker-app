import React, { useEffect, useState } from "react";

function UserForm({ addUser, updateUser, editUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      updateUser({ ...editUser, name, email });
    } else {
      addUser({ name, email });
    }

    setName("");
    setEmail("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;
