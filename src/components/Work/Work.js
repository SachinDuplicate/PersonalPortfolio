import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.css";
import { motion } from 'framer-motion';
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const Work = () => {
  return React.createElement(
    motion.section,
    {
      variants: staggerChildren,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: false, amount: 0.25 },
      className: `paddings ${css.wrapper}`
    },
    React.createElement("a", { className: "anchor", id: "work" }),
    React.createElement(
      "div",
      { className: `innerWidth flexCenter ${css.container}` },
      React.createElement("span", { className: "primaryText yPaddings" }, "My Work Experience"),
      React.createElement(
        "div",
        { className: `flexCenter ${css.experiences}` },
        workExp.map((exp, i) =>
          React.createElement(
            motion.div,
            { variants: textVariant2, key: i, className: `flexCenter ${css.exp}` },
            React.createElement(
              "div",
              { className: css.post },
              React.createElement("h1", null, exp.place),
              React.createElement("p", null, exp.tenure)
            ),
            React.createElement(
              "div",
              { className: css.role },
              React.createElement("h1", null, exp.role),
              React.createElement("p", null, exp.detail)
            )
          )
        ),
        React.createElement(
          motion.div,
          { variants: zoomIn(1, 1), className: css.progressbar },
          React.createElement(motion.div, { variants: fadeIn("down", "tween", 2, 1.5), className: css.line }),
          React.createElement("div", null, React.createElement("div", { className: css.circle, style: { background: "#286F6C" } })),
          React.createElement("div", null, React.createElement("div", { className: css.circle, style: { background: "#F2704E" } })),
          React.createElement("div", null, React.createElement("div", { className: css.circle, style: { background: "#EEC048" } }))
        )
      )
    )
  );
};

export default Work;