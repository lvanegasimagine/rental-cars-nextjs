import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-4xl">
        Hola mundo
        <Button>Hola perro dog</Button>
      </div>
      <div>
        Hola mundo
        <Button>Hola perro dog</Button>
      </div>
    </>
  );
}
