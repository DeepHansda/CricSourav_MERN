import React, { useEffect } from "react";
import './ads.css'
import Contact from "../Contact/Contact";
import ContactBar from "../ContactSidebar/ContactBar";
import Button from "../Utils/Button";
import { client } from "../../App";
import { useState } from "react";
export default function Ads() {
  const [ads, setAds] = useState([]);
  console.log(ads);
  useEffect(() => {
    client
      .get("/getAds")
      .then((res) => {
        setAds(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="ads">
      <div className="add-container">
        <div className="add-contact-container">
          <Contact />
          <div className="app-ads-list">
            <ul>
              {ads.map((data, index) => {
                return (
                  <li key={index}>
                    <a href={data.ads_link}>
                      <img src={data.img} alt="ads" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Button />
      <ContactBar />
    </div>
  );
}
