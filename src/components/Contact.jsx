import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true, error: false, message: '' });

    try {
     
      const serviceId = 'service_a74i10t'; 
      const templateId = 'template_qm3bbrh';
      const publicKey = 'thAH-3wUJtwdWywpJ'; 

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        to_name: 'Purity Mmboga' 
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
        message: 'Failed to send. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about tech. Feel free 
              to reach out through any of these channels!
            </p>
            <div className="contact-details">
              <p>
                <span className="contact-icon">📧</span>
                <a href="mailto:pmmboga2022@gmail.com">pmmboga2022@gmail.com</a>
              </p>
              <p>
                <span className="contact-icon">📱</span>
                <a href="tel:+254700555830">+254 700 555830</a>
              </p>
              <p>
                <span className="contact-icon">📍</span>
                Vihiga, Kenya
              </p>
            </div>
            
            <div className="social-links-contact">
              <h4>Find me on</h4>
              <div className="social-icons">
                <a href="https://github.com/PurityMmboga" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://www.linkedin.com/in/purity-mmboga-1947682b9/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {status.submitted ? (
              <div className="success-message">
                <h3>🎉 Message Sent!</h3>
                <p>{status.message}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setStatus({ ...status, submitted: false })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <h3>Send me a message</h3>
                
                {status.error && (
                  <div className="error-message">
                    <p>{status.message}</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;