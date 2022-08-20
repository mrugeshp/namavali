import React, { useCallback, useReducer } from 'react'
import Input from '../../shared/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'

const formReducer = (state, action) => {
    switch(action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for(const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            }
        default:
            return state;
    }
}

const CustomerCreate = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
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
        isValid: false
    })
    const inputInputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputId: id
        })
    }, []);
    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formState.inputs);
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
                    onInput={inputInputHandler}
                />
                <Input
                    type="text"
                    placeholder="City"
                    label="City"
                    id="city"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid city."}
                    onInput={inputInputHandler}
                />
                <Input
                    type="date"
                    placeholder="01/06/2022"
                    label="Date"
                    id="date"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid date."}
                    onInput={inputInputHandler}
                />
                <Input
                    type="number"
                    placeholder="Amount"
                    label="Amount"
                    id="amount"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText={"Please enter a valid amount."}
                    onInput={inputInputHandler}
                />
                <div className="col-auto">
                    <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    disabled={!formState.isValid}
                    >Submit</button>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-light mb-3">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerCreate;