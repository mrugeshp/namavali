import React from "react";
import { useParams } from "react-router-dom";
import { customersData } from '../../shared/data/staticData'

const CustomerDetail = () => {
    const customerId = parseInt(useParams().cid);
    const customer = customersData.find((customer) => customer.id === customerId)
    console.log(customer)
    return (
        <div className="container">
            <div className="row">
                <h3>{customer.name}</h3>
                <h4>City: {customer.city}</h4>
                <h4>Date: {customer.date}</h4>
                <h4>Amount: {customer.amount}</h4>
            </div>
        </div>
    )
}

export default CustomerDetail;