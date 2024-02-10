import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -</span>
            </div>
            <button className="btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScb6U62NKtb2Lcj20PH83bRg3-3aGGdjFv_xDsVdEWimKozPg/viewform?usp=sf_link", "_blank")}>Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;