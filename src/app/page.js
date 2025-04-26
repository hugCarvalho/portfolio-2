import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation/Navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import bg from "../../public/background/home07.png";

const Ufo = dynamic(() => import("@/components/models/Ufo"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Ufo />
        </RenderModel>
      </div>
    </main>
  );
}
