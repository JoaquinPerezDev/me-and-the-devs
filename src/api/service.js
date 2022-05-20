import axios from "axios";
 
const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/auth",
  //  withCredentials: true // => you might need this option if using cookies and sessions
});
 
const errorHandler = (err) => {
  throw err;
};
 

const uploadImage = (file) => {
  return api.post("/upload", file, { headers : { Authorization: `Bearer ${localStorage.getItem('authToken')}`}})
    .then(res => res.data)
    .catch(errorHandler);
};
 

 
export default uploadImage;