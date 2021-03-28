import React, { MouseEvent, RefObject } from "react";

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

  const OnScrollToSectionClicked = (e: MouseEvent, targetSection: String) => {
    e.preventDefault();

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
        <li>
          <a
            href={IntroductionHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            href={MotivationHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Motivation
          </a>
        </li>
        <li>
          <a
            href={EducationHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href={NTLHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            NTL
          </a>
        </li>
        <li>
          <a
            href={WorkExperienceHref}
            onClick={(e) => OnScrollToSectionClicked(e, e.currentTarget.href)}
          >
            Work Experience
          </a>
          <ul>
            <li className="">
              <a
                href={OpenWaterHref}
                onClick={(e) =>
                  OnScrollToSectionClicked(e, e.currentTarget.href)
                }
              >
                OpenWater
              </a>
            </li>
            <li className="">
              <a
                href={BitBangHref}
                onClick={(e) =>
                  OnScrollToSectionClicked(e, e.currentTarget.href)
                }
              >
                BitBang
              </a>
            </li>
            <li className="">
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
