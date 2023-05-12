import styled from "styled-components";

const Home = styled.main`
  background-color: rgba(222, 246, 246, 1);
`;

const HomeBody = styled.div`
  background-color: rgba(222, 246, 246, 0.75); //#def6f6
  z-index: 1;
`;

const BackgroundImage = styled.div`
  /* background-image: url("../../public/renewe_main_citybg.png"); */
  background-image: url("https://img.freepik.com/free-vector/landmarks-skyline-paper-style_23-2148430420.jpg?w=900&t=st=1683885649~exp=1683886249~hmac=2724cd7914bc2e8e8f6a53def1760067b1c87f4c8d9ebe609c4924ac64d6c885");
  /* background-size: cover; */
  z-index: 1;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HomeSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
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
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const HeroBanner = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  margin: 35px;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export {
  BackgroundImage,
  HeroBanner,
  HeroBannerWrapper,
  Home,
  HomeBody,
  HomeSection,
  HomeSectionWrapper,
  Section,
};
