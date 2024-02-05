import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import OurServices from './components/OurServices/OurServices'
import Leading from './components/Leading/Leading'
import MobileApps from './components/MobileApps/MobileApps';
import Slider from './components/Slider/Slider';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <OurServices />
      <Leading />
      <MobileApps />
      <Slider />
      <Article />
      <Footer />
    </>
  );
}

export default App;