import React from "react";
function Faq() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is a Write.link?",
      answer:
        "Write.link is a decentralized blogging platform designed for modern writers. We empower authors with innovative features like AI-enhanced editing, multiple monetization options, and the promise of content longevity, all while ensuring true data ownership.",
    },
    {
      question:
        "How is write.link different from traditional blogging platforms?",
      answer:
        "Unlike traditional platforms, write.link operates on a decentralized web. This means your content is not bound by centralized controls and has the promise to live for at least 200 years. Coupled with our advanced AI features and diverse monetization options, write.link offers a unique and future-proof writing experience.",
    },
    {
      question: "Is my content safe on write.link?",
      answer:
        "Absolutely. At write.link, your content's safety and permanence are paramount. Our decentralized structure ensures that your work is securely stored and remains accessible. Plus, with our platform, you retain complete ownership of your data.",
    },
    {
      question: "Are there any fees associated with using write.link?",
      answer:
        'Write.link offers a freemium model. While we have a free version with a rich set of features, there are premium plans that provide additional functionalities, such as custom domain integration, advanced AI tools, and more. Details of our pricing can be found on our "Pricing" page.',
    },
    {
      question: "How do I connect my custom domain?",
      answer:
        'Connecting your custom domain is a breeze with write.link. Head to the "Settings" page in your dashboard, find the "Domain" section, and follow the step-by-step instructions provided. If you encounter any issues, our support team is always here to assist!',
    },
  ];

  return (
    <section className="w3l-products w3l-faq-block py-md-5 py-3" id="faq">
      <div className="container py-lg-5 py-md-4">
        <div className="faq-content-innf">
          <div className="row">
            <div className="col-lg-6 faq-left-content">
              <h3 className="title-faq mb-3 mw-100">
                Frequently
                <span className="fontitalicw3faq">asked questions</span>
              </h3>
              <p className="pe-xl-4">
                Navigate through our most commonly asked questions to better
                understand how write.link can empower your writing journey.
              </p>
              <div className="faq-img">
                <img
                  src="assets/images/faq.png"
                  alt="faq"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 pr-lg-5 mt-lg-0 mt-sm-5 mt-4">
              <div className="accordion">
                {faqData.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <button
                      onClick={() => handleAccordionClick(index)}
                      aria-expanded={activeIndex === index ? "true" : "false"}
                    >
                      <span className="accordion-title">{faq.question}</span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div
                      className={`accordion-content ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
