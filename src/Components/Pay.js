import React from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom';


const Pay = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const pname = queryParams.get('pn');
  const upi = queryParams.get('pa');
  const amount = queryParams.get('am');

  let link = "upi://pay?pn=" + pname + "&pa=" + upi + "&cu=INR&am=" + amount
  return (
    <>
      {/* http://localhost:3000/?pn=test&pa=uid&am=100 */}
      <div className="container">
        <h2 className='text-center mt-5'>Pay using QR Code or Click to Pay Now</h2>
        <div className="row mt-5">

          <div className="col-md-6 d-flex justify-content-center mt-4 mb-4">
            <QRCode value={`upi://pay?pn=${pname}&pa=${upi}&cu=INR&am=${amount}`} bgColor='black' fgColor='white' />
          </div>

          <form className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Paying To -</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={pname} disabled />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">UPI ID -</label>
              <input type="email" className="form-control" id="exampleInputPassword1" value={upi} disabled />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Amount Paying -</label>
              <input type="number" className="form-control" id="exampleInputPassword1" value={amount} disabled />
            </div>

            <a href={link}>
              {/* <button className="btn btn-primary">Pay Now</button> */}
              <div className='btn btn-primary mb-3'>Pay Now</div>
            </a>

            <Link to="/">
              <button type="submit" className="btn btn-primary mx-3 mb-3">Create Your Link</button>
            </Link>
          </form>
          <div className="col-md-6 d-flex justify-content-center mb-5">
            <h3 className='text-warning d-none d-sm-none d-md-none d-lg-block d-xl-block'>Scan To Pay</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pay