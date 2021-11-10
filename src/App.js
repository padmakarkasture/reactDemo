
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>


      <Navbar />
      <div className="container">
        <TextForm heading="Enter Text" />

        <About />

      </div>


    </>
  );
}

export default App;
