import React, { useState } from 'react';
import { startups_until24 } from './data/startups';

const StartupsDictionary = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterStartups = (startup) => {
    const query = searchQuery.toLowerCase();
    return (
      startup.about.toLowerCase().includes(query) ||
      startup.region.toLowerCase().includes(query) ||
      startup.name.toLowerCase().includes(query)
    );
  };

  const filteredStartups = startups_until24.filter(filterStartups);

  return (
    <div>
      <input
        type="text"
        placeholder="Search startups..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <div style={{ height: '500px', overflowY: 'scroll' }}>
        {filteredStartups.map((startup) => (
          <div key={startup.href} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{startup.alt}</h3>
            <p>{startup.about}</p>
            <p>Region: {startup.region}</p>
            <p>Industry: {Object.entries(startup.industry).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
            {startup.jobs && (
              <div>
                <h4>Jobs:</h4>
                {startup.jobs.map((job, index) => (
                  <p key={index}>{job.name} - {job.location}</p>
                ))}
              </div>
            )}
            <a href={startup.href} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupsDictionary;