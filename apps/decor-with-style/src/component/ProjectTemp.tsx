import { useParams } from "wouter";
import { GK } from "./images/gk";
import { Defence } from "./images/defence";

const ProjectTemp = () => {
  const param = useParams();

  console.log(param.name);

  return (
    <div className="bg-orange-50 text-black min-h-screen ">
      <h1 className="text-center p-5 font-bold font-serif text-[]">
        {param?.name}
      </h1>

      <div className="md:h-10 h-5 " />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">ABOUT</h3>
          <h3>/ 001</h3>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-7xl px-10">
          <div className="font-mono md:text-xl pt-4">
            At Decor with style, we don't just design interiors, we craft
            experiences. Our story began with a shared vision: to create spaces
            that inspire, empower, and reflect the unique personalities and
            goals of our clients. It's a journey that takes us beyond
            aesthetics, delving into the heart of what makes a space truly
            functional and impactful.
          </div>
          <div className="font-mono md:text-xl pb-4">
            Our team is a diverse blend of talents and perspectives. From
            meticulous architects to visionary designers, each member brings
            their expertise and passion to the table. Together, we navigate the
            challenges of complex projects, tight timelines, and diverse needs.
            Collaboration is at the heart of our process, ensuring every design
            is a reflection of both our expertise and your vision.
          </div>
        </div>
      </div>

      <div className="flex justify-center px-5 pt-5">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">PHOTOS</h3>
          <h3>/ 002</h3>
        </div>
      </div>

      {param?.name === "GK 2" && (
        <>
          <div className="flex justify-center ">
            <div className="w-full max-w-7xl px-10 py-10 grid md:grid-cols-3 grid-cols-1 gap-10">
              {GK.map((val) => val)}
            </div>
          </div>
          <div className="md:h-10 h-5 " />
        </>
      )}
      {param?.name === "Defence Colony" && (
        <>
          <div className="flex justify-center ">
            <div className="w-full max-w-7xl px-10 py-10 grid md:grid-cols-3 grid-cols-1 gap-10">
              {Defence.map((val) => val)}
            </div>
          </div>
          <div className="md:h-10 h-5 " />
        </>
      )}
    </div>
  );
};

export default ProjectTemp;
