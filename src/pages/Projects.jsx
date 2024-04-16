import React, { useState } from 'react';
import './portfolio.css';
import { portfolio } from '../data';
import PortfolioItem from './PortfolioItem';

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6); // Number of projects to display initially
  const totalProjects = portfolio.length;

  const loadMore = () => {
    // Increase the number of visible projects
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 6); // You can change 6 to any number you like
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title" data-aos="fade-down" data-aos-duration="1000">
        My <span>Projects</span>
      </h2>

      <div className="portfolio__container container grid" data-aos="fade-up" data-aos-duration="1000">
        {portfolio.slice(0, visibleProjects).map(item => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>

      {/* Render the "Load More" button if there are more projects to display */}
      {visibleProjects < totalProjects && (
      <div className="load-more-container">
  <button type="button" className="load-more-button" onClick={loadMore}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
    View More
  </button>
</div>

      )}
    </section>
  );
}

export default Projects;
