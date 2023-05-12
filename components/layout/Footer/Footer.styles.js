import Link from "next/link";
import styled from "styled-components";

const IconWrapper = styled(Link)`
  text-decoration: none;
  /* color: #086972; */
  cursor: pointer;
  /* margin: 0 8px;
  padding: 9px 15px; */
  transition: 0.3s;
  z-index: 2;
  /* border-radius: 50px; */

  &:hover {
    transform: scale(1.1);
  }
`;

export default IconWrapper;
