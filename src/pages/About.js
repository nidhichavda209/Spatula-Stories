import React from "react";

const About = () => {
  return (
   <div className="main-container">
    <div className="image-container">
      <img src="/assets/Spatula_Stories.png" alt="woman-cooking" />
    </div>
    <div className="page-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Spatula Stories</strong>! We bring you the best food recipes from all around the world.
        Our mission is to provide delicious and easy-to-follow recipes for every occasion, whether you're a beginner
        cook or a seasoned chef.
      </p>
    
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Over 1,000+ curated recipes from global cuisines</li>
        <li>Expert tips from professional chefs</li>
        <li>Healthy and diet-friendly meal plans</li>
        <li>Step-by-step cooking guides and videos</li>
        <li>Weekly newsletters with fresh inspiration</li>
      </ul>

      <h2>Our Story</h2>
      <p>
        Spatula Stories was founded in 2023 by a group of food lovers and culinary experts. What started as a small
        blog has now become a vibrant community of home cooks, food bloggers, and kitchen enthusiasts.
        We believe food is more than just sustenance—it's a way to connect, create memories, and express love.

      </p>
      <h2>Meet the Team</h2>
      <p>
        Behind every recipe is a team of passionate foodies, chefs, and writers dedicated to testing, tasting, and
        sharing only the best content with you.
      </p>

      <h2>Get Involved</h2>
      <p>
        Want to share your recipe or story? We love collaborating with our readers! Reach out to us through our{" "}
        <a href="/contact" style={{ color: "#6a1b9a", fontWeight: "bold" }}>
          Contact Page
        </a>
        .
      </p>

      <h2>Stay Connected</h2>
      <p>Follow us on social media to get the latest updates, behind-the-scenes peeks, and food inspiration:</p>
      <ul>
        <li>Instagram: @spatulastories</li>
        <li>Facebook: Spatula Stories</li>
        <li>Twitter: @spatulastories</li>
        <li>YouTube: Spatula Stories</li>
      </ul>
    </div>
    </div> 
  );
};

export default About;
