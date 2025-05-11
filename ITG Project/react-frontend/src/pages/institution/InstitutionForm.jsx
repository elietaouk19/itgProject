  import React,{useEffect} from 'react';
  import { useForm } from 'react-hook-form';
  import RInput from '@components/r-input/RInput';
  import RButton from '@components/r-button/RButton';
  import { useAxios } from '@common/AxiosContext';
  import GlobalApis from '@common/GlobalApis';
  import { useNavigate } from 'react-router-dom';
  import { useParams } from 'react-router-dom';

  const InstitutionForm = () => {
    const { control, handleSubmit,reset } = useForm();
    const navigate = useNavigate();
    const axios = useAxios();
  const { institutionId } = useParams();
  const { actionType } = useParams();

  useEffect(() => {
      if(actionType=="update"){
    const fetchData = async () => {
        try {
          const response = await axios.get(GlobalApis.getInstitutionById+"/"+institutionId,{isAlert:false});
          response.data.data.institutionStatus = response.data.data.institutionStatus === 1;
          reset(response.data.data);

      } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
      }
  
    }, [institutionId]);

  const handleClick = () => {
    navigate('/institution'); 
};

    const onSubmit =async (data) => {
      try{
      data.institutionStatus = data.institutionStatus ? 1 : 0;
      if(actionType=="create"){
          data.institutionId=0;
      }else{
          data.institutionId=institutionId;
      }
      const response = await axios.post(GlobalApis.createOrUpdateInstitution,data,{isAlert:true});
      console.log(response.data);
      navigate('/institution'); 

      }catch(error){
        console.error("API Error:",error);
      }
    }
    return (
          <div className="flex items-center justify-center px-4">

    <form
      onSubmit={handleSubmit(onSubmit)}
      id="institution-form"
              className="w-full max-w-3xl bg-white p-4 rounded-2xl shadow-md"

    >
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
        {actionType === 'update' ? 'Update your Institution' : 'Create your Institution'}
      </h2>

      <div className="space-y-5">
        <RInput
          name="institutionCode"
          label="Institution Code"
          control={control}
          rules={{
            required: 'Code is required',
            maxLength: { value: 5, message: 'Maximum Code length is 5 characters' },
          }}
          placeholder="Enter code"
          form="institution-form"
          type="number"
        />

        <RInput
          name="institutionName"
          label="Institution Name"
          control={control}
          rules={{
            required: 'Institution Name is required',
            maxLength: { value: 50, message: 'Maximum Name length is 50 characters' },
          }}
          placeholder="Enter name"
          form="institution-form"
          
        />

    
          <RInput
            name="institutionStatus"
            control={control}
            form="institution-form"
            type="checkbox"
            label="Status(Activate/Inactive)"
          />
      </div>

<div className="mt-12 flex justify-center gap-6">
  <RButton
    type="submit"
    className="w-48 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-150"
  />

  <RButton
    name="Back"
    type="button"
    className="w-48 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-150"
    onActivate={handleClick}
  />
</div>
    </form>
</div>
    );
  };

  export default InstitutionForm;
