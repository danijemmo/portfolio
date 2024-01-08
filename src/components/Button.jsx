import React from 'react'

export default function Button(props) {
  return (
    <div className=''>
      <a class="text-white bg-[#ec1839] text-sm font-poppins font-medium px-8 py-3 rounded-full inline-block whitespace-nowrap transition-transform transform hover:scale-105" href="#">{props.title}</a>
    </div>
  )
}
