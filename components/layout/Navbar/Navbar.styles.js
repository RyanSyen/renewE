import Link from "next/link";
import styled from "styled-components";

const LogoWrapper = styled.div`
  margin: 8px;
`;

const NavItem = styled.div`
  margin: 0 15px;
  text-decoration: none;
  color: #086972;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #086972;
  cursor: pointer;
  margin: 0 8px;
  padding: 9px 15px;
  transition: 0.3s;
  border-radius: 50px;

  &:hover {
    background-color: #086972;
    color: #fcfcfc;
  }
`;

export { LogoWrapper, NavItem, StyledLink };
