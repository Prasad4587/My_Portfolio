import './App.css';

// // // Import Components
// // import Header from '../components/Header';
// // import Hero from '../components/Hero';
// // import About from '../components/About';
// // import Projects from '../components/Projects';
// // import Blog from '../components/Blog';
// // import Contact from '../components/Contact';
// // import Footer from '../components/Footer';
// // import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";


// function App() {
//     return (
//         <div className="App">
//             <Header />
//             <main>
//                 <Hero />
//                 <About />
//                {/* <Projects />
//                 <Blog />
//                 <Contact />*/}
//             </main>
//             <Footer />
//         </div>
//     );
// }

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
      
      {/*Slowly enable components one by one*/} 
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
