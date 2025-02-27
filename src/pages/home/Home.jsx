import React from 'react'
import { Grid, Hero, HomeAbout, Nav } from '../../components'
import { HomeCards } from '../../data';

function Home() {
  return (<>
  <div  className="h-[300vh]">
    <span ></span>
    <Nav/>
    <Hero/>
    {/* Landing OverView Page  Section*/}
    <HomeAbout/>
    {/* top 12 Services Skills  */}
    <Grid cards={HomeCards} />
    

  </div>
</>  )
}

export default Home;



