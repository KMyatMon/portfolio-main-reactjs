import ibgroup from '/src/assets/images/odin-statch.png';
// import memento from '/src/assets/images/urdan.png';
import acc from '/src/assets/images/cv-odin.png';
import mernshop from '/src/assets/images/mern-shop.png';
import daddy from '/src/assets/images/portfolio.png';
import sunnyside from '/src/assets/images/sale.png';
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";
 
export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-6">
          <Projects
            link="https://github.com/KMyatMon/Odin_Etch-a-Sketch"
            img={ibgroup}
            alt="Odin Etch Sketch Website"
            name="Odin Etch Sketch Website"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • CSS"

          />
        </div>
        {/* Project #2 */}
        {/* <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://kmyatmon.github.io/furniture_store/"
            img={memento}
            alt="Furniture Store"
            name="Furniture Store"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript . React"
          />
        </div> */}
        <div className="col-span-1 h-fit md:col-span-6">
          <Projects
              link="https://eyewear-shop-main.vercel.app/"
              img={sunnyside}
              alt="Savant Eyewear project mockup"
              name="Savant Eyewear LANDING PAGE"
              type="Frontend Development"
              year="2024"
              tools="HTML • CSS • ReactJs • TailwindCSS • JavaScript"
            />
        </div>
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://bentofolio-thecodedose.vercel.app/"
            img={daddy}
            alt="Portfolio"
            name="Portfolio"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • NextJs • SVG"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-5 md:pt-20">
          <Projects
            link="https://odin-react-4i2yvecj8-kmyatmons-projects.vercel.app/"
            img={acc}
            alt="Create cv Page for ODIN project"
            name="Create cv Page for ODIN project"
            type="Frontend Development"
            year="2024"
            tools="HTML • TailwindCSS • JavaScript • React "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-5 md:pt-20">
          <Projects
            link="https://github.com/KMyatMon/MERN-shop"
            img={mernshop}
            alt="MERN-Shop"
            name="MERN-shop project"
            type="MERN Development"
            year="2024"
            tools="M E R N"
          />
        </div>
      </div>
    </section>
  );
}
