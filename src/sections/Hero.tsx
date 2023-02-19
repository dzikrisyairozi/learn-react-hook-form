import ButtonLink from '@/components/ButtonLink'
import Counter from '@/components/Counter'
import React from 'react'

const Hero = () => {
  return (
    <section id='banner' className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
    <div className='layout flex flex-col gap-y-3 justify-center min-h-screen text-center bg-[#00000075]'>
      <h1 className='text-6xl font-bold text-white'>
        Demo
      </h1>
      <p className='text-xl font-normal text-gray-200'>
        React Hook Form
      </p>
      <div className='flex justify-center gap-3'>
        <ButtonLink link='get-started' title='Get Started'/>
        <ButtonLink link='register' title='Register'/>
        <ButtonLink link='watch' title='Watch'/>
        <ButtonLink link='plain-form' title='Plain Form'/>
        {/* <Counter/> */}
      </div>
    </div>
  </section>
  )
}

export default Hero