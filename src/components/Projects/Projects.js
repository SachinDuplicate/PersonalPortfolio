import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import css from "./Projects.module.css";

const Projects = () => {
  return (
    React.createElement(motion.section, {
      variants: staggerChildren,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: false, amount: 0.25 },
      className: `paddings ${css.wrapper}`
    },
      React.createElement("a", { className: "anchor", id: "Projects" }),
      React.createElement("div", { className: `innerWidth flexCenter ${css.container}` },
        React.createElement(motion.div, { variants: textVariant(.4), className: `flexCenter ${css.heading}` },
          React.createElement("div", null,
            React.createElement("span", { className: "primaryText" }, "My Projects")
          )
        ),
        React.createElement("div", { className: `flexCenter ${css.showCase}` },
          React.createElement(motion.img, { variants: fadeIn("up", "tween", .5, .6), src: "./app.jpg", alt: "project" }),
          React.createElement(motion.img, { variants: fadeIn("up", "tween", .7, .6), src: "./phone.jpg", alt: "project" }),
          React.createElement(motion.img, { variants: fadeIn("up", "tween", .9, .6), src: "./call.jpg", alt: "project" })
        )
      )
    )
  );
};

export default Projects;