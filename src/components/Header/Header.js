import React, { useEffect, useRef, useState } from "react";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import css from "./Header.module.css";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // To handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    React.createElement(motion.div, {
      variants: headerVariants,
      initial: "hidden",
      whileInView: "show",
      className: `bg-primary paddings ${css.wrapper}`,
      viewport: { once: true, amount: 0.25 },
      style: { boxShadow: headerShadow }
    }, 
    React.createElement("div", { className: `innerWidth ${css.container} flexCenter` },
      React.createElement("img", { src: "./logo.png", width: "130", height: "65", alt: "" }),
      React.createElement("ul", { 
        className: `flexCenter ${css.menu}`,
        ref: menuRef,
        style: getMenuStyles(menuOpened)
      },
        React.createElement("li", null, React.createElement("a", { href: "#Hero" }, "Home")),
        React.createElement("li", null, React.createElement("a", { href: "#experties" }, "Services")),
        React.createElement("li", null, React.createElement("a", { href: "#work" }, "Experience")),
        React.createElement("li", null, React.createElement("a", { href: "#Projects" }, "Projects")),
        React.createElement("li", null, React.createElement("a", { className: `flexCenter ${css.phone}`, href: "#Footer" }, React.createElement(BiPhoneCall, { size: "40px" })))
      ),

      React.createElement("div", null,
        null
      )
    )
    )
  );
};

export default Header;
