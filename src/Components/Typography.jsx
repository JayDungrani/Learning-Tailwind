import React from 'react'

const Typography = () => {
  return (
    <div>
      <h1 className='text-3xl underline'>Title 1</h1>
      <h1 className='text-2xl font-bold'>Title 1</h1>
      <h1 className='text-1xl'>Title 1</h1>

      <p className='text-sm  leading-8 hover:leading-normal truncate'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <p className='italic overline decoration-teal-200 tracking-widest'>Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p className='line-through'>Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p className='uppercase text-center underline decoration-wavy'>Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <ul className='list-decimal list-inside'>
        <li>list-item</li>
        <li>list-item</li>
        <li>list-item</li>
      </ul>
    </div>
  )
}

export default Typography
