import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'
import recipesData from "./recipes.json"
import { useState } from 'react'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredRecipes =
    selectedCategory === "All"
      ? recipesData
      : recipesData.filter((recipe) => recipe.category === selectedCategory);

  return (
    <>
      <Navbar onCategoryChange={handleCategoryChange}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home recipes={filteredRecipes}/>}/> 
          <Route path='/login' element= {<Login/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/privacypolicy' element= {<PrivacyPolicy/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App