import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '@common/TokenContext'; 

const Logout = () => {
  const { updateToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    updateToken(null);
    localStorage.removeItem("token");
    navigate('/login'); 
  }, []);

  return null; 
};

export default Logout;
