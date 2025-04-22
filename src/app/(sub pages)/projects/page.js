import bg from "@/../public/background/projects_01.png";
import ProjectList from "@/components/projects/ProjectList";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <Image
        priority
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        sizes="100vw"
      />
      <ProjectList/>
    </>
  );
}
