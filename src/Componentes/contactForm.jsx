import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');

      const handleSubmit = (e) => {
          e.preventDefault();
              // Aquí puedes agregar la lógica para manejar el envío del formulario
                  console.log('Nombre:', name);
                      console.log('Email:', email);
                        };

                          return (
                              <div className="contact-form">
                                    <h2>Contact Us</h2>
                                          <p>Have questions or feedback? Reach out to us!</p>
                                                <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                                  <label htmlFor="name">Name</label>
                                                                            <input
                                                                                        type="text"
                                                                                                    id="name"
                                                                                                                value={name}
                                                                                                                            onChange={(e) => setName(e.target.value)}
                                                                                                                                        placeholder="Enter your name"
                                                                                                                                                  />
                                                                                                                                                          </div>
                                                                                                                                                                  <div className="form-group">
                                                                                                                                                                            <label htmlFor="email">Email</label>
                                                                                                                                                                                      <input
                                                                                                                                                                                                  type="email"
                                                                                                                                                                                                              id="email"
                                                                                                                                                                                                                          value={email}
                                                                                                                                                                                                                                      onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                                                  placeholder="Enter your email"
                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                            <button type="submit">Send Message</button>
                                                                                                                                                                                                                                                                                  </form>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                        export default ContactForm;
                                                                                                                                                                                                                                                                                        