import React from 'react'

const Grid = () => {
  return (
    <>
    <div className='grid grid-cols-2 gap-5 w-full h-screen'>
      <div className='bg-slate-200'>item1</div>
      <div className='bg-slate-200'>item2</div>
      <div className='bg-slate-200'>item3</div>
      <div className='bg-slate-200'>item4</div>
    </div>
    <div className='grid grid-cols-5 gap-5 w-full h-screen mt-20 max-[600px]:grid-cols-1'>
      <div className='bg-slate-200'>item1</div>
      <div className='bg-slate-200'>item2</div>
      <div className='bg-slate-200'>item3</div>
      <div className='bg-slate-200'>item4</div>
    </div>
    </>
  )
}

export default Grid
