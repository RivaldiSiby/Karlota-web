const initialState = {
  login: false,
  user: [],
};

const auth = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTH":
      return { login: true, user: action.user };
    case "REMOVE_AUTH":
      return { login: false, user: [] };
    default:
      return { login: false, user: [] };
  }
};

export default auth;
