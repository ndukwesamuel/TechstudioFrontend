import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/user/";
// Delete user
const getuser = async (Id) => {
  const response = await axios.get(API_URL + Id);

  console.log(response.data);
  return response.data;
};

const userinfoService = {
  getuser,
};

export default userinfoService;
