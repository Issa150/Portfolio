import { Link, useLocation } from "react-router";

export default function Joinly_project_single() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const carouselImages = [
    {
      id: "item1",
      src: "https://picsum.photos/id/1/800/300", 
      thumb: "https://picsum.photos/id/1/50/50", 
    },
    {
      id: "item2",
      src: "https://picsum.photos/id/2/800/300", 
      thumb: "https://picsum.photos/id/2/50/50", 
    },
    {
      id: "item3",
      src: "https://picsum.photos/id/3/800/300", 
      thumb: "https://picsum.photos/id/3/50/50", 
    },
    {
      id: "item4",
      src: "https://picsum.photos/id/4/800/300", 
      thumb: "https://picsum.photos/id/4/50/50", 
    },
  ];

  return (
    <>
      <div className="p-6 bg-my-theme backdrop-blur-xs border border-my-theme-border text-white rounded-lg shadow-lg my-sm:max-w-3/4 my-md:max-w-full">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm text-gray-300">
          <ul>
            {paths.map((path, index) => {
              const url = "/" + paths.slice(0, index + 1).join("/");
              return (
                <li key={index}>
                  <Link className="hover:text-white px-2 py-1" to={url}>
                    {capitalize(path)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Title */}
        <h2 className="my-sm:text-7xl text-5xl font-bold mb-4 text-white">
          Joinly
        </h2>

        {/* Carousel */}
        <div className="carousel w-full">
          {carouselImages.map((image) => (
            <div key={image.id} id={image.id} className="carousel-item w-full">
              <img src={image.src} alt="" className="w-full" />
            </div>
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex w-full justify-center gap-2 py-2">
          {carouselImages.map((image) => (
            <a key={image.id} href={`#${image.id}`} className="btn btn-square btn-xs">
              <img src={image.thumb} alt="" className="h-6 w-6 object-cover" />
            </a>
          ))}
        </div>

        {/* Description */}
        <p>
          Here it comes the description of project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          error minus. Id accusamus ipsa provident, explicabo culpa obcaecati nemo,
          ducimus voluptatibus veritatis minima non odit facere nobis ipsum
          quibusdam. Maiores?
        </p>
        <p className="mt-4 font-bold">List of Functionalities of app</p>
        <ul>
          <li>Auth</li>
          <li>CRUD event</li>
          <li>Personal note realated to event</li>
          <li>Centrelising media management for user and event</li>
        </ul>
        <p className="mt-4 font-bold">About the project</p>
        <ul>
          <li>Layered artchitecture</li>
          <li>Dockerized</li>
          <li>JWT token</li>
        </ul>

        <hr />
        <p  className="mt-4 font-bold">Diagrammes</p>
        <hr />
        <p  className="mt-4 font-bold">DB modelisation</p>
      </div>
    </>
  );
}