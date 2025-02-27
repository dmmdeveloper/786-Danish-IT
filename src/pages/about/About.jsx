import React from 'react'
import { Nav } from '../../components'

function About() {
  return (<>
  <section className='h-[300vh] w-full' >
    <span id='about-section'></span>

  <div className=" h-[50vh] w-full bg-gray-700">
  <Nav  changeNav={0.5} />
  </div>
  </section>
    </>
  )
}
export default About;