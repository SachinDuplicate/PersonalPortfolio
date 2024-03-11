import React, { useEffect, useRef, useState } from "react"
import css from "./Header.module.scss"
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi"
import { motion } from "framer-motion"
import { getMenuStyles, headerVariants } from "../../utils/motion"
import useOutsideAlerter from "../../hooks/useOutsideAlerter"
import useHeaderShadow from "../../hooks/useHeaderShadow"


const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
 

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
      <img src="./logo.png" width="130" height="65" alt="" />
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#Hero">Home</a></li>
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a className={`flexCenter ${css.phone}`} href="#Footer"><BiPhoneCall size={"40px"}/></a></li>
        </ul>
        
          <div>
            
          </div>

        {/* for medium and small screens */}
      </div>
    </motion.div>
  );
};

export default Header;
