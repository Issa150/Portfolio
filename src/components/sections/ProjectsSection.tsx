// import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
// import { NavLink } from "react-router";


export default function ProjectsSection() {
  return (
    <>
      <section className="mb-20">
        <h2 className="my-sm:text-7xl text-5xl font-bold mb-4 text-gray-400">
          Les <span className="text-white">projets</span> récents
        </h2>

        <div className="mt-6 grid gap-5 sm:gap-0">

          <div className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4">
            {/* <NavLink to={"/projects/joinly"} className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4"> */}
            <img className="max-w-24 --aspect-[2/3] h-full object-cover object-top" loading="lazy" src="/assets/imgs/projects/Joinly/home-page.png" alt="Issa Jafari - < aLT /> foramtion projet fin formation" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Joinly</h3>
                <p className="text-gray-400">2025</p>
              </div>
              <p className="text-gray-400">Plateforme de partage d'événements.</p>

              <div className="flex flex-wrap gap-1 mt-2">
                {/* <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">React.Js + TypeScript</span> */}
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">React.Js</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">TypeScript</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Nest.Js</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">MySQL</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Docker</p>
                {/* <ArrowUpRightIcon className="h-6 w-6 group-hover:text-white text-gray-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ml-auto" /> */}
              </div>
              <div className="flex gap-2 mt-2">
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Tailwind CSS</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">useQuery()</p>
              </div>
            </div>
            {/* </NavLink> */}
          </div>


          <div className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4">
            {/* <NavLink to={"/projects/alumni"} className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4"> */}
            <img className="max-w-24 aspect-[2/3] --h-full object-cover object-top" loading="lazy" src="/assets/imgs/projects/Alumni/home-page.png" alt="Issa Jafari - project 10 mention web, 10mentionweb" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Alumni</h3>
                <p className="text-gray-400">2024</p>
              </div>
              <p className="text-gray-400">Plateforme Alumni pour le suivi des anciens apprenants.</p>

              <div className="flex flex-wrap gap-1 mt-2">
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Twig</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Symfony 8</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">MySQL</p>
                {/* <ArrowUpRightIcon className="h-6 w-6 group-hover:text-white text-gray-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ml-auto" /> */}
              </div>
              <div className="flex gap-2 mt-2">
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Bootstrap 5</p>
              </div>
            </div>
            {/* </NavLink> */}
          </div>


          <div className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4">
            {/* <NavLink to={"/projects/ideapedia"} className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4"> */}
            <img className="max-w-24 --aspect-[2/3] h-full object-cover object-top" loading="lazy" src="/assets/imgs/projects/IdeaPedia/home-page.png" alt="Issa Jafari - Colombbus - rojet fin fromation" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Idea Pedia</h3>
                <p className="text-gray-400">2024</p>
              </div>
              <p className="text-gray-400">Plateforme de partage d'articles informatifs.</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {/* <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">HTML, CSS, JavaScript</span> */}
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">HTML 5</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">CSS 3</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">JavaScript</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">PHP</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">MySQL</p>

                {/* <ArrowUpRightIcon className="h-6 w-6 group-hover:text-white text-gray-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ml-auto" /> */}

              </div>
              <div className="flex gap-2 mt-2">
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">SCSS + Bootstrap</p>
              </div>
            </div>
            {/* </NavLink> */}
          </div>


          <div className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4">
            {/* <NavLink to={"/projects/facebook-clone"} className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4"> */}
            <img className="max-w-24 --aspect-[2/3] h-full object-cover object-top" loading="lazy" src="/assets/imgs/projects/FaceBook-clone/home-page.png" alt="Issa Jafari - rojet front-end" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">FaceBook (clone)</h3>
                <p className="text-gray-400">2023</p>
              </div>
              <p className="text-gray-400">Mon premier grand projet réalisé avec les technologies fondamentales du web.</p>

              <div className="flex flex-wrap gap-1 mt-2">
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">HTML 5</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">CSS 3</p>
                <p className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">JavaScript</p>
                {/* <ArrowUpRightIcon className="h-6 w-6 group-hover:text-white text-gray-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ml-auto" /> */}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
