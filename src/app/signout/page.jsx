"use client"
import React from 'react'
import { signOut } from "next-auth/react"
function page() {
  return (
    <div>
        <button className='btn' onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default page