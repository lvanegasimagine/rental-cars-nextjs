import React from 'react'
import { ListCarsProps } from './ListCar.types'
import { CardCar } from './_components/CardCar'

export function ListCars({ cars }: ListCarsProps) {
    return (
        <div className='grid grid-cols-2 gap-6 my-4 lg:grid-cols-4'>
            {cars.map((itemCar) => (
                <CardCar key={itemCar.id} itemCar={itemCar} />
            ))}
        </div>
    )
}
