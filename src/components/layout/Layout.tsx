import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Asider from "./Asider";

export default function Layout() {
  return (
    <div className="min-h-screen max-w-[1000px] mx-auto grid my-md:grid-cols-[min-content_1fr] grid-cols-1 justify-items-center gap-2">
      <NavBar /> {/*this is positioned fixed */}
      <Asider />
      <main className="my-md:pt-20 w-[95%] sm:w-full lg:w-12/12">
        <Outlet /> 
      </main>
    </div>
  );
}
