import React, { useState } from 'react';

function Contact() {
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
      // Using FormSubmit.co - free service that sends emails to your inbox
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _template: 'table'
        })
      });

      const data = await response.json();
      
      if (data.success === 'true' || data.success === true) {
        setStatus({
          submitted: true,
          submitting: false,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          error: true,
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
        message: 'Network error. Please check your connection and try again.'
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
                <a href="mailto:your-email@example.com">pmmboga2022@gmail.com</a>
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
                <a 
                  href="https://github.com/Purity Mmboga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/Purity MMboga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  Twitter
                </a>
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
              <form className="contact-form" onSubmit={handleSubmit}>
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
                    placeholder="Purity Mmboga"
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
                    placeholder="pmmboga2022@gmail.com"
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