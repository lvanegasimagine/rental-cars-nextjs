import React from 'react'
import { ButtonAddCar } from './_components/ButtonAddCar'

const CarsManager = () => {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className='text-2xl font-bold'>Manage Your Cars</h2>
                <ButtonAddCar />
            </div>
        </div>
    )
}

export default CarsManager