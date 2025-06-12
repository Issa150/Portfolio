import { NavLink } from "react-router";

/*


*/
export default function HeroSection() {
  return (
    <>
      <section className="mb-20">
        {/* <h2 className="my-sm:text-[clamp(2rem,80vw,3.8rem)] sm:text-5xl text-4xl font-bold mb-4"> */}
        <h2 className="text-4xl my-xs:text-[40px] md:text-6xl lg:text-7xl  font-bold mb-4 text-gray-400">
          Développeur  Web <br /> <span className="text-yellow-400">JavaScript</span>
        </h2>

        <p className="sm:mt-13 mt-5 sm:text-2xl text-xl">
          {/* Je conçois des produits numériques complets, mêlant des expériences utilisateur intuitives à des solutions back-end robustes et évolutives. Mon objectif : donner vie aux idées avec précision technique, design et performance.           */}
          {/* Créateur de solutions web intuitives et performantes */}
          Créateur de solutions web intuitives et performantes, alliant design, technique et innovation.
        </p>

        <div className="grid sm:justify-between grid-cols-1 sm:grid-cols-3 --my-lg:gap-25 ---my-sm:gap-15 gap-1 mt-5">

          <div className="flex justify-between sm:block sm:p-0 p-3 sm:bg-transparent bg-[#4747448a] sm:rounded-none rounded-md">
            <h3 className="sm:order-1 order-2 text-xl sm:text-3xl font-bold sm:mt-6 mb-3 text-gray-300 sm:text-white">2024</h3>
            <p className="sm:order-2 order-1 text-lg sm:text-base font-bold">Développeur Web & <br /> Web Mobile <br /> <span className="text-sm sm:text-base text-gray-300 sm:text-white font-normal">Bac+2</span></p>
          </div>

          <div className="flex justify-between sm:block sm:p-0 p-3 sm:bg-transparent bg-[#4747448a] sm:rounded-none rounded-md">
            <h3 className="sm:order-1 order-2 text-xl sm:text-3xl font-bold sm:mt-6 mb-3 text-gray-300 sm:text-white">2025</h3>
            <p className="sm:order-2 order-1 text-lg sm:text-base font-bold">Concepteur Développeur <br /> d’Application <br /> <span className="text-sm sm:text-base text-gray-300 sm:text-white font-normal">Bac +3/4</span></p>
          </div>

          <div className="flex justify-between sm:block sm:p-0 p-3 sm:bg-transparent bg-[#4747448a] sm:rounded-none rounded-md">
            <h3 className="sm:order-1 order-2 text-xl sm:text-3xl font-bold sm:mt-6 mb-3 text-gray-300 sm:text-white">Bientôt...</h3>
            <p className="sm:order-2 order-1 text-lg sm:text-base font-bold">Développeur Full-Stack <br /> Angulare + Java <br /> <span className="text-sm sm:text-base text-gray-300 sm:text-white font-normal">Bac +5</span></p>
          </div>
        </div>

        <div className="flex gap-18 mt-10">
          <NavLink to="/contact" className="my-sm:px-8 my-sm:py-4 px-5 py-2 my-sm:text-2xl bg-purple-800 text-white rounded-lg hover:bg-purple-600 transition duration-300 hover:-translate-y-2 cursor-pointer">
            Lets talk ...
          </NavLink>
          <NavLink to="/projects" end className="flex group gap-1.5 items-center hover:-translate-y-0.5 transition duration-200">
            Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:translate-x-5 transition duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>


          </NavLink>
        </div>
      </section>
    </>
  )
}
