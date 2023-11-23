import React from 'react'
import portofolio from '../data/portofolio'
import PortofolioItem from './PortofolioItem'

function Portofolio ()  {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1'>
            {portofolio.map(project => (
                <PortofolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    linnk={project.link}
                />
            ))}
        </div>
    </div>
  )
}

export default Portofolio;