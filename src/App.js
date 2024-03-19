import React from 'react';
import Experties from './components/Experties/Experties';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import css from './styles/App.module.css';

const App = () => {
  // don't forget to add font link in index.html
  const containerClassName = `bg-primary ${css.container}`;

  return (
    React.createElement('div', { className: containerClassName }, [
      React.createElement(Header, { key: 'header' }),
      React.createElement(Hero, { key: 'hero' }),
      React.createElement(Experties, { key: 'experties' }),
      React.createElement(Work, { key: 'work' }),
      React.createElement(Projects, { key: 'projects' }),
      React.createElement(Footer, { key: 'footer' }),
    ])
  );
}

export default App;