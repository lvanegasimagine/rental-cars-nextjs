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
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export function ModalAddReservation({ car }: ModalAddReservationProps) {
    const [dateSelected, setDateSelected] = useState<{ from: Date | undefined, to: Date | undefined }>({ from: new Date(), to: addDays(new Date(), 5) })

    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        try {
            const response = await axios.post('/api/checkout', {
                carId: car.id,
                priceDay: car.priceDay,
                startDate: dateSelected.from,
                endDate: dateSelected.to,
                carName: car.name
            })

            window.location = response.data.url
            toast({ title: 'Car Reserved 👌' })
        } catch (error) {
            console.log("🚀 ~ onReserveCar ~ error:", error)
        }
    };

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
