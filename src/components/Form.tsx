import React from 'react'
import { Button } from './'

const Form = () => {
  return (
    <div className="max-w-lg mx-auto p-8   shadow-lg ">
      <input
        name="title"
        type="text"
        placeholder="Enter Title"
        className="w-full mb-4 p-3 "
      />
      <textarea
        name="description"
        placeholder="Enter Description"
        className="w-full h-24 mb-4 p-3 "
      ></textarea>
      <Button btn="Add Todo" />
    </div>
  )
}

export default Form
