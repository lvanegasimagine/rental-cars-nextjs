import React from 'react'
import { CardCarProps } from './CardCar.types'

export function CardCar({ itemCar }: CardCarProps) {
    return (
        <div>{itemCar.name}</div>
    )
}
