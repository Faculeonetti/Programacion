import './App.css';
import Navbar from './Components/Navbar';
import SobreMi from './Components/SobreMi';
import Mishabilidades from './Components/Mishabilidades';

function App() {
  return (
    <div className="App">
      <section className="section-sobremi">
        <Navbar />
        <SobreMi />
        <div class="custom-shape-divider-bottom-1702909982">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section>
        <Mishabilidades />
      </section>
    </div>
  );
}

export default App;
