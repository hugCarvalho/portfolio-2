import AboutDetails from "@/components/about";

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

      <AboutDetails />
    </>
  );
}
