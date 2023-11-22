import React from 'react'

function Education () {
  return (
    <section id='education' className='pt-36 pb-32'>
        <h1 className='font-semibold text-4xl mb-10 pb-5 text-center'>Education</h1>
        <div className='flex flex-row mb-5 mx-40 text-center'>

            <div className='layout flex flex-col-reverse items-center md:flex-row md:justify-start'>
                <div className='w-full px-4 mb-10 lg:w-1/2'>
                    <h2 className='font-bold text-xl mb-2 max-w-xl'>University of Indonesia</h2>
                    <p className='font-medium text-base text-slate-800 max-wl-xl'>Address: Jl. Lingkar, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424</p>
                    <a href='https://ui.ac.id/' target='_blank' className='text-blue-500'>ui.ac.id</a>
                </div>

                <div className='w-full px-4 mb-10 lg:w-1/2'>
                    <h2 className='font-bold text-xl mb-2 max-w-xl'>SMAN 2 Kota Tangerang Selatan</h2>
                    <p className='font-medium text-base text-slate-800 max-wl-xl'>Address: Jl. Raya Puspitek, Muncul, Kec. Setu, Kota Tangerang Selatan, Banten 15314</p>
                    <a href='http://www.sman2tangsel.sch.id/' target='_blank' className='text-blue-500'>sman2tangsel.sch.id</a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Education;