import React, { useState } from 'react';
import './PortfolioSection.css';
import PortfolioCard from '../../Reusable/PortfolioCard';

const PortfolioSection = () => {
    const [portfolioItems, setPortfolioItems] = useState([
        { id: 1, title: "Front-end Development", description: "Tools: Angular" },
        { id: 2, title: "Front-end Development", description: "Tools: React" },
        { id: 3, title: "Back-end Development", description: "Tools: Node.js" },
        { id: 4, title: "Back-end Development", description: "Tools: Django" },
        { id: 5, title: "Database for Back-end", description: "Tools: MySQL" },
        { id: 6, title: "Database for Back-end", description: "Tools: MongoDB" }
    ]);

    return (
        <section className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <div className="row">
                    {portfolioItems.map((item) => (
                        <div className="col-lg-4" key={item.id}>
                            <PortfolioCard
                                title={item.title}
                                description={item.description}
                                className={(item.id % 2 !== 0) ? "odd-card" : ""}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
