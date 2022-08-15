import React from 'react'
import CustomerList from '../components/CustomerList';

const Customers = () => {
    const customers = customersData;
    return (
        <div className='customers'>
            <h3>Customer List</h3>
            <CustomerList customers={customers}  />
        </div>
    )
}

export const customersData = [
    {
        id: 1,
        name: 'Ramesh Panchal',
        city: 'Godhra',
        date: '12-08-2021',
        amount: 5000,
    },
    {
        id: 2,
        name: 'Suresh Panchal',
        city: 'Pune',
        date: '12-08-2021',
        amount: 7000,
    },
    {
        id: 3,
        name: 'Raman Panchal',
        city: 'Limdi',
        date: '12-08-2021',
        amount: 10000,
    }
]

export default Customers;