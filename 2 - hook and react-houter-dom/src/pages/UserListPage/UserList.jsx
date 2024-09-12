import React from 'react';

export const UserList = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(function componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);

    return function componentWillUnmount() {
      // Clean up
      //  WebSocketų uždarymas, event listenerių pašalinimas ir t.t.
    }
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
