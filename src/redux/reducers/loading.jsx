const initialState = {
  status: false,
};

const loading = (prevState = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { status: true };
    case "DONE_LOADING":
      return { status: false };
    default:
      return prevState;
  }
};

export default loading;
