
import './App.css'
import Login from '@pages/login/Login'
import Register from '@pages/login/Register'
import Logout from '@pages/login/logout'
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import AuthLayout from '@layouts/AuthLayout';  
import MainLayout from '@layouts/MainLayout';  
import React from 'react';
import InstitutionPage from '@pages/institution/Institution';
import InstitutionForm from '@pages/institution/InstitutionForm';
import { ToastContainer } from 'react-toastify';
import ProtectionRoute from '@common/ProtectionRoute';

function App() {

  return ( 
    <>
   <Router>
        <Routes>
                  <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
            <Route path="/logout" element={<Logout />} />

          <Route element={<ProtectionRoute><MainLayout /></ProtectionRoute>}>
            <Route path="/institution" element={<InstitutionPage />} />
            <Route path="/institution/:actionType/:institutionId" element={<InstitutionForm />} />
          </Route>
        </Routes>
      </Router>
         
    <ToastContainer />

    </>
  )
}

export default App
