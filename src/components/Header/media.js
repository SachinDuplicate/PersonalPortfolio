import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Media = () => {
  return (
    React.createElement('div', { className: 'header__socials' },
      React.createElement('a', { href: 'https://linkedin.com', rel: 'noopener' },
        React.createElement(BsLinkedin)
      ),
      React.createElement('a', { href: 'https://github.com', rel: 'noopener' },
        React.createElement(FaGithubSquare)
      ),
      React.createElement('a', { href: 'https://gmail.com', rel: 'noopener' },
        React.createElement(SiGmail)
      )
    )
  );
};

export default Media;