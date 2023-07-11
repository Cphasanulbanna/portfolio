import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const loweCasePage = page?.toLowerCase();
    return (
        <AnchorLink
            href={`#${loweCasePage}`}
            onClick={() => setSelectedPage(loweCasePage)}
            className={`${
                selectedPage === loweCasePage ? "text-yellow" : ""
            } hover:text-yellow transition duration-500 `}
        >
            {[page]}
        </AnchorLink>
    );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    return (
        <nav className={`z-40 w-full fixed top-0 py-6 `}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">HB</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
