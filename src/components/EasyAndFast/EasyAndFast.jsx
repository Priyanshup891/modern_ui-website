import React from "react";
import "./easyAndFast.css";

import easyImage from '../../assets/images/easy.svg'

const EasyAndFast = () => {
  return (
    <div className="easyAndFast__section">
      <div className="easyAndFast__section-container">
        <div className="easyAndFast__section-container_info">
          <h2>Easy and Fast</h2>
          <h1>Book your next trip in 3 easy steps</h1>
          <div className="easyAndFast__section-container_info-block">
            <div className="easyAndFast__section-container_info-block_icon icon1"></div>
            <div className="easyAndFast__section-container_info-block_info">
              <h3>Choose Destination</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="easyAndFast__section-container_info-block">
            <div className="easyAndFast__section-container_info-block_icon icon2"></div>
            <div className="easyAndFast__section-container_info-block_info">
              <h3>Make Payment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="easyAndFast__section-container_info-block">
            <div className="easyAndFast__section-container_info-block_icon icon3"></div>
            <div className="easyAndFast__section-container_info-block_info">
              <h3>Reach Airport on Selected Date</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="easyAndFast__section-container_image">
          <img src={easyImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EasyAndFast;
