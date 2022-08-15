import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainHeader from './shared/Navigation/MainHeader';
import Customers from './customer/pages/Customers'
import CustomerCreate from './customer/pages/CustomerCreate'
import CustomerDetail from './customer/pages/CustomerDetail'


const App = () => {
  return (
    <>
      <MainHeader />
      <div className='container'>
        <div className='row'>
          <Router>
            <Routes>
              <Route path="/home" element={<Customers />} />
              <Route path="/customer/list" element={<Customers />} />
              <Route path="/customer/create" element={<CustomerCreate />} />
              <Route path="/customer/:cid" element={<CustomerDetail />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
    
  );
}

export default App;
