import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <section>
      <a className="anchor" id="Footer"></a>
      <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's bring best <br />
            out of each other.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:sachinduplicate10@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Chhyamasi, Bhaktapur, Nepal</p>
            <p>+9779746486167</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
    </section>
    
  );
};

export default Footer;
