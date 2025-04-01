import AboutDetails from "@/components/about/About";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      {/* <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      /> */}

      {/* <div className="relative w-full flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            Hugo Carvalho
          </h1>
          <p className="font-light text-foreground text-lg">
            Text...
          </p>
        </div>
      </div> */}

      <AboutDetails />
    </>
  );
}
