import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                href="#home"
                onClick={() => setSelectedPage("home")}
                className={`${
                    selectedPage === "home" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
            />
            <AnchorLink
                href="#skills"
                onClick={() => setSelectedPage("skills")}
                className={`${
                    selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
            />
            <AnchorLink
                href="#projects"
                onClick={() => setSelectedPage("projects")}
                className={`${
                    selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
            />
            <AnchorLink
                href="#testimonials"
                onClick={() => setSelectedPage("testimonials")}
                className={`${
                    selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
            />
            <AnchorLink
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className={`${
                    selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
            />
        </div>
    );
};

export default DotGroup;
