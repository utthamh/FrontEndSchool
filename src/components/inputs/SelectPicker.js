import React from 'react'
import { useField } from 'formik';

export default function SelectPicker({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
      <div className={'form-group '+(props.col||'col-12')}>
        <label htmlFor={props.name}>
          {label}</label>
          <select id={props.name}  className={`form-control custom-select  ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props}>
    {props.options && Array.isArray(props.options) && props.options.map((item,i)=> <option key={i} value={(props.myvalue && item[props.myvalue])||item.value}>{(props.mytitle && item[props.mytitle])||item.title}</option>)}
              </select>
          <div className='invalid-feedback'>{meta.error}</div>
      </div>
    );
  };