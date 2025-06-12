// import { useState, useEffect, useRef } from "react";
// import { NavLink, useLocation } from "react-router";

// const navItems = ["À propos moi", "Mes projets", "Contactez moi"];
// const navLinks = ["/", "/projects", "/contact"];

// // Dropdown projects list
// const projectDropdownItems = [
//   { name: "Joinly", path: "/projects/joinly" },
//   { name: "Allumni", path: "/projects/allumni" },
//   { name: "IdeaPedia", path: "/projects/ideapedia" },
//   { name: "FaceBook-clone", path: "/projects/facebook-clone" },
// ];

// export default function NavBar() {
//   const location = useLocation();
//   const [indicatorStyle, setIndicatorStyle] = useState({
//     width: '0px',
//     transform: 'translateX(0px)',
//   });
//   const isInitialRender = useRef(true);

//   // Helper to check if current path starts with given path
//   const isActivePath = (path:string) => {
//     return location.pathname === path || location.pathname.startsWith(`${path}/`);
//   };

//   useEffect(() => {
//     const updateIndicator = () => {
//       let activeIndex = navLinks.indexOf(location.pathname);

//       // If not exact match, check if it's under /projects/*
//       if (activeIndex === -1 && isActivePath("/projects")) {
//         activeIndex = 1; // index of "Mes projets"
//       }

//       const activeItem = document.getElementById(`nav-item-${activeIndex}`);
//       if (activeItem) {
//         setIndicatorStyle({
//           width: `${activeItem.offsetWidth}px`,
//           transform: `translateX(${activeItem.offsetLeft}px)`,
//         });
//       } else {
//         setIndicatorStyle({ width: '0px', transform: 'translateX(0px)' });
//       }
//     };

//     if (isInitialRender.current) {
//       updateIndicator();
//       isInitialRender.current = false;
//     } else {
//       updateIndicator();
//     }
//   }, [location]);

//   return (
//     <nav className="my-md:fixed my-sm:sticky z-10 top-2 mt-3 my-md:left-1/2 my-md:-translate-x-1/2 backdrop-blur-md my-md:bg-[#fff9de2a] bg-[#fff9de41] p-2 rounded-full shadow-lg border border-my-theme-border my-md:max-w-fit">
//       <ul className="relative my-md:flex flex justify-center gap-4 px-0 list-none mx-0">
//         {/* Indicator */}
//         <div
//           className="absolute top-0 left-0 h-full backdrop-blur-sm bg-linear-to-b from-[rgba(255,255,255,.05)] to-[rgba(255,255,255,.1)] rounded-full transition-all duration-400 ease-in-out shadow-my-sm"
//           style={indicatorStyle}
//         ></div>

//         {/* Nav Items */}
//         {navItems.map((item, index) => (
//           <li key={index} id={`nav-item-${index}`} className="px-4 --py-2 text-white cursor-pointer z-10 text-xs flex items-center gap-2 group relative">
//             {item === "Mes projets" ? (
//               <div className="relative group-hover:block">
//                 <NavLink
//                   to={navLinks[index]}
//                   className={({ isActive }) =>
//                     isActivePath("/projects") ? "active-link" : undefined
//                   }
//                 >
//                   {item}
//                 </NavLink>
//                 <ul className="absolute -left-4 mt-2.5 w-48 grid gap-1 bg-[#453445] --bg-[#fff9de41] backdrop-blur-xs rounded-lg shadow-lg border border-my-theme-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
//                   {projectDropdownItems.map((project, i) => (
//                     <li key={i}>
//                       <NavLink
//                         to={project.path}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "block px-4 py-2 text-white whitespace-nowrap bg-[#ffffff67] rounded-lg"
//                             : "block px-4 py-2 text-white hover:bg-[#ffffff11] rounded-lg whitespace-nowrap"
//                         }
//                       >
//                         {project.name}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <NavLink to={navLinks[index]} className={({ isActive }) => `py-2 text-white cursor-pointer z-10 text-xs flex items-center gap-2 group relative ${isActive ? "active-link" : ""}`} >
//                 {item}
//                 {/* Ping Indicator for "Contactez moi" */}
//                 {item === "Contactez moi" && (
//                   <span className="relative flex size-2">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
//                     <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
//                   </span>
//                 )}
//               </NavLink>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }