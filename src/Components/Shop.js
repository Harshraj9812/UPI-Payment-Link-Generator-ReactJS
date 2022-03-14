import React, { useState,useEffect } from 'react'
import QRCode from 'react-qr-code'


export default function Shop() {
    useEffect(() => {
        document.title = "Mohan Metals - UPI Payment Gateway";
        // eslint-disable-next-line
    }, []);
    
    
    const [form, setForm] = useState({ name: "", upi: "", amount: "" })
    const handleOnChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setQr("Creating QR Code ...")
    }
    // Removing Space from Name
    let nameWithoutSpace = form.name.replace(/ +/g, "");

    // To Get Current URL of Website (window.location.href)
    const webisteLink = window.location.href;
    let link = webisteLink + "/pay/?pn=" + nameWithoutSpace + "&pa=" + form.upi + "&cu=INR&am=" + form.amount

    const [copyClipboard, setcopyClipboard] = useState("Copy Your Payment Link !")
    const [copyButton, setCopyButton] = useState("primary")
    const [qr, setQr] = useState("Support Developer ☝️")

    const handleCopyClick = (e) => {
        // Added "e.preventDefault()" to prevent page to not reload
        e.preventDefault();
        navigator.clipboard.writeText(link)
        setQr("QR Code is Ready ☝️")
        setCopyButton("warning")
        setcopyClipboard("Link is Created and Copied to Clipboard !")
    }

    const handleAnotherLink = (event) => {
        // Added "event.preventDefault()" to prevent page to not reload
        event.preventDefault();
        setForm({ name: "", upi: "", amount: "" })
        setcopyClipboard("Copy Your Payment Link !")
        setCopyButton("primary")
        setQr("Support Developer ☝️")
    }

    let QrLink = "upi://pay?pn=" + form.name + "&pa=" + form.upi + "&cu=INR&am=" + form.amount
    if (form.name === '' && form.upi === '' && form.amount === '') {
        QrLink = "upi://pay?pn=Harsh Raj&pa=7684028503@paytm&cu=INR&am=150"
    }

    return (
        <>
            <div className="container">
                <h2 className='text-center mt-5'>Mohan Metals - UPI Payment Gateway</h2>

                <div className="row mt-5">

                    <div className="col-md-6 d-flex flex-column mt-4 mb-5">
                        <div className='d-flex justify-content-center'>
                            <QRCode value={QrLink} bgColor='black' fgColor='white' />
                        </div>
                        <div className="d-flex text-center justify-content-center mt-5">
                            <h3 className='text-warning'>{qr}</h3>
                        </div>
                    </div>
                    <form className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Enter Your Name</label>
                            <input type="text" list='nameList' className="form-control" id="name" name='name' onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Name' required value={form.name} />
                            <datalist id="nameList">
                                <option value="Mohan Metals" />
                                <option value="Mohan Lal Gupta" />
                                <option value="Harsh Raj" />
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Enter Your UPI ID</label>
                            <input type="email" list='upiList' className="form-control" id="upi" name='upi' onChange={handleOnChange} placeholder='UPI ID' required value={form.upi} />
                            <datalist id="upiList">
                                <option value="7684028503@paytm" />
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Fix Amount</label>
                            <input type="number"  min="0" className="form-control" id="amount" name='amount' onChange={handleOnChange} placeholder='Amount (Optional)' value={form.amount} />
                        </div>
                        <button disabled={form.name === '' || form.upi === ''} className={`btn btn-${copyButton} my-1 me-3`} onClick={handleCopyClick}>{copyClipboard}</button>

                        <button disabled={copyClipboard === 'Copy Your Payment Link !'} className={`btn btn-primary my-1`} onClick={handleAnotherLink}>Create Another Link</button>
                    </form>
                </div>
            </div>
        </>
    )
}