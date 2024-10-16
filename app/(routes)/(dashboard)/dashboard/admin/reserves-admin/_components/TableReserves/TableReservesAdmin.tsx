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

export function TableReservesAdmin({ orders }: TableReservesProps) {
    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalAmount);
    }, 0);
    return (
        <Table>
            <TableCaption>A list of your recent bookings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">Order Date</TableHead>
                    <TableHead className="font-semibold">Customer ID</TableHead>
                    <TableHead className="font-semibold">Car</TableHead>
                    <TableHead className="font-semibold">Date Start</TableHead>
                    <TableHead className="font-semibold">Date End</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>
                            {new Date(order.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium max-w-[100px] truncate">
                            {order.userId}
                        </TableCell>
                        <TableCell>
                            <div className="font-medium truncate">
                                {order.carName}
                            </div>
                        </TableCell>
                        <TableCell className="">{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                        <TableCell className="">{new Date(order.orderEndDate).toLocaleDateString()}</TableCell>
                        <TableCell className="">{currency.format(+order.totalAmount)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={5}>Total</TableCell>
                    <TableCell className="">{currency.format(totalAmount)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
