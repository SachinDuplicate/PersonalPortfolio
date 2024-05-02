import React from "react";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.css";
import CV from '../Hero/cv/Sachincv.pdf';

const Hero = () => {

  return (
    React.createElement("section", { className: `paddings ${css.wrapper}` },
      React.createElement("a", { className: "anchor", id: "Hero" }),
      React.createElement(motion.div, {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: false, amount: 0.25 },
          className: `innerWidth ${css.container}`
        },
        React.createElement("div", { className: css.upperElements },
          React.createElement(motion.span, {
              className: "primaryText",
              variants: fadeIn("right", "tween", 0.2, 1)
            },
            "Sachin Budha Magar",
            React.createElement("br", null),
            React.createElement("h1", { className: "typewriter" },
              React.createElement("span", null,
                ":-Developer",
                React.createElement(TypeWriter, {
                  options: {
                    strings: ['"OpenToWork"'],
                    autoStart: true,
                    loop: 2,
                    pause: true,
                    typeSpeed: 70,
                    deleteSpeed: 80,
                    
                  }
                })
              )
            ),
            React.createElement("media", null)
          ),
          React.createElement(motion.span, {
              className: "line",
              variants: fadeIn("left", "tween", 0.4, 0.8)
            },
            "I'm a learner",
            React.createElement("br", null),
            "with excellent problem solving capacity. "
          )
        ),

        React.createElement(motion.div, {
            variants: fadeIn("up", "tween", 0.3, 1),
            className: css.person
          },
          React.createElement(motion.img, {
            variants: slideIn("up", "tween", 0.5, 2.3),
            src: "./pic.png",
            alt: "Picture of mine"
          })
        ),

        React.createElement("div", { className: css.header__socials },
          React.createElement("a", { href: 'https://linkedin.com', rel: "noopener" },
            React.createElement(BsLinkedin, { color: 'rgb(44, 44, 89)' })
          ),
          React.createElement("a", { href: 'https://github.com', rel: "noopener" },
            React.createElement(FaGithubSquare, { color: 'rgb(44, 44, 89)' })
          ),
          React.createElement("a", { href: 'https://gmail.com', rel: "noopener" },
            React.createElement(SiGmail, { color: 'rgb(44, 44, 89)' })
          )
        ),

        React.createElement("div", { className: css.lowerElements },
          React.createElement(motion.div, {
              variants: fadeIn("right", "tween", 0.3, 1),
              className: css.experience
            },
            React.createElement("div", { className: "primaryText" }, "999"),
            React.createElement("div", { className: "secondaryText" },
              React.createElement("div", null, "Junior Developer"),
              React.createElement("a", { href: CV, download: true, alt:"", className: 'secondaryText' }, "Download CV ")
            )
          ),

          React.createElement(motion.div, {
              variants: fadeIn("left", "tween", 0.5, 1),
              className: css.certificate
            },
            React.createElement("img", { src: "./python.png", alt: "Logo of python" }),
            React.createElement("span", null, "Django"),
            React.createElement("span", null, "Back-end Developer")
          )
        )
      )
    )
  );
};

export default Hero;