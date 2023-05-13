import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

import { LogoWrapper, StyledLink } from "./Navbar.styles";

const Navbar = (props) => {
  const { background } = props;
  return (
    <AppBar
      color="transparent"
      // sx={{ maxHeight: "80px", background: "#DEF6F6" }}
      sx={{
        maxHeight: "80px",
        background: background != null ? background : "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <LogoWrapper>
          <Link
            href="/"
            style={{
              display: "flex",
              width: "150px",
              justifyContent: "space-evenly",
              textDecoration: "none",
            }}
          >
            <Image
              src={logo}
              alt="RenewE Logo"
              width={44}
              height={64}
              priority
            />
            <Typography
              align="justify"
              variant="h4"
              component="p"
              sx={{
                color: "#086972",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              RenewE
            </Typography>
          </Link>
        </LogoWrapper>
        <ul style={{ display: "flex" }}>
          <StyledLink
            href={{
              pathname: "/",
              // query: { displayNavbar: true }
            }}
          >
            Home
          </StyledLink>
          <StyledLink
            href={{
              pathname: "/education",
              // query: { displayNavbar: true },
            }}
          >
            Education
          </StyledLink>
          <StyledLink
            href={{
              pathname: "/events",
              // query: { displayNavbar: true }
            }}
          >
            Events
          </StyledLink>
          <StyledLink
            href={{
              pathname: "/merchandise",
              // query: { displayNavbar: true },
            }}
          >
            Merchandise
          </StyledLink>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
