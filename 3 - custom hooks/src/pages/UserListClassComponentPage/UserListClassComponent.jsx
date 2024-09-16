import { Component } from 'react';

export class UserListClassComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      users: [],
    };
  }

  // Equivalent of useEffect with an empty dependency array
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  componentWillUnmount() {
    // Clean up
    //  WebSocketų uždarymas, event listenerių pašalinimas ir t.t.
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
