import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Profile";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact";
import Education  from "./components/Education";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
     
      <div className="fixed top-0 left-0 -z-10 h-screen w-screen bg-neutral-950"></div>
      
      
      <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      
      <div className="container max-w-screen-xl mx-auto px-8 ">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education/>
        <Projects />
        <Experience />
        <Contact/>
      </div>
    </div>
  );
};

export default App;
