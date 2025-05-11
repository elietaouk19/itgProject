import React from 'react';
import { useForm } from 'react-hook-form';
import RInput from '@components/r-input/RInput';
import RButton from '@components/r-button/RButton';
import { useAxios } from '@common/AxiosContext';
import GlobalApis from '@common/GlobalApis';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const axios = useAxios();
    
  const onSubmit =async (data) => {
    try{
    const response = await axios.post(GlobalApis.registerUser,data,{isAlert:true});
    console.log(response.data);
    navigate('/login'); 

    }catch(error){
      console.error("API Error:",error);
    }
  }
  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="register-form"
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Registration
        </h2>

        <RInput
          name="userName"
          label="Username"
          control={control}
          rules={{ required: 'Username is required' }}
          placeholder="Enter your username"
          form="register-form"
          type="text"
        />

        <RInput
          name="userPassword"
          label="Password"
          control={control}
          rules={{ required: 'Password is required' }}
          placeholder="Enter your password"
          form="register-form"
          type="password"
        />

        <RInput
          name="userEmail"
          label="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          type="email"
          placeholder="Enter your email"
          form="user-form"
        />


        <RButton
          type="submit"
          className="w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition duration-150 mt-4"
        />

      </form>
    </div>
  );
};

export default Register;
