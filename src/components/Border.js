import React from 'react'

function Border() {
  return (
    <>
        <div className='fixed w-full h-4 bg-white z-40'></div>
        <div className='fixed w-full h-4 bg-white bottom-0 z-40'></div>
        <div className='fixed w-4 h-screen bg-white z-40'></div>
        <div className='fixed w-4 h-screen bg-white right-0 z-40'></div>
    </>
  )
}

export default Border