import React, { useReducer, useEffect } from "react"
import { validate } from '../../shared/utils/validators'
import './forms.css'

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case 'TOUCH':
            return {
                ...state,
                isTouch: true
            };
        default:
            return state;
    }
};

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, 
        {
            value: props.initialValue || '',
            isValid: props.initialValid || false, 
            isTouch: false
        }
    );
    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    }
    const touchHandler = () => {
        dispatch({type: 'TOUCH'});
    }
    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        console.log('useffect');
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <input
                type={props.type}
                className="form-control"
                id={props.id}
                placeholder={props.placeholder}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={touchHandler}
            />
            {!inputState.isValid && inputState.isTouch && <div className="invalid-feedback">
                {props.errorText}
            </div>}
        </div>
    )
}

export default Input;