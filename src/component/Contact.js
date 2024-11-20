import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        suggestions: '',
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [statusClass, setStatusClass] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.suggestions) {
            newErrors.suggestions = 'Suggestions are required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Send email using EmailJS
    const sendEmail = (e) => {
        e.preventDefault();
        if (validate()) {
            const templateParams = {
                from_email: formData.email,
                from_name: formData.name,
                suggestions: formData.suggestions,
            };

            emailjs
                .send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    templateParams,
                    process.env.REACT_APP_USER_ID
                )
                .then(
                    (response) => {
                        setStatus('Message sent successfully!');
                        setStatusClass('success');
                        setFormData({ email: '', name: '', suggestions: '' });
                        setErrors({});
                        setTimeout(() => {
                            setStatus('');
                        }, 5000);
                    },
                    (error) => {
                        setStatus('Failed to send message. Please try again.');
                        setStatusClass('error');
                        setTimeout(() => {
                            setStatus('');
                        }, 5000);
                    }
                );
        }
    };

    return (
        <div>
            <div className="maincontact">
                <div className="incircle"></div>
                <div className="contact">
                    <div className="circle"></div>

                    <div className="form-group">
                        <h3>Email</h3>
                        {errors.email && <div className="error-message">{errors.email}</div>}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Write your email here"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <h3>Name</h3>
                        {errors.name && <div className="error-message">{errors.name}</div>}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Write your name here"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <h3>Suggestions</h3>
                        {errors.suggestions && <div className="error-message">{errors.suggestions}</div>}
                        <textarea
                            placeholder="Write your suggestions here"
                            id="suggestions"
                            name="suggestions"
                            className="textarea"
                            value={formData.suggestions}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        value="Submit"
                        className="submit"
                        onClick={sendEmail}
                    />
                    {status && <p className={`status ${statusClass}`}>{status}</p>}
                </div>
            </div>
            <div className="outcircle"></div>
        </div>
    );
}

export default Contact;
