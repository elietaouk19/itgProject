import React, { createContext, useContext, useMemo,useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useToken } from './TokenContext';
import GlobalApis from './GlobalApis';


const Loader = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-transparent"></div> 
    <div className="relative z-10 w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);



const AxiosContext = createContext();

export const useAxios = () => useContext(AxiosContext);

export const AxiosProvider = ({ children }) => {
  const { bearerToken } = useToken();
  const [loading, setLoading] = useState(false); 

  let isAlert=false;

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: GlobalApis.userEndPointUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    instance.interceptors.request.use(
      (config) => {
        if (bearerToken) {
          config.headers.Authorization = `Bearer ${bearerToken}`;
        }
        if(config.isAlert){
            setLoading(true);
            isAlert=true;
        }else{
            isAlert=false;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
   

      if(isAlert){
        toast.success(response.data.message, {
          position: 'bottom-right',
        });
    }
        return response;
      },
      (error) => {
         setTimeout(() => {
            setLoading(false);
        }, 500);

       if(isAlert){
        toast.error(error.response.data.message, {
          position: 'bottom-right',
        });
    }
        return Promise.reject(error);
      }
    );

    return instance;
  }, [bearerToken]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
            {loading && <Loader />}
      {children}
    </AxiosContext.Provider>
  );
};
