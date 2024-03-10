import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";

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
          :-Developer at{' '}
            <span >
              <TypeWriter
                  options={{
                    strings: ['"Robotics Association of Nepal"'],
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

        <a className={css.email} href="mailto:sachinduplicate10@gmail.com">
          sachinduplicate10@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">999</div>
            <div className="secondaryText">
              <div>Junior Developer</div>
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
