import React from "react";
import GroupRadio from "./GroupRadio";

export default function CustomRadio(props){
const {container='', label='', options=[], name='',value='',onChange=f=>f } = props
    return(
       <div className={container}>
<h6 className="font-weight-bold">{label}</h6>
<div className="d-flex flex-row align-items-center">
    {options.map((_item,index) =>{
        <GroupRadio 
            key={index}
            container='mx-4'
            label={_item.label}
            name={name}
            checked={_item.name === value}
            onChange={() => onChange(name, _item.name)}
        />
    })}
    </div>
       </div>
    )
}