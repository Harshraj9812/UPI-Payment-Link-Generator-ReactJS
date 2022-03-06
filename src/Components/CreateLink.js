import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function CreateLink() {
    const [form, setForm] = useState({ name: "", upi: "", amount: "" })
    const handleOnChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    
    const webisteLink = "http://localhost:3000/"
    let link = webisteLink+"pay/?pn="+form.name+"&pa="+form.upi+"&cu=INR&am="+form.amount
    const [copyClipboard, setcopyClipboard] = useState("Copy Payment Link !")
    const handleCopyClick = (e) => {
        // Added "e.preventDefault()" to prevent page to not reload
        e.preventDefault();
        navigator.clipboard.writeText(link)
        setcopyClipboard("Link Copied & QR Code is Also Generated !")
    }
    return (
        <>
            <div className="container">
                <h1 className='text-center my-4'>HR QR Code & UPI Link Generator</h1>
                <div className="row mb-5">
                    <div className="col-md-5 d-flex justify-content-center my-4">
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
                            <label htmlFor="exampleInputPassword1" className="form-label">Payment Fixed Amount</label>
                            <input type="number" className="form-control" id="amount" name='amount' onChange={handleOnChange} placeholder='Amount' />
                        </div>
                        <button disabled={form.name === '' || form.upi === '' || form.amount === ''} className="btn btn-primary my-1" onClick={handleCopyClick}>{copyClipboard}</button>
                    </form>
                </div>
            </div>
        </>
    )
}