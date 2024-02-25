import React from 'react';
import Footer from './footer/Footer';
import Presentation from "./presentation/Presentation";
import Graduates from "./Graduates";
import CounterMain from "./CounterMain";
import Courses from "./Courses";
import ContactForm from "./ContactForm";

const HomeContend = () => {
  return (
  <>
    <Presentation/>
    <Graduates/>
    <CounterMain/>
    <Courses/>
    <ContactForm/>
  </>
  )
}

export default HomeContend;