import React from 'react';
import './PortfolioSection.css';
import PortfolioCard from '../../Reusable/PortfolioCard';

const PortfolioSection = () => {
    return (
        <section className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <div className="portfolio-row">
                <PortfolioCard 
                title="Front-end Devlopment"
                 description="Tools: Angular "
                  className="odd-card" 
                          />
                    <PortfolioCard
                        title="Front-end Devlopment"
                        description="Tools: react"
                    />
                    <PortfolioCard
                        title="Back-end Devlopment"
                        description="Tools: Node-js"
                        className="odd-card"
                        />
                </div>
                <div className="portfolio-row">
                    <PortfolioCard
                        title="Back-end Devlopment"
                        description="Tools: Django"
                    />
                    <PortfolioCard
                        title="Database for Back-end"
                        description="Tools: MySQL"
                        className="odd-card"
                    />
                    <PortfolioCard
                        title="Database for Back-end"
                        description="Mongo DB"
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
