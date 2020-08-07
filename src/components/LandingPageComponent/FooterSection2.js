import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterSection2() {
    return (
        <div className='bg-white'>
            <div className='container'>
                <div className='row py-3'>
                    <div className='col-md-6'>
                        <div className='d-sm-flex myfooter '>
                            <div className='pr-sm-5 text-center'>
                                <Link to='/'>Terms Of Use</Link>
                            </div>
                            <div className='pr-sm-5 text-center'>
                                <Link to='/'>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 myfooter text-center text-sm-right'>
                    <Link to='/'>Copyright © 2020 International School</Link>
                    </div>
                    
                </div>
            </div>
            </div>
        
    )
}
