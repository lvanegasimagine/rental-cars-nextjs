import React from 'react'
import { z } from 'zod'

const formSchema = z.object({
    username: z.string().min(1, { message: 'Username is required' }),
})
export function FormAddCar() {
    return (
        <div>FormAddCar</div>
    )
}
