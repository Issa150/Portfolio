import { EnvelopeIcon, PhoneIcon, MapPinIcon, DocumentArrowDownIcon } from "@heroicons/react/24/solid";

export default function Asider() {
    return (
        <aside className="my-md:pt-20 pt-5 my-md:w-64 my-sm:w-3/4 w-11/12 my-md:relative">
            <div className="my-md:sticky top-20 left-0  flex my-md:flex-col my-md:gap-5 my-sm:gap-18 gap-5 items-center p-6 bg-my-theme border border-my-theme-border text-white rounded-lg shadow-lg">
                {/* Profile Image */}
                <img
                    src="/assets/imgs/issa jafari.jpg"
                    alt="Issa Jafari"
                    className="my-sm:w-48 w-28 aspect-[3/4] rounded-lg object-cover mb-4 border-2 border-my-theme-border"
                />
                <div>
                    {/* Full Name */}
                    <div className="flex items-center justify-center gap-2 border-my-theme-border border-b-2 pb-4 mb-6">
                        {/* <UserIcon className="w-5 h-5 text-gray-400" /> */}
                        <h2 className="text-4xl font-bold text-center">Issa Jafari</h2>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 mt-2">
                        <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                        <p className="text-sm"><a href="mailto:issajafari@example.com">issajafari@example.com</a></p>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center gap-2 mt-2">
                        <PhoneIcon className="w-5 h-5 text-gray-400" />
                        <p className="text-sm"><a href="tel:+33780232854">+33 78 02 32 854</a></p>
                    </div>

                    {/* City */}
                    <div className="flex items-center gap-2 mt-2">
                        <MapPinIcon className="w-5 h-5 text-gray-400" />
                        <p className="text-sm">Paris, France</p>
                    </div>
                    {/* VC */}
                    <div className="mt-2">
                        <a href="/assets/CV- développeur-full Stack.pdf" className="flex items-center gap-2 " download>
                            <DocumentArrowDownIcon className="h-6 w-6 text-gray-400" />
                            <p className="text-sm">CV</p>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
}
