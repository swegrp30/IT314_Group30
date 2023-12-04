
import React from 'react';
import '../style/ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contactus-container'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item contactus-sub-container">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Email
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">swegrp30@gmail.com</div>
                    </div>
                </div>
                <div className="accordion-item contactus-sub-container">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Phone Number
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">+91-8200090380</div>
                    </div>
                </div>
                <div className="accordion-item contactus-sub-container">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Address
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">DAIICT, Reliance Cross Rd, Gandhinagar, Gujarat 382007</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
