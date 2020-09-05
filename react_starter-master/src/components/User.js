import React from "react";
const User = ({ name, location, email, picture }) => {
  return (
    <div className='random-user'>
      <div className='user-image'>
        <img src={picture.medium} alt={name.first} />
      </div>
      <div>
        <strong>Name: </strong>{name.title} {name.first} {name.last}
      </div>
      <div>
        <strong>Address:</strong> {location.street.number}, {location.street.name}, {location.city}, {location.state}.
      </div>
      <div>
        <strong>Country:</strong> {location.country}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
  );
};
export default User;
