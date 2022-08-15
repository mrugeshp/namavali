import React from 'react'
import CustomerList from '../components/CustomerList';
import { customersData } from '../../shared/data/staticData';

const Customers = () => {
    const customers = customersData;
    return (
        <div className='container customers'>
            <div className='row'>
                <h3>Customer List</h3>
            </div>
            <div className='row'>
                <CustomerList customers={customers}  />
            </div>
        </div>
    )
}

export default Customers;