import React, { useState, useMemo } from 'react';
import { MapPin, Tag, Filter, Check } from 'lucide-react';
import { PROJECT_GALLERY, ProjectItem, BUSINESS_DATA } from '../data/businessData';
import { ProjectLightbox } from '../components/ProjectLightbox';
import { SEO } from '../components/SEO';

const CATEGORY_FILTERS = [
  'All Projects',
  'Interior Work',
  'Building Construction',
  'Renovation',
  'Civil Work',
  'Modular Kitchen',
  'False Ceiling',
  'Project Management',
];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') {
      return PROJECT_GALLERY;
    }
    return PROJECT_GALLERY.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO
        title="Projects & Architectural Gallery | Home Care Interior Pune"
        description="Explore the civil and interior contracting portfolio of Home Care Interior across Kondhwa and Pune. Masonry, renovations, modular kitchens, and bespoke living spaces."
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] text-champagne block mb-4 font-medium">
              Architectural Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white leading-tight mb-6">
              Our Projects & Execution Gallery
            </h1>
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              A curated collection of residential interior transformations, structural civil milestones, modular kitchens, and architectural craftsmanship executed in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Interactive Segmented Buttons per Frontend Design §1.A) */}
      <section className="bg-ivory border-b border-stone-200/90 py-5 px-4 sm:px-6 lg:px-8 sticky top-16 z-20 backdrop-blur-md bg-ivory/95">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 shrink-0">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-charcoal text-white shadow-sm'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-stone-200/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-stone-muted shrink-0">
            <span>Showing:</span>
            <span className="font-semibold text-charcoal">{filteredProjects.length} items</span>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-softwhite min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center text-charcoal/70 bg-white border border-stone-200 rounded-sm p-8 max-w-md mx-auto">
              <p className="text-base font-serif mb-2">No photos currently indexed for this category</p>
              <p className="text-xs text-stone-muted">
                We only display verified project images and approved concepts. Yusuf Musir Khan can share specific site archives upon request.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All Projects')}
                className="mt-4 px-4 py-2 bg-charcoal text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group cursor-pointer bg-white border border-stone-200 rounded-sm overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/95 text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm shadow-md">
                        View Photograph
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-sm">
                      {project.category}
                    </div>

                    {project.type === 'conceptual-inspiration' && (
                      <div className="absolute top-3 right-3 bg-champagne-dark text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm font-semibold">
                        Concept Study
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif text-charcoal font-medium group-hover:text-champagne-dark transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed font-light">
                        {project.caption}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-muted">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-champagne" />
                        <span>{project.location}</span>
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ProjectLightbox
          items={filteredProjects}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </>
  );
};
