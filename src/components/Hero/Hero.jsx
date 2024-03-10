import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si' 
import CV from '../Hero/cv/Sachincv.pdf'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
          Sachin Budha Magar
          <br/>
          <h1 className="typewriter"> 
          :-Developer {' '}
            <span >
              <TypeWriter
                  options={{
                    strings: ['"OpenToWork"'],
                    autoStart: true,
                    pause: true,
                    loop: 1,
                  }}
                />
            </span>
            </h1>
            <media/>
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I'm a learner
            <br />
            with excellent problem solving capacity.{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./pic.png" alt="" />
        </motion.div>

        <div className={css.header__socials}>
        <a href='https://linkedin.com' rel="noopener"><BsLinkedin color = 'rgb(44, 44, 89)'/></a>
        <a href='https://github.com' rel="noopener"><FaGithubSquare color = 'rgb(44, 44, 89)'/></a>
        <a href='https://gmail.com' rel="noopener"><SiGmail color = 'rgb(44, 44, 89)'/></a>
        </div>


        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">999</div>
            <div className="secondaryText">
              <div>Junior Developer</div>
              <a href={CV} download className='secondaryText'>Download CV </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./python.png" alt="" />
            <span>Django</span>
            <span>Back-end Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
