import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_head">
        <div>
          <img src="https://static.wixstatic.com/media/bc139a_2e284542dc4041eb87e95f272d0e2921~mv2.png/v1/fill/w_303,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Stacked%20Mane%20Logo%20-%20FULL%20COLOUR.png" />
        </div>
        <div className="opening">
          <p>Opening Hours by appointment only</p>
          <div className="clock">
            <div className="spans">
              <span>Mon</span>
              <span>Tues</span>
              <span>Wed</span>
              <span>Thurs</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div className="spans">
              <span>closed</span>
              <span>9am - 8pm</span>
              <span>9am - 8pm</span>
              <span>9am - 8pm</span>
              <span>9am - 8pm</span>
              <span>9am - 4pm</span>
              <span>closed</span> <br />
            </div>
          </div>
        </div>
        <div className="adres">
          <p>(07) 5659 1905</p>
          <p>6 / 5-7 Tallebudgera Creek Road, Burleigh, Queensland</p>
          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="opening_end">
        <div>
          <img src="https://static.wixstatic.com/media/bc139a_7d3240063ad049999acc47a990280293~mv2_d_12500_2601_s_2.png/v1/fill/w_236,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sustainable%20Salons%20Logo_Horizontal_Black.png" />
        </div>
        <div c>
            <span>@2021 Mane Ethical Hairdressing</span>
            <span>Branding + website by Lumo Design Studio</span>
        </div>


      </div>
    </div>
  );
};

export default Footer;
