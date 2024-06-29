import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


export const axiosPower = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials: true
})


const useAxiosPower = () => {
  const {userLogout} =  useAuth();
  const navigate = useNavigate(); 


    useEffect(()=>{
        axiosPower.interceptors.response.use(response => {
            return response; 
        }, error => {
            console.log('errror from interceptor', error.response.status);
            if(error.response.status === 401 || error.response.status === 403){
                console.log('user logout');
                userLogout()
                .then(()=>{
                    navigate('/login')
                })
                .catch(err => console.log(err)); 
            }
        })
    },[])

  return axiosPower;  
};

export default useAxiosPower;