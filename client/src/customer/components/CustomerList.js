import React from 'react'
import CustomerItem from './CustomerItem';

const CustomerList = (props) => {
    if (props.customers.length === 0) {
        return (
            <>
                <div>No customers found!</div>
            </>
        );
    }

    return (
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.customers.map((customer) => {
                        return <CustomerItem key={customer.id} customer={customer} />
                    })
                }
            </tbody>
        </table>
    );
}

export default CustomerList;