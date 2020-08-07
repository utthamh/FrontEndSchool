import React, { useRef, useEffect } from 'react'
import { useField } from 'formik';

export default function DatePicker({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    const myid=useRef();
    useEffect(()=>{

window.$('#'+props.name).datetimepicker({
    format: 'YYYY-MM-DD',
  }).on('dp.change',v=>helpers.setValue(new Date(v.date)))
  window.$('#'+props.name).data("DateTimePicker").date(new Date(meta.value))
    },[])
    return (
        <div className={'form-group '+(props.col||'col-12')}>
        <label htmlFor={props.name}>
          {label}</label>
          <input id={props.name} ref={myid}  className={`form-control  ${meta.touched && meta.error && 'is-invalid'}`}  {...props}/>
          <div className='invalid-feedback'>{meta.error}</div>
      </div>
    );
  };
