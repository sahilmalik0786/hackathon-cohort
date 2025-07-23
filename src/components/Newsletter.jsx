import React from 'react'
import TextEffect from './TextEffect'

const Newsletter = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-96 flex p-2 '>
            <div className=' items-center bg-red-300 justify-start  '>
                <h1 className='text-6xl font-suisse'>
                    Subscribe to our Newsletter
                </h1>
                {/* <TextEffect data="LTTSTORE.COM" /> */}

            </div>
        </div>
    </div>
  )
}

export default Newsletter