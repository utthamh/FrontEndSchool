import React from 'react'

export default function VisitorLogForm() {
    return (
        
              <form>
       <div class="form-group row">
         <div className='col-sm-3 form-group'>
         <label htmlFor="name">Name</label>
         <input type="text" name="" id="title" class="form-control" />
          </div>
          <div className='col-sm-3 form-group align-self-end '>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="radio" name="parent" id="parent" value="parent"/> Parent
            
            </label>
        </div>
        <div class="form-check form-check-inline">
            <label class="form-check-label">
                <input class="form-check-input" type="radio" name="other" id="other" value="other"/> Other
           
            </label>
        </div>
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="date">Student</label>
         <input type="text" name="" id="date" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="desc">Relation with Student</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="desc">Visitor Count</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="desc">Visiting Purpose</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="desc">Whom To Meet</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          <div className='col-sm-3 form-group'>
         <label htmlFor="desc">Date Of Visit</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          </div>
          <div className=' form-group row'>
              <div className='col-sm-3'>
         <label htmlFor="desc">Entry Time</label>
         <input type="text" name="" id="desc" class="form-control" />
         </div>
         <div className='col-sm-3'>
         <label htmlFor="desc">Exit Time</label>
         <input type="text" name="" id="desc" class="form-control" />
         </div>
         <div className='col-sm-6'>
         <label htmlFor="desc">Remarks</label>
         <input type="text" name="" id="desc" class="form-control" />
         </div>
          </div>
          
       
          <div className='form-group pull-right'>
         
         <button type="buttom"   class="btn btn-success" >
           Submit
           </button>
          </div>
       </form>

        
    )
}
