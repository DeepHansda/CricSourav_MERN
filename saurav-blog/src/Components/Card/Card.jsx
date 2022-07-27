import React from "react";
import "./card.css";
export default function Card({ data }) {
  return (
    <div className="card" id={data.navigation}>
      <div className="card-container">
        <div className="card-title">
          <h2>
            <span>#{data.number}</span> {data.title}
          </h2>
        </div>
        <div className="card-img">
          <img src={data.img} alt="dream11" />
        </div>
        <div className="card-inner-container">
          <div className="card-description-container">
            <div className="card-description-main">
              <p>{data.desc}</p>
            </div>

            {data.addi_desc && <div className="card-description-additional">
              <p>{data.addi_desc}</p>
            </div>}
          </div>

          <div className="card-features-container">
            <div className="card-features-title">
              <h4>App Features</h4>
            </div>
            {data.features && <ul className="features-list">
              {data.features.map((feature, index) => {
                return (
                  <li key={index}>
                    <p>{feature.feature}</p>
                  </li>
                );
              })}
            </ul>}
          </div>

          <div className="card-list-container">
            <ul className="card-list">
              {data.referral_code && <li>
                <h4>Dream11 Referral Code: </h4>
                <p>{data.referral_code}</p>
              </li>}
              {data.signup_bonus && <li>
                <h4>Dream11 Sign-up Bonus: </h4>
                <p>Rs.{data.signup_bonus}</p>
              </li>}
              {data.refer_bonus && <li>
                <h4>Refer Bonus: </h4>
                <p>Rs.{data.refer_bonus}</p>
              </li>}
              {data.withdrawable_bonus && <li>
                <h4>Minimum Withdrawable Amount: </h4>
                <p>Rs.{data.withdrawable_bonus}</p>
              </li>}
            </ul>
          </div>
        </div>

        <div className="card-button">
          <a href={data.download_link}>
            <button>download app</button>
          </a>
        </div>
      </div>
    </div>
  );
}
