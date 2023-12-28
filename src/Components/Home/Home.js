import React, { useState } from "react";
// import { Web3Button } from "@web3modal/react";
import { Link } from "react-router-dom";
function Home() {
  const [isMonthly, setIsMonthly] = useState(true);
  const handleToggleSwitch = () => {
    setIsMonthly(!isMonthly);
  };

  const pricingData = [
    {
      name: "Basic",
      monthlyPrice: "Free",
      yearlyPrice: "$9.99",
      features: [
        "Decentralized hosting on IPFS.",
        "Basic blogging tools (editor and templates)",
        "Essential SEO tools.",
        "Social media sharing integration",
        "Comment section for articles",
        "Community support",
        "Connect your Web3 Domains (.eth and .bnb)",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: "$9.99",
      yearlyPrice: "$99.99",
      features: [
        "Everything in Basic, plus:",
        "Choice between IPFS and Arweave for hosting.",
        "Access to premium templates at a 25% discount",
        "Advanced analytics with insights",
        "Email newsletter integration",
        "Content gating (1% transaction fee).",
        "Custom Web2 domain linking",
        "Continued support for Web3 domains",
      ],
    },
    {
      name: "Elite",
      monthlyPrice: "$19.99",
      yearlyPrice: "$199.99",
      features: [
        "Everything in Pro, plus:",
        "Zero transaction fees on content gating",
        "Access to premium templates at a 50% discount",
        "Early access to new features and updates",
      ],
    },
  ];
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
    <>
      <section className="w3lbanner-top position-relative" id="home">
        <div className="container">
          <div className="w3lbanner-info">
            <h1>
              <span>Write Blogs</span>
              <label className="fontitalicw3">Live Forever</label> on the
              decentralized web.
            </h1>
            <p className="banner-parav mb-4">
              Independent writers can now publish stories directly to the
              decentralized web, making the blogs live forever and be free of
              censorship.
            </p>
            <div className="banner-btns text-center">
              <Link to="/wallet" className="btn btn-style">
                Start Writing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="list-content py-5 pt-0" id="lists">
        <div className="container">
          <div className="list-content-inf">
            <div className="row list-grid-inf">
              <div className="col-lg-5 list-left-info">
                <h4 className="pe-xl-5 me-xl-5">
                  The 200 Year
                  <label className="fontitalicw3">data promise</label>
                </h4>
              </div>
              <div className="col-lg-7 list-right-info mt-lg-0 mt-md-3 mt-2">
                <p>
                  With the 200-year promise, writers are guaranteed that their
                  content will live on, published on IPFS or Arweave based on
                  their choice. Especially with Arweave, the content stays live
                  indefinitely, irrespective of the existence of write.link.
                  This ensures that the writer's legacy and thoughts are
                  preserved for generations.
                </p>
              </div>
            </div>

            <div className="row list-grid-inf mt-lg-5 mt-4">
              <div className="col-lg-5 list-left-info">
                <h4>
                  Data Ownership{" "}
                  <label className="fontitalicw3">
                    Your Write it, You own it.
                  </label>
                </h4>
              </div>
              <div className="col-lg-7 list-right-info mt-lg-0 mt-md-3 mt-2">
                <p>
                  You always own your intellectual property, mailing list, and
                  revenue. With full editorial control and no gatekeepers, you
                  can do the work you most believe in.
                </p>
              </div>
            </div>

            <div className="row list-grid-inf mt-lg-5 mt-4">
              <div className="col-lg-5 list-left-info">
                <h4>
                  Content Monetization
                  <label className="fontitalicw3">Earn from your writing</label>
                </h4>
              </div>
              <div className="col-lg-7 list-right-info mt-lg-0 mt-md-3 mt-2">
                <p>
                  Writers need to be rewarded for their efforts and creativity.
                  Centralized platforms often take a significant cut of earnings
                  or place restrictions on monetization methods. Write.link
                  provides you diverse monetization streams with maximum
                  transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pricing-columns pricing-section pt-lg-0 pt-5"
        id="pricing"
      >
        <div className="container pricing-style-w3ls">
          <h3>
            Pricing <span className="fontitalicw3">Plans</span>
          </h3>

          <div className="pricing-content">
            <label
              className={`toggler ${isMonthly ? "toggler--is-active" : ""}`}
              onClick={handleToggleSwitch}
            >
              Monthly
            </label>
            <div className="toggle">
              <input
                type="checkbox"
                id="switcher"
                className="check"
                checked={!isMonthly}
                onChange={handleToggleSwitch}
              />
              <b className="switch"></b>
            </div>
            <label
              className={`toggler ${!isMonthly ? "toggler--is-active" : ""}`}
              onClick={handleToggleSwitch}
            >
              Yearly
            </label>
          </div>
          <div id="monthly">
            <div className="row pricing-tableonew3 pricing-chart">
              {pricingData.map((plan, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-12 mt-4 ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <div className="card h-100 pricing-grid">
                    <div className="plan popular">
                      <h5 className="pop-plan">{plan.name}</h5>
                      <p>Best for a simple blog</p>
                      <div className="price">
                        <h4>
                          {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                        </h4>
                      </div>
                      <div className="card-body">
                        <ul className="list-body">
                          <h6>Features</h6>
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>
                              <span className="far fa-check-circle"></span>{" "}
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link to="/wallet" className="btn btn-style">
                        <i className="fas fa-pen"></i> Start Writing
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="hourly" className={isMonthly ? "hide" : ""}>
            {/* Yearly pricing cards can be placed here */}
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Home;
