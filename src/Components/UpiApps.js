import React from 'react'
import upiApp from './upiApps.png'

const UpiApps = () => {
    return (
        <div className='container'>
            <h2 className='col-md-12 text-center'>All UPI Apps are Supported</h2>
            <div className="card mb-5">
                <img className="card-img-top" src={upiApp} alt="Supported Apps" />
            </div>
        </div>
    )
}

export default UpiApps