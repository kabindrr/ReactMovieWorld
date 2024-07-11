import axios from "axios";
const apiKEY = "c2925841";
const apiEP = `http://www.omdbapi.com/?apikey=${apiKEY}&`;
// const apiEP = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKEY}&`;
export const fetchFromAPI = async (str) => {
  try {
    const url = apiEP + "t=" + str;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
