import { Checkbox } from '@material-ui/core';
import React from 'react'
import '../styles/checkbox.css'

export default function CheckBox(props) {

    const {onChange} = props;

    return (
        <label className="custom-checkbox">
            <Checkbox size="small" onChange={e => onChange(e.target)} checked={props.checked} />
            <span className="custom-checkbox__checkmark">
                <i className="bx bx-check"></i>
            </span>
            {props.display}
        </label>
    )
}
