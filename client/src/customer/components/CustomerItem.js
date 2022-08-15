import React from 'react'

const CustomerItem = (props) => {
    return (
        <tr>
            <td>{props.customer.id}</td>
            <td>{props.customer.name}</td>
            <td>{props.customer.city}</td>
            <td>{props.customer.date}</td>
            <td>{props.customer.amount}</td>
        </tr>
    )
}

export default CustomerItem;