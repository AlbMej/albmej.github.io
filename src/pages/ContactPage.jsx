import React, { useState } from 'react';
import './ContactPage.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrebvdkn';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '' // Honeypot field for spam protection
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check honeypot field (if filled, it's likely a bot)
    if (formData._gotcha) {
      setStatus({ type: 'error', message: 'Spam detected.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.' });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus({ type: 'error', message: data.errors.map(error => error.message).join(', ') });
        } else {
          setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-card">
      <h1>Contact</h1>
      <div className="contact-container">
        <p className="contact-intro">
          Have a question or want to get in touch? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message here..."
            />
          </div>

          {/* Honeypot field for spam protection - hidden from users */}
          <div className="form-group" style={{ display: 'none' }}>
            <label htmlFor="_gotcha">Don't fill this out if you're human:</label>
            <input
              type="text"
              id="_gotcha"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          {status.message && (
            <div className={`form-status ${status.type === 'error' ? 'form-status-error' : 'form-status-success'}`}>
              {status.message}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

