import React from "react";
import "./photo.css";
import Button from "react-bootstrap/Button";

const Photo = ({ img }) => {
  return (
    <div>
      <div className="photo">
        <img src="https://static.wixstatic.com/media/bc139a_c38d8dbb4a3044b5968d65b760062952~mv2_d_2048_3072_s_2.jpg/v1/fill/w_580,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc139a_c38d8dbb4a3044b5968d65b760062952~mv2_d_2048_3072_s_2.jpg" />
        <img src="https://static.wixstatic.com/media/bc139a_bc54c4022e324bdaba430db9c0436162~mv2_d_2048_3072_s_2.jpg/v1/fill/w_578,h_706,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/bc139a_bc54c4022e324bdaba430db9c0436162~mv2_d_2048_3072_s_2.jpg" />
        <img src="https://static.wixstatic.com/media/bc139a_5ce3811ad5f8483da8599ca850e07340~mv2_d_2048_3072_s_2.jpg/v1/fill/w_580,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc139a_5ce3811ad5f8483da8599ca850e07340~mv2_d_2048_3072_s_2.jpg" />
      </div>
      <div className="photo_text">
        <h2>We have the freedom to choose, so we chose to be good.</h2>
        <p>
          At Mane Ethical Hairdressing we have exercised our power to choose,
          and in doing so we have created a space and a community of shared
          values. Being sustainable and ethical isn't always the easiest of
          paths, however we made a conscious effort to explore and research
          salon options that positively contribute to making a better world. We
          hope you enjoy what we have created.
        </p>
        <Button className="btn_photo"  variant="light" size="m">
          Block level button
        </Button>
        
      </div>
    </div>
  );
};

export default Photo;
