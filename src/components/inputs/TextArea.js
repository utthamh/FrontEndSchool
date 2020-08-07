import React from 'react'
import { useField } from 'formik';

export default function TextArea ({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <div className={'form-group '+(props.col||'col-12')}>
      <label htmlFor={props.name}>
        {label}</label>
        <textarea id={props.name}  className={`form-control  ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props}/>
        <div className='invalid-feedback'>{meta.error}</div>
    </div>
  );
};