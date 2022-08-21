import React, { useCallback, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../shared/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'

const CustomerCreate = () => {
    const navigate = useNavigate();
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            city: {
                value: '',
                isValid: false
            },
            date: {
                value: '',
                isValid: false
            },
            amount: {
                value: '',
                isValid: false
            }
        },
        false
    )
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formState.inputs);
    }
    const navigateToHome = (event) => {
        event.preventDefault()
        navigate('/');
    }
    return (
        <div>
            <h2>Customer Create</h2>
            <form className="row g-3 needs-validation" onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    placeholder="Name"
                    label="Name"
                    id="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid name."}
                    onInput={inputHandler}
                />
                <Input
                    type="text"
                    placeholder="City"
                    label="City"
                    id="city"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid city."}
                    onInput={inputHandler}
                />
                <Input
                    type="date"
                    placeholder="01/06/2022"
                    label="Date"
                    id="date"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid date."}
                    onInput={inputHandler}
                />
                <Input
                    type="number"
                    placeholder="Amount"
                    label="Amount"
                    id="amount"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid amount."}
                    onInput={inputHandler}
                />
                <div className="col-auto">
                    <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    disabled={!formState.isValid}
                    >Submit</button>
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
    )
}

export default CustomerCreate;