import React,{useEffect} from 'react';
import { useForm } from 'react-hook-form';
import RInput from '@components/r-input/RInput';
import RButton from '@components/r-button/RButton';
import { useAxios } from '@common/AxiosContext';

import { useToken } from '@common/TokenContext';
import GlobalApis from '@common/GlobalApis';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { control, handleSubmit } = useForm();
  const { updateToken } = useToken();
  const navigate = useNavigate();
  const axios = useAxios();



  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  
  const onSubmit =async (data) => {
    try{
    const response = await axios.post(GlobalApis.login,data,{isAlert:true});
    updateToken(response.data.data);
    localStorage.setItem("token",response.data.data)
    navigate('/institution'); 
    }catch(error){
      console.error("API Error:",error);
    }
  }
  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="login-form"
        className="w-full max-w-md bg-white p-4 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        <RInput
          name="userName"
          label="Username"
          control={control}
          rules={{ required: 'Username is required' }}
          placeholder="Enter your username"
          form="login-form"
        />

      <RInput
          name="userPassword"
          label="Password"
          control={control}
          rules={{ required: 'Password is required' }}
          placeholder="Enter your password"
          form="login-form"
          type="password"
        />

        <RButton
          type="submit"
          className="w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition duration-150 mt-4"
        />


       

      </form>
    </div>
  );
};

export default Login;
