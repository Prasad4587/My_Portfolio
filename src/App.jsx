import './App.css';


// export default App;
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from './components/Projects';
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from './components/Blog';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero /> 
        <About /> 
        <Projects />
        <Blog />
        <Contact /> 
        <Footer /> 
    </div>
  );
}

export default App;
