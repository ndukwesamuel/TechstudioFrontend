import axios from "axios";

let urlsDataOnline = "https://techstudioacademybackend.herokuapp.com/api";
let urlsDatalocal = "http://127.0.0.1:5000/api";

let url = `${urlsDataOnline}/auth/login`;

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(url, userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
