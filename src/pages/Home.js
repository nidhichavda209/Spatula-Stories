import React from 'react';
import '../Styles/Home.css';

const Home = ({ recipes }) => {
  return (
    // <div className='grid-container'>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://static.toiimg.com/photo/80888817.cms" alt="breakfast"/>
    //       </div>
    //       <h1>Breakfast</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://images.unsplash.com/photo-1560055932-595dab110124?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJ1bmNofGVufDB8fDB8fHww" alt="brunch" />
    //       </div>
    //       <h1>Brunch</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://images.unsplash.com/photo-1645432524571-0e469b22e43f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FiamklMjByb3RpfGVufDB8fDB8fHww" alt="lunch" />
    //       </div>
    //       <h1>Lunch</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://images.unsplash.com/photo-1554980291-c3e7cea75872?q=80&w=3098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dinner" />
    //       </div>
    //       <h1>Dinner</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://images.unsplash.com/photo-1712262582493-01aa9ec5c7f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRpcmFtaXN1fGVufDB8fDB8fHww" alt="desserts" />
    //       </div>
    //       <h1>Desserts</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://images.unsplash.com/photo-1556386734-4227a180d19e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aHklMjBhbmQlMjBkaWV0fGVufDB8fDB8fHww" alt="healthy" />
    //       </div>
    //       <h1>Healthy and Diet</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://blog.swiggy.com/wp-content/uploads/2024/11/Image-2_-Chinese-Cuisine-1024x538.png" alt="cuisine" />
    //       </div>
    //       <h1>Cuisine</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwc3dlZXR8ZW58MHx8MHx8fDA%3D" alt="mithai" />
    //       </div>
    //       <h1>Mithai</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://media.istockphoto.com/id/1468173966/photo/cocktail-party-bright-fruity-and-citrus-alcoholic-drinks-with-gin-vodka-vermouth-and-juice.jpg?s=612x612&w=0&k=20&c=I3vNEqwuk4OzK0bdosqpmlowLb2MYlonHTbDwQvX1tk=" alt="drinks" />
    //       </div>
    //       <h1>Drink & Cocktail</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://media.istockphoto.com/id/1226586928/photo/hot-vegetable-soup-in-a-dish-made-of-natural-materials-traditional-family-lunch-in-a-russian.jpg?s=612x612&w=0&k=20&c=BEJ-vSjbEpLWFUvgqVBuGlReQojVQC7zhAJI8c-YJQs=" alt="soup" />
    //       </div>
    //       <h1>Soup</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://media.istockphoto.com/id/1029200760/photo/table-decoration-of-beautiful-tasty-food-on-celebration-day.jpg?s=612x612&w=0&k=20&c=QZ7q8yTgMs0z3Ya8C4tBDHJcDvtZTdXM6qZ1Yy1TcoA=" alt="snacks" />
    //       </div>
    //       <h1>Snacks & Appetizers</h1>
    //     </div>
    //     <div className='grid-item'>
    //       <div className='image-div'>
    //         <img src="https://media.istockphoto.com/id/513124350/photo/cuisine-of-different-countries.jpg?s=612x612&w=0&k=20&c=KlcikHT7Cw5pLOynGjB4w_q3TAh-iDnpPHClBEfIBbY=" alt="international" />
    //       </div>
    //       <h1>International Eats</h1>
    //     </div>
    // </div>
    <div className='home-container'>
      <h1 className='title'>Every recipe has a story, and every meal is a memory.</h1>
      <div className='grid-container'>

        {recipes.length === 0 ? (
          <p style={{ textAlign: 'center', width: '100%' }}>No recipes found.</p>
        ) : (
          recipes.map((recipe, index) => (
            <div className='card' key={index}>
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
                {recipe.steps && recipe.steps.length > 0 && (
                  <>
                    <h4>Steps:</h4>
                    <ol>
                      {recipe.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </>
                )}
                {recipe.videos && recipe.videos.length > 0 && (
                  <div className="video-links">
                    <h4>Video Tutorials:</h4>
                    <ul>
                      {recipe.videos.map((videoUrl, vidIdx) => (
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
            </div>
          ))
        )}
        </div>
    </div>
  );
};

export default Home;
