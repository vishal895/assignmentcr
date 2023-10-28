import React from 'react'
import Navbar from '../component/Navbar'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div className='hero text-center'>
        <h3>Welcome to freecodecamp.org</h3>
        <p>"I have not failed. I' ve just found 10,000 ways that won't work."</p>
        
        <div className='d-flex justify-content-center flex-column gap-2 align-items-center'>
        <button  class="btn btn-outline-dark w-50">(New) Responsive web Design Certification(300 hr)</button>
        <button  class="btn btn-outline-dark w-50">Legacy Responsive web Design Certification(300 hr)</button>
        <button  class="btn btn-outline-dark w-50">Javascript Algorithms and data structure Certification(300 hr)</button>
        <button  class="btn btn-outline-dark w-50">Front end Development libraries certification</button>
        <button  class="btn btn-outline-dark w-50">Data Visualization certification</button>
        <button  class="btn btn-outline-dark w-50">Backend Development and API certification</button>
        <button  class="btn btn-outline-dark w-50">Quality Assurance Certification</button>
        
        </div>
      </div>
    </div>
  )
}

export default Hero