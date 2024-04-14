import React from 'react'
import './services.css'


const Services = () => {
  return (
    <section className="portfolio section">
    <h2 className="section__title" data-aos="fade-in" data-aos-duration="1000">My <span>Services</span></h2>

    <div className="portfolio__container container" data-aos="fade-up" data-aos-duration="1000">



<div className="features">
  <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
    <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
      <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt className="mx-auto h-10 w-10" />
      <h3 className="my-3 font-display font-medium">Powered by ChatGPT</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
        the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
        effortlessly tap into the world of AI-generated text.
      </p>
    </li>
   
  </ul>
</div>

 
    </div>
   </section>
  )
}

export default Services
