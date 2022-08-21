export const addAuth = (user) => {
  return {
    type: "ADD_AUTH",
    user: user,
  };
};
export const removeAuth = () => {
  return {
    type: "REMOVE_AUTH",
  };
};
