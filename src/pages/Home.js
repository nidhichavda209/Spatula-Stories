import React, { useState } from 'react';
import '../Styles/Home.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Home = ({ recipes }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const onOpenModal = (index) => setOpenIndex(index);
  const onCloseModal = () => setOpenIndex(null);

  return (
    <div className='home-container'>
      <h1 className='title'>Every recipe has a story, and every meal is a memory.</h1>
      <div className='grid-container'>
        {recipes.length === 0 ? (
          <p style={{ textAlign: 'center', width: '100%' }}>No recipes found.</p>
        ) : (
          recipes.map((recipe, index) => (
            <div className='card' key={index} onClick={() => onOpenModal(index)}>
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.name || 'Recipe'}
                  className='recipe-image'
                />
              )}
              <div className='card-content'>
                <h2>{recipe.name || 'Untitled Recipe'}</h2>
                <p><strong>Category:</strong> {recipe.category || 'N/A'}</p>
                <p><strong>Author:</strong> {recipe.author || 'Anonymous'}</p> 
              </div>
            </div>
          ))
        )}
      </div>

      {/* Move modal outside the map function */}
      {openIndex !== null && (
        <Modal 
          open={true} 
          onClose={onCloseModal} 
          center
          onClick={(e) => e.stopPropagation()} // Prevent click propagation
          classNames={{
            modal: "mainModal",
            overlay: "modalOverlay"
          }}
        >
          <div onClick={(e) => e.stopPropagation()}> {/* Additional protection */}
            <h2>{recipes[openIndex].name || 'Untitled Recipe'}</h2>
            {recipes[openIndex].steps && recipes[openIndex].steps.length > 0 && (
              <div className='steps'>
                <h4>Steps:</h4>
                <ol>
                  {recipes[openIndex].steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {recipes[openIndex].videos && recipes[openIndex].videos.length > 0 && (
              <div className="video-links">
                <h4>Video Tutorials:</h4>
                <ul>
                  {recipes[openIndex].videos.map((videoUrl, vidIdx) => (
                    <li key={vidIdx}>
                      <a
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#6a1b9a', fontWeight: 'bold' }}
                      >
                        ▶ Watch Video {vidIdx + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;