import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import FeaturesSectionBreakfast from "./components/FeaturesSectionBreakfast";
import FeaturesSectionFruits from "./components/FeaturesSectionFruits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewsLetterSection from "./components/NewsLetterSection";
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Category />
      <FeaturesSectionFruits />
      <FeaturesSectionBreakfast />
      <BannerSection />
      <BlogSection />
      <NewsLetterSection />
      <FeatureSection />
      <Footer />
    </main>
  );
};

export default App;
