import React,{useState} from 'react';
import {useAxios} from '@common/AxiosContext';
import GlobalApis from '@common/GlobalApis';
import { useNavigate } from 'react-router-dom';
import RCombo from '@components/r-combo/RCombo';
import RGrid from '@components/r-grid/RGrid';

const InstitutionPage = () => {
    const axios = useAxios();
    const navigate = useNavigate();
    const [selectedInstitution, setSelectedInstitution] = useState(null);
    const [updateComboTrigger, setUpdateComboTrigger] = useState(-1);

  const handleAdd = () => {
    navigate('/institution/create/-1'); 
};

  const handleEdit = (id) => {
    navigate('/institution/update/'+id); 
  };

  const handleDelete = async (id) => {
    try{
    const response = await axios.delete(GlobalApis.deleteInstitution+"/"+id,{isAlert:true});
    setUpdateComboTrigger(id);
    }catch(error){
        console.error(error)
    }
  };

  const gridConfig = [
    {
      headerName: "Id",
      field: "institutionId",
    },
    {
      headerName: "Institution Name",
      field: "institutionName",

    },
    {
      headerName: "Institution Code",
      field: "institutionCode",
  
    },
    {
      headerName: "Status",
      field: "institutionStatus",
    },
    {
      headerName: "Edit",
      field: "",
      isEdit: true,
    },
    {
      headerName: "Delete",
      field: "",
      isDelete: true
    },


  ];


  return (
    <div>
      <RCombo dataApi={GlobalApis.getActiveInstitutions} 
       placeholder="Select Institution"
       onSelect={setSelectedInstitution}
       idCol="institutionId"
       nameCol="institutionName"
       updateTrigger={updateComboTrigger}
       label="Active Institutions"
      />
        
            <RGrid
                gridConfig={gridConfig}
                dataApi={GlobalApis.getAllInstitutions}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
                primaryKey="institutionId"
                valueToFilter={selectedInstitution}
                canPrint="true"
                printFileName="Institution Data"
            />
            </div>
  );
};


export default InstitutionPage;
