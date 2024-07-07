"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Startup } from '../data/e-lab-startups';

interface StartupsDictionaryProps {
  startups: Startup[];
  height: string; // Adding height prop
}

interface FilterOptions {
  [key: string]: string[];
}

export default function StartupsDictionary({ startups, height }: StartupsDictionaryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({});
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>(startups);

  const checkboxesRef = useRef<Record<string, HTMLInputElement>>({});

  const filterCategories: (keyof Startup)[] = ['tag', 'batch', 'industry'];

  const filterOptions = startups.reduce((acc, startup) => {
    filterCategories.forEach((category) => {
      if (startup[category] && !acc[category]?.includes(startup[category] as string)) {
        acc[category]?.push(startup[category] as string);
      }
    });
    return acc;
  }, filterCategories.reduce((acc, category) => ({ ...acc, [category]: [] as string[] }), {} as Record<string, string[]>));

  useEffect(() => {
    const applyFilters = () => {
      const filtered = startups.filter((startup) => {
        const matchesSearchQuery = searchQuery
          ? startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            startup.description.toLowerCase().includes(searchQuery.toLowerCase())
          : true;

        const matchesFilters = Object.entries(selectedFilters).every(([key, values]) => {
          if (!values.length) return true;
          return values.includes(startup[key as keyof Startup] as string);
        });

        return matchesFilters && matchesSearchQuery;
      });
      setFilteredStartups(filtered);
    };

    applyFilters();
  }, [selectedFilters, searchQuery, startups]);

  const handleFilterChange = (category: string, value: string, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (isChecked) {
        if (!updatedFilters[category]) {
          updatedFilters[category] = [];
        }
        updatedFilters[category].push(value);
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

    Object.values(checkboxesRef.current).forEach((checkbox) => {
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  };

  return (
    <div className="flex">
      <aside className="w-64 p-4 bg-purple-950 border border-white rounded text-white">
        <h4 className="text-lg font-semibold mb-4">Filters</h4>
        {filterCategories.map((category) => (
          <div key={category} className="mb-4">
            <h5 className="font-medium mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
            {filterOptions[category]?.map((option) => (
              <div key={option} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  id={`${category}-${option}`}
                  name={`${category}-${option}`}
                  value={option}
                  ref={(el) => {
                    if (el) checkboxesRef.current[`${category}-${option}`] = el;
                  }}
                  onChange={(e) => handleFilterChange(category, option, e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor={`${category}-${option}`} className="text-sm">{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button onClick={resetFilters} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Reset Filters</button>
      </aside>
      <main className="flex-1 p-4 overflow-auto" style={{ height: height }}>
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search startups..."
            className="w-full px-4 py-2 border rounded text-black"
          />
        </div>
        <h4 className="text-lg font-semibold mb-4">E-Lab Startups</h4>
        <div className="overflow-y-auto" style={{ maxHeight: height }}>
          {filteredStartups.map((startup) => (
            <div key={startup.website} className="mb-4 p-4 border rounded-lg shadow flex items-center">
              <img src={startup.logo} alt={`${startup.name} logo`} className="w-16 h-16 object-contain mr-4"/>
              <div>
                <h5 className="text-md font-medium">{startup.name}</h5>
                <p className="text-sm text-gray-300">{startup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
