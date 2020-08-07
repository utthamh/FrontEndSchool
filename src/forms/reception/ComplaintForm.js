import React from 'react';
 import { Form ,Formik } from 'formik';

import FormControl from '../../components/inputs/FormControl';

import * as Yup from 'yup'
import FormBuilder from '../../components/inputs/FormBuilder';
 const initialValues={
  
    name: "hdhdhd",
    dob: "2020-08-07T18:30:00.000Z",
    dot: "2020-08-05T21:46:41.553Z",
    person:'person'
 }
 const ValidationSchema=Yup.object().shape({})
 
 const formdata=[
{
  label:'Complaint Type',
  name:'type',
  col:'col-sm-3',
  type:'select',
  options:[{title:'Dispath',value:'dispatch'},{title:'Receive',value:'receive'}]
},
{
  label:'Date',
  name:'date',
  col:'col-sm-3',
  type:'mydate',
},
{
  label:'Referance Number',
  name:'referenceNumber',
  col:'col-sm-3',
  type:'text',
  options:[{title:'Yes',value:'Yes'},{title:'No',value:'No'}]
},
{
  label:'Confidential',
  name:'confidential',
  col:'col-sm-3',
  type:'select',
  options:[{title:'Yes',value:'Yes'},{title:'No',value:'No'}]
},
{
  label:'Sender Title',
  name:'senderTitle',
  col:'col-sm-3',
  type:'textarea',
},
{
  label:'Sender Address',
  name:'senderAddress',
  col:'col-sm-9',
  type:'textarea',
  rows:2
},
{
  label:'Receiver Title',
  name:'receiverTitle',
  col:'col-sm-3',
  type:'textarea',
  rows:2
},
{
  label:'Receiver Address',
  name:'receiverAddress',
  col:'col-sm-9',
  type:'textarea',
  rows:2
},
{
  label:'Description',
  name:'description',
  col:'col-sm-6',
  type:'text',
},
{
  label:'Upload',
  name:'document',
  col:'col-sm-6',
  type:'file',
},
 ]
 export default  () => {  
   React.useEffect(()=>{
 
   },[])   
    return(
    <FormBuilder initialValues={initialValues} formdata={formdata}/>
        
  
 );}