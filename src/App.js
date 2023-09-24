import Home from "@components/Home";
import Navbar from "@components/Navbar";
import SocialLinks from "@components/SocialLinks";
import About from "@components/About";
import Contact from "@components/Contact";
import Portfolio from "@components/Portofolio";
import Footer from "@components/Footer";
import Skills from "@components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
