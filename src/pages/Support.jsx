import React from 'react'
import SupportCards from '../components/SupportCards'

function Support() {
  return (
    <div>
      <div>
        <img src="https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg" alt="" />
      </div>
      <div className='bg-[#2c2c2c] text-[#8e8e8e] lg:flex justify-center'>
        <SupportCards/>
      </div>
    </div>
  )
}

export default Support