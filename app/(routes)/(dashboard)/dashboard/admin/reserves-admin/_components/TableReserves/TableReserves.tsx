import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";
import { TableReservesProps } from "./TableReserves.types";
import { currency } from "@/utils";

export function TableReserves({ orders }: TableReservesProps) {
    const totalAmount = orders.reduce((acc, order) => {
        return acc + parseFloat(order.totalAmount);
    }, 0);
    return (
        <Table>
            <TableCaption>A list of your recent bookings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">Car</TableHead>
                    <TableHead className="font-semibold">Date Start</TableHead>
                    <TableHead className="font-semibold">Date End</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.carName}</TableCell>
                        <TableCell>
                            {new Date(order.orderDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                            {new Date(order.orderEndDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                            <div className="w-fit rounded-lg bg-green-600 p-2 text-white">
                                {order.status}
                            </div>
                        </TableCell>
                        <TableCell className="text-right">{currency.format(+order.totalAmount)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="text-right">{currency.format(totalAmount)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
