import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import reneweKL from "../../public/renewe_kl.png";
import reneweMain from "../../public/renewe_main.png";
import scrollDown from "../../public/scroll-down.gif";

import {
  BackgroundImage,
  HeroBanner,
  HeroBannerWrapper,
  Home,
  HomeBody,
  HomeSection,
  Section,
} from "./education.styles";

const Education = () => {
  return (
    <Home>
      <BackgroundImage />
      <Navbar />
      {/* <HomeSectionWrapper> */}
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
            marginTop: "20px",
            width: "100vw",
          }}
        >
          <HeroBannerWrapper>
            <HeroBanner>
              <Image
                src={reneweMain}
                alt="RenewE Logo"
                priority
                width={500}
                height={425}
                style={{
                  zIndex: 2,
                  position: "absolute",
                }}
              />
              <div
                style={{
                  // backgroundColor: "rgba(1,50,32,0.75)",
                  borderRadius: "50%",
                  width: "550px",
                  height: "500px",
                  // boxShadow: "0 0 15px 0 rgba(1,50,32,0.75)",
                  zIndex: 1,
                  marginBottom: "20px",
                }}
              />
            </HeroBanner>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: "600",
                color: "#333",
                fontSize: "85px",
                lineHeight: "1.2",
                fontFamily: "Libre Baskerville, serif",
              }}
            >
              Renewable Energy 101
            </Typography>
          </HeroBannerWrapper>
          <Image
            src={scrollDown}
            alt="scroll down gif"
            priority
            width={128}
            style={{ zIndex: 2 }}
          />
        </div>

        <HomeBody>
          {/* What is renewable energy */}
          <Section>
            <Typography
              variant="h2"
              align="right"
              sx={{ fontWeight: "900", color: "#086972", mr: "50px" }}
            >
              What is renewable energy?
            </Typography>
            <Typography sx={{ textAlign: "justify", maxWidth: "900px" }}>
              Renewable energy refers to energy that is derived from natural
              sources that are naturally replenished over time such as wind,
              sunlight, water, geothermal heat, biomass and tidal energy. Unlike
              non-renewable energy sources like fossil fuels that will
              eventually be depleted, renewable energy sources are infinite and
              inexhaustible. Renewable energy is often referred to as clean
              energy as it does not produce harmful emissions and it has a much
              lower impact on the environment than the non-renewable energy
              sources. As a result there has been a growing trend towards
              renewable energy as a way to reduce our reliance on non-renewable
              energies like fossil fuels and more towards a more sustainable and
              cleaner future.
            </Typography>
          </Section>

          {/* Why renewable energy */}
          <Section>
            <Typography sx={{ textAlign: "justify", maxWidth: "900px" }}>
              Since the beginning of civilization, the use of non-renewable
              energy sources have been a major contributor to climate change.
              These energy sources release huge amounts of greenhouse gases such
              as carbon dioxide into the atmosphere, which traps the heat and
              causes the Earth&#39;s temperature to rise. Moreover, many
              companies and countries are hesitant to transition using renewable
              energy sources as this can make them vulnerable to supply
              disruptions and ultimately hinder their business models. However,
              research and studies have shown that the renewable energy industry
              is a growing sector that provides more jobs and other economic
              benefits. In the long run, renewable energy sources can reduce
              energy costs as technology continues to advance and be less
              costly. Furthermore, renewable energy sources produce much less
              pollution and impact on the natural flora and fauna, protecting
              the environment and wildlife compared to the non-renewable sources
              of energy. This overall promotes cleaner air and water quality,
              while reducing man-made and natural disasters.
            </Typography>
            <Typography
              variant="h2"
              align="left"
              sx={{ fontWeight: "900", color: "#086972", ml: "50px" }}
            >
              Why renewable energy?
            </Typography>
          </Section>

          {/* Renewable energy in Malaysia */}
          <Section direction="column">
            <Image src={reneweKL} alt="Kuala Lumpur" priority />
            <Typography
              variant="h2"
              align="right"
              sx={{
                my: "20px",
                fontWeight: "600",
                color: "#333",
                fontSize: "50px",
                lineHeight: "1.2",
                fontFamily: "Libre Baskerville, serif",
              }}
            >
              Renewable Energy In Malaysia
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Malaysia as a developing country requires more energy than
              developed countries for its rapid economic growth. This poses an
              energy crisis to long-term sustainability by producing vast
              amounts of carbon emissions to the environment. As a signatory
              nation to the Conference of Parties to the United Nations
              Framework Convention on Climate Change, Malaysia has committed to
              implement clean, sustainable and renewable energy sources to lower
              its GDP&#39;s intensity of greenhouse gas emissions by up to 45%
              by 2030. Malaysia&#39;s primary energy source for generating
              electricity has always been fossil fuels. Fossil fuels are not
              sustainable due to environmental degradation and resource
              depletion. The current renewable energy consumption only covers
              10% of the total capacity of energy usages. With Malaysia&#39;s
              population and economy rapidly expanding, it is crucial to
              necessitate the exploration and implementation of renewable energy
              sources to meet the country&#39;s population and commercial
              demands as well as its goal to reduce its greenhouse gas
              emissions.
            </Typography>
          </Section>

          {/* Why is renewable energy in Malaysia so important? */}
          <Section direction="column">
            <Typography
              variant="h2"
              align="center"
              sx={{
                my: "20px",
                fontWeight: "600",
                color: "#333",
                fontSize: "50px",
                lineHeight: "1.2",
                fontFamily: "Libre Baskerville, serif",
                maxWidth: "1000px",
              }}
            >
              Why Is Renewable Energy In Malaysia So Important?
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              For the past six decades, the majority of Malaysia&#39;s energy
              consumption has relied on non-renewable energy sources such as
              coal, oil, and gas, accounting for 90% of the country&#39;s carbon
              dioxide (CO2) emissions. This is concerning especially in
              Peninsular Malaysia where it has the highest population density
              and contributes significantly to climate change. Despite
              governmental efforts, fossil fuel consumption has yet to see a
              significant reduction despite the increase of installed capacity
              of renewable energy. This trend is alarming, given that global
              emissions must decrease by 7.6% annually from 2020 to 2030 to
              limit global warming to 1.5°C, the upper limit before potentially
              devastating climate change effects hit the globe and disrupt
              natural ecosystems.
            </Typography>
          </Section>
        </HomeBody>
      </HomeSection>
      <Footer />
    </Home>
  );
};

export default Education;
