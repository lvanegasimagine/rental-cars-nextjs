import { Navbar } from "@/components/shared/Navbar";
import { db } from "@/lib/db";
import { HeaderCars } from "./_components/HeaderCars";
import { FiltersAndListCars } from "./_components/FiltersAndListCars/FiltersAndListCars";

async function CarPage() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("🚀 ~ CarPage ~ cars:", cars);
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl p-6">
        <HeaderCars />
        <div className="">
          <FiltersAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
}

export default CarPage;
