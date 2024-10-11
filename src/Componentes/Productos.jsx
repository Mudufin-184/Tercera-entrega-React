import React from 'react';
import './Productos.css';

function Productos() {
  const routes = [
      { 
            id: 1, 
                  name: 'Route 1', 
                        distance: '20km', 
                              difficulty: 'Moderate', 
                                    image: 'image1.jpg' 
                                        },
                                            { 
                                                  id: 2, 
                                                        name: 'Route 2', 
                                                              distance: '15km', 
                                                                    difficulty: 'Easy', 
                                                                          image: 'image2.jpg' 
                                                                              },
                                                                                  { 
                                                                                        id: 3, 
                                                                                              name: 'Route 3', 
                                                                                                    distance: '30km', 
                                                                                                          difficulty: 'Challenging', 
                                                                                                                image: 'image3.jpg' 
                                                                                                                    }
                                                                                                                      ];

                                                                                                                        return (
                                                                                                                            <section className="products-section">
                                                                                                                                  <h1 className="section-title">Featured Cycling Routes</h1>
                                                                                                                                        <p className="section-description">Check out popular cycling destinations.</p>
                                                                                                                                              <div className="routes-container">
                                                                                                                                                      {routes.map((route) => (
                                                                                                                                                                <div key={route.id} className="route-card">
                                                                                                                                                                            <img src={route.image} alt={route.name} className="route-image" />
                                                                                                                                                                                        <h2 className="route-name">{route.name}</h2>
                                                                                                                                                                                                    <p className="route-info">Distance: {route.distance}, Difficulty: {route.difficulty}</p>
                                                                                                                                                                                                                <button className="explore-button">Explore</button>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                              export default Productos;
