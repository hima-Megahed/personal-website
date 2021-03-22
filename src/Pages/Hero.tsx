import React, { useEffect, useState } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Hero: React.FC<{}> = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            Hi, my name is{" "}
            <span className="text-color-main">Ibrahim Megahed</span>
          </h1>
          <h1 className="hero-title">
            I'm a full-stack software engineer crafting web an mobile apps.
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="/about">Know more</Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
