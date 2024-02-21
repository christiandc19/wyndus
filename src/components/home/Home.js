import React from 'react'
import Cards from '../servicesCards/Cards';
import ContactForm from '../contact/ContactForm';

import Insurance from '../insurance/InsuranceSection';


const home = () => {
  return (
    <>
    <Cards />
    {/* <HomeSection1 /> */}
    <Insurance />
    <ContactForm />
    </>
  )
}

export default home
