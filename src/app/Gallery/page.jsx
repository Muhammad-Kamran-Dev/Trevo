import Image from "next/image";
export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                style={{ width: "100%" }}
                className="object-cover object-center rounded"
                src="/img/tour/img1.png"
                alt="Picture of the nature"
                width={1000} // Adjust the width value according to your needs
                height={20} // Adjust the height value according to your needs
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              Shooting Stars
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur.
            </p>
            <a className="inline-flex items-center mt-3 text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                style={{ width: "100%" }}
                className="object-cover object-center rounded"
                src="/img/tour/img2.png"
                alt="Picture of the nature"
                width={1000} // Adjust the width value according to your needs
                height={20} // Adjust the height value according to your needs
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              The Catalyzer
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur.
            </p>
            <a className="inline-flex items-center mt-3 text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <Image
                style={{ width: "100%" }}
                className="object-cover object-center rounded"
                src="/img/tour/img3.png"
                alt="Picture of the nature"
                width={1000} // Adjust the width value according to your needs
                height={20} // Adjust the height value according to your needs
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              The 400 Blows
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae
              consequuntur.
            </p>
            <a className="inline-flex items-center mt-3 text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
