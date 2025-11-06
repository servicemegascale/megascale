import React from "react";

const services = [
    { name: "Our Services", url: "/#/services" },
    { name: "Web Development", url: "/#/services/webdevleopment" },
    { name: "Mobile App Development", url: "/#/services/MobileAppDevelopment" },
    { name: "Software Development", url: "/#/services/softwareDevelopment" },
    { name: "E-commerce Services", url: "/#/services/EcommerceServices" },
    { name: "Cloud Solutions", url: "/#/services/cloudsolutions" },
    { name: "Software Testing", url: "/#/services/SoftwareTesting" },
    { name: "Offshore Development Services", url: "/#/services/Offshore-development" },
    { name: "IT Staff Augmentation Services", url: "/#/services/it-staff-augmentation-services" },
    { name: "Customer / Technical Support", url: "/#/services/support" },
    { name: "Robotics", url: "/#/services/robotics" },
    { name: "iPad and iPhone App Development", url: "/#/services/ios" },
    { name: "Networking & Security Solutions", url: "/#/services/network" },
    { name: "Digital Marketing", url: "/#/services/marketing" },
    { name: "Android App Development", url: "/#/services/Andorid-app" },
    { name: "Big Data Analytics", url: "/#/services/Big-data" },
    { name: "Artificial Intelligence", url: "/#/services/artificial-intellegence" },
];

const SeoData = () => {
    return (
        <div className="seo-data w-full px-6 sm:px-12 py-8 sm:py-12 text-left">
            {/* --- Services Section --- */}
            <section className="mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
                    Services
                </h1>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
                    {services.map((service, index) => (
                        <React.Fragment key={index}>
                            <a
                                href={service.url}
                                className="hover:underline"
                            >
                                {service.name}
                            </a>
                            {index !== services.length - 1 && <span className="text-slate-500">|</span>}
                        </React.Fragment>
                    ))}
                </p>
            </section>

            {/* --- Technologies Section --- */}
            <section className="mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
                    Technologies
                </h1>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Shopify  <span className="px-2">|</span> ReactJS  <span className="px-2">|</span> AngularJS  <span className="px-2">|</span> NodeJS  <span className="px-2">|</span> Python  <span className="px-2">|</span> Django  <span className="px-2">|</span> PHP  <span className="px-2">|</span> .NET  <span className="px-2">|</span>
                    Laravel  <span className="px-2">|</span> Android  <span className="px-2">|</span> iOS  <span className="px-2">|</span> React Native  <span className="px-2">|</span> Flutter  <span className="px-2">|</span> Unity 3D
                </p>
            </section>

            {/* --- Products Section --- */}
            <section>
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
                    Our Products
                </h1>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    <a
                        href="https://ims.megascale.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        IMS
                    </a>{" "}
                    <span className="px-2">|</span>
                    <a
                        href="https://training.megascale.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Megascale Training
                    </a>{" "}
                    <span className="px-2">|</span>
                    <a
                        href="https://megaservices.megascale.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Megaservices
                    </a>{" "}
                    <span className="px-2">|</span>
                    <a
                        href="https://megascale.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Megascale UK
                    </a>
                </p>
            </section>
        </div>
    );
};

export default SeoData;