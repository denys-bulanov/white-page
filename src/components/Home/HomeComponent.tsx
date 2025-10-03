'use client'
import React from 'react'
import Welcome from './Welcome/Welcome'
import ReactFullpage from '@fullpage/react-fullpage'
import OurMission from './OurMission/OurMission'
import Solution from './Solution/Solution'
import HowItWorks from './HowItWorks/HowItWorks'
import Team from './Team/Team'
import Faq from './Faq/Faq'
import WhyUs from './WhyUs/WhyUs'
import Freebies from './Freebies/Freebies'
import Faq2 from './Faq2/Faq2'

const sections = [Welcome, OurMission, Solution, HowItWorks, Team, Faq, WhyUs, Freebies, Faq2]
const HomeComponent = ({}) => {
  return (
    <ReactFullpage
      scrollingSpeed={800}
      onLeave={(origin, destination) => {}}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {sections.map((SectionComponent, i) => {
            const isWelcome = SectionComponent === Welcome
            const isLast = SectionComponent === Faq2
            return (
              <div key={i} className={`section relative w-screen h-screen ${isWelcome && 'bg-g_welcome'} ${isLast && 'bg-g_bg2'}`}>
                <SectionComponent />
              </div>
            )
          })}
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default HomeComponent
