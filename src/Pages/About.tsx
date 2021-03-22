import React, { useEffect, useState } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

const About: React.FC<{}> = () => {
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
    <section id="about">
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <h1 className="title">
          Welcome to My Personal Website{" "}
          <img
            alt=""
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          ></img>
        </h1>
      </Fade>
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={1000}
        distance="30px"
      >
        <div className="avatar-container">
          {/* TODO: change avatar image to graduation one while discussing the gp*/}
          <img
            className="avatar"
            src="https://scontent.fcai19-1.fna.fbcdn.net/v/t1.0-9/36304203_1133092436830202_6267488759638392832_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=mbcGhodgiPAAX--k4RX&_nc_ht=scontent.fcai19-1.fna&oh=966564ddb664974c8c3ec0e62ab68c1e&oe=60806E61"
            alt=""
          />
          <p>
            That's me, presenting my Quran Surah Identifier graduation project 3
            years ago
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default About;
