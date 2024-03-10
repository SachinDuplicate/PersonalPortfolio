import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const media = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' rel="noopener"><BsLinkedin/></a>
      <a href='https://github.com' rel="noopener"><FaGithubSquare/></a>
      <a href='https://gmail.com' rel="noopener"><SiGmail/></a>
    </div>
  )
}

export default media
