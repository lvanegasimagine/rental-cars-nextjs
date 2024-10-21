'use client'
import { useLovedCars } from '@/hooks/use-loved-cars'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function FavoritesCar() {
    const { lovedItems } = useLovedCars()
    return (
        <Link href='/lover-cars'>
            <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && 'fill-red-700 stroke-red-700'}`} />
        </Link>
    )
}
