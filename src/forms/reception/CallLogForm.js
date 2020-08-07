import React from 'react'

export default function CallLogForm() {
    return (
        
              <form>
       <div class="form-group row">
         <div className='col-sm-3 form-group'>
         <label htmlFor="purpose">Calling Purpose</label>
         <input type="text" name="" id="purpose" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="callingtype">Calling Type</label>
         <input type="text" name="" id="callingtype" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="name">Name</label>
         <input type="text" name="" id="name" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="incoming">Incoming Number</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="outgoing">Outgoing Number</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          
          <div className='col-sm-3 form-group'>
         <label htmlFor="date">Date</label>
         <input type="text" name="" id="date" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="starttime">Start Time</label>
         <input type="text" name="" id="starttime" class="form-control" />
          </div>
          <div className='col-sm-3'>
         <label htmlFor="end">End Time</label>
         <input type="text" name="" id="end" class="form-control" />
         </div>
          </div>
         
             
         
          
          <div class="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" name="" id="description" class="form-control"/>
         
          </div>
       
          <div className='form-group pull-right'>
         
         <button type="buttom"   class="btn btn-success" >
           Submit
           </button>
          </div>
       </form>

        
    )
}
