

export default function ServicesSection() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-20 ">

        <div className="max-w-72 relative z-0 aspect-square object-cover mt-10 rounded-sm overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">


          <img className="w-full h-full" src="/assets/imgs/general/dddepth-290.jpg" alt="" />

          <div className="absolute top-0 left-0 w-full h-full p-6 grid grid-cols-5 grid-rows-3">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>


            <p className="col-span-5 row-start-2 text-center text-lg font-semibold">
              UI kit design & made by TailwindCSS & SCSS
            </p>

            <svg className="size-8 w-12 col-start-5 row-start-3 self-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>


        </div>

        <div className="max-w-72 relative z-0 aspect-square object-cover mt-10 rounded-sm overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">

          <img className="w-full h-full" src="/assets/imgs/general/dddepth-249.jpg" alt="" />

          <div className="absolute top-0 left-0 w-full h-full p-6 grid grid-cols-5 grid-rows-3">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
            </svg>


            <p className="col-span-5 row-start-2 text-blue-950 text-center text-lg font-semibold">
              REST API <br />
              Server side application
            </p>

            <svg className="size-8 w-12 col-start-5 row-start-3 self-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>


        </div>
      </div>
    </>
  )
}
