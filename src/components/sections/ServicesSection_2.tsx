

export default function ServicesSection() {
  return (
    <>
      <section className="mb-20">
        <h2 className="my-sm:text-7xl text-5xl font-bold mb-4 text-gray-400">
          Mes <span className="text-white">Compétences</span>
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-3 mb-20 ">

          <div className="w-12/12 relative z-0  object-cover mt-10 rounded-sm overflow-hidden bg-[url('/assets/imgs/general/dddepth-290.jpg')] bg-cover bg-center">

            {/* <img className="w-full h-full" src="/assets/imgs/general/dddepth-290.jpg" alt="" /> */}

            <div className="p-6 grid grid-cols-5 grid-rows-[auto_1fr_auto]">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>

              <ul className="col-span-5 row-start-2 text-base font-semibold mt-5 leading-7">
                <li>▶️ Site web dynamique </ li> 
                <li>▶️ design responsive </ li>
                <li>▶️ Component-Driven Development </ li>
                <li>▶️ Performance Optimization </ li>
                <li>▶️ Contrôle de version </ li>
                <li>▶️ Tests et débogage</ li>
              </ul>

              {/* <svg className="size-8 w-12 col-start-5 row-start-3 self-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg> */}
            </div>


            <ul className="list-none grid justify-items-center ---bg-gradient-to-b from-transparent to-black/50 px-6 pb-6">
              <li className="flex gap-4 text-white text-sm font-semibold mb-2">
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="SCSS" src="/assets/imgs/Tech-stack/scss.jpg" alt="issa Jafari - tech stack - SCSS" />
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="React.js" src="/assets/imgs/Tech-stack/react.webp" alt="issa Jafari - tech stack - React.js" />
              </li>
              <li className="flex gap-4 text-white text-sm font-semibold mb-2">
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="Tailwind CSS" src="/assets/imgs/Tech-stack/tailwind.webp" alt="issa Jafari - tech stack - Tailwind CSS" />
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="TypeScript" src="/assets/imgs/Tech-stack/ts.webp" alt="issa Jafari - tech stack - TypeScript" />
              </li>
            </ul>


          </div>

          <div className="w-12/12 relative z-0  object-cover mt-10 rounded-sm overflow-hidden bg-[url('/assets/imgs/general/dddepth-249.jpg')] bg-cover bg-center">

            {/* <img className= "w-full h-full" src="/assets/imgs/general/dddepth-249.jpg" alt="" /> */}

            <div className="p-6 grid grid-cols-5 grid-rows-[auto_1fr_auto]">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
              </svg>


              <ul className="col-span-5 row-start-2 text-base font-semibold mt-5 leading-7">
                <li>▶️ REST API </li>
                <li>▶️ Gestion de base de données</li>
                <li>▶️ Athentification et Atorisation </li>
                <li>▶️ Server side application</li>
                <li>▶️ Optimisation et performance</li>
                <li>▶️ Tests et débogage</li>
              </ul>

              {/* <svg className="size-8 w-12 col-start-5 row-start-3 self-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg> */}
            </div>
            <ul className="list-none grid justify-items-center ---bg-gradient-to-b from-transparent to-black/50 px-6 pb-6">
              <li className="flex gap-4 text-white text-sm font-semibold mb-2">
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="PHP" src="/assets/imgs/Tech-stack/php.png" alt="issa Jafari - tech stack - PHP" />
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50  " title="Node.js" src="/assets/imgs/Tech-stack/nodejs.png" alt="issa Jafari - tech stack - Node.js" />
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="Java" src="/assets/imgs/Tech-stack/java.webp" alt="issa Jafari - tech stack - Java" />
              </li>
              <li className="flex gap-4 text-white text-sm font-semibold mb-2">
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="Symfony" src="/assets/imgs/Tech-stack/symfony.png" alt="issa Jafari - tech stack - Symfony" />
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="Nest.js" src="/assets/imgs/Tech-stack/nestjs.png" alt="issa Jafari - tech stack - Nest.js" />
                <img className="rounded-2xl aspect-square w-16 drop-shadow-xl/50" title="Nest.js" src="/assets/imgs/Tech-stack/springboot.svg" alt="issa Jafari - tech stack - Spring Boot" />
              </li>
            </ul>

          </div>
        </div>
      </section>
    </>
  )
}
