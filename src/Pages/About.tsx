import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
// @ts-ignore
import Fade from "react-reveal/Fade";
import { Container } from "reactstrap";
import ScrollToTop from "../Components/ScrollToTop";
import GPTeamImage from "../images/team.jpeg";
import ExperienceGraphImg from "../images/Experience-Graph.png";

const About: React.FC<{}> = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButton, setScrollButtonVisibility] = useState(false);

  const ScrollTopRef = useRef<HTMLDivElement>(null);

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

    setScrollButtonVisibility(scrolled > 10);
  };

  return (
    <section id="about">
      <Helmet>
        <title>About | Ibrahim Hasan</title>
      </Helmet>
      <div ref={ScrollTopRef}></div>
      <Container>
        {/*Intro */}
        <section>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
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
            duration={500}
            delay={500}
            distance="30px"
          >
            <div className="avatar-container">
              <img
                className="avatar"
                src={GPTeamImage}
                alt="my team after GP"
              />
              <p>
                That's me and the team, after presenting our Quran Surah
                Identifier graduation project 3 years ago
              </p>
            </div>
          </Fade>
        </section>

        {/*Personal Info */}
        <section>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
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
        </section>

        {/* Motivation */}
        <section>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
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
          </Fade>
        </section>

        {/*Bachelor Degree */}
        <section>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
            distance="30px"
          >
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
        </section>

        {/* NTL */}
        <section>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
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

        {/*Work Experience */}
        <section className="work-experience">
          <br />
          <br />
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={500}
            delay={500}
            distance="30px"
          >
            <h2>Work Experience</h2>
            <img src={ExperienceGraphImg} alt="My work Experience Graph" />
            {/*OpenWater */}
            <section>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.getopenwater.com/"
                >
                  OpenWater
                </a>
                : December 2019 - Present
              </h3>
              <p>
                <span className="project-name">OpenWater Chat Network</span> :
                Fully-featured web chat business application the same as slack.
                Used Restful api's to link the front-end to the back-end.
                Delivered end users smoothly and mobile friendly experience. (.
                Net Core 3, MSSQL, ReactJS, Redux, React router, hooks)
                <br />
                <br />
                <span className="project-name">Decanter </span>: Custom awards
                management application, Used Restful api's to power the back-end
                and reactjs to cover the front-end part giving the user an
                extraordinary experience through web and mobile devices. (. Net
                Core 3, MSSQL, ReactJS, hooks, mobx, Styled-Components)
                <br />
                <br />
                <span className="project-name">
                  ASME [American Society Mechanical Engineering]
                </span>
                : An Extender web application to OpenWater awards engine
                platform, Orchestrating different work flows and Integrating
                different types of third-party services providers"ithenticate,
                AlphaTrust". (. Net Core 3, MSSQL, CosmosDb, CSS, JS, JQuery,
                Hangfire)
                <br />
                <br />
                <span className="project-name">Echo Utility</span> : Custom Web
                logger tool that intercept application network requests and logs
                them on failure and success to Azure table. (. Net Core3, Azure
                Tables, CSS, JS, JQuery)
                <br />
                <br />
                <span className="project-name">OpenWater Islands</span>:
                Stateless standalone azure functions that customizes the default
                behavior of OpenWater awards engine platform i.e. Single Sign On
                SSO, applications and invoices push back. (Azure Functions
                "Timer Trigge
              </p>
            </section>

            <hr />

            {/*BitBang */}
            <section>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bit-bang.io/"
                >
                  BitBang
                </a>
                : March 2020 - Present "Part-Time"
              </h3>
              <p>
                <span className="project-name">EatClean</span>: A healthy food
                ordering app, Worked on converting mockups to a working app,
                also took part in developing its back-end (.Net Core, MSSQL,
                React Native, Redux, hooks, RN Navigation)
                <br />
                <br />
                <span className="project-name">Callture Extension</span>: Worked
                on a project integrating a various number of CMS providers i.e.
                "Salesforce, Zoho, Zoho PhoneBridge, Microsoft Dynamics 365,
                etc..." (.Net MVC 5, Chrome Extension)
                <br />
                <br />
                <span className="project-name">Jitsi</span>: A VOIP open-source
                application, Worked on customizing Jitsi on both platforms (Ios,
                Android) and submitting them to the play store and apple store.
                <br />
                <br />
                <span className="project-name">Linphone</span>: A VOIP
                open-source application, worked on customizing the Android app
                and adding Push Notifications to the application. (. Net MVC 5,
                Android "Java")
              </p>
            </section>

            <hr />

            {/*quTIP */}
            <section>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.qutip.com/"
                >
                  quTIP
                </a>
                : July 2018 - November 2018
              </h3>
              <p>
                <span className="project-name">TOTAL</span>: Collaborated with
                quTIP backend team to develop new features, refactor some chunks
                of code and unit test our functionality. (.Net MVC 5 - Microsoft
                SQL Server - Kendo UI - Unit Testing - JS - jQuery - Glimpse
                performance profiling)
                <br />
                <br />
                <span className="project-name">SalesToolMini</span>: Developed
                salesToolMini from the frontend to the backend passing by user
                authentication and data validation on both client and server
                sides then bulk inserting the data into the database. (.Net MVC
                5 - Entity Framework 6 - Microsoft SQL Server)
                <br />
                <br />
                <span className="project-name">Research and Development</span>
                Assigned to the R&D team to get state-of-the-art technologies.
                (i.e. Cloud Computing, Single & Multi-tenant apps)
              </p>
            </section>
          </Fade>
        </section>
      </Container>

      {showScrollButton && <ScrollToTop elementRef={ScrollTopRef} />}
    </section>
  );
};

export default About;
