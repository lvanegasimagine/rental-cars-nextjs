import Image from "next/image";
import Link from "next/link";

export function LogoDashboard() {
    return (
        <Link href={'/'} className="flex items-center gap-2 border-b cursor-pointer min-h-20">
            <Image src={'/logo.svg'} alt='Logo' width={50} height={50} priority className="ml-7" />
            <h1 className="text-xl font-bold">VanegasCars</h1>
        </Link>
    )
}