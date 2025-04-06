import bg from "@/../public/background/contact_05.png";
import Contact from "@/components/contact/Contact";
import Image from "next/image";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <Contact />
    </>
  );
}
