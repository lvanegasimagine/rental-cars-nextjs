import React from "react";
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
import { TableReservesProps } from "./TableReserves.types";
import { currency } from "@/utils";

export function TableReserves({ orders }: TableReservesProps) {
    const totalAmount = orders.reduce((acc, order) => {
        return acc + parseFloat(order.totalAmount);
    }, 0);

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">Car</TableHead>
                    <TableHead className="font-bold">Date Start</TableHead>
                    <TableHead className="font-bold">Date End</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="font-bold">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>{order.carName}</TableCell>
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
                        <TableCell className="font-semibold">
                            {currency.format(+order.totalAmount)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="font-bold">{currency.format(totalAmount)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
