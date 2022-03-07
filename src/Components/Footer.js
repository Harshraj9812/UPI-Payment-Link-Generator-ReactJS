import React from 'react'

const Footer = (props) => {
    const mySite = "https://www.harshraj.gq/"
    // Getting Current Year
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <div className="container-fluid text-dark bg-light">
                <div className="row">
                    <div className="col-sm-8 pt-3">
                        <p className='mx-2'>© 2022{year===2022?"":-year} All Rights Reserved | Developed by
                            <a className={`link-dark text-decoration-none`} href={mySite}> Harsh Raj</a>
                        </p>
                    </div>
                    <div className="d-flex justify-content-center col-sm-4 p-3">
                        <a className={`link-dark text-decoration-none`} href="https://www.facebook.com/HArsh.Raj.2807" target="blank">
                            <i className="fa-brands fa-facebook-square mx-3 fa-xl"> </i>
                        </a>
                        <a className={`link-dark text-decoration-none`} href="https://www.instagram.com/harsh.raj.2807/" target="blank">
                            <i className="fa-brands fa-instagram mx-3 fa-xl"></i> </a>
                        <a className={`link-dark text-decoration-none`} href="https://www.linkedin.com/in/harsh-raj-b5a872104/" target="blank">
                            <i className="fa-brands fa-linkedin mx-3 fa-xl"></i>
                        </a>
                        <a className={`link-dark text-decoration-none`} href="https://github.com/Harshraj9812" target="blank">
                            <i className="fa-brands fa-github mx-3 fa-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer