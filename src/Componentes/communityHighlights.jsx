import React from 'react';
import './communityHighlights.css';

const CommunityHighlights = () => {
  const posts = [
      {
            username: 'Username1',
                  image: 'path/to/image1.jpg',
                        caption: 'Caption for the post.'
                            },
                                {
                                      username: 'Username2',
                                            image: 'path/to/image2.jpg',
                                                  caption: 'Caption for the post.'
                                                      }
                                                        ];

                                                          return (
                                                              <div className="community-highlights">
                                                                    <h2>Community Highlights</h2>
                                                                          {posts.map((post, index) => (
                                                                                  <div key={index} className="post">
                                                                                            <h3>{post.username}</h3>
                                                                                                      <img src={post.image} alt={`Post by ${post.username}`} />
                                                                                                                <p>{post.caption}</p>
                                                                                                                        </div>
                                                                                                                              ))}
                                                                                                                                  </div>
                                                                                                                                    );
                                                                                                                                    };

                                                                                                                                    export default CommunityHighlights;
                                                                                                                                    