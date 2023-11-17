import React from 'react'
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline () {
  return (
    
    <section id='timeline' className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='font-semibold text-4xl mb-1'>Experiences</h1>
        <div className="flex flex-col md:flex-row justify-center my-20">
        <div className='w-full md:w-7/12'>
            {timeline.map((item) => (
            <TimelineItem
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
            ))}
        </div>
    </div>

    </section>
    
  );
}

export default Timeline;