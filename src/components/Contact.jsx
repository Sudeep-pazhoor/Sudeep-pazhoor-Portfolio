import { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS credentials from environment variables
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      
      // Show success notification
      setNotification({
        show: true,
        message: 'Message sent successfully! I will get back to you soon.',
        type: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error notification
      setNotification({
        show: true,
        message: 'Failed to send message. Please try again or contact me directly.',
        type: 'error',
      });

      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <p className="contact-text">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, 
            feel free to reach out!
          </p>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            {/* Hidden field for timestamp */}
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Notification */}
          {notification.show && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          )}

          {/* Contact Links */}
          <div className="contact-links">
            <a href="mailto:sudeeppazhoor@gmail.com" className="contact-link">
              <FaEnvelope />
              <span>sudeeppazhoor@gmail.com</span>
            </a>
            
            <a href="tel:+918281829839" className="contact-link">
              <FaPhone />
              <span>+91 8281829839</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
