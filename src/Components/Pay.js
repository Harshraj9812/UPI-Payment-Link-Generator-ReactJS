import React, {useEffect} from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom';


const Pay = (props) => {
  useEffect(() => {
    document.title = "Paying Thorough - HR UPI Payment Gateway";
    // eslint-disable-next-line
}, []);

  // Getting Get Parameters from GET Request From URL
  const queryParams = new URLSearchParams(window.location.search);
  const pname = queryParams.get('pn');
  const upi = queryParams.get('pa');
  const amount = queryParams.get('am');

  let link = "upi://pay?pn=" + pname + "&pa=" + upi + "&cu=INR&am=" + amount
  if (pname === null && upi === null && amount === null) {
    link = "upi://pay?pn=Harsh Raj&pa=7684028503@paytm&cu=INR&am=150"
  }

  const QrMessage = "Scan To Pay ☝️"
  return (
    <>
      {/* http://localhost:3000/?pn=test&pa=uid&am=100 */}
      <div className="container">
        <h2 className='text-center mt-5'>{props.heading}</h2>

        <div className="row mt-5">

          <div className="col-md-6 d-flex flex-column mt-4 mb-5">
            <div className='d-flex justify-content-center'>
              <QRCode value={`upi://pay?pn=${pname === null ? 'Harsh Raj' : pname}&pa=${upi === null ? '7684028503@paytm' : upi}&cu=INR&am=${amount === null ? '150' : amount}`} bgColor='black' fgColor='white' />
            </div>
            <div className="d-flex text-center justify-content-center mt-5">
              <h3 className='text-warning'>{pname === null && upi === null && amount === null ? "Support Developer ☝️" : QrMessage}</h3>
            </div>
          </div>

          <form className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Paying To -</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={pname === null ? 'Harsh Raj' : pname} disabled />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">UPI ID -</label>
              <input type="email" className="form-control" id="exampleInputPassword1" value={upi === null ? '7684028503@paytm' : upi} disabled />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Amount Paying -</label>
              <input type="number" className="form-control" id="exampleInputPassword1" value={amount === null ? '150' : amount} disabled />
            </div>

            <a href={link}>
              {/* <button className="btn btn-primary">Pay Now</button> */}
              <div className='btn btn-primary mt-3'>Pay Now</div>
            </a>

            <Link to="/">
              <button type="submit" className="btn btn-primary mx-3 mt-3">Create Your Link</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Pay