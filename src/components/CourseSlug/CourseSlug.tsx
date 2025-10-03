'use client'
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import WhoItFor from './WhoItFor/WhoItFor'
import MaterialsPractice from './MaterialsPractice/MaterialsPractice'
import Price from './Price/Price'
import FaqCourseSlug from './FaqCourseSlug/FaqCourseSlug'

const sections = [WhoItFor, MaterialsPractice, Price, FaqCourseSlug]
const CourseSlugComponent = ({}) => {
  return (
    <ReactFullpage
      scrollingSpeed={800}
      onLeave={(origin, destination) => {}}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {sections.map((SectionComponent, i) => {
            const isFaqCourseSlug = SectionComponent === FaqCourseSlug

            return (
              <div key={i} className={`section relative w-screen h-screen ${isFaqCourseSlug && 'bg-g_bg3'}`}>
                <SectionComponent />
              </div>
            )
          })}
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default CourseSlugComponent
