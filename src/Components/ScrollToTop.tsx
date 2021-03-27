import React, { MouseEvent, RefObject } from "react";

interface ScrollToTopProps {
  elementRef: RefObject<HTMLDivElement>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
  const OnScrollToTopClicked = (e: MouseEvent) => {
    e.preventDefault();

    if (!!props.elementRef.current) {
      props.elementRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  return (
    <div id="ScrollToTop">
      <div className="back-to-top-wrapper">
        <a
          href="#root"
          className="back-to-top-link"
          aria-label="Scroll to Top"
          onClick={OnScrollToTopClicked}
        >
          <i className="arrow up"></i>
        </a>
      </div>
    </div>
  );
};

export default ScrollToTop;
