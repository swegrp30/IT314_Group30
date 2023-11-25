import React, { useState, useEffect } from 'react';
import '../style/ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // code for handle the form submission will be added here
        console.log('Form data submitted:', formData);

        // Scroll to the top of the page after form submission
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-us-container">
            <h2>Contact Us</h2>
            <p>
                Fill out the form below or email us at{' '}
                <a href="abc@gmail.com">abc@gmail.com</a>
            </p>
            <form onSubmit={handleSubmit} className="contactus-form">
                <div className="contactus-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contactus-field">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contactus-field">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="contactus-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;