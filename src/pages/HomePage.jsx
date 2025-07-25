// src/pages/HomePage.jsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import BestSellers from '../components/BestSellers';
import AboutCreator from '../components/AboutCreator';
import SomethingForEveryone from "../components/SomethingForEveryone";
import CoffeeJourney from '../components/CoffeeJourney';
import FavoriteBundles from '../components/FavoriteBundles'
import ExploreArchive from '../components/ExploreArchive'

import useSmoothScroll from '../hooks/useSmoothScroll';

const HomePage = ({ addToCart }) => {
  // Activate smooth scrolling for this page
  useSmoothScroll();

  return (
    <div className="bg-off-white">
      <main>
        <HeroSection />
        <Marquee />
        <BestSellers addToCart={addToCart} />
        <CoffeeJourney />
        <FavoriteBundles addToCart={addToCart} />
        <ExploreArchive />
        {/* You can add the "Something for everyone" section here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;