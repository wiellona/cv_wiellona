import React from 'react'

function Education () {
  return (
    <div>
        <section id='education' className='pt-20 pb-6 md:items-center lg:ml-20'>
            <div className='container lg:mx-40 lg:px-10 lg:text-xl'>
                <div className='flex flex-wrap'>
                    <div className="w-full px-4 mb-10 lg:w-1/2 max-w-md md:w-7/12">
                        <h4 className='font-semibold text-4xl mb-3'>Education</h4>
                        <h2>SMAN Negeri 2 Kota Tangerang Selatan</h2>
                        <h3 className='text-slate-400'>2018 - 2021</h3>
                        <p>Address: Jl. Raya Puspitek, Muncul, Kec. Setu, Kota Tangerang Selatan, Banten 15314</p>
                        <a href='http://www.sman2tangsel.sch.id/' target='_blank' className='text-blue-500'>sman2tangsel.sch.id</a>
                    </div>

                    <div className='w-full px-4 mb-10 lg:w-1/2 max-w-md'>
                    <h2 className='lg:pt-12'>University of Indonesia</h2>
                    <h3 className='text-slate-400'>2023 - Present</h3>
                        <p>Address: Jl. Lingkar, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424</p>
                        <a href='https://ui.ac.id/' target='_blank' className='text-blue-500'>ui.ac.id</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Education;