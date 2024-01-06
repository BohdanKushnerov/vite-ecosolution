import { useEffect, useState, useCallback } from "react";

type AppScreen = "mobile" | "tablet" | "desktop";

const useResizeWindow = (
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
