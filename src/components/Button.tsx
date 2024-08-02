import React from 'react'

const Button = (props : any) => {
  return (
        <button className=" p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300">{props.btn}</button>
  )
}

export default Button
