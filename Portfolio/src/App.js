import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/HeroSection/HeroSection'
import AboutMeSection from './Components/AboutMeSection/AboutMeSection';
import SkillsSection from './Components/SkillsSection/SkillsSection';
import PortfolioSection from './Components/PortfolioSection/PortfolioSection';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <HeroSection></HeroSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <PortfolioSection></PortfolioSection>
      <Footer></Footer>
    </div>
     
  );
}
export default App;
