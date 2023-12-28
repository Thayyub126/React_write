import React, { useState } from "react";

function Contact() {
  // Initial state for the form
  const initialData = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  // State for the form data
  const [formData, setFormData] = useState(initialData);

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic, e.g., send the data to a server
    console.log(formData);

    // Optionally reset the form to initial state
    setFormData(initialData);
  };

  // Contact information data
  const contactInfo = {
    address: "WriteLink, Honey Street, Main Road London, UK - 62617.",
    phone: ["+12 404-11-22-89", "+12 404-11-22-99"],
    email: ["info@example.com", "contact@example.com"],
  };

  return (
    <>
      {/* Contact information section */}
      {/* ... */}

      {/* Contact form section */}
      <section className="w3l-contact-main mt-lg-5" id="contact-form-section">
        <div className="contact-infhny py-5">
          <div className="container py-lg-5">
            <div className="w3header-section text-center mb-md-5 mb-4">
              <h6 className="title-subhny">Contact Us </h6>
              <h3 className="title-w3l mb-0">We would love to hear from you</h3>
            </div>
            <div className="map-content-9">
              <form onSubmit={handleSubmit}>
                <div className="form-top1">
                  {/* ... */}

                  <div className="form-top">
                    <div className="form-top-left">
                      <input
                        type="text"
                        name="name"
                        id="w3lName"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={formData.name}
                      />
                      <input
                        type="text" // Changed to type="text" to avoid browser validation issues
                        name="phone"
                        placeholder="Phone number"
                        required
                        onChange={handleChange}
                        value={formData.phone}
                      />
                      <input
                        type="email"
                        name="email"
                        id="w3lSender"
                        placeholder="Email*"
                        required
                        onChange={handleChange}
                        value={formData.email}
                      />
                      <input
                        type="text"
                        name="subject"
                        id="w3lSubject"
                        placeholder="Subject"
                        required
                        onChange={handleChange}
                        value={formData.subject}
                      />
                    </div>
                    <div className="form-top-right mt-4">
                      <textarea
                        name="message"
                        id="w3lMessage"
                        placeholder="Message*"
                        required
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-btn text-lg-right text-center mt-4">
                    <button type="submit" className="btn btn-style">
                      Submit Now <i className="fas fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
