import ContactSection from "../../components/sections/ContactSection";
import HeroSection from "../../components/sections/HeroSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import ServicesSection from "../../components/sections/ServicesSection";



export default function HomePage() {
  return (
    <>
      {/* <div className="flex pt-25"> */}
      <div className="sm:p-6 p-3 bg-my-theme backdrop-blur-xs border border-my-theme-border text-white rounded-lg shadow-lg my-sm:max-w-3/4 my-md:max-w-full">
        <HeroSection />

        <ServicesSection />

        <ProjectsSection />

        <ContactSection />
      </div>
      {/* </div> */}
    </>
  )
}
