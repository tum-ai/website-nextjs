"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Startup } from '../data/e-lab-startups';
import Link from "next/link";

interface StartupListProps {
  startups: Startup[];
  maxHeight: string; // Adding height prop
}

type FilterOptions = Record<string, string[]>;

export default function StartupList({ startups, maxHeight }: StartupListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({});
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>(startups);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null)
  const checkboxesRef = useRef<Record<string, HTMLInputElement>>({});

  const filterCategories: (keyof Startup)[] = ['tag', 'batch', 'industry'];

  // Filter startups
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

      // Ensure the category array exists
      if (!updatedFilters[category]) {
        updatedFilters[category] = [];
      }

      if (isChecked) {
        updatedFilters[category]!.push(value); // Use non-null assertion operator (!)
      } else {
        updatedFilters[category] = updatedFilters[category]!.filter((v) => v !== value); // Use non-null assertion operator (!)
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

  // Filter visibility for mobile view
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsFilterVisible(false);
    }
  };

  useEffect(() => {
    if (isFilterVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterVisible]);


  return (
    <div className="flex flex-col md:flex-row">

      {/* Filter*/}
      <div className={`fixed inset-0 z-50 flex bg-gray-800 bg-opacity-75 ${isFilterVisible ? 'block' : 'hidden'} md:static md:block`}>
        <div ref={sidebarRef} className="max-w-60 flex flex-col p-4 bg-purple-950 rounded shadow-lg md:static md:flex md:flex-col md:p-4 md:border md:border-white md:rounded">
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
                  <label htmlFor={`${category}-${option}`} className="text-sm overflow-hidden text-overflow-ellipsis">{option}</label>
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-center" >
            <button onClick={resetFilters} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Reset Filters</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 pt-0" style={{ maxHeight: maxHeight }}>
        {/* Filter Button for Mobile View */}
        <div className="block w-full md:hidden mb-4">
          <button onClick={toggleFilterVisibility} className="w-full p-3 bg-blue-500 rounded">Filter</button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search startups..."
            className="w-full px-4 py-2 border rounded text-black"
          />
        </div>
        <div className="overflow-y-auto scrollbar-hidden scrollbar-purple pr-4" style={{ maxHeight: `calc(${maxHeight} - 50px)` }}>
          {filteredStartups.map((startup) => (
            <Link key={startup.id} href={`/e-lab/startups/${startup.id}`}>
              <div  className="mb-4 p-4 border rounded-lg shadow flex items-center">
                <img src={startup.logo} alt={`${startup.name} logo`} className="w-16 h-16 object-contain mr-4"/>
                <div>
                  <h5 className="text-md font-medium">{startup.name}</h5>
                  <p className="text-sm text-gray-300">{startup.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
