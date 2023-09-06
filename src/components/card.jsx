import Image from "next/image";
import Link from "next/link";

const Card = ({ imgSrc, title, description, link: { text, href } }) => {
  return (
    <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
      <div className="h-64 overflow-hidden rounded-lg">
        <Image
          style={{ width: "100%" }}
          className="object-cover object-center rounded"
          src={imgSrc}
          alt="Picture of the nature"
          width={1000} // Adjust the width value according to your needs
          height={20} // Adjust the height value according to your needs
        />
      </div>
      <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
        {title}
      </h2>
      <p className="mt-2 text-base leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center mt-3 text-indigo-500"
      >
        {text}
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
      </Link>
    </div>
  );
};
export default Card;
