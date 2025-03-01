import React from 'react'
import { FoTer, Nav } from '../../components'

function About() {
  return (<>
  <section className='h-auto w-full' >
    <span id='about-section'></span>

  <div className=" h-[50vh] w-full bg-gray-700">
  <Nav  changeNav={0.5} />
  </div>

<FoTer/>
  </section>
    </>
  )
}
export default About;