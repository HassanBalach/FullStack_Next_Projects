'use client'

import React, { useState } from 'react'
import { Button } from './'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    })
    const [error, setError] = useState(false)
    const handleFormData = (e: any) => {
        const name = e.target.name;
        const value = e.target.value.trim();

        setFormData((form) => ({ ...form, [name]: value }))
        console.log(formData);

    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!formData.title || !formData.description) {
            toast.warn("Both Filed are required")
        } else {
            setFormData({
                title: "",
                description: "",
            });
            toast.dark("Successfully Added ")
        }




    }
    return (
        <>
            <ToastContainer />
            <form className="max-w-lg mx-auto p-8 " onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Enter Title"
                    className="w-full mb-4 p-3 text-black "
                    onChange={handleFormData}
                    value={formData.title}
                />
                <textarea
                    name="description"
                    placeholder="Enter Description"
                    className="w-full h-24 mb-4 p-3 text-black"
                    onChange={handleFormData}
                    value={formData.description}
                ></textarea>
                <Button btn="Add Todo" />
            </form>
        </>
    )
}

export default Form
