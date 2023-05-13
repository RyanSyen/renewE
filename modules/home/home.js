import Typography from "@mui/material/Typography";
import Image from "next/image";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Solar from "../../public/solar.jpg";

import {
  HeroBannerWrapper,
  HomeSection,
  HomeSectionWrapper,
} from "./home.styles";

const Home = () => {
  return (
    <>
      <Navbar background="rgba(255,255,255,0.8)" />
      {/* <Navbar background="linear-gradient(to bottom right, #fcccdc, #d3d7dc, #c5ecb3)" /> */}

      <HomeSectionWrapper>
        <HomeSection>
          <div
            style={{
              backgroundColor: "#def6f6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
              height: "100vh",
              width: "100vw",
            }}
          >
            <Image
              src={Solar}
              priority
              style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            />
            <HeroBannerWrapper>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontWeight: "600",
                  //   color: "#FAEDE3",
                  color: "#086972",
                  fontSize: "85px",
                  lineHeight: "1.2",
                  fontFamily: "Libre Baskerville, serif",
                }}
              >
                RenewE
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontWeight: "600",
                  //   color: "#04C880",
                  //   color: "#77DD77",
                  color: "#086972",
                  fontSize: "24px",
                  lineHeight: "1.2",
                  fontFamily: "Libre Baskerville, serif",
                  maxWidth: "800px",
                  //   background:
                  //     "linear-gradient(to right, #fcccdc, #d3d7dc, #c5ecb3)",
                  //   backgroundClip: "text",
                  //   textFillColor: "transparent",
                }}
              >
                Empowering Malaysia with Sustainable Energy
              </Typography>
            </HeroBannerWrapper>
          </div>
          <div>
            <h3>Best of the week</h3>
            <div>
              <div>Main Article</div>
              <div>
                Sub articles
                <div>sub article 1</div>
                <div>sub article 2</div>
              </div>
            </div>
          </div>
        </HomeSection>
      </HomeSectionWrapper>
      <Footer />
    </>
  );
};

export default Home;
