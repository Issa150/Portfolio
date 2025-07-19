import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Asider from "./Asider";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="--min-h-screen max-w-[1000px] mx-auto grid my-md:grid-cols-[min-content_1fr] grid-cols-1 justify-items-center gap-2">
      <NavBar /> {/*this is positioned fixed */}
      <Asider />
      <main className="my-md:pt-17 my-14:pt-17  my-15:pt-20  w-[95%] sm:w-full lg:w-full">
        <Suspense fallback={<div className="text-center text-gray-500">Loading...🕓🕟</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
