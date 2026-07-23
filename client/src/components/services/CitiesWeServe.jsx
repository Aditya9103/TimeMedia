import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { TOP_LOCATIONS } from '../../data/Location';

/**
 * "Cities we serve" — compact by default, expands to the full list.
 *
 * Important: every city is real, visible DOM content once expanded (not
 * display:none-forever hidden text). Collapsed vs. expanded is a genuine
 * user-triggered UI state, which is the compliant way to keep a page
 * uncluttered while still giving both users and crawlers real content —
 * unlike text hidden off-screen or behind zero opacity, which Google
 * treats as cloaking.
 *
 * Usage:
 *   <CitiesWeServe />                          // uses TOP_LOCATIONS
 *   <CitiesWeServe previewCount={3} />          // show 3 before "+N more"
 */
export default function CitiesWeServe({
    locations = TOP_LOCATIONS,
    previewCount = 4,
    className = '',
}) {
    const [expanded, setExpanded] = useState(false);

    const preview = locations.slice(0, previewCount);
    const remaining = locations.length - preview.length;

    return (
        <section
            aria-label="Cities we serve"
            className={`border-t border-slate-200 pt-4 text-sm text-slate-600 ${className}`}
        >
            <div className="flex flex-wrap items-center gap-1.5">
                <MapPin size={14} className="shrink-0 text-slate-400" aria-hidden="true" />
                <span className="font-medium text-slate-700">Serving</span>
                <span>
                    {preview.map((loc, i) => (
                        <span key={loc.slug}>
                            {loc.city}
                            {i < preview.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </span>

                {!expanded && remaining > 0 && (
                    <button
                        type="button"
                        onClick={() => setExpanded(true)}
                        aria-expanded={expanded}
                        aria-controls="cities-we-serve-full-list"
                        className="inline-flex items-center gap-1 font-medium text-sky-700 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
                    >
                        +{remaining} more cities
                        <ChevronDown size={14} aria-hidden="true" />
                    </button>
                )}
            </div>

            {expanded && (
                <div id="cities-we-serve-full-list" className="mt-3 flex flex-wrap gap-2">
                    {locations.map((loc) => (
                        <span
                            key={loc.slug}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                        >
                            {loc.city}, {loc.state}
                        </span>
                    ))}
                    <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        className="ml-1 inline-flex items-center text-xs font-medium text-sky-700 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
                    >
                        Show less
                    </button>
                </div>
            )}
        </section>
    );
}