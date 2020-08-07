import React from 'react'

export default function InstituteDocForm() {
    return (
     <form>
       <div class="form-group row">
         <div className='col-sm-4'>
         <label htmlFor="title">Title</label>
         <input type="text" name="" id="title" class="form-control" />
          </div>
          <div className='col-sm-4'>
         <label htmlFor="tags">Tags</label>
         <input type="text" name="" id="tags" class="form-control" />
          </div>
          <div className='col-sm-4'>
         <label htmlFor="date">Date Of Expiry</label>
         <input type="text" name="" id="date" class="form-control" />
          </div>
          </div>
          <div className=' form-group'>
         <label htmlFor="desc">Description</label>
         <input type="text" name="" id="desc" class="form-control" />
          </div>
          <div className='form-group'>
         <label htmlFor="upload">Upload Document</label>
         <input type="file" name="" id="upload" class="form-control" />
          </div>
       
          <div className='form-group pull-right'>
         
         <button type="buttom"   class="btn btn-success" >
           Submit
           </button>
          </div>
       </form>

    )
}
