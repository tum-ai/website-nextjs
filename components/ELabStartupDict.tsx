"use client";

import React, { useState, useEffect } from 'react';
import { Startup } from '../data/startups'; // Adjust the import path as necessary

interface StartupsDictionaryProps {
  startups: Startup[];
}

interface FilterOptions {
  [key: string]: string[];
}

export default function StartupsDictionary({ startups }: StartupsDictionaryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({});
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>(startups);

  // Assuming each startup has the following fields to filter by
  const filterCategories: Array<keyof Startup | 'industryKey' | 'industryValue'> = ['tag', 'batch', 'region', 'industryKey', 'industryValue'];

  // Dynamically generate filter options based on startups data
  const filterOptions = startups.reduce((acc, startup) => {
    filterCategories.forEach((category) => {
      if (category === 'industryKey') {
        Object.keys(startup.industry).forEach((key) => {
          if (!acc[category]?.includes(key)) {
            acc[category]?.push(key);
          }
        });
      } else if (category === 'industryValue') {
        Object.values(startup.industry).forEach((value) => {
          if (!acc[category]?.includes(value)) {
            acc[category]?.push(value);
          }
        });
      } else {
        if (startup[category as keyof Startup] && !acc[category]?.includes(startup[category as keyof Startup] as string)) {
          acc[category]?.push(startup[category as keyof Startup] as string);
        }
      }
    });
    return acc;
  }, filterCategories.reduce((acc, category) => ({ ...acc, [category]: [] as string[] }), {} as Record<string, string[]>));

  useEffect(() => {
    const applyFilters = () => {
      const filtered = startups.filter((startup) => {
        return Object.entries(selectedFilters).every(([key, values]) => {
          if (!values.length) return true; // No filter selected for this category
          if (key === 'industryKey') {
            return values.some(value => startup.industry.hasOwnProperty(value));
          } else if (key === 'industryValue') {
            return values.some(value => Object.values(startup.industry).includes(value));
          } else {
            return values.includes(startup[key as keyof Startup] as string);
          }
        });
      });
      setFilteredStartups(filtered);
    };

    applyFilters();
  }, [selectedFilters, startups]);

  const handleFilterChange = (category: string, value: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (isChecked) {
        if (updatedFilters[category]) {
          updatedFilters[category].push(value);
        } else {
          updatedFilters[category] = [value];
        }
      } else {
        if (updatedFilters[category]) {
          updatedFilters[category] = updatedFilters[category].filter((v) => v !== value);
        }
      }
      return updatedFilters;
    });
  };

  const resetFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '250px', paddingRight: '20px' }}>
        <h4>Filters</h4>
        {filterCategories.map((category) => (
          <div key={category}>
            <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
            {filterOptions[category]?.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={`${category}-${option}`}
                  name={`${category}-${option}`}
                  value={option}
                  onChange={(e) => handleFilterChange(category, option, e.target.checked)}
                />
                <label htmlFor={`${category}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button onClick={resetFilters}>Reset Filters</button>
      </aside>
      <main style={{ flex: 1 }}>
        {/* Search and filtered startups display */}
        <h4>E-Lab Startups</h4>
        {filteredStartups.map((startup) => (
          <div key={startup.href} style={{ marginBottom: '20px' }}>
            <h5>{startup.alt}</h5>
            <p>{startup.about}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
