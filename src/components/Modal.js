import React from 'react'
import Zoom from 'react-reveal/Zoom'
export default function Modal({title,size,children,id}) {
    return (
        
        <div class="modal fade" id={id||'modelId'} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class={'modal-dialog modal-xl '+size||'md' }  role="document">
                <div class="modal-content p-0 m-0" style={{width:'100% !important'}}>
                <div className="card m-0">
    <div className="card-header d-flex justify-content-between">
    <h4 className="card-title">{title || 'title'}</h4>
      <button className='close' data-dismiss='modal'>&times;</button>
    </div>
    <div className="card-body">
    <Zoom duration={800}>
                   {children}
                   </Zoom>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
