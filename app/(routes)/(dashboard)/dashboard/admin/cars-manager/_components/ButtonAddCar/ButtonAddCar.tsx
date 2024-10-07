'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogDescription, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PlusCircle } from 'lucide-react'
import { FormAddCar } from '../FormAddCar'

export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant={'outline'} onClick={() => setOpenDialog(true)}>
                    Add New Car
                    <PlusCircle className='ml-2' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormAddCar />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
