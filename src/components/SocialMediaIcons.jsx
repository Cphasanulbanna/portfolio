import React from "react";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7 ">
            <a
                href="http://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500 w-[32px]"
            >
                <img
                    src="../assets/linkedin.png"
                    alt="linkedin-link"
                />
            </a>
            <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500 w-[32px]"
            >
                <img
                    src="../assets/twitter.png"
                    alt="twitter-link"
                />
            </a>
            <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500 w-[32px]"
            >
                <img
                    src="../assets/facebook.png"
                    alt="facebook-link"
                />
            </a>
            <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500 w-[32px]"
            >
                <img
                    src="../assets/instagram.png"
                    alt="instagram-link"
                />
            </a>
            <a
                href="http://www.github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500 w-[32px]"
            >
                <img
                    src="../assets/github.png"
                    alt="github-link"
                />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
