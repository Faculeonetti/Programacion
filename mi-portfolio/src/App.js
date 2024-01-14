import './App.css';
import Navbar from './Components/Navbar';
import Barrascroll from './Components/Barrascroll';
import SobreMi from './Components/SobreMi';
import BentoGrid from './Components/Mishabilidades.js';

function App() {
  return (
    <div className="App">
          <Navbar />
      <section className="section-sobremi">
        <SobreMi />
        <Barrascroll />
      </section>
      <section>
        <BentoGrid />
      </section>
    </div>
  );
}

export default App;
