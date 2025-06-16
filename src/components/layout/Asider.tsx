import { EnvelopeIcon, MapPinIcon, DocumentArrowDownIcon } from "@heroicons/react/24/solid";

export default function Asider() {
    return (
        <aside className="my-md:pt-17 my-14:pt-17 my-15:pt-20 pt-0 my-md:w-64 my-sm:w-3/4 w-[95%] my-md:relative">
            <div className="my-md:sticky my-md:pt-6 my-14:top-17 my-15:top-20  left-0 flex my-md:flex-col my-md:gap-0 my-sm:gap-18 gap-5 items-center p-3 bg-my-theme border backdrop-blur-xs border-my-theme-border text-white rounded-lg shadow-lg">
                {/* Profile Image */}
                {/* <img
                    src="/assets/imgs/issa jafari.jpg"
                    alt="Issa Jafari - rofile picture"
                    loading="lazy"
                    className="my-sm:w-48 w-28 aspect-[3/4] rounded-lg object-cover mb-4 border-2 border-my-theme-border"/> */}
                <img
                    src="/assets/imgs/issa jafari.jpg"
                    alt="Issa Jafari - rofile picture"
                    loading="lazy"
                    className="my-sm:w-40  my-15:w-48 w-28 aspect-[3/4] rounded-lg object-cover mb-4 border-2 border-my-theme-border" />
                <div>
                    {/* Full Name */}
                    <div className="flex items-center justify-center gap-2 border-my-theme-border border-b-2 pb-2 mb-3">
                        {/* <UserIcon className="w-5 h-5 text-gray-400" /> */}
                        <h1 className="text-4xl font-bold text-center" title="Issa Jafari - Web developper Full-Stack">Issa JAFARI</h1>
                    </div>

                    <div className="sm:grid gap-1 my-15:gap-2.5">
                        {/* Email */}
                        <div className="flex items-center gap-2 mt-2">
                            <EnvelopeIcon className="w-5 h-5 --text-my-theme-icon" />
                            <p className="text-sm"><a href="mailto:isajafari76@gmail.com">isajafari76@gmail.com</a></p>
                        </div>

                        {/* Phone Number */}
                        {/* <div className="flex items-center gap-2 mt-2">
                            <PhoneIcon className="w-5 h-5 --text-my-theme-icon" />
                            <p className="text-sm"><a href="tel:+33780232854">+33 78 02 32 854</a></p>
                        </div> */}

                        {/* Linkedin */}
                        <div className="flex items-center gap-2 mt-2">
                            <img src="/assets/icone/linkedin.png" alt="" className="w-4 h-4" />
                            <p className="text-sm"><a href="https://www.linkedin.com/in/issa-jafari" target="_blank">www.linkedin.com/in/issa-jafari</a></p>
                        </div>

                        {/* Github */}
                        <div className="flex items-center gap-2 mt-2">
                            <img src="/assets/icone/github.png" alt="" className="w-5 h-5" />
                            <p className="text-sm"><a href="https://github.com/Issa150" target="_blank">https://github.com/Issa150</a></p>
                        </div>

                        {/* City */}
                        <div className="flex items-center gap-2 mt-2">
                            <MapPinIcon className="w-5 h-5 --text-my-theme-icon" />
                            <p className="text-sm">Paris, France</p>
                        </div>
                        {/* VC */}
                        <div className="mt-2">
                            <a href="/assets/CV- Issa JAFARI- développeur Full-Stack.pdf" className="flex items-center gap-2 " download>
                                <DocumentArrowDownIcon className="h-6 w-6 --text-my-theme-icon" />
                                <p className="text-sm">CV</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
