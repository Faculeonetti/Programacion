import './App.css';
import Navbar from './Components/Navbar';
import SobreMi from './Components/SobreMi';
import Mishabilidades from './Components/Mishabilidades';

function App() {
  return (
    <div className="App">
      <section className='section-sobremi'>
        <Navbar />
        <SobreMi />
      </section>
      <section>
        <Mishabilidades />
      </section>
    </div>
  );
}

export default App;
