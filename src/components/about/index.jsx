import { techSkills } from "@/app/config";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full" >
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className=" col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About Me Title
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Description section
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
            alt=""
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
