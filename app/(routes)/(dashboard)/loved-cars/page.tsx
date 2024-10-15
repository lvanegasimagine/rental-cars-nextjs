import React from 'react'
import { ListLovedCars } from './_components/ListLovedCars'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default function LovedCarsPage() {
    const { userId } = auth()

    if (!userId) return redirect('/')

    return (
        <div>
            <h1 className='text-2xl font-bold mb-6'>Coches que te gustan</h1>
            <ListLovedCars />
        </div>
    )
}
