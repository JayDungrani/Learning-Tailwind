import React from 'react'

const Flexbox = () => {
  return (
    <>
    <div className='flex gap-5'>
    <div className='flex flex-col bg-blue-300 max-w-max p-5 gap-y-3 min-h-screen justify-between'>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </div>
    <div className='flex bg-red-300 max-w-max p-5 gap-x-5 items-center'>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </div>
    <div className='flex flex-col bg-teal-300 max-w-max p-5 gap-5'>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </div>
    </div>
    </>
  )
}

export default Flexbox
