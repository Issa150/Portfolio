

export default function ProjectsSection() {
  return (
    <>
      <section className="mb-20">
        <h2 className="my-sm:text-7xl text-5xl font-bold mb-4 text-gray-400">
          Les <span className="text-white">projets</span> récents
        </h2>

        <div className="mt-6 grid gap-5 sm:gap-0">


          <div className="flex gap-3 hover:bg-[#4747448a] transition duration-300 rounded-lg sm:p-4 p-0 mb-4">
            <img className="max-w-24 aspect-square object-cover" loading="lazy" src="/assets/imgs/projects/Joinly/home-page.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Joinly</h3>
                <p className="text-gray-400">2025</p>
              </div>
              <p className="text-gray-400">Plateforme de partage d'événements.</p>

              <div className="flex flex-wrap gap-1 mt-2">
                {/* <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">React.Js + TypeScript</span> */}
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">React.Js</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">TypeScript</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Nest.Js</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">MySQL</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Docker</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">useQuery()</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 hover:bg-[#4747448a] transition duration-300 rounded-lg sm:p-4 p-0 mb-4">
            <img className="max-w-24 aspect-square object-cover" loading="lazy" src="/assets/imgs/projects/Alumni/home-page.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Alumni</h3>
                <p className="text-gray-400">2024</p>
              </div>
              <p className="text-gray-400">Plateforme Alumni pour le suivi des anciens apprenants.</p>

              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Twig</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Symfony 8</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">MySQL</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">Bootstrap 5</span>
              </div>
            </div>
          </div>


          <div className="flex gap-3 hover:bg-[#4747448a] transition duration-300 rounded-lg sm:p-4 p-0 mb-4">
            <img className="max-w-24 aspect-square object-cover" loading="lazy" src="/assets/imgs/projects/IdeaPedia/home-page.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">Idea Pedia</h3>
                <p className="text-gray-400">2024</p>
              </div>
              <p className="text-gray-400">Plateforme de partage d'articles informatifs.</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {/* <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">HTML, CSS, JavaScript</span> */}
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">HTML 5</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">CSS 3</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">JavaScript</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">PHP</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">MySQL</span>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">SCSS + Bootstrap</span>
              </div>
            </div>
          </div>



          <div className="flex gap-3 hover:bg-[#4747448a] transition duration-300 rounded-lg sm:p-4 p-0 mb-4">
            <img className="max-w-24 aspect-square object-cover" loading="lazy" src="/assets/imgs/projects/FaceBook-clone/home-page.png" alt="" />
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold mb-2">FaceBook (clone)</h3>
                <p className="text-gray-400">2023</p>
              </div>
              <p className="text-gray-400">Mon premier grand projet réalisé avec les technologies fondamentales du web.</p>

              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">HTML 5</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">CSS 3</span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">JavaScript</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
