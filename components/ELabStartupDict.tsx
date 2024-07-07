"use client";

import React, { useState, useEffect } from 'react';
// import { Startup } from '../data/startups'; // Adjust the import path as necessary
import {Startup} from '../data/e-lab-startups';

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
  const filterCategories: (keyof Startup)[] = ['tag', 'batch', 'industry'];

  // Dynamically generate filter options based on startups data
  const filterOptions = startups.reduce((acc, startup) => {
    filterCategories.forEach((category) => {
        if (startup[category] && !acc[category]?.includes(startup[category] as string)) {
          acc[category]?.push(startup[category] as string);
        }
    });
    return acc;
  }, filterCategories.reduce((acc, category) => ({ ...acc, [category]: [] as string[] }), {} as Record<string, string[]>));
  console.log(filterOptions)

  useEffect(() => {
    const applyFilters = () => {
      const filtered = startups.filter((startup) => {
        // Check if startup matches search query
        const matchesSearchQuery = searchQuery
          ? startup.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            startup.about.toLowerCase().includes(searchQuery.toLowerCase())
          : true;

        // Check if startup matches selected filters
        const matchesFilters = Object.entries(selectedFilters).every(([key, values]) => {
          if (!values.length) return true; // No filter selected for this category
          return values.includes(startup[key as keyof Startup] as string);
        });

        return matchesSearchQuery && matchesFilters;
      });
      setFilteredStartups(filtered);
    };

    applyFilters();
  }, [selectedFilters, searchQuery, startups]);

  const handleFilterChange = (category: string, value: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (isChecked) {
        if (category in updatedFilters) {
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
    setSearchQuery('');
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
        {/* Search input */}
        <div>
          <input
            type="text"
            placeholder="Search startups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: '20px', width: '100%' , color: 'black'}}
          />
        </div>
        {/* Search and filtered startups display */}
        <h4>E-Lab Startups</h4>
        {filteredStartups.map((startup) => (
          <div key={startup.website} style={{ marginBottom: '20px' }}>
            <h5>{startup.name}</h5>
            <p>{startup.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
