import axios from 'axios';
import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router';
import AuthContext from '../Context/AuthContext';


const axiosInstace = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
;



const useAxiosSecure = () => {
    // const {signOutUser} = useAuth;
    const {signOutUser} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstace.interceptors.response.use(response=>{
            return response
        }, error =>{
            if (error.status === 401 || error.status === 403) {
              signOutUser()
                    .then(() => {
                        // redirect to the login page
                        navigate('/login')
                    })
                    .catch(err => console.log(err))
            }
             return Promise.reject(error);
            
        })
    },[signOutUser, navigate])

    return axiosInstace;
};

export default useAxiosSecure;