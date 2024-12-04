import React from "react";

const User = (props) => {
  const { data } = props;

  return <div>{data.name}</div>;
};

export default User;
