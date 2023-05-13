"use client";

import styled from "styled-components";

const HomeSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bcd8e3;
  /* padding-top: 100px; */
`;

const HomeSection = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeroBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.15);
  /* z-index: -1; */
`;

export { HeroBannerWrapper, HomeSection, HomeSectionWrapper };
