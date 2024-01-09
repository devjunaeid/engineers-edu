import CreateSeminar from '@/components/seminar/CreateSeminar'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className="md:text-6xl font-bold uppercase text-center">Create New Seminar</h1>
        <CreateSeminar />
    </div>
  )
}

export default page