import Image from 'next/image';
import Link from 'next/link';
import { Startup } from '@data/e-lab';

const StartupDetails = ({ startup }: { startup: Startup }) => {
  return (
    <div className="bg-purple-950 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Image
            src={startup.logo}
            alt={`${startup.name} logo`}
            width={100}
            height={100}
            className="mr-4"
          />
          <h1 className="text-4xl font-bold">{startup.name}</h1>
        </div>

        <p className="text-xl mb-8">{startup.description}</p>

        <h2 className="text-2xl font-semibold mb-4">Founders</h2>
        <ul className="mb-8">
          {startup.founders.map((founder) => (
            <li key={founder.name} className="mb-2">
              <span className="font-bold">{founder.name}</span> - {founder.role}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Metrics</h2>
        <ul className="mb-8">
          {Object.entries(startup.metrics).map(([key, value]) => (
            <li key={key} className="mb-2">
              <span className="font-bold">{key}:</span> {String(value)}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">About {startup.name}</h2>
        <p className="mb-8">{startup.about}</p>

        <Link
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default StartupDetails;