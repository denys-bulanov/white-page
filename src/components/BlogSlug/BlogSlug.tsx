'use client'
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Compliments from './Compliments/Compliments'
import Principles from './Principles/Principles'
import TryThis from './TryThis/TryThis'
import Appearance from './Appearance/Appearance'
import InRelationship from './InRelationship/InRelationship'
import QuickChecklist from './QuickChecklist/QuickChecklist'
import AlsoLike from './AlsoLike/AlsoLike'

const sections = [Compliments, Principles, TryThis, Appearance, InRelationship, QuickChecklist, AlsoLike]
const BlogSlugComponent = ({}) => {
  return (
    <ReactFullpage
      scrollingSpeed={800}
      onLeave={(origin, destination) => {}}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {sections.map((SectionComponent, i) => {
            return (
              <div key={i} className='section relative w-screen h-screen'>
                <SectionComponent />
              </div>
            )
          })}
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default BlogSlugComponent
