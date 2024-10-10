import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: { carId: string } },
) {
    try {
        const { userId } = auth();
        const { carId } = params;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const car = await db.car.delete({
            where: {
                id: carId,
                userId,
            },
        });

        return NextResponse.json(car);
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}
