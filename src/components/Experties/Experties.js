import React from 'react';
import { projectExperience, WhatDoIHelp } from '../../utils/data.js';
import css from './Experties.module.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js';

const Experties = () => {
  return React.createElement("section", { className: css.wrapper },
    React.createElement("a", { className: "anchor", id: "experties" }),
    React.createElement(motion.div, {
      variants: staggerContainer,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: false, amount: 0.25 },
      className: `paddings yPaddings innerWidth flexCenter ${css.container}`
    },
      /* left side */
      React.createElement("div", { className: css.leftSide },
        projectExperience.map((exp, i) => {
          return React.createElement(motion.div, {
            variants: fadeIn("right", "tween", (i + 1) * 0.2, 1),
            className: css.exp,
            key: i
          },
            React.createElement("div", { style: { background: exp.bg }, className: "flexCenter" },
              React.createElement(exp.icon, { size: 25, color: "white" })
            ),
            React.createElement("div", null,
              React.createElement("span", null, exp.name),
              React.createElement("span", { className: 'secondaryText' }, `${exp.projects} Projects`)
            )
          );
        })
      ),

      /* right */
      React.createElement(motion.div, {
        variants: textVariant(0.5),
        className: css.rightSide
      },
        React.createElement("span", { className: 'primaryText' }, "How do I help?"),
        WhatDoIHelp.map((paragraph, i) => React.createElement("span", { className: 'secondaryText', key: i }, paragraph)),
        React.createElement("div", { className: `flexCenter ${css.stats}` },
          React.createElement("div", { className: `flexCenter ${css.stat}` },
            React.createElement("span", { className: 'primaryText' }, "4+"),
            React.createElement("span", { className: 'secondaryText' }, "Project Completed")
          ),
          React.createElement("div", { className: `flexCenter ${css.stat}` },
            React.createElement("span", { className: 'primaryText' }, "3+"),
            React.createElement("span", { className: 'secondaryText' }, "Academic")
          )
        )
      )
    )
  );
};

export default Experties;