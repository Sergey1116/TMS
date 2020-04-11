import React from 'react'
import ReactDOM from 'react-dom';

import 'normalize.css'
import './styles/index.scss';


import AboutAXIT from './components/AboutAXIT/AboutAXIT.js'

const optionBlock = [
  {
    icoClass: "far fa-lightbulb",
    title: "Thoughtful Design",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
  }, 
  {
    icoClass: "far fa-keyboard",
    title: "Well Crafted",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
  }, 
  {
    icoClass: "fas fa-bolt",
    title: "Easy to Customize",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
  }
];


ReactDOM.render(
  <React.StrictMode>
      <AboutAXIT optionBlock={optionBlock} />
  </React.StrictMode>
  ,
  document.getElementById('root')
);