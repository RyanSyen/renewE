import GitHubIcon from "../../icons/github";

import IconWrapper from "./Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div>&copy; {currentYear} RenewE. All rights reserved.</div>
      <IconWrapper
        aria-label="Github Repository"
        href="https://github.com/vercel/commerce"
      >
        <GitHubIcon />
      </IconWrapper>
    </div>
  );
};

export default Footer;
