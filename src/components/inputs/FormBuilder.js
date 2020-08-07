import React from 'react'
import { Formik, Form } from 'formik';
import FormControl from './FormControl';

export default function FormBuilder({initialValues,formdata}) {
    return (
        <Formik
       initialValues={initialValues}
      
       onSubmit={(values, actions) => {
         setTimeout(() => {
           console.log(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {(props) => (
         <Form>
           <div className='form-row'>
           {
             formdata && formdata.map(item=><FormControl {...item}/>)
           }
           
           </div>
           <div className="form-group ">
             <button type="submit" class="btn btn-success btn-block">Submit</button>
           </div>
         </Form>
       )}
     </Formik>
    )
}
