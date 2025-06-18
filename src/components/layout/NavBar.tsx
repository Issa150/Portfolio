import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";



const navItems = ["À propos moi", "Mes projets", "Contactez moi"];
const navLinks = ["/", "/projects", "/contact"];

// Dropdown projects list
// const projectDropdownItems = [
//   { name: "Joinly", path: "/projects/joinly" },
//   { name: "Allumni", path: "/projects/allumni" },
//   { name: "IdeaPedia", path: "/projects/ideapedia" },
//   { name: "FaceBook-clone", path: "/projects/facebook-clone" },
// ];
export default function NavBar() {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ width: '0px', transform: 'translateX(0px)' });
  const isInitialRender = useRef(true);

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = navLinks.indexOf(location.pathname);
      const activeItem = document.getElementById(`nav-item-${activeIndex}`);

      if (activeItem) {
        setIndicatorStyle({
          width: `${activeItem.offsetWidth}px`,
          transform: `translateX(${activeItem.offsetLeft}px)`,
        });
      } else {
        setIndicatorStyle({ width: '0px', transform: 'translateX(0px)' });
      }
    };

    // Run updateIndicator after the first render to position correctly
    if (isInitialRender.current) {
      updateIndicator();
      isInitialRender.current = false;
    } else {
      // Update indicator on subsequent route changes
      updateIndicator();
    }
  }, [location]);

  return (
    <nav className="my-md:fixed my-sm:sticky z-10 top-2 my-15:top-4 mt-1 my-md:left-1/2 my-md:-translate-x-1/2 backdrop-blur-md my-md:bg-[#fff9de2a] bg-[#fff9de41] p-2 rounded-full shadow-lg border border-my-theme-border my-md:max-w-fit">
      
      <ul className="relative my-md:flex flex justify-center sm:gap-4 sm:max-sm:gap-0 px-0 list-none mx-0">
        {/* Indicator */}
        <div className="absolute top-0 left-0 h-full backdrop-blur-sm bg-linear-to-b from-[rgba(255,255,255,.05)] to-[rgba(255,255,255,.1)] rounded-full transition-all duration-400 ease-in-out shadow-my-sm -z-10"
          style={indicatorStyle}
        ></div>

        {/* Nav Items */}
        {navItems.map((item, index) => (
          <NavLink key={index} to={navLinks[index]} className={({ isActive }) => (isActive ? "active-link" : undefined)}>
            <li id={`nav-item-${index}`} className="px-4 py-2 text-white cursor-pointer z-10 text-xs flex items-center gap-2">
              {item}

              {/* Ping Indicator for "Contactez moi" */}
              {item === "Contactez moi" && (
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                </span>
              )}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}