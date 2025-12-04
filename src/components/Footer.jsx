import React from "react";
import "./Footer.css";
import banner from "../assets/footerBanner.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={banner} alt="Footer Banner" />
    </footer>
  );
}
