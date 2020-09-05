import React from "react";
import { connect } from "react-redux";

import User from "./User";

function UserList({ users }) {
  if (!users) {
    return <h1 className='loading'>Loading..., please wait!</h1>;
  }
  return (
    <div className='user-list'>
      {users.map((user) => (
        <User key={user.login.uuid} {...user} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state,
});

export default connect(mapStateToProps)(UserList);
