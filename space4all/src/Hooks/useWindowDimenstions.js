import { useState, useEffect, useCallback } from "react";

const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    const getWindowDimensions = useCallback(() => {
        const screenWidth = hasWindow ? window.innerWidth : null;
        const screenHeight = hasWindow ? window.innerHeight : null;
        const screenScroll = hasWindow ? window.pageYOffset : null;
        return {
            screenWidth,
            screenHeight,
            screenScroll,
        };
    }, [hasWindow]);

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowDimensions(getWindowDimensions());
            };

            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleResize);
            };
        }
    }, [hasWindow, getWindowDimensions]);

    return windowDimensions;
};

export default useWindowDimensions;
