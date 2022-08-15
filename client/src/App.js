import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Customers from './customer/pages/Customers'
import CustomerCreate from './customer/pages/CustomerCreate'

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Router>
          <Routes>
            <Route path="/home" element={<Customers />} />
            <Route path="/customer/list" element={<Customers />} />
            <Route path="/customer/create" element={<CustomerCreate />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
