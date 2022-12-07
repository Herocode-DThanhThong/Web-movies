import React, { useEffect, useState } from "react";
import ListFilm from "./ListFilm";
// Responsive
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const getSlidePerviewResponsive = () => {
  const screenWidth = getWindowDimensions().width;
  if (screenWidth >= 1024) return 6;
  else if (screenWidth > 640 && screenWidth < 1024) return 3;
  else return 2;
};
function IndexListFilmNew(props) {
  // Responsive
  const [slidePerview, setSlidePerview] = useState(() => {
    return getSlidePerviewResponsive();
  });

  window.addEventListener("resize", () => {
    const screenWidth = window.outerWidth;
    if (screenWidth >= 1024) setSlidePerview(6);
    else if (screenWidth > 640 && screenWidth < 1024) setSlidePerview(3);
    else setSlidePerview(2);
  });
  // End Responsive
  useEffect(() => {
    return () => {
      setSlidePerview(0);
    };
  }, []);
  return (
    <div style={{ cursor: "pointer" }} className="mb-2">
      <ListFilm slidePerview={slidePerview} />
    </div>
  );
}

export default IndexListFilmNew;
