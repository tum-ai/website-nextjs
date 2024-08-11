import Link from "next/link";
import {
  faLinkedin,
  faInstagram,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  instagramLink?: string; 
  linkedinLink?: string; 
  slackLink?: string;   
}

export default function Card({
  imageSrc,
  title,
  description,
  instagramLink,
  linkedinLink,
  slackLink,
}: CardProps) {
  // Encode the title to be URL-safe
  const encodedTitle = encodeURIComponent(title);

  return (
    <Link href={`/your-destination-page/${encodedTitle}`} passHref>
      <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden cursor-pointer">
        <img className="rounded-t-lg" src={imageSrc} alt="Card image" />

        <div className="p-5">
          <div className="flex items-center space-x-4 mb-4">
            <h5 className="text-μ font-bold tracking-tight text-gray-900 dark:text-black">{title}</h5>
            
            <div className="flex space-x-3">
              {instagramLink && (
                <Link href={instagramLink} passHref>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="text-black duration-500 hover:text-purple-300"
                  />
                </Link>
              )}
              
              {linkedinLink && (
                <Link href={linkedinLink} passHref>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className="text-black duration-500 hover:text-purple-300"
                  />
                </Link>
              )}
              
              {slackLink && (
                <Link href={slackLink} passHref>
                  <FontAwesomeIcon
                    icon={faSlack}
                    size="xl"
                    className="text-black duration-500 hover:text-purple-300"
                  />
                </Link>

                
              )}
            </div>
            
          </div>

          <p className="text-black">{description}</p>

          <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>


<div id="default-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</div>
        </div>
      </div>
    </Link>
  );
}
