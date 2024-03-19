import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    React.createElement("section", null,
      React.createElement("a", { className: "anchor", id: "Footer" }),
      React.createElement(motion.section, {
        variants: staggerChildren,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: false, amount: 0.25 },
        className: `paddings ${css.wrapper}`
      },
        React.createElement(motion.div, {
          variants: footerVariants,
          className: `innerWidth yPaddings flexCenter ${css.container}`
        },
          React.createElement("div", { className: css.left },
            React.createElement("span", { className: "primaryText" },
              "Let's bring best ", React.createElement("br", null),
              "out of each other."
            ),
            React.createElement("span", { className: "primaryText" },
              "Start by ", React.createElement("a", { href: "mailto:sachinduplicate10@gmail.com" }, "saying hi")
            )
          ),
          React.createElement("div", { className: css.right },
            React.createElement("div", { className: css.info },
              React.createElement("span", { className: "secondaryText" }, "Information"),
              React.createElement("p", null, "Chhyamasi, Bhaktapur, Nepal"),
              React.createElement("p", null, "+9779746486167")
            )
          )
        )
      )
    )
  );
};

export default Footer;