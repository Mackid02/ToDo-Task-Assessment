import React, { useEffect, useState } from "react";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainContent = document.querySelector("main");
            setIsVisible(mainContent.scrollHeight - mainContent.scrollTop <= mainContent.clientHeight);
        };

        document.querySelector("main").addEventListener("scroll", handleScroll);
        return () => document.querySelector("main").removeEventListener("scroll", handleScroll);
    }, []);

    return <footer style={{ display: isVisible ? "block" : "none" }}>!! You have Reached End of The List !! </footer>;
};

export default Footer;
