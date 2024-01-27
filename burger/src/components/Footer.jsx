import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" bg-tertiary text-secondary rounded-t-3xl pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">BunVoyage</h1>
          <div className=" flex gap-5">
            <FaInstagram size={35} />
            <FaFacebook size={35} />
            <FaTwitter size={35} />
          </div>
          <p className=" mt-2">
          Grill, Savor, Repeat: Where Every Bite is a Delight
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Important Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            >
              Menu
            </Link>
            <Link
              to="deals"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            >
              Hot Deals
            </Link>
            <Link
              to="special"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            >
              Special Menu
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Contact Us
          </h1>
          <nav className=" flex flex-col gap-2 font-medium">
            <Link to="/" spy={true} smooth={true} duration={500}>
            BunVoyage@email.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
      </div>
    </footer>
  );
};

export default Footer;