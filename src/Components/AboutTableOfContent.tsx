import React, { MouseEvent, RefObject, useEffect, useState } from "react";

interface AboutTableOfContentProps {
  introSectionRef: RefObject<HTMLElement>;
  motivationSectionRef: RefObject<HTMLElement>;
  educationSectionRef: RefObject<HTMLElement>;
  ntlSectionRef: RefObject<HTMLElement>;
  workExperienceSectionRef: RefObject<HTMLElement>;
  openWaterWorkExperienceSectionRef: RefObject<HTMLElement>;
  bitBangWorkExperienceSectionRef: RefObject<HTMLElement>;
  quTIPWorkExperienceSectionRef: RefObject<HTMLElement>;
}

const AboutTableOfContent: React.FC<AboutTableOfContentProps> = (props) => {
  const IntroductionHref = "introduction";
  const MotivationHref = "motivation";
  const EducationHref = "education";
  const NTLHref = "ntl";
  const WorkExperienceHref = "work-experience";
  const OpenWaterHref = "openWater";
  const BitBangHref = "bit-bang";
  const QuTIPHref = "quTIP";

  const [activeLiItem, SetActiveLiItem] = useState(IntroductionHref);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    if (scrolled > 90) {
      SetActiveLiItem(QuTIPHref);
    } else if (scrolled > 87) {
      SetActiveLiItem(BitBangHref);
    } else if (scrolled > 70) {
      SetActiveLiItem(OpenWaterHref);
    } else if (scrolled > 54) {
      SetActiveLiItem(WorkExperienceHref);
    } else if (scrolled > 47) {
      SetActiveLiItem(NTLHref);
    } else if (scrolled > 32) {
      SetActiveLiItem(EducationHref);
    } else if (scrolled > 28) {
      SetActiveLiItem(MotivationHref);
    } else {
      SetActiveLiItem(IntroductionHref);
    }
  };

  const OnScrollToSectionClicked = (e: MouseEvent, targetSection: String) => {
    e.preventDefault();
    SetActiveLiItem("");

    if (
      targetSection.includes(IntroductionHref) &&
      !!props.introSectionRef.current
    ) {
      props.introSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (
      targetSection.includes(MotivationHref) &&
      !!props.motivationSectionRef.current
    ) {
      props.motivationSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (
      targetSection.includes(EducationHref) &&
      !!props.educationSectionRef.current
    ) {
      props.educationSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (targetSection.includes(NTLHref) && !!props.ntlSectionRef.current) {
      props.ntlSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (
      targetSection.includes(WorkExperienceHref) &&
      !!props.workExperienceSectionRef.current
    ) {
      props.workExperienceSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (
      targetSection.includes(OpenWaterHref) &&
      !!props.openWaterWorkExperienceSectionRef.current
    ) {
      props.openWaterWorkExperienceSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (
      targetSection.includes(BitBangHref) &&
      !!props.bitBangWorkExperienceSectionRef.current
    ) {
      props.bitBangWorkExperienceSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }

    if (
      targetSection.includes(QuTIPHref) &&
      !!props.quTIPWorkExperienceSectionRef.current
    ) {
      props.quTIPWorkExperienceSectionRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  return (
    <nav className="section-nav">
      <ol>
        <li
          className={activeLiItem === IntroductionHref ? "active" : undefined}
        >
          <a
            href={IntroductionHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Introduction
          </a>
        </li>
        <li className={activeLiItem === MotivationHref ? "active" : undefined}>
          <a
            href={MotivationHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Motivation
          </a>
        </li>
        <li className={activeLiItem === EducationHref ? "active" : undefined}>
          <a
            href={EducationHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Education
          </a>
        </li>
        <li className={activeLiItem === NTLHref ? "active" : undefined}>
          <a
            href={NTLHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            NTL
          </a>
        </li>
        <li
          className={activeLiItem === WorkExperienceHref ? "active" : undefined}
        >
          <a
            href={WorkExperienceHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Work Experience
          </a>
          <ul>
            <li
              className={activeLiItem === OpenWaterHref ? "active" : undefined}
            >
              <a
                href={OpenWaterHref}
                onClick={(e) =>
                  OnScrollToSectionClicked(e, e.currentTarget.href)
                }
              >
                OpenWater
              </a>
            </li>
            <li className={activeLiItem === BitBangHref ? "active" : undefined}>
              <a
                href={BitBangHref}
                onClick={(e) =>
                  OnScrollToSectionClicked(e, e.currentTarget.href)
                }
              >
                BitBang
              </a>
            </li>
            <li className={activeLiItem === QuTIPHref ? "active" : undefined}>
              <a
                href={QuTIPHref}
                onClick={(e) =>
                  OnScrollToSectionClicked(e, e.currentTarget.href)
                }
              >
                quTIP
              </a>
            </li>
          </ul>
        </li>
      </ol>
    </nav>
  );
};

export default AboutTableOfContent;
