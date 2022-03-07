import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function CreateLink() {
    const [form, setForm] = useState({ name: "", upi: "", amount: "" })
    const handleOnChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const webisteLink = "http://localhost:3000/"
    let link = webisteLink + "pay/?pn=" + form.name + "&pa=" + form.upi + "&cu=INR&am=" + form.amount

    const [copyClipboard, setcopyClipboard] = useState("Copy Your Payment Link !")
    const [copyButton, setCopyButton] = useState("primary")
    const [qr, setQr] = useState("Creating QR Code ...")

    const handleCopyClick = (e) => {
        // Added "e.preventDefault()" to prevent page to not reload
        e.preventDefault();
        navigator.clipboard.writeText(link)
        setQr("QR Code is Ready !")
        setCopyButton("warning")
        setcopyClipboard("Link is Created and Copied to Clipboard !")
    }


    return (
        <>
            <div className="container">
                {/* <h2 className='text-center my-4'>HR QR Code & UPI Link Generator</h2> */}
                <h2 className='text-center mt-5'>Create Shareable UPI Payment Link with Custom QR Code</h2>
                <div className="row mt-5">
                    <div className="col-md-6 d-flex justify-content-center mt-4 mb-5">
                        <QRCode value={`upi://pay?pn=${form.name}&pa=${form.upi}&cu=INR&am=${form.amount}`} bgColor='black' fgColor='white' />
                    </div>
                    <form className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
                            <input type="text" className="form-control" id="name" name='name' onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Name' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Enter Your UPI ID</label>
                            <input type="email" className="form-control" id="upi" name='upi' onChange={handleOnChange} placeholder='UPI ID' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Fix Amount</label>
                            <input type="number" className="form-control" id="amount" name='amount' onChange={handleOnChange} placeholder='Amount (Optional)' />
                        </div>
                        <button disabled={form.name === '' || form.upi === ''} className={`btn btn-${copyButton} my-1`} onClick={handleCopyClick}>{copyClipboard}</button>
                    </form>
                </div>
                <div className="col-md-6 d-flex justify-content-center mb-5">
                    <h3 className='text-warning d-none d-sm-none d-md-none d-lg-block d-xl-block'>{qr}</h3>
                </div>
            </div>
        </>
    )
}