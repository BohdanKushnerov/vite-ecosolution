// import { useEffect, useState } from "react";

// type AppScreen = "mobile" | "tablet" | "desktop";

// interface IUseResizeWindow {
//   (mobileWidth: number, tabletWidth: number, desktopWidth: number): void;
// }

// const useResizeWindow: IUseResizeWindow = (
//   mobileWidth,
//   tabletWidth,
//   desktopWidth
// ) => {
//   const [screen, setScreen] = useState<AppScreen>(() => {
// if (window.innerWidth < mobileWidth) {
//   return "mobile";
// } else if (
//   window.innerWidth >= tabletWidth &&
//   window.innerWidth < desktopWidth
// ) {
//   return "tablet";
// } else {
//   return "desktop";
// }
//   });

//   // resize window
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < mobileWidth) {
//         setScreen("mobile");
//       } else if (
//         window.innerWidth >= tabletWidth &&
//         window.innerWidth < desktopWidth
//       ) {
//         setScreen("tablet");
//       } else {
//         setScreen("desktop");
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [desktopWidth, mobileWidth, screen, tabletWidth]);

//   return screen;
// };

// export default useResizeWindow;

import { useEffect, useState, useCallback } from "react";

type AppScreen = "mobile" | "tablet" | "desktop";

const useResizeWindow = (
  // mobileWidth: number,
  tabletWidth: number,
  desktopWidth: number
): AppScreen => {
  const getScreen = useCallback(() => {
    if (window.innerWidth < tabletWidth) return "mobile";
    if (window.innerWidth < desktopWidth) return "tablet";
    return "desktop";
  }, [desktopWidth, tabletWidth]);

  const [screen, setScreen] = useState<AppScreen>(() => getScreen());

  useEffect(() => {
    const handleResize = () => setScreen(getScreen());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getScreen]);

  return screen;
};

export default useResizeWindow;
