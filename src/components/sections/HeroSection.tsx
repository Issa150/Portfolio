import { NavLink } from "react-router";

/*


*/
export default function HeroSection() {
  return (
    <>
      <section className="mb-20">
        <h2 className="my-sm:text-[clamp(2rem,80vw,3.8rem)] text-5xl font-bold mb-4">
          Développeur  Web <br /> <span className="text-yellow-400">JavaScript</span>
        </h2>

        <p className="mt-13 text-2xl">
          {/* Je conçois des produits numériques complets, mêlant des expériences utilisateur intuitives à des solutions back-end robustes et évolutives. Mon objectif : donner vie aux idées avec précision technique, design et performance.           */}
          {/* Créateur de solutions web intuitives et performantes */}
          Créateur de solutions web intuitives et performantes, alliant design, technique et innovation.
        </p>

        <div className="flex my-lg:gap-25 my-sm:gap-15 gap-10 mt-5">
          <div>
            <h3 className="text-3xl font-bold mt-6 mb-3">+4</h3>
            <p>CODING</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mt-6 mb-3">2024</h3>
            <p>Développeur Web & <br /> Web Mobile <br /> Bac+2</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6 mb-3">2025</h3>
            <p>Concepteur Développeur <br /> d’Application <br />Bac +3/4</p>
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
