import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import Header from './Components/Header';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="travel-blog">
        <Header/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
