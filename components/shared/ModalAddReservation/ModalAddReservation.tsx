import React, { useState } from "react";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { addDays } from "date-fns";

export function ModalAddReservation({ car }: ModalAddReservationProps) {
    const [dateSelected, setDateSelected] = useState<{ from: Date | undefined, to: Date | undefined }>({ from: new Date(), to: addDays(new Date(), 5) })

    const onReserveCar = async (car: Car, dateSelected: any) => { };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="mt-3 w-full">
                    Reservar Vehiculo
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Selecciona las fechas en las quieres aplicar el coche
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <CalendarSelector setDateSelected={setDateSelected} carPriceDay={car.priceDay} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>Reservar Vehiculo</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
