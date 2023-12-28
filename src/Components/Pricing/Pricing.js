import React, { useState } from "react";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
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

  return (
    <section
      className="pricing-columns pricing-section pt-lg-0 pt-5 mt-lg-5"
      id="pricing"
    >
      <div className="container pricing-style-w3ls pt-xl-5">
        <h3>
          Pricing <span className="fontitalicw3">Plans</span>
        </h3>
        <div className="pricing-content">
          <label
            className={`toggler ${isMonthly ? "toggler--is-active" : ""}`}
            onClick={() => setIsMonthly(true)}
            id="filt-monthly"
          >
            Monthly
          </label>
          <div className="toggle">
            <input
              type="checkbox"
              id="switcher"
              className="check"
              onChange={togglePlan}
            />
            <b
              className={`switch ${isMonthly ? "" : "toggler--is-active"}`}
            ></b>
          </div>
          <label
            className={`toggler ${!isMonthly ? "toggler--is-active" : ""}`}
            onClick={() => setIsMonthly(false)}
            id="filt-yearly"
          >
            Yearly
          </label>
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
                      <a
                        href="https://app.1w3.io/"
                        target="_blank"
                        className="btn btn-style"
                      >
                        <i className="fas fa-pen"></i> Start Writing
                      </a>
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
      </div>
    </section>
  );
}

export default Pricing;
