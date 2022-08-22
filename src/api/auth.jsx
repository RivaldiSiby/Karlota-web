import axios from "axios";

const auth = {};

auth.register = async (data) => {
  try {
    await axios.post(`${process.env.REACT_APP_API}auth/register`, data);
    return;
  } catch (error) {
    throw error;
  }
};

auth.login = async (data) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API}auth/login`,
      data
    );
    return result.data.data;
  } catch (error) {
    throw error;
  }
};

export default auth;
