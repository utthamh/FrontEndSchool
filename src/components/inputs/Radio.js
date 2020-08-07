import React from 'react'
import { useField, Field } from 'formik';

export default function Radio({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
      <div className={'form-group '+(props.col)}>
      <div class="custom-control custom-radio">
    <input className={`custom-control-input ${meta.touched && meta.error && 'is-invalid'}`} id={label} {...Field} {...props} onClick={()=>helpers.setValue(props.value)} checked={meta.value==props.value}/>
    <label class="custom-control-label" htmlFor={label}>{label}</label>
  </div>
      <div className='invalid-feedback'>{meta.error}</div>
      </div>
    );
  };
