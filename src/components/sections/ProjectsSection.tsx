import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

// Import your data from the JSON files
import projectsCardData from '../../data/projects_card_data.json';
import projectsModalContent from '../../data/projects_modal_content.json';

// --- INTERFACES FOR SEPARATED DATA ---
// interface ProjectCardData {
//   id: string;
//   title: string;
//   year: string;
//   description: string;
//   imgSrc: string;
//   imgAlt: string;
//   techStackPrimary: string[];
//   techStackSecondary?: string[];
    // previwLink?: string;
// }

interface ProjectModalContent {
  id: string;
  title: string;
  thumbnail: string;
  imgSrc: string;
  fullDetails: string;
  features: string[];
  links: {
    type: string;
    url: string;
  }[];
  architecture: string;
  collaboration: string;
  techStackPrimary: string[];
  techStackSecondary?: string[];
  diagramsImgs?: string[];
  diagramsDescription?: string;
  libraries?: string[];
}


export default function ProjectsSection() {
  const [currentModalContent, setCurrentModalContent] = useState<ProjectModalContent | null>(null);

  useEffect(() => {
    const modalElement = document.getElementById('project_modal');
    if (modalElement instanceof HTMLDialogElement) {
      if (currentModalContent) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [currentModalContent]);

  const handleOpenModal = (projectId: string) => {
    const content = (projectsModalContent as Record<string, ProjectModalContent>)[projectId];
    if (content) {
      setCurrentModalContent(content);
    } else {
      console.warn(`No detailed modal content found for project ID: ${projectId}`);
    }
  };

  const handleCloseModal = () => {
    setCurrentModalContent(null);
  };

  return (
    <>
      <section className="mb-20">
        <h2 className="my-sm:text-7xl text-5xl font-bold mb-4 text-gray-400">
          Les <span className="text-white">projets</span> récents
        </h2>

        <div className="mt-6 grid gap-5 sm:gap-0">
          {projectsCardData.map((project) => (
            <div key={project.id} className="grid grid-cols-[auto_1fr] gap-3 hover:bg-[#4747448a] hover:translate-x-1 transition duration-300 group rounded-lg sm:p-4 p-0 mb-4">
              <img className="max-w-24 aspect-[2/3] h-full object-cover object-top rounded" loading="lazy" src={project.thumbnail} alt={project.imgAlt} />
              <div className="grid">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.year}</p>
                </div>
                <p className="text-gray-400">{project.description}</p>

                {/* <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStackPrimary.map((tech, index) => (
                    <p key={`card-tech-p-${project.id}-${index}`} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{tech}</p>
                  ))}
                </div> */}
                {/* {project.techStackSecondary && project.techStackSecondary.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {project.techStackSecondary.map((tech, index) => (
                      <p key={`card-tech-s-${project.id}-${index}`} className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">{tech}</p>
                    ))}
                  </div>
                )} */}

                <div className="flex justify-between flex-wrap gap-1 mt-2 place-items-end --relative">
                  <button
                    className="btn border-0 py-0 px-4 bg-gradient-to-b from-violet-800 to-purple-900 hover:from-violet-700 hover:to-purple-800 transition duration-300"
                    onClick={() => handleOpenModal(project.id)}
                  >
                    En savoir plus
                  </button>
                  {project.previwLink && project.previwLink.trim() !== '' && (
                    <a href={project.previwLink} target="_blank" rel="noopener noreferrer" aria-label="Open project preview in new tab" className="--absolute sm:bottom-0 bottom-7 sm:right-0.5 right-1.5 group-hover:bg-green-600 sm:bg-transparent bg-[#474744] group-hover:shadow-sm group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 p-2 rounded-full grid place-center ">
                      <ArrowUpRightIcon className="h-6 w-6 group-hover:text-white sm:text-gray-500 text-green-600 ml-auto" />
                    </a >
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE SINGLE DAISYUI MODAL (Populated Dynamically) --- */}
      <dialog id="project_modal" className="modal --backdrop-blur-[3px]">
        {currentModalContent && (
          <div className="modal-box relative max-h-full sm:max-h-[90vh] w-11/12 max-w-5xl overflow-y-auto">
            <div>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
              </form>

              <h3 className="font-bold text-2xl mb-4 text-white">{currentModalContent.title}</h3>
            </div>

            <div className="sm:grid grid-cols-[300px_1fr] gap-6">
              <div>
                <img src={currentModalContent.imgSrc} alt={currentModalContent.title} className="w-full h-auto rounded mb-6" />
                {((currentModalContent.techStackPrimary && currentModalContent.techStackPrimary.length > 0) ||
                  (currentModalContent.techStackSecondary && currentModalContent.techStackSecondary.length > 0) ||
                  (currentModalContent.libraries && currentModalContent.libraries.length > 0)) && (
                    <>
                      <h4 className="font-semibold text-lg mb-2 text-gray-300">Technologies & Librairies</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {currentModalContent.techStackPrimary && currentModalContent.techStackPrimary.map((tech, index) => (
                          <span key={`modal-tech-p-${index}`} className="badge badge-lg badge-primary">{tech}</span>
                        ))}
                        {currentModalContent.techStackSecondary && currentModalContent.techStackSecondary.map((tech, index) => (
                          <span key={`modal-tech-s-${index}`} className="badge badge-lg badge-secondary">{tech}</span>
                        ))}
                        {currentModalContent.libraries && currentModalContent.libraries.map((lib, index) => (
                          <span key={`modal-lib-${index}`} className="badge badge-lg badge-info">{lib}</span>
                        ))}
                      </div>
                    </>
                  )}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-300">Description</h4>
                <p className="text-gray-400 mb-6">{currentModalContent.fullDetails}</p>

                {currentModalContent.features.length > 0 && (
                  <>
                    <h4 className="font-semibold text-lg mb-2 text-gray-300">Fonctionnalités Clés</h4>
                    <ul className="list-disc list-inside text-gray-400 mb-6 pl-4">
                      {currentModalContent.features.map((feature, index) => (
                        <li key={`feature-${index}`} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </>
                )}


                {/* {((currentModalContent.techStackPrimary && currentModalContent.techStackPrimary.length > 0) ||
                  (currentModalContent.techStackSecondary && currentModalContent.techStackSecondary.length > 0) ||
                  (currentModalContent.libraries && currentModalContent.libraries.length > 0)) && (
                    <>
                      <h4 className="font-semibold text-lg mb-2 text-gray-300">Technologies & Librairies</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {currentModalContent.techStackPrimary && currentModalContent.techStackPrimary.map((tech, index) => (
                          <span key={`modal-tech-p-${index}`} className="badge badge-lg badge-primary">{tech}</span>
                        ))}
                        {currentModalContent.techStackSecondary && currentModalContent.techStackSecondary.map((tech, index) => (
                          <span key={`modal-tech-s-${index}`} className="badge badge-lg badge-secondary">{tech}</span>
                        ))}
                        {currentModalContent.libraries && currentModalContent.libraries.map((lib, index) => (
                          <span key={`modal-lib-${index}`} className="badge badge-lg badge-info">{lib}</span>
                        ))}
                      </div>
                    </>
                  )} */}

                {currentModalContent.architecture && (
                  <>
                    <h4 className="font-semibold text-lg mb-2 text-gray-300">Architecture</h4>
                    <p className="text-gray-400 mb-6">{currentModalContent.architecture}</p>
                  </>
                )}

                {currentModalContent.diagramsImgs && currentModalContent.diagramsImgs.length > 0 && (
                  <>
                    <h4 className="font-semibold text-lg mb-2 text-gray-300">Diagrammes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {currentModalContent.diagramsImgs.map((img, index) => (
                        <img key={`diagram-${index}`} src={img} alt={`Diagram ${index + 1}`} className="w-full h-auto rounded" />
                      ))}
                    </div>
                    {currentModalContent.diagramsDescription && (
                      <p className="text-gray-400 text-sm mb-6">{currentModalContent.diagramsDescription}</p>
                    )}
                  </>
                )}

                {currentModalContent.collaboration && (
                  <>
                    <h4 className="font-semibold text-lg mb-2 text-gray-300">Collaboration</h4>
                    <p className="text-gray-400 mb-6">{currentModalContent.collaboration}</p>
                  </>
                )}

                {(() => {
                  const filteredLinks = currentModalContent.links.filter(link => link.url && link.url.trim() !== '');
                  if (filteredLinks.length > 0) {
                    return (
                      <>
                        <h4 className="font-semibold text-lg mb-2 text-gray-300">Liens Utiles</h4>
                        <div className="flex flex-wrap gap-3 mb-4">
                          {filteredLinks.map((link, index) => (
                            <a
                              key={`link-${index}`}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline btn-info"
                            >
                              {link.type} <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                            </a>
                          ))}
                        </div>
                      </>
                    );
                  }
                  return null; // Don't render anything if no valid links
                })()}
              </div>
            </div>
          </div>
        )}
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseModal}>close</button>
        </form>
      </dialog>
    </>
  );
}