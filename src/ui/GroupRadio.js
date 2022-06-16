import React from "react";
import { Input } from "reactstrap";

export default function GroupRadio (props){
    const { container='', label=''} = props
    return(
        <div className={`${container}`}>
            <Input 
                {...props}
                className=""
                id={`${props.label}${props.name}-1`}
                type='radio'
            />
            <label className="custom-control-label" htmlFor={`${props.label}${props.name}-1`}>
                {label}
            </label>
        </div>
    )
}