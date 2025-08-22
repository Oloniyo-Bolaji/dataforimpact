"use client"
import { coreServices } from '@/lib/data'
import React from 'react'

const Service = () => {
  return (
    <div>
      {coreServices.map((service) => {
        return(
            <div>{service.service}</div>
        )
      })}
    </div>
  )
}

export default Service
