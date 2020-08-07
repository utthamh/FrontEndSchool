import React from 'react'
import AddButton from '../../../components/Buttons/AddButton'
import Table from '../../../components/Table'
import Modal from '../../../components/Modal'

export default ()=> {
    return (<>
        <div className="card">
        <div className="card-header d-flex justify-content-between align-items-baseline">
          <h4 className="card-title">TimeTable</h4>
          <AddButton className={'btn btn-success'} data-toggle="modal" data-target="#modelId"/>
         
        </div>
        <div className="card-body">
          <Table 
           actions={[{func:(data)=>alert(JSON.stringify(data)),name:<i className={'fa fa-eye'}></i>,class:'btn btn-success btn-xs'},
           {func:(data)=>alert(JSON.stringify(data)),name:<i className={'fa fa-pencil'}></i>,class:'btn btn-primary btn-xs'},
           {func:(data)=>alert(JSON.stringify(data)),name:<i className={'fa fa-trash'}></i>,class:'btn btn-danger btn-xs'}
          ]}
         
        columns={[{name:'title',render:(value)=>value.title},'dateOfExpiry','tags','description']}
          columnNames={['Title','Date Of Expiry','Tags','Description','Action']}
          data={[{title:'Rama',dateOfExpiry:'2019-12-13',tags:'tags',description:'description'},
        
          {title:'Rama',dateOfExpiry:'2019-12-13',tags:'tags',description:'description'},{title:'Rama',dateOfExpiry:'2019-12-13',tags:'tags',description:'description'},{title:'Rama',dateOfExpiry:'2019-12-13',tags:'tags',description:'description'}
        
        ]}
          />
        </div>
      </div>
      <Modal title={'Add TimeTable'} size={'lg'}>
      
    </Modal>
</>)
}
