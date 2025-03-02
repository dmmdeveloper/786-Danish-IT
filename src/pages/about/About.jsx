import React , {useEffect} from 'react'
import { FoTer, Nav } from '../../components'
import { useLocation } from 'react-router-dom';
function About() {

  const {hash} =useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
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