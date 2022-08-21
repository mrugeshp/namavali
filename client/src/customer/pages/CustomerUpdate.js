import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Input from '../../shared/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook';

import { customersData } from '../../shared/data/staticData'

const CustomerUpdate = () => {
    
    const customerId = parseInt(useParams().cid);
    const customer = customersData.find((customer) => customer.id === customerId);
    const navigate = useNavigate();
    console.log(customer);
    const [formState, inputHandler] = useForm(
        {
            name: {
                value:  customer.name,
                isValid: false
            },
            city: {
                value:  customer.city,
                isValid: false
            },
            date: {
                value:  customer.date,
                isValid: false
            },
            amount: {
                value:  customer.amount,
                isValid: false
            },
        },
        false
    )
    const onSubmitHandler = (event) => {
        console.log(formState)
        event.preventDefault()
    }
    const navigateToHome = (event) => {
        event.preventDefault()
        navigate('/');
    }
    return (
        <div>
            <h2>Customer Edit</h2>
            <form className="row g-3 needs-validation" onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    placeholder="Name"
                    label="Name"
                    id="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid name."}
                    onInput={inputHandler}
                    initialValue={formState.inputs.name.value}
                    initialValid={formState.inputs.name.isValid}
                />
                <Input
                    type="text"
                    placeholder="City"
                    label="City"
                    id="city"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid city."}
                    onInput={inputHandler}
                    initialValue={formState.inputs.city.value}
                    initialValid={formState.inputs.city.isValid}
                />
                <Input
                    type="text"
                    placeholder="Date"
                    label="Date"
                    id="date"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid date."}
                    onInput={inputHandler}
                    initialValue={formState.inputs.date.value}
                    initialValid={formState.inputs.date.isValid}
                />
                <Input
                    type="text"
                    placeholder="Amount"
                    label="Amount"
                    id="amount"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid amount."}
                    onInput={inputHandler}
                    initialValue={formState.inputs.amount.value}
                    initialValid={formState.inputs.amount.isValid}
                />
                <div className="col-auto">
                    <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    disabled={!formState.isValid}
                    >Update</button>
                </div>
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-light mb-3"
                        onClick={navigateToHome}
                    >Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default CustomerUpdate;