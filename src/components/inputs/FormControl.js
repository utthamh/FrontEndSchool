import React from 'react'
import MyTextInput from './MyTextInput'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import TextArea from './TextArea'
import SelectPicker from './SelectPicker'
import Radio from './Radio'
import Checkbox from './Checkbox'
import File from './File'

export default function FormControl(props) {
   switch(props.type){
    case 'file':return <File {...props}/>
       case 'textarea':return <TextArea {...props}/>
       case 'mydate':return <DatePicker {...props}/>
       case  'mytime':return <TimePicker {...props}/>
       case 'select':return <SelectPicker {...props}/>
       case 'radio':return <Radio {...props}/>
       case 'checkbox':return <Checkbox {...props}/>
       default: return <MyTextInput {...props}/>
   }
}
