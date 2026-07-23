/**
 * Canonical list of cities Prime Time Research Media serves.
 *
 * Used for:
 *  - schema.org `areaServed` on service pages
 *  - "Cities we serve" UI chips/sections (real, visible content)
 *  - future city-specific landing pages, if/when they get unique content
 *
 * NOT used for: meta keyword stuffing, or looping into paragraph copy.
 */

export const TOP_LOCATIONS = [
    { city: 'New Delhi', state: 'Delhi', slug: 'new-delhi' },
    { city: 'Mumbai', state: 'Maharashtra', slug: 'mumbai' },
    { city: 'Bengaluru', state: 'Karnataka', slug: 'bengaluru' },
    { city: 'Chennai', state: 'Tamil Nadu', slug: 'chennai' },
    { city: 'Hyderabad', state: 'Telangana', slug: 'hyderabad' },
    { city: 'Kolkata', state: 'West Bengal', slug: 'kolkata' },
    { city: 'Ahmedabad', state: 'Gujarat', slug: 'ahmedabad' },
    { city: 'Jaipur', state: 'Rajasthan', slug: 'jaipur' },
    { city: 'Lucknow', state: 'Uttar Pradesh', slug: 'lucknow' },
    { city: 'Bhopal', state: 'Madhya Pradesh', slug: 'bhopal' },
];

/** Convenience: just the city names, e.g. for a "Cities we serve" chip row. */
export const TOP_CITY_NAMES = TOP_LOCATIONS.map((loc) => loc.city);