import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'

export default function Contact() {
  return (
    <>
      <Navbar />
        <div className='min-h-screen mt-10'>
            <Contactform />
        </div>
      <Footer />
    </>
  )
}
