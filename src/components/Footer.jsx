import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="footer">Copyright © {year} - Redux Shop INC.</div>;
};

export default Footer;
