"use client";

import Link from "next/link";
import styled from "styled-components";

const IconWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export default IconWrapper;
