'use client'
import React, { useState } from 'react'
import { ButtonEditCarProps } from './ButtonEditCar.types'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Pencil } from 'lucide-react'
import { FormEditCar } from '../FormEditCar'

export const ButtonEditCar = ({ carData }: ButtonEditCarProps) => {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant={'outline'} onClick={() => setOpenDialog(true)}>Edit <Pencil className='w-4 h-4 ml-2' /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormEditCar carData={carData} setOpenDialog={setOpenDialog} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
