import React from 'react'

export default function ContactForm() {
    return (
       

  <form>
    <div className="form-row ">
     
      <div className="col-sm-6">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" name="" id="name" class="form-control" placeholder="" aria-describedby="helpId"/>
         
        </div>
      </div>
      <div className="col-sm-6">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" name="" id="email" class="form-control" placeholder="" aria-describedby="helpId"/>
          
        </div>
      </div>
    </div>
    
    <div className="form-row ">
     
      <div className="col-sm-6">
      <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="text" name="" id="phone" class="form-control" placeholder="" aria-describedby="helpId"/>
      
    </div>
      </div>
      <div className="col-sm-6">
      <div class="form-group">
      <label for="subject">Subject:</label>
      <input type="text" name="" id="subject" class="form-control" placeholder="" aria-describedby="helpId"/>
      
    </div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea class="form-control" name="message" id="message" rows="5"></textarea>
    </div>
    <div class="form-group text-center">
      <button className='btn btn-md btn-success rounded-pill px-5'>Submit</button>
    </div>

     </form>

            
        
    )
}
