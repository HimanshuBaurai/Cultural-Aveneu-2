import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './container/Header/Header.jsx';
import About from './container/About/About.jsx';
import Globe from './container/Globe/Globe.jsx';
import Explore from './container/Explore/Explore.jsx';
import Footer from './container/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Globe />
      <Explore />
      <Footer/>
    </div>
  );
}

export default App;