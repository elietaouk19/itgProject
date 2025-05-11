const endPointAddress = window.location.hostname;
// const endPointPort = window.location.port;
const userEndPointUrl = "http://" + endPointAddress + ":8112/api";


const GlobalApis = {
//   endPointAddress:`${window.location.hostname}`,
//   endPointPort:`8112`,
   userEndPointUrl:`http://${endPointAddress}:8112}`,
  login: `${userEndPointUrl}/login`,
  getAllInstitutions: `${userEndPointUrl}/getAllInstitutions`,
  registerUser: `${userEndPointUrl}/registerUser`,
  getActiveInstitutions: `${userEndPointUrl}/getActiveInstitutions`,
  getInstitutionById: `${userEndPointUrl}/getInstitutionById`,
  deleteInstitution: `${userEndPointUrl}/deleteInstitution`,
  createOrUpdateInstitution: `${userEndPointUrl}/createOrUpdateInstitution`,
};

export default GlobalApis;

