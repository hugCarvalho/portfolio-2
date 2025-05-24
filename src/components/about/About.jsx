"use client";
import { techSkills } from "@/app/config";
import { Contact } from "lucide-react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full" >
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className=" col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl font-bold md:text-3xl text-left text-accent w-full capitalize">
            <div className="flex gap-2 justify-center items-center">
              <span><Contact className="sm:size-10 size-6" strokeWidth={1.5} /></span>
              <span>Hugo Carvalho</span>
            </div>
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A highly motivated and adaptable self-taught programmer with five years of practical experience building responsive and efficient applications within the React ecosystem.
            <span className="inline-block">
              I possess a proven ability to quickly learn and master new technologies, driven by a proactive approach to continuous learning and a passion for staying at the forefront of frontend development.
            </span>
            <span className="inline-block">
              I am also diving deep into backend development, having successfully engineered and deployed two full-stack applications.
            </span>
            <span className="inline-block">
              I am a strong collaborator, able to work effectively in team environments, communicate clearly, and contribute to shared goals. My detail-oriented approach ensures the delivery of high-quality solutions, with a strong emphasis on creating exceptional user experiences.
            </span>
            <span className="inline-block">
              This dedication, coupled with a genuine enthusiasm for programming, has been the driving force behind my successful career change.
            </span>
          </p>
        </ItemLayout>

        <ItemLayout className="flex-row col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5{" "}
            <span className="font-semibold text-base 2xl:text-3xl ">years experience</span>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full">
           <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=${techSkills.join(",")}`}
            alt={`${techSkills.join(",")} icons`}
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
