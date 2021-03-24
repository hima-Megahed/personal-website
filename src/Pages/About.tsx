import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// @ts-ignore
import Fade from "react-reveal/Fade";
import { Button, Container } from "reactstrap";
import GPTeamImage from "../images/team.jpeg";

const About: React.FC<{}> = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButton, setScrollButtonVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollButtonVisibility(scrolled > 49);
  };

  return (
    <section id="about">
      <Helmet>
        <title>About | Ibrahim Hasan</title>
      </Helmet>

      <Container>
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
            <img className="avatar" src={GPTeamImage} alt="my team after GP" />
            <p>
              That's me and the team, after presenting our Quran Surah
              Identifier graduation project 3 years ago
            </p>
          </div>
        </Fade>

        <section id="personal-info">
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
            <p>
              My name is Ibrahim also known as <strong>Hima</strong>. I'm a
              full-stack software engineer, focusing on web but also have
              passion for mobil apps, with around 3 years of experience.
              Currently I'm a Mid-level Software Engineer at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.getopenwater.com/"
              >
                OpenWater
              </a>{" "}
              since December 2019.
            </p>
            <p>
              Life is all about chances, And my first chance was{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="hhttps://www.qutip.com/"
              >
                quTIP
              </a>{" "}
              to take part in numerous web projects that gave me insights into
              the entire SDLC, How teamwork could be, And how development in an
              agile environment looks like.
            </p>
            <p>
              {" "}
              Then I got my second contract at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.getopenwater.com/"
              >
                OpenWater
              </a>{" "}
              and I was happily expanding my experience with enterprise-level
              projects and Challenges in areas I didn't explore before. And
              because the hard work is never lost, soon I got a part-time
              contract at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bit-bang.io/"
              >
                BitBang
              </a>{" "}
              as a full-stack software engineer.
            </p>
            <p>
              {" "}
              My work involved mobile and web applications. From this moment on
              I felt that this is my destiny and I want to see how much of a
              footprint I can leave on the earth before I leave. Today, I'm a
              full-stack software engineer with over than +2 years of proven
              experience in mobile and web applications working on OpenWater
              Chat Network, Decanter, and ASME. Most recently we have been using
              Azure Tables, Blobs, Azure Functions, and CosmosDb to provide our
              client an unparalleled experience.
            </p>
            <p>
              Even when I'm on my own time I tend to read SW books i.e. DDD,
              explore new technologies, play e-games, and workout. I try to
              manage my time and find the balance. New challenges, distributed
              systems, and problem-solving. This is what keeps me up at night, A
              never-ending passion to create wonderful and helpful things and
              share them with the world.
            </p>
          </Fade>
          <br />
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
            <h2>Motivation</h2>
            <p>
              I love writing code, Ever since I have implemented my first
              program in C++ that draws different shapes using stars and
              manipulated it to get the desired output, I have been obsessed
              with the idea of using Software to solve practical problems. I
              consider Software development is never-ending tutorials that I'm
              engaged with and having the desire for more and more. I believe
              that Programming came with nothing but good, ease, and a new era
              for healthier people.
            </p>
            <br />
            <h2>My Bachelor’s Degree Final Project</h2>
            <div className="row">
              <div className="col-10 col-md-10">
                <p>
                  3 years ago, It was my first year at Ain-Shams University
                  Faculty of Computer and Information Science. I heard about{" "}
                  <a href="https://icpc.global/">ACM ICPC</a> and it was very
                  interesting for me, So I started my training program with my
                  colleagues and a mentor. Over the time I studied Machine
                  learning and AI any by a short time I was completely obsessed
                  with them. So I thought to craft my Graduation Project around
                  ML and AI.
                  <br />
                  <br />
                  We met and brainstormed to get an idea, I was inspired by
                  Shazam and how it works. Then we came to an idea, Why we don't
                  make an application like shazam but especially created for
                  Quran and use machine learning to remove limitations and
                  restrictions to a specific voice.
                </p>
                <p>
                  We started researching for 3 months then we made our decision
                  and put a plan for the upcoming 6 months. every one of us was
                  responsible for a specific part. we had the core engine team,
                  mobile team and UI/UX team. I should say it was very hrd at
                  the beginning as no one worked on this field before, we will
                  work with signals and ML plus we wanted to provide seamless
                  experience through providing a mobile app that anybody can
                  use, and we were restricted by a time frame. But eventually we
                  made it 💪 and we got <strong>A+</strong> in the project. We
                  crafted a mobile app that can work online and offline just
                  pronounce word or two from the verse you want and it will be
                  there for you. We named it{" "}
                  <a href="https://github.com/hima-Megahed/Qur-an-Surah-Identifier">
                    Quran Surah Identifier
                  </a>
                  .
                </p>
              </div>
              <div className="col-2 col-md-2">
                <img src="https://j.gifs.com/gZXzzl.gif" alt="demo for gp" />
              </div>
            </div>
            <br />
          </Fade>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
            <h2>Next Technology Leaders And Uadcity Scholarship</h2>
            <p>
              Before I finish my bachelor's degree in computer science, I
              applied for Next Technology Leader scholarship, to learn Web
              development, I finished Full-stack Web Developer NANODEGREE
              PROGRAM.
              <br />
              <br />
              As I remember I learned basic html, css, flask python and
              postgreSQL. From this moment on I felt that this is what I love
              the most and want to do.
            </p>
          </Fade>
        </section>
      </Container>

      {showScrollButton && <Button class="scrollToTopBtn">☝️</Button>}
    </section>
  );
};

export default About;
