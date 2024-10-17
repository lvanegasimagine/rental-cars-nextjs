import { Navbar } from "@/components/shared/Navbar";
import { FirstBlock } from "./_components/FirstBlock";
import { SliderBrands } from "./_components/SliderBrands";
import { Features } from "./_components/Features";
import { OurFleet } from "./_components/OurFleet";
import { DriveToday } from "./_components/DriveToday";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  )
}
