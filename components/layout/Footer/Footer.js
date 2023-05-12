import GitHubIcon from "../../icons/github";

import IconWrapper from "./Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#fff",
        height: "70px",
      }}
    >
      <div>&copy; {currentYear} RenewE. All rights reserved.</div>
      <IconWrapper
        aria-label="Github Repository"
        href="https://github.com/vercel/commerce"
        target="_blank"
      >
        <GitHubIcon />
      </IconWrapper>
    </div>
  );
};

export default Footer;
