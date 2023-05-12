import Link from "next/link";
import React from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { LogoWrapper, StyledLink } from "./Navbar.styles";

const Navbar = () => {
  return (
    <AppBar color="transparent">
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
          <StyledLink href={{ pathname: "/", query: { displayNavbar: true } }}>
            Home
          </StyledLink>
          <StyledLink
            href={{
              pathname: "/education",
              query: { displayNavbar: true },
            }}
          >
            Education
          </StyledLink>
          <StyledLink
            href={{ pathname: "/events", query: { displayNavbar: true } }}
          >
            Events
          </StyledLink>
          <StyledLink
            href={{
              pathname: "/merchandise",
              query: { displayNavbar: true },
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
