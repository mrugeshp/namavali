import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerItem = (props) => {
    const navigate = useNavigate();
    const redirectDetail = () => {
        navigate('/customer/' + props.customer.id)
    }

    return (
        <tr onClick={redirectDetail}>
            <td>{props.customer.id}</td>
            <td>{props.customer.name}</td>
            <td>{props.customer.city}</td>
            <td>{props.customer.date}</td>
            <td>{props.customer.amount}</td>
        </tr>
    )
}

export default CustomerItem;